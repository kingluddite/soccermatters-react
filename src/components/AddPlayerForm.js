import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
      fieldPosition: this.fieldPosition.value,
      email: this.email.value,
      password: this.password.value,
      jerseyNumber: this.jerseyNumber.value,
    }
    this.props.addPlayer(player);
    this.playerForm.reset();
  }

  render() {
    return (
      <div>
      <h2>Add Player</h2>
      <Form getRef={(input) => this.playerForm = input} onSubmit={this.createPlayer}>
        <FormGroup>
           <Label for="firstName" hidden>First Name</Label>
           <Input getRef={(input) => this.firstName = input} type="text" name="firstName" id="firstName" placeholder="First Name" />
         </FormGroup>
         <FormGroup>
           <Label for="lastName" hidden>Last Name</Label>
           <Input getRef={(input) => this.lastName = input} type="text" name="lastName" id="lastName" placeholder="Last Name" />
         </FormGroup>
         <FormGroup>
           <Label for="email" hidden>Email</Label>
           <Input getRef={(input) => this.email = input} type="email" name="email" id="email" placeholder="Email" />
         </FormGroup>
         <FormGroup>
           <Label for="password" hidden>Password</Label>
             <Input getRef={(input) => this.password = input} type="password" name="password" id="password" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <Label for="fieldPosition" hidden>Field Position</Label>
            <Input getRef={(input) => this.fieldPosition = input} type="text" name="fieldPosition" id="fieldPosition" placeholder="Field Postion" />
          </FormGroup>
          <FormGroup>
            <Label for="jerseyNumber" hidden>Jersey Number</Label>
            <Input getRef={(input) => this.jerseyNumber = input} type="text" name="jerseyNumber" id="jerseyNumber" placeholder="Jersey Number" />
            <hr />
          </FormGroup>
          <FormGroup >
                  <Button color="success">+ Add Player</Button>
                </FormGroup>
          </Form>
        </div>
    );
  }
}

export default AddPlayerForm;
