import React, { Component } from 'react';
import { Button } from 'reactstrap';
import AddPlayerForm from './AddPlayerForm';
import AddSeasonForm from './AddSeasonForm';

class Roster extends Component {
    render() {
        return (
          <div>
            <AddSeasonForm addSeason={this.props.addSeason} />
            <AddPlayerForm addPlayer={this.props.addPlayer} />
            <Button outline color="success" onClick={this.props.loadSamples}>+ Load Sample Players</Button>
          </div>
        )
    }
}

export default Roster;
