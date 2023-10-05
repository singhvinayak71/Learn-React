import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';


function App() {

  return (
    // <h1>hello</h1>
    <UserContextProvider>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
