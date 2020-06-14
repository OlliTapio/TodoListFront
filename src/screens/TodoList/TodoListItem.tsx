import React from "react";
import { TodoListItemDto } from "./models";

export const TodoListItem  = (item: TodoListItemDto) =>

    <li>
      <p>
        {item.Name}
      </p>
      <p>
        {item.Done ? "Done" : "" }
      </p>
    </li>
