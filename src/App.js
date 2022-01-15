import './App.css';
import Users from './Components/Users/Users';
import Comments from './Components/Comments/Comments';
import Posts from './Components/Posts/Posts';

function App() {
  return (
    <div className='App'>

        <div className='wrapper'>
            <Users/>
            <Posts/>
        </div>

        <hr/>
        <Comments/>
    </div>
  );
}

export default App;
