import React, {Component} from 'react'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox} from './components/search-box/search-box.componet'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( {monster : users} ))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value});
  }

  render(){
      const { monsters, searchField} = this.state;
      const filteredMonsters = this.state.monster.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

      return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox
            placeholder='buscar mounstros'
            handleChange= {this.handleChange}
          />
          <CardList monster = {filteredMonsters}/>
        </div>
      );
    }
}

export default App;
