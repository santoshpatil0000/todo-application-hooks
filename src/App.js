import './App.scss';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.scss'

function App() {
  return (
    <div className='container'> 
    <h2>todo input</h2>
    <TodoInput/>
    <TodoList/>
    </div>
  );
}

export default App;
