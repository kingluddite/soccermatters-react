import React, { Component } from 'react';

class TeamPicker extends Component {
  render() {
    return (
      <div>
        <h2>Team Picker</h2>
      <form>
        <div className="form-group">
          <label htmlFor="teamName">Please enter a team name</label>
         <input id="teamName" type="text" className="form-control" required placeholder="Team Name" />
        </div>
        <button type="submit" className="btn btn-primary">Visit Team</button>
      </form>
      </div>
    )
  }
}

export default TeamPicker;
