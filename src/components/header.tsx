import {Link, Outlet} from 'react-router-dom';
import './headerCss.css'; // Import the CSS file

const Header = () => {
    return (
        <>
            <nav className="header-nav">
                <ul className="header-list">
                    <li className="header-item">
                        <Link to="/" className="header-link">Home</Link>
                    </li>
                    <li className="header-item">
                        <Link to="/about" className="header-link">About</Link>
                    </li>
                    <li className="header-item">
                        <Link to="/contact" className="header-link">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
};

export default Header;
