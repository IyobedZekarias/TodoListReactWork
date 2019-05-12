import React from 'react'
import todosData from './Data/TodoData'
import TodoItem from './TodoItem.js'
import './TodoListstyle.css'

function TodoList(){
const todocomp = todosData.map((item) => {
	return (
		<div key={item.id}>
			<TodoItem todoitems={{
					id: item.id,
					text: item.text,
					completed: item.completed,
				}}
			/>
		</div>
	);
});

	return(
		<div className='todolist'>
			{todocomp}
		</div> 
	);
}

export default TodoList