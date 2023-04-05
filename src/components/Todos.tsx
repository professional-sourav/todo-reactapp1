import {useQuery} from 'react-query'
import { getTodos } from '../features/todo'
import Loader from './Loader';
import SingleTodo from './SingleTodo';
import { Todo } from './../../types';

const Todos = () => {

    const {isLoading, error, data} = useQuery('todo', getTodos, {
        select: data => data.sort((a, b) => b.id - a.id)      
    })

    // console.log(isLoading, error, data);    

    return (
        <div className="flex max-w-md gap-x-4 border-2 p-2 mb-2 flex-col">
            { isLoading && <Loader /> }
            { data?.map((todo: Todo) => <SingleTodo key={todo.id} {...todo} />) }
        </div>
    )
}

export default Todos
