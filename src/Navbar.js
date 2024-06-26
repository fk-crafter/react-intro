import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" className="new-blog-link">New blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;