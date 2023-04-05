import React, { createRef } from 'react'
import { useMutation } from 'react-query'
import { Todo } from '../../types';
import nextId from "react-id-generator";
import { newTodo } from '../features/todo';

const NewTodo = () => {

    const refTxtTodo = createRef()

    const mutationTodo = useMutation((formData: any) => {
        newTodo(formData)
    })
    
    const handleAddNewClient = () => {

      const newTodo: Todo = {
        title: refTxtTodo.current.value,
        completed: false
      }

      mutationTodo.mutate(newTodo)        
      // console.log(newTodo);
      
    }

  return (
    <div className="mt-6 flex max-w-md gap-x-4 border-2 p-2 mb-2">
        <label className="sr-only">Enter to do text</label>
          <input id="email-address" ref={refTxtTodo} type="text" autoComplete="text" required className="min-w-0 flex-auto rounded-md border-2 p-2" placeholder="Enter new todo" />

          <button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={handleAddNewClient}>Add New</button>
    </div>
  )
}

export default NewTodo
