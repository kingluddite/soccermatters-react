import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';
import Header from './Header';
import Nav from './MainNav';
import Roster from './Roster';
import Player from './Player';
import UserList from './UserList';
import { fetchUsers } from '../actions/userActions';
import samplePlayers from '../sample-player-data';

@connect((store) => {
	return {
		users: store.users.users
	}
})

class App extends Component {
    componentWillMount() {
      this.props.dispatch(fetchUsers());
    }
    constructor() {
      super();
      this.addPlayer = this.addPlayer.bind(this);
      this.loadSamples = this.loadSamples.bind(this);
      this.addSeason = this.addSeason.bind(this);

      // initial state
      this.state = {
        players: {},
        seasons: {},
        lineup: {}
      };
    }

    loadSamples() {
      this.setState({
        players: samplePlayers
      });
    }

    addSeason(season) {
      // update our state
      const seasons = {...this.state.seasons};
      // generate unique key
      const timestamp = Date.now();
      // add in our new season
      seasons[`season-${timestamp}`] = season;
      // set state
      this.setState({ seasons });
    }

    addPlayer(player) {
      // update our state
      const players = {...this.state.players};
      // generate unique date key
      const timestamp = Date.now();
      // add in our new player
      players[`player-${timestamp}`] = player;
      // set state
      this.setState({ players });
    }

    render() {

        return (
            <div>
                <Header tagline="Because Soccer Does Matter" />
                <Nav />
                <div className="row">
                    <div className="col">
                        <UserList users={this.props.users}/>
                        <Roster
                          addPlayer={this.addPlayer} loadSamples={this.loadSamples}
                          addSeason={this.addSeason}
                        />
                    </div>
                    <div className="col-6">
                        <h2>Full Roster</h2>
                        <ListGroup>
                          {
                            Object
                            .keys(this.state.players)
                            .map(key => <Player
                                          key={key}
                                          details={this.state.players[key]}
                                        />
                            )
                          }
                        </ListGroup>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
