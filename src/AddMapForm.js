import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class AddMapForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: props.isOpen
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.props.closeModal();
  };

  handleSubmit() {
    this.props.saveMap(
      this.props.mapInputValue,
      false
    );
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <RaisedButton
        label="Create Map"
        primary={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Create a New Map"
          actions={actions}
          modal={false}
          open={this.props.isOpen}
          onRequestClose={this.handleClose}
        >
          <TextField
            floatingLabelText="Title"
            hintText="e.g. My solo map"
            onChange={this.props.handleMapNameInput}
            value={this.props.mapInputValue}
          />
        </Dialog>
      </div>
    )
  }
}