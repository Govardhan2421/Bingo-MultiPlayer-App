import React, { Component } from "react";
import firebase from "../utilities/firebase";
//https://firebase.google.com/docs/database/admin/save-data#node.js
class StartNewGame extends Component {
  state = { count: 0 };
  render() {
    return (
      <React.Fragment>
        <h2>Inside Start a new game</h2>
        <p>
          Click the below button to generate a unique code and share it to start
          playing
        </p>
        <button className="btn btn-primary" onClick={this.generateNewCode}>
          Generate Code
        </button>
        <div
          style={{ margin: "30px", backgroundColor: "yellow" }}
          id="keyDisplayArea"
        ></div>
      </React.Fragment>
    );
  }
  generateNewCode = async () => {
    const key = new Date().getTime();
    const item = {
      key: key,
    };
    const DB_NAME = "MP-Key-Storage";
    try {
      //1) Open DB connection
      var db = firebase.database().ref(DB_NAME);

      //2) Find the count of rows in DB
      let { count } = this.state;

      //3) Push data into the DB with the name("DB_NAME/entry/+(count++)")
      db = firebase.database().ref("MP-Key-Storage/entry" + String(count++));

      //4) Push that item into DB
      db.set(item);

      //5) Display Key to the User
      document.getElementById("keyDisplayArea").innerHTML =
        "Key generated Successfully, Key = " + key;

      //6) Update the state with the updated count
      this.setState({ count });
    } catch (Error) {
      //document.getElementById("root").innerHTML = "Error:" + Error; ****** Uncomment this,when ready to deploy ********
      console.log(Error);
    }
  };
  componentDidMount() {
    var db = firebase.database().ref("MP-Key-Storage");
    let count = 0;
    if (db) {
      db.once("value").then((snapshot) => {
        //snapshot.numChildren() contains the count of records
        count = snapshot.numChildren();
        this.setState({ count });
      });
    }
  }
}

export default StartNewGame;
