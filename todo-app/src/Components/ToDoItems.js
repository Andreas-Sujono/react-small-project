import React from 'react'
 
function ToDoItems(props){
	
	return (
		<div className="itemList" style={
			{
				textDecoration: props.item.completed?'line-through':'',
				color: props.item.completed?'lightgrey':'',
			}
		}>
			<p><input 
			type="checkbox" 
			checked={props.item.completed} 
			onChange={()=> props.handleChange(props.item.id)}
			/>
			{props.item.data}</p>
			<hr/>
		</div>
		);
}
export default ToDoItems