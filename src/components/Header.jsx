import { Link } from 'react-router-dom';


const Header = () => {

   
    return (
        <div className="navheader">
            <p className='thename'>Marius Du Plooy</p>
     <div className="links">
            <Link to="/" className="nav">About me</Link>
             <Link to="/portfolio" className="nav">Portfolio</Link> 
             <Link to="/resume" className="nav">Resume</Link> 
             <Link to="/contact" className="nav">Contact</Link>
        </div>
    </div>

      );
}
 
export default Header;