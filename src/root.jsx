import { Outlet, Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotesIcon from '@mui/icons-material/Notes';


const Root = () => {
    return(
    <>
        <div className='nav'>
        <ul>
            <li className='li'><Link to='/'><i className='home-icon icons'><NotesIcon sx={{color: '#fff'}}/></i></Link></li>
        </ul>
      </div>
      <div className="content-container">
        <Outlet />
      </div>
      <ToastContainer />
    </>
    )
}

export default Root