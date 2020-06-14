import { TodoListItemDto, TodoListDto } from "../screens/TodoList/models";

export interface AddOrReplaceItemResponse {
  TodoListItem: TodoListItemDto
}

export interface TodoListResponse {
  TodoList: TodoListDto
}