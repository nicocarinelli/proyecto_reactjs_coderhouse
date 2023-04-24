import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import DisplayTypes from '../DisplayTypes/DisplayTypes';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to={'/'} className="brand">Nic ClotheZ</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <DisplayTypes />
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default Navbar