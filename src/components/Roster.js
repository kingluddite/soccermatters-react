import React, { Component } from 'react';
import AddPlayerForm from './AddPlayerForm';

class Roster extends Component {
    render() {
        return (
          <div>
            <p>Roster</p>
            <AddPlayerForm />
          </div>
        )
    }
}

export default Roster;
