import './App.css';

import React, { Component } from 'react';
import Keypad from './Keypad';
import OperatorsPad from './OperatorsPad';
import Display from './Display';



class App extends Component {

  constructor(){
    super();

    this.state = {
      history: [], 
      displayStr: '',
    };

  }

  doTheMath(sentence){    
    sentence = sentence.replace('=','');

    var promisse = fetch('http://api.mathjs.org/v1/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        expr: sentence,  
        precision: 10,      
      })
    });
    
    promisse.then(response => {                  
      response.json().then(data => { 
        const histItem  = String.prototype.concat(
                            this.state.displayStr, 
                            '=', 
                            data.result
                          );
        this.setState({
          displayStr: data.result,
          history: this.incluiHistoryItem(histItem),
        });

      });
    })
    
    promisse.catch(error => {
      console.log(error);
    });

  }

  incluiHistoryItem(historyItem){
    const {history} = this.state;

    history.push(historyItem);

    if(history.length > 5){
      history.shift();
    }

    return history;

  }

  keyPressedHandle(keyValue){    

    let displayStr = this.state.displayStr;
    if(displayStr === null){
      displayStr = '';
    }    
    displayStr = String.prototype.concat(displayStr, keyValue);        

    switch(keyValue){
      case '=':
        this.doTheMath(displayStr);
        break;
      case 'CLR':
        this.setState({
          displayStr: '',
        });
        break;
      case 'CLH':
        this.setState({
          history: [],
        });
        break;
      case '%':
        break;
      default:
        this.setState({
          displayStr: displayStr,
        });    
    }    
    
  }

  render() {

    const {displayStr, history} = this.state;

    return (      
      <div className="calc">
        <Display displayStr={displayStr} history={history} />
        <Keypad onKeyClick={(keyValue) => this.keyPressedHandle(keyValue)} />
        <OperatorsPad onKeyClick={(keyValue) => this.keyPressedHandle(keyValue)}/>        
      </div>
    );
  }
}

export default App;

