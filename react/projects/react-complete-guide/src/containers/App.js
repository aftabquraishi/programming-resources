import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 1001, name: "Aftab", age: 35 },
        { id: 1002, name: "Naser", age: 32 },
        { id: 1003, name: "Robin", age: 33 }
      ],
      showPersons: false
    }
  }  

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { return p.id === id; });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    this.setState( {
      showPersons: !this.state.showPersons
    } );
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler} />;
    }

    return (
      <StyleRoot>
        <div className="App">
          <Cockpit 
            showPersons={this.state.showPersons} 
            persons={this.state.persons} 
            clicked={this.togglePersonsHandler} />
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
