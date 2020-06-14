import React, { FunctionComponent } from "react";
import { TodoListDto, TodoListItemDto } from "./models";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  list: TodoListDto
}

export const TodoList: FunctionComponent<TodoListProps> = ({ list }) => 
<div>
  <ul>
    {list.Items.map((item: TodoListItemDto) => <TodoListItem  {...item} />)}
  </ul>
</div>


