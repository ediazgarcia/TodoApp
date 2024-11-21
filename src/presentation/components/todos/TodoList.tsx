import { useTodos } from '@/application/hooks/useTodos';
import { TodoItem } from './TodoItem';
import { motion, AnimatePresence } from 'framer-motion';

export const TodoList = () => {
    const { todos, toggleTodoStatus, removeTodo } = useTodos();

    return (
        <motion.div layout className="space-y-2">
            <AnimatePresence mode="popLayout">
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onToggle={toggleTodoStatus}
                        onDelete={removeTodo}
                    />
                ))}
            </AnimatePresence>
        </motion.div>
    );
};