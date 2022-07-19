import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      osobe: [],
    };
    console.log(1);
  }

  componentDidMount() {
    console.log(3);
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((users) =>
        this.setState(
          () => {
            return { osobe: users };
          },
          () => {
            console.log(this.state);
          }
        )
      )
    );
  }

  render() {
    console.log(2);
    return (
      <div className="App">
        {this.state.osobe.map((osoba) => {
          return (
            <div key={Math.random()}>
              <p>{osoba.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
