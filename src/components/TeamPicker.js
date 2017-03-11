import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { getTeamName, slugify } from '../helpers';

class TeamPicker extends Component {
  constructor() {
    super();
    this.goToTeam = this.goToTeam.bind(this);
  }

  goToTeam(e) {
    e.preventDefault();
    // get team name and slugify it
    const teamId = slugify(this.teamInput.value);
    // route to team/team name
    this.context.router.transitionTo(`/team/${teamId}`);
  }
  render() {
    return (
      <div>
        <h2>Team Picker</h2>
      <form onSubmit={this.goToTeam}>
        <div className="form-group">
          <label htmlFor="teamName">Please enter a team name</label>
        <input id="teamName" type="text" ref={(input) => { this.teamInput = input }} className="form-control" required placeholder="Team Name" defaultValue={getTeamName()} />
        </div>
        <Button type="submit" color="success">
          Add Team
        </Button>
      </form>
      </div>
    )
  }
}

TeamPicker.contextTypes = {
  router: React.PropTypes.object
}

export default TeamPicker;
