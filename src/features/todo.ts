import axios from "axios"
import { CREATE_NEW_TODO, TODOS } from './../../api';
import { Todo } from "../../types";

export const getTodos = async () => {

    const todosData = await axios(TODOS)
    const todos = await todosData.data

    return todos
}

export const newTodo = async (postData: Todo) => {

    const options = {
        url: CREATE_NEW_TODO,
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: postData
    };

    const todosData = await axios(options)
    const todos = await todosData.data

    return todos
}
