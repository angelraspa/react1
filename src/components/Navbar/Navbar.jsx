import CartWidget from "../CartWidget/CartWidget"
import './navbar.css'

const Navbar = () => {

  return (
    <nav className="navContainer">

        <div>
            <h1>My Store</h1>
        </div>
        
        <div>
            <ul className="navLinks">
                <li className="li">Home</li>
                <li className="li">Products</li>
                <li className="li">About</li>
                <li className="li">Contact</li>
            </ul>
        </div>

        <CartWidget/>
            
    </nav>
  )
}

export default Navbar