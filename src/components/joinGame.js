import React, { Component } from "react";
import firebase from "../utilities/firebase";

class JoinGame extends Component {
  state = { allTheMPKeys: [] };
  render() {
    return (
      <React.Fragment>
        <h2>Inside Join a new game</h2>
        <p>Enter the Code below to start playing the game</p>
        <form onSubmit={this.verifyCode}>
          <div className="form-group col">
            <div className="row-xs">
              <input
                type="text"
                className="form-control"
                id="keyEntryArea"
                placeholder="Enter the Code here"
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary m-2">
                Join
              </button>
            </div>
          </div>
        </form>
        <div
          style={{ margin: "30px", backgroundColor: "yellow" }}
          id="messageDisplayArea"
        ></div>
      </React.Fragment>
    );
  }
  verifyCode = (e) => {
    e.preventDefault(); //Prevents Page from Re-loading

    //1) Get the user entered value
    let userEnteredKey = document.getElementById("keyEntryArea").value;
    //Convert it into Integer
    userEnteredKey = parseInt(userEnteredKey);
    //Get The allTheMPKeys from state
    const { allTheMPKeys } = this.state;
    let responseDisplayArea = document.getElementById("messageDisplayArea");

    if (userEnteredKey && allTheMPKeys.indexOf(userEnteredKey) > -1) {
      //If userEnteredKey is Valid and if it exists in allTheMPKeys Array, we prompt the success message
      responseDisplayArea.innerHTML = "KEY MATCHED";
    } else {
      //At this point userEntered Key is InValid
      responseDisplayArea.innerHTML = "Enter a Valid KEY";
    }
  };
  componentDidMount() {
    //1) Get the Reference from Firebase
    var ref = firebase.database().ref("MP-Key-Storage");
    let { allTheMPKeys } = this.state;
    ref.on("value", (snapshot) => {
      //2) Store all the keys in allTheMPKeys
      let keys = snapshot.val();
      for (let key in keys) {
        allTheMPKeys.push(keys[key].key);
      }
      //console.log("allTheKeys are:", allTheMPKeys);
      //3) Set The state
      this.setState({ allTheMPKeys });
    });
  }
}

export default JoinGame;
