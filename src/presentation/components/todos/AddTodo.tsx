// src/presentation/components/todos/AddTodo.tsx
import { useState } from 'react';
import { useTodos } from '@/application/hooks/useTodos';
import { motion } from 'framer-motion';

export const AddTodo = () => {
    const [text, setText] = useState('');
    const { addNewTodo } = useTodos();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            addNewTodo(text);
            setText('');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ type: "spring", bounce: 0.4 }}
        >
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    className="flex-1 p-3 border-2 border-green-200 rounded-xl bg-white/50 focus:outline-none focus:border-green-400 transition-all hover:shadow-md focus:shadow-lg"
                    placeholder="Add a new task..."
                />
                <motion.button
                    type="submit"
                    className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl hover:from-green-600 hover:to-emerald-700 shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Add
                </motion.button>
            </form>
        </motion.div>
    );
};