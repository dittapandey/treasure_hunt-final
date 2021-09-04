import { useState, useContext } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Navbar from "../components/Navbar"
import './Home.css';
import AppContext from "../AppContext";
import Navbar1 from "../components/Navbar1";

const Home = ({setLoginUser}) => {
    const myContext = useContext(AppContext);
    const [rollNumber, setRollNumber] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const handleSubmit = async (e)=>{
      e.preventDefault();
      const data = {rollNumber, password};
      await axios.post(`http://localhost:5000/users/${rollNumber}`, data)
      .then(res => {
        alert(res.data.message);
        myContext.setLoginUser(res.data.user);
        console.log(myContext.user);
        history.push("/game1");
      })
    }
    return ( 
        <div className="col-24">
            <Navbar1 />
            <div class="container" v-else>
              <div class="row">
                <div class="col-12 col-md-6 mt-4">
                  <h4 class="mt-3"><b>Details</b></h4>
                    <form class="mt-4" onSubmit = {handleSubmit}>     
                      {/* @submit.prevent="startGame" */}
                      <div class="form-group">
                        <label for="exampleInputFullName">Roll Number</label>
                        <input
                          type="fullName"
                          class="form-control"
                          id="exampleInputFullName"
                          placeholder="Roll Number"
                          value={rollNumber}
                          onChange = {(e) => setRollNumber(e.target.value)}
                        //   :v-model="displayName"
                        //   @input="displayName = $event.target.value"
                        //   :disabled="getFullName"
                        />
                        {/* {{ fullName }} */}
                      </div>
                      <div class="form-group mt-4">
                        <label for="exampleInputEmail">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Password"
                          id="exampleInputEmail"
                          value={password}
                          onChange={(e)=> setPassword(e.target.value)}
                          // value={}
                          // :v-model="email"
                        />
                      </div>
                      <button
                        type="submit"
                        // disabled="btnDisabled"
                        class="btn btn-success mt-4"
          
                      >
                        <span v-else class="sr-only">Submit & Start Game</span>
                      </button>
                    </form>
                  </div>
      <div class="col-12 col-md-6 mt-4">
        <h4 class="mt-3"><b>Rules</b></h4>
        <div class="card py-5 px-2 mb-3 mt-4">
          <ul>
            <li>The treasure hunt starts at 11 am till 7 pm.</li>
            <br />
            <li>
              The one who solves the last clue first will be the winner of the
              treasure hunt. He/she may also have to explain the solving of the
              rest of the clues later.
            </li>
            <br />
            <li>
              If more than one person solves the final answer, then the winner
              will be the one who solves the answer first.
            </li>
            <br />
            <li>
              If no one solves the entire treasure hunt, the current progress of
              each participant will be considered for evaluation.
            </li>
            <br />
            <li>
              All answers must be in small letters with no space or special
              characters.<br />
              For example: If the answer is WhatsApp Messenger, type in
              whatsappmessenger.
            </li>
            <br />
            <li>
              Enter the full name of any person.<br />
              For example: If the answer is Neil Alden Armstrong, type in
              neilaldenarmstrong.
            </li>
            <br />
            <li>
              Enter the full name of any organization/product.<br />
              For example: If the answer is Meet, type in googlemeet.
            </li>
            <br />
            <li>
              Hints for every level will be posted on the Official
              <a href="https://instagram.com/ieeeajcesb"><b>Instagram</b></a>
              Page.
            </li>
            <br />
            <li>
              The decision of the organizing committee is final and binding.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
        </div>
         
     );
}
 
export default Home;