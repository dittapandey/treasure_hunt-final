import Navbar from "../components/Navbar"

const Home = () => {
    return ( 
        <div className="homePage">
            <Navbar/>
            <div className="panes">
                <div className="left-pane">
                {/* <div class="col-12 col-md-6 mt-4 mr-3"> */}
                <h2>Details</h2>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label w-10">Roll number</label>
                        <input type="string" class="form-control input-sm" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label w-10 ">Password</label>
                        <input type="password" class="form-control" id="exampleFormControlTextarea1" ></input>
                    </div>
                {/* </div> */}
                            
                </div>
                <div className="right-pane">
                    {/* <div class="col-12 col-md-6 mt-4"> */}
                        <h4 class="mt-3"><b>Rules</b></h4>
                        <div class="card border-1 py-5 px-2 mb-3 mt-4 bg-primary">
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
                                    <a href="https://instagram.com/ieeeajcesb"><b style={{color: "orange"}}> Instagram </b></a>
                                    Page.
                                    </li>
                                    <br />
                                    <li>
                                    The decision of the organizing committee is final and binding.
                                    </li>
                            </ul>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
     );
}
 
export default Home;