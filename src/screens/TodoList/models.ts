
export interface TodoListDto {
  Id: string
  Items: Array<TodoListItemDto>
  Name: string
}

export interface TodoListItemDto
{
  Id: string
  Name: string
  Done: Boolean
  Color: string
}
