import React, { Component } from 'react';
import { TodoListDto, TodoListItemDto } from './models';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { TodoList } from './TodoList';
import { JoinSignalR } from '../../signalR/service';
import { useParams } from 'react-router-dom';
import InputForm from '../../components/InputForm';


interface TodoListViewState {
  list: TodoListDto
  connection: HubConnection
  inputLoading: boolean
  loading: boolean
}

class TodoListView extends Component<{}, TodoListViewState> {
  constructor() {
    super({});
    const {listId} = useParams();
    let list = {
      Id: '',
      Items: [],
      Name: ''
    }
    
    this.state = {
      list: list,
      connection: JoinSignalR(listId),
      inputLoading: false,
      loading: true    
    };
  }

  onClick(event:React.ChangeEvent<HTMLInputElement>) {
    this.setState({inputLoading: true});
  }

  componentDidMount = () => { 
    this.state.connection?.on('Joined', (todoList: TodoListDto) => {
      this.setState({list: todoList, loading: false})
    })

    this.state.connection?.on('AddedOrReplaced', (todoListItem: TodoListItemDto) => {
      let {list} = this.state;
      const index = list.Items.findIndex(x => x.Id == todoListItem.Id)
      list.Items[index] = todoListItem;
      this.setState({list})
        //{...this.state, list: {...list, Items: list.Items}})
    })
  }

  render() {
    if(this.state.loading) {
      return (
      <p>Loading</p>
      );
    }
    else {
      return (
      <div>
        <TodoList {...this.state} />
        <InputForm loading={this.state.inputLoading} onClick={this.onClick}/>
      </div>
      );
    }
  }
}

export default TodoListView;
