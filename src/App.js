import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/home' element={<Home></Home>}></Route>  
      <Route path='/addUser' element={<AddUser></AddUser>}></Route>   
      </Routes>
    </div>
  );
}

export default App;
