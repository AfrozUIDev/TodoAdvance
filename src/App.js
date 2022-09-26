import logo from './logo.svg';
// import './App.css';

 import {Login} from "./Components/Login"    //naming export 
// import Login from './Components/Login';     //default export
import {Navbar} from "./Components/Navbar"
import {Todolist} from "./Components/TodoList"
import {Mapproducts} from "./Components/Mapproducts"
import Mapping from './Components/Mapping';
import { Table } from './Components/Table';
import { ColorsHome } from './API/ColorsHome';
import { Parent1 } from './ContextApi/Parent1';
import {createContext} from "react"
import { UpdateTodo } from './Components/UpdateTodo';
import { TodoAdvance } from './TodoAdvance/TodAdvance';


export const sendData=createContext()

function App() {
const data="Nanded"

  return (
    <div className="App" >
      {/* <Mapping/> */}
      {/* <Navbar/>
      <Login/> */}
{/* <ColorsHome/> */}
{/* <Todolist/> */}
{/* <UpdateTodo/> */}
<TodoAdvance/>
    {/* <sendData.Provider value={data}>
             <Parent1/>
    </sendData.Provider> */}
    </div>
  );
}

export default App;
