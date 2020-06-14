import React, { Component } from 'react';
import { JoinSignalR } from '../signalR/service';


interface InputFormProps {
  loading: boolean
  onClick: any
}

interface InputFormState {
  value: string
}

class InputForm extends Component<InputFormProps, InputFormState>{
  constructor(props : InputFormProps) {
    super(props);
    this.state = {value: ''};
  }


  handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    this.setState({value: event.target.value});
  }

  render() {
    if(!this.props.loading){
      return (
      <form>
        <label>
          Todo List Id:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Join" onClick={this.props.onClick}/>
      </form>
    );
    }
    else {
      return (<p/>);
    }
  }
}

export default InputForm;
