import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddSeasonForm extends Component {
  constructor() {
    super();
    this.createSeason = this.createSeason.bind(this);
  }

  createSeason(e) {
    e.preventDefault();
    const season = {
      seasonName: this.seasonName.value,
      startDate: this.startDate.value,
      endDate: this.endDate.value
    }
    this.props.addSeason(season);
    this.seasonForm.reset();
  }

  render() {
    return (
      <div>
      <h2>Add Season</h2>
      <Form getRef={(input) => this.seasonForm = input} onSubmit={this.createSeason}>
        <FormGroup>
           <Label for="seasonName" hidden>Season Name</Label>
           <Input getRef={(input) => this.seasonName = input} type="text" name="seasonName" id="seasonName" placeholder="Season Name" />
         </FormGroup>
         <FormGroup>
          <Label for="startDate" hidden>Start Date</Label>
          <Input getRef={(input) => this.startDate = input} type="date" name="startDate" id="startDate" placeholder="Start Date" />
        </FormGroup>
        <FormGroup>
         <Label for="endDate" hidden>End Date</Label>
         <Input getRef={(input) => this.endDate = input} type="date" name="endDate" id="endDate" placeholder="End Date" />
       </FormGroup>
        <FormGroup >
          <Button color="success">+ Add Season</Button>
        </FormGroup>
      </Form>
      </div>
    );
  }
}

export default AddSeasonForm;