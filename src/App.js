import './App.css';
import { connect } from 'react-redux';
import TodoTask from './Todotask/TodoTask';

function App() {
  return (
    <div className="App">
       <TodoTask/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Add : state.TodoReducer
  }
}

export default connect (mapStateToProps)(App);
