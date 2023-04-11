import { Routes, Route } from "react-router-dom";
import {Login} from './components/Login'
import Profile from "./components/Profile";

function Rotas(){
    return(
        <Routes>
            <Route path="/" element='' />
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    )
}

export default Rotas