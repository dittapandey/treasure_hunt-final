import './Navbar.css';
import { useContext } from 'react';
import treasureHunt from '../images/TREASUREHUNT.png';
import { useHistory } from 'react-router';
import AppContext from '../AppContext';
const Navbar = () => {
    const history = useHistory();
    const myContext = useContext(AppContext);
    const handleClick = () => {
        
        myContext.setLoginUser({});
        console.log(myContext.user);
        alert("You have Signed out");
        localStorage.clear(myContext.user);
        history.push('/final');
        history.block();
    }
    return (
        <div className="header">
            
            <nav class="navbar navbar-light sticky-top" style={{backgroundColor: "#f59800"}} >
            
            <h2 class="navbar-brand px-3"><a className="game-name">Treasure Hunt</a></h2>
            {/* <a class="btn btn-danger" href="https://www.iitg.ac.in/campusmap/" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Map
            </a>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </div> */}
            <div class="dropdown">
                <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <a class="btn btn-danger px-3 mx-4" onClick={handleClick} >Logout</a>
            </nav>
        </div>
     );
}
 
export default Navbar;