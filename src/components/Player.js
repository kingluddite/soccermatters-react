import React, { Component } from 'react';
import { ListGroupItem, Badge } from 'reactstrap';

class Player extends Component {
  constructor() {
    super();
    this.checkStatus = this.checkStatus.bind(this);
  }

  checkStatus(status) {
    if (status === 'active') {
      return 'success';
    } else {
      return 'danger';
    }
  }
  render() {
    const { details } = this.props;

    return (
      <ListGroupItem color={this.checkStatus(details.status)} className="justify-content-between">
        {`${details.firstName} ${details.lastName}`} <Badge pill>{details.jerseyNumber}</Badge>
      </ListGroupItem>
    )
  }
}

export default Player;