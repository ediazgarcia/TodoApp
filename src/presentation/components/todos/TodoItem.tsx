import { motion } from 'framer-motion';

interface TodoItemProps {
    id: string;
    text: string;
    completed: boolean;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export const TodoItem = ({ id, text, completed, onToggle, onDelete }: TodoItemProps) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="flex items-center gap-2 p-4 mb-3 transition-shadow border border-green-100 shadow-sm group rounded-xl bg-white/50 backdrop-blur-sm hover:shadow-md"
            whileHover={{ scale: 1.02 }}
        >
            <label className="flex items-center flex-1 gap-3 cursor-pointer">
                <motion.input
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggle(id)}
                    className="w-5 h-5 accent-green-500"
                    whileTap={{ scale: 0.9 }}
                />
                <motion.span
                    animate={{ color: completed ? '#9CA3AF' : '#1F2937' }}
                    className={`text-lg ${completed ? 'line-through' : ''}`}
                >
                    {text}
                </motion.span>
            </label>
            <motion.button
                onClick={() => onDelete(id)}
                className="px-3 py-1 text-sm text-red-600 transition-colors bg-red-100 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                Delete
            </motion.button>
        </motion.div>
    );
};