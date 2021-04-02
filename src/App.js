import './App.css';
import { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component"
import { SearchBbox } from "./components/search-box/search-box.component"

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') // response([])
    .then(response => response.json()) // []
    .then(users => this.setState({monsters: users})) // ()
    .then(() => console.log(this.state.monsters)) // ()
  }


  render(){

    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter( monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <SearchBbox 
          placeholder='search monster' 
          handleChange={event => this.setState({ searchField: event.target.value })}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
