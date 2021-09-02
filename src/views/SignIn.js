import './SignIn.css';
import minion from "../images/Minion.png";
import quarun from "../images/QuaRunTime.png";
import treasureHunt from "../images/TREASUREHUNT.png"
const SignIn = () => {
    return ( 
    <div className="SignIn">
        <div className="game-name">
            <img src={quarun}/>
        </div>
        <div className="game-title">
             <img src={treasureHunt}/>   
        </div>
        <div className="minion">
            <img src={minion}/>
        </div>
        <div className="SignInButton">
            <button class="orange" onClick="">Sign In</button>
        </div>
    </div>
        
     );
}
 
export default SignIn;