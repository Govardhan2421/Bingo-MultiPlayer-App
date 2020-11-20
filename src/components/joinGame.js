import React, { Component } from "react";
// import firebase from "../utilities/firebase";
import { Link } from "react-router-dom";

class JoinGame extends Component {
  state = { allTheMPKeys: [] };
  render() {
    return (
      <React.Fragment>
        <h2>Inside Join a new game</h2>
        <p>Enter the Code below to start playing the game</p>
        <div className="form-group col" id="entryForm">
          <div className="row-xs">
            <input
              type="text"
              className="form-control"
              id="keyEntryArea"
              placeholder="Enter the Code here"
            />
          </div>
          <div>
            <button onClick={this.verifyCode} className="btn btn-primary m-2">
              Join
            </button>
          </div>
        </div>
        <div
          style={{
            margin: "30px",
            backgroundColor: "yellow",
          }}
          id="messageDisplayArea"
        ></div>
        <Link
          to="/game"
          id="startTheGamebtn"
          className="btn btn-primary"
          style={{ visibility: "hidden" }}
        >
          Launch
        </Link>
      </React.Fragment>
    );
  }
  verifyCode = () => {
    //1) Get the user entered value
    let userEnteredKey = document.getElementById("keyEntryArea").value;
    //Convert it into Integer
    userEnteredKey = parseInt(userEnteredKey);
    //Get The allTheMPKeys from state
    const { allTheMPKeys } = this.state;
    let responseDisplayArea = document.getElementById("messageDisplayArea");

    if (userEnteredKey && true /*allTheMPKeys.indexOf(userEnteredKey) > -1*/) {
      //If userEnteredKey is Valid and if it exists in allTheMPKeys Array, we prompt the success message
      document.getElementById("startTheGamebtn").style.visibility = "visible";
      //document.getElementById("entryForm").style.visibility = "hidden";
      responseDisplayArea.innerHTML = "KEY MATCHED";
    } else {
      //At this point userEntered Key is InValid
      responseDisplayArea.innerHTML = "Enter a Valid KEY";
    }
  };
  componentDidMount() {
    //1) Get the Reference from Firebase
    // var ref = firebase.database().ref("MP-Key-Storage");
    // let { allTheMPKeys } = this.state;
    // ref.on("value", (snapshot) => {
    //   //2) Store all the keys in allTheMPKeys
    //   let keys = snapshot.val();
    //   for (let key in keys) {
    //     allTheMPKeys.push(keys[key].key);
    //   }
    //   //console.log("allTheKeys are:", allTheMPKeys);
    //   //3) Set The state
    //   this.setState({ allTheMPKeys });
    // });
  }
}

export default JoinGame;
