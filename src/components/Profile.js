import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../redux/userSlice";

const Profile = () =>{
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const handleLogout = (e) =>{
        e.preventDefault()
        dispatch(logout())
    }

    return (
        <div>
            {user &&
                <>
                    <h1>Bem vindo {user.name}!</h1>
                    <h2> Seu email cadastrado é: {user.email}</h2>
                    <button onClick={e=>handleLogout(e)}>Logout</button>
                </>
            }
        </div>
    )
}

export default Profile