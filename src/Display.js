import React from 'react';


class HistoryItem extends React.Component{
	
	render(){
		return(
			<div>
				{this.props.item}			
			</div>
		);	
	}
	
}

class Display extends React.Component{

	renderHistory(key, historyItem){
		return (
			<HistoryItem 
				key={key}
				item={historyItem}
			/>
		);
	}

	render(){
		const { displayStr, history } = this.props;
		const out = history.map((current,index) => {
			return this.renderHistory(index,current);
		});

		return(
			<div>				
				<div className="historico">
		        	{out}
		        </div>
		        <div className="result">
		        	{displayStr}
		        </div>
	        </div>
		);
	}
}

export default Display;