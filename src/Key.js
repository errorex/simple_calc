import React from 'react';

class Key extends React.Component{



	render(){

		const {hSize, vSize, value} = this.props;		

		let classes = "btn btn-" + hSize;

		if(vSize === 2){
			classes = "btn-double-height " + classes;
		}

		if(value === '='){
			classes = "btn-equal " + classes;
		}else if( value === 'CLR' || value === 'CLH'){
			classes = "btn-clr " + classes;
		}

		return(
			<button 
				key={value} 
				className={classes}
				// onClick={this.props.onKeyClick.bind(this,value)}
				onClick={() => {this.props.onKeyClick(value)}}
			>
				{value}
			</button>
		);
	}
}

export default Key;