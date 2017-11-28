import React, { Component } from 'react';
import Key from './Key';

class Keypad extends Component {

	handleClick(value){
		this.setState({
			keyPressed: value,
		});
	}


	render(){
		return(
			<div className="numbersPad">
	          <div className="row">            
	            <Key hSize={1} vSize={1} value={9} onKeyClick={this.props.onKeyClick}/>
	            <Key hSize={1} vSize={1} value={8}  onKeyClick={this.props.onKeyClick} />
	            <Key hSize={1} vSize={1} value={7}  onKeyClick={this.props.onKeyClick} />
	          </div>
	          <div className="row ">
	            <Key hSize={1} vSize={1} value={6}  onKeyClick={this.props.onKeyClick} />
	            <Key hSize={1} vSize={1} value={5}  onKeyClick={this.props.onKeyClick} />
	            <Key hSize={1} vSize={1} value={4}  onKeyClick={this.props.onKeyClick} />
	          </div>
	          <div className="row ">
	            <Key hSize={1} vSize={1} value={3}  onKeyClick={this.props.onKeyClick} />
	            <Key hSize={1} vSize={1} value={2}  onKeyClick={this.props.onKeyClick} />
	            <Key hSize={1} vSize={1} value={1}  onKeyClick={this.props.onKeyClick} />
	          </div>
	          <div className="row ">
	            <Key hSize={1} vSize={1} value={'%'}  onKeyClick={this.props.onKeyClick} />
	            <Key hSize={1} vSize={1} value={'.'}  onKeyClick={this.props.onKeyClick} />
	            <Key hSize={1} vSize={1} value={0}  onKeyClick={this.props.onKeyClick} />
	          </div>          
	        </div>
		);
	}
}

export default Keypad;