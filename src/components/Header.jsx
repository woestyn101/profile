import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="home">
     <div className="links">
            <Link to="/">Home</Link>
             <Link to="/portfolio">Portfolio</Link> 
             <Link to="/resume">Resume</Link> 
             <Link to="/contact">Contact</Link>
        </div>
    </div>

      );
}
 
export default Header;