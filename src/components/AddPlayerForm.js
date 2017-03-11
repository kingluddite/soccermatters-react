import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddPlayerForm extends Component {
  constructor() {
    super();
    this.createPlayer = this.createPlayer.bind(this);
  }

  createPlayer(e) {
    e.preventDefault();
    const player = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      status: this.status.value,
      fieldPosition: this.fieldPosition.value,
      email: this.email.value,
      password: this.password.value,
      jerseyNumber: this.jerseyNumber.value,
      notes: this.notes.value
    }
    console.log(player);
  }

  render() {
    return (
      <Form getRef={(input) => this.playerForm = input} onSubmit={this.createPlayer}>
              <FormGroup>
                <Label for="email">Email</Label>
              <Input getRef={(input) => this.email = input} type="email" name="email" id="email" placeholder="pele@pele.com" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
              <Input getRef={(input) => this.password = input} type="password" name="password" id="password" placeholder="password placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="firstName">First Name</Label>
              <Input getRef={(input) => this.firstName = input} type="text" name="firstName" id="firstName" placeholder="First Name" />
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
              <Input getRef={(input) => this.lastName = input} type="text" name="lastName" id="lastName" placeholder="Last Name" />
              <Label for="fieldPosition">Field Position</Label>
            <Input getRef={(input) => this.fieldPosition = input} type="text" name="fieldPosition" id="fieldPosition" placeholder="Field Postion" />
              <Label for="jerseyNumber">Jersey Number</Label>
            <Input getRef={(input) => this.jerseyNumber = input} type="text" name="jerseyNumber" id="jerseyNumber" placeholder="Jersey Number" />
              </FormGroup>
              <FormGroup>
                <Label for="status">Status</Label>
              <Input getRef={(input) => this.status = input} type="select" name="status" id="status">
                  <option value="available">Available</option>
                  <option value="injured">Injured</option>
                  <option value="excused">Excused Absence</option>
                  <option value="unexcused">Unexcused Absence</option>
                </Input>
                <FormText color="muted">
                 Let us know why you can't play in this game.
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="notes">Notes</Label>
              <Input getRef={(input) => this.notes = input} type="textarea" name="notes" id="notes" />
              <FormText color="muted">
               Anything we should be aware?
              </FormText>
            </FormGroup>
              <Button color="success">+ Add Player</Button>
            </Form>
    );
  }
}

export default AddPlayerForm;
