import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/infrastructure/store/store';
import { addTodo, toggleTodo, deleteTodo } from '@/infrastructure/store/slices/todoSlice';

export const useTodos = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos.todos);

    return {
        todos,
        addNewTodo: (text: string) => dispatch(addTodo(text)),
        toggleTodoStatus: (id: string) => dispatch(toggleTodo(id)),
        removeTodo: (id: string) => dispatch(deleteTodo(id))
    };
};