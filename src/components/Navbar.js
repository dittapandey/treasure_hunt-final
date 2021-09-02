import './Navbar.css';
import treasureHunt from '../images/TREASUREHUNT.png';
const Navbar = () => {
    return (
        <div className="header">
            <nav class="navbar navbar-light sticky-top" >
            <h2 class="navbar-brand px-3"><b className="game-name">Treasure Hunt</b></h2>
    
            <a class="btn btn-danger px-3 mx-4" >Logout</a>
            </nav>
        </div>
     );
}
 
export default Navbar;