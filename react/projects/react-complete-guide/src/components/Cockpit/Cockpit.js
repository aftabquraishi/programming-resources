import React from 'react';

const cockpit = (props) => {
    const classes = [];
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      }

    if (props.showPersons) {
        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        }
    }

    if (props.persons.length <= 2) {
      classes.push('red');
    }

    if (props.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div>
            <h1>Hi! I'm a React app.</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button style={style} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;