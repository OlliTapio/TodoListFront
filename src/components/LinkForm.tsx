import React, { Component } from 'react';
import { JoinSignalR } from '../signalR/service';
import { Link } from 'react-router-dom';

interface LinkFormState {
  value: string
}

class LinkForm extends Component<{}, LinkFormState>{
  constructor(props: {}) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({value: event.target.value});
  }

  onClick = (event:React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    return "location.href='/todolist/"+this.state.value+"';"
  }

  render() {
      return (
      <form>
        <label>
          Todo List Id:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Join" onClick={this.onClick}/>
      </form>
    );
  }
}

export default LinkForm;
