import { TodoListItemDto } from "../screens/TodoList/models";

export interface AddOrReplaceItemRequest {
  ListId: string,
  TodoListItem: TodoListItemDto
}

export interface JoinRequest {
  ListId: string
}