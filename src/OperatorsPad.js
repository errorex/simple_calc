import React from 'react';
import Key from './Key';

class OperatorsPad extends React.Component{
	render(){
		return(
			<div className="operatorsPad">
	          <div className="row">
	            <Key value={"CLR"} hSize={2} vSize={1} onKeyClick={this.props.onKeyClick} />
	            <Key value={"CLH"} hSize={2} vSize={1} onKeyClick={this.props.onKeyClick} />
	          </div>
	          <div className="row ">
	            <Key value={"+"} hSize={1} vSize={1} onKeyClick={this.props.onKeyClick} />            
	            <Key value={"-"} hSize={1} vSize={1} onKeyClick={this.props.onKeyClick} />            
	            <Key value={"*"} hSize={1} vSize={1} onKeyClick={this.props.onKeyClick} />
	            <Key value={"/"} hSize={1} vSize={1} onKeyClick={this.props.onKeyClick} />            
	          </div>
	          <div className="row">
	            <Key value={"="} hSize={4} vSize={2} onKeyClick={this.props.onKeyClick} />
	          </div>          
	        </div>
		);
	}
}

export default OperatorsPad;