import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import plus from './assets/plus.png'


type Todo = {
  id: number;
  text: string;
  complete: boolean;
  isEditing: boolean;
  dueDate: string;
};

function App() {
  // states for todo and input
  const [todo , setTodo] = useState<Todo[]>([]); //it will make the array of the todo
  const [input , setInput] = useState('');
  const [dueDate , setDueDate] = useState('');

  return (

    <div className="App">

      <div className='heading'>
        <h1>To Do List App</h1>
      </div>
      
      {/* Input field that will take the task user want to complete */}
      <div className='input_task'>
        
        <input placeholder='Enter task' type='text' className='task_box'
        value={input} 
        onChange={ e => {
          const inp = e.target.value;
          setInput(inp);
        }}
        />

        <input
          type="date"
          className="date_picker"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />


        <button className='Add_but' 
          onClick={() => {
            if(input.trim() === '')
            {
              return;
            }

            //create the new array
            const newTodo = {
              id : Date.now(),
              text : input,
              complete : false, 
              isEditing : false,
              dueDate: dueDate
            };

            //...todo copies the prev tasks and newTodo gets add to it
            setTodo([...todo ,newTodo]);
            setInput("");

          }}
        >
         <img src={plus} alt='add' className='add_icon'></img>
        </button>  
      </div>
      
      {/* List that will list the to do tasks */}
      <div className='list'>
        <ul>
          {todo.map((t) =>(
            <li key={t.id}>
              <input
                type="checkbox"
                checked={t.complete}
                onChange={() => {
                setTodo(
                  todo.map(item =>
                    item.id === t.id ? { ...item, complete: !item.complete} 
                    : item
                  )
                );
              }}
            />

            {/*Edit logic*/}
            {t.isEditing ? (
              <input
              type="text"
              value={t.text}
              onChange={(e) => {
                const newText = e.target.value;
                setTodo(
                  todo.map(item =>
                    item.id === t.id
                      ? { ...item, text: newText }
                      : item
                  )
                );
              }}
              onBlur={() => {
                setTodo(
                  todo.map(item =>
                    item.id === t.id
                      ? { ...item, isEditing: false }
                      : item
                  )
                );
              }}
          />
        ) : (
          <>
          <span className='task-text'
           style={{ textDecoration: t.complete ? 'line-through' : 'none' }}>
            {t.text}
          </span>

          {t.dueDate && (
            <span className='task-date'> {t.dueDate}</span>
          )}
        </>
        )}
        
          <button className='but_edit'
            onClick={ () => {
              setTodo(
                todo.map(item =>
                  item.id === t.id
                  ? { ...item , isEditing : true} 
                  : item
                )
              );
            }}
          >
            🖊️
          </button>
  
        </li>
        ))
          }
        </ul>
      </div>

      <div className='del_todo'>
          <button className='but_del' 
            onClick={ () => {
              setTodo(todo.filter(t => !t.complete))
            }}
          >
            Completed ✔️
          </button>
      </div>

      <div className='clear_todo'>
        <button className='but_clear'
          onClick={() => {
            setTodo([]);

          }}
        >
          Clear All
        </button>
      </div>

    </div>

  )
}

export default App
