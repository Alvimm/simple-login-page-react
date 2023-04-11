import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "./redux/userSlice";

function Links(){  
  const user = useSelector(selectUser);
    return(
        <header>
              <nav>
                  <Link to='/'>Home</Link> | {''}
                  <Link to='/login'>Login</Link> | {''}
                  {user && <Link to='/profile'>Profile</Link>}
              </nav>
          </header>
    )
}
export default Links