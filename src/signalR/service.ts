import { TodoListItemDto } from "../screens/TodoList/models";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";


export function JoinSignalR(ListId:string){
    const connection = new HubConnectionBuilder()
    .withUrl("/hub")
    .build();

    const request = {ListId}
    const list = connection.send('JoinList', ListId)

    return connection
}
 
export function AddOrReplace(connection: HubConnection, Item: TodoListItemDto, ListId: string) {
  const request =  {Item, ListId}
  connection.send("AddOrReplaceItem", request)
}
