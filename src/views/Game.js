import Navbar from "../components/Navbar"

const Game = () => {
    return ( 
        <div className="game">
            <Navbar/>
            <div class="container">
    {/* <div class="m-5 loading" v-if="isLoading">
      <div class="mx-auto" style={{width: "50%"; textAlign: "center"}}>
        <img
          src="../../public/minion.gif"
          alt="Loading..."
          width="100"
          height="100"
        />
        <p>Loading...</p>
      </div>
    </div> */}
    <div class="row" v-else>
      <div class="col col-lg-6 mx-auto m-5">
        <div class="card p-3">
          <h3 class="pb-3">
            <b
              ><i>Level 1</i></b
            >
          </h3>
          <img
            src="image"
            class="mx-auto"
            style={{width: "100%"}}
            alt="`{level}`"
          />
          <div class="card-body">
            <p class="card-text">
              What is your name?
            </p>
            <form class="form-inline" onSubmit="verifyAnswer">
              <div class="form-group mb-2">
                <label for="validationServer01" class="sr-only">Answer</label>
                <input
                  type="text"
                  class="form-control"
                  class="{
                    'is-valid': isAnswerCorrect == true,
                    'is-invalid': isAnswerCorrect == false,
                  }"
                  
                  readonly="isAnswerCorrect"
                  id="validationServer01"
                  placeholder="Enter your Answer"
                  required
                  v-model="answer"
                />
                <div
                  class="{
                    'valid-feedback': isAnswerCorrect,
                    'invalid-feedback': !isAnswerCorrect,
                  }"
                >
                  <b>well done </b>
                </div>
              </div>
              <button
                v-if="!isAnswerCorrect"
                type="submit"
                class="btn mb-2"
                style={{backgroundColor: "#f59800"}}
              >
                <span
                  v-if="spinning"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span v-if="spinning" class="sr-only">&nbsp; Verifying...</span>
                <span v-else class="sr-only">Verify Answer</span>
              </button>
              <button v-else onClick="checkLevel" class="btn btn-success mb-2">
                Play Next Level
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
        
    );
}

export default Game;