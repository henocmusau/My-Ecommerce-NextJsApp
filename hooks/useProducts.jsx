import React, { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import useStorage from './useStorage';

export default function useTodos() {
    const [todos, setTodos] = useStorage('todos', [])
    const [filter, setFilter] = useState(0)
    const inputRef = useRef()

    function createTodo(e) {
        e.preventDefault()

        if (inputRef.current.value.trim() < 1) return

        const newTodo = {
            id: uuidv4(),
            title: inputRef.current.value,
            isCompleted: false
        }

        setTodos([newTodo, ...todos])

        inputRef.current.value = ''
        setFilter(0)
    }

    function changeStateTodo(id) {
        setTodos((prevTodos) =>
            prevTodos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                }
                return todo
            }))
    }

    function removeTodo(id) {
        setTodos((prevTodos) =>
            prevTodos.filter(todo => todo.id !== id))
        console.log('Removed')
    }

    function changeFilter(id) {
        setFilter(id)
    }

    function filterTodos() {
        switch (filter) {
            case 0:
                return todos
            case 1:
                return todos.filter(todo => !todo.isCompleted)
            case 2:
                return todos.filter(todo => todo.isCompleted)
            default:
                return todos
        }
    }

    const filteredTodos = filterTodos()

    function clearCompletedTodos() {
        setTodos(todos.filter(todo => !todo.isCompleted))
        changeFilter(0)
    }

    return [createTodo, inputRef, filteredTodos, changeStateTodo, removeTodo, changeFilter, clearCompletedTodos, filter]
}
