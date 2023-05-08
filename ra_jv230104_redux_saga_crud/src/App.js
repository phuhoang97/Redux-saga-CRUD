import "./App.css";
import ListUsers from "./components/ListUsers";
import { Routes, Route } from "react-router-dom";
import NewUsers from "./components/NewUsers";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ListUsers />}></Route>
        <Route path='/newUser' element={<NewUsers />}></Route>
        <Route path='/updateUser' element={<UpdateUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
