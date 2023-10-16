import { Outlet, Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return(
    <>
        <div className='nav'>
        <ul>
            <li className='li'><Link to='/'><i className='home-icon icons'>N</i></Link></li>
            <li className='li'><Link to='/todo'><i className='types-icon icons'>T</i></Link></li>
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