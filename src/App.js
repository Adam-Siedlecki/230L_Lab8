import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function TodoList() {

   const [task, setTask] = useState("");
   const [taskItems, setTaskItems] = useState([]);

   function addItem(event) {
      event.preventDefault();

      const newItem = {
         key: Date.now(),
         text: task
      };

      setTaskItems(prevItems => [...prevItems, newItem]);
	  setTask("");
	}
	
	function deleteItem(key) {
		setTaskItems(prevItems => prevItems.filter(
			item=> item.key !== key));
	}
	
   return (
      <div className="page">
         <h1>Todo List</h1>
         <form onSubmit={addItem}>
            <input id="task" type="text" placeholder="Enter your task"
               value={task} onChange={(e) => setTask(e.target.value)} />
            <button id="add" type="submit">Add</button>
			
         </form>
		 <TodoItems items = {taskItems} delete={deleteItem}/>
      </div>
   );
}

function TodoItems(props) {
	const todoItems = props.items;
	
	return (
		<ol>
		{todoItems.map((item) =>
			<li key={item.key}>
				{item.text} &nbsp;
				<button onClick={()=>props.delete(item.key)}>
					X
				</button>
			</li>
		)}
		</ol>
	);
}

function App() {
   return <TodoList />;
}

export default App;
