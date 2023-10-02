import { Outlet, Link } from "react-router-dom"
const Root = () => {
    return(
    <>
        <div className='nav'>
        <ul>
            <li className='li'><Link to='/'><i className='home-icon icons'>N</i></Link></li>
            <li className='li'><Link to='/todo'><i className='types-icon icons'>T</i></Link></li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
    )
}

export default Root