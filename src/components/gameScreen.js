import React, { Component } from "react";
class Game extends Component {
  state = { letters: ["B", "I", "N", "G", "O"], bingoArray: [] };
  render() {
    this.generateRandomArray();
    return (
      <table>
        <thead>
          <tr>
            <th>B</th>
            <th>I</th>
            <th>N</th>
            <th>G</th>
            <th>O</th>
            <th></th>
          </tr>
          {this.state.letters.map((letter, index) => (
            <tr key={letter}>
              {this.state.bingoArray[index].map((number) => (
                <td key={number} onClick={() => this.handleClick(number)}>
                  {number}
                </td>
              ))}
            </tr>
          ))}
        </thead>
      </table>
    );
  }
  generateRandomArray = () => {
    let { bingoArray } = this.state;
    for (let i = 0; i < 5; i++) {
      var row_arr = [];
      for (let j = 0; j < 5; j++)
        row_arr.push(Math.floor(Math.random() * 100 + 1));
      //console.log("Set-" + (i + 1) + " Prepared");
      //console.log(row_arr);
      bingoArray.push(row_arr);
    }
    //console.log(bingoArray);
  };
  handleClick = (number) => {
    console.log("Number", number, "clicked");
  };
}

export default Game;
