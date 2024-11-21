// src/presentation/pages/TodoPage.tsx
import { AddTodo } from '../components/todos/AddTodo';
import { TodoList } from '../components/todos/TodoList';
import { motion, AnimatePresence } from 'framer-motion';

// Variantes para las animaciones de contenedor
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

// Variantes para elementos individuales
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300
        }
    }
};

export const TodoPage = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen px-4 py-12 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100"
        >
            <motion.div
                className="max-w-xl p-8 mx-auto border border-green-100 shadow-2xl bg-white/80 backdrop-blur-sm rounded-2xl"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", bounce: 0.4 }}
            >
                {/* Cactus animado */}
                <motion.div
                    className="absolute transform -translate-x-1/2 -top-6 left-1/2"
                    animate={{
                        rotate: [0, 10, -10, 10, 0],
                        y: [0, -5, 5, -5, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    <span className="text-4xl">🌵</span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="mb-8 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500"
                >
                    Cactus Todo List
                </motion.h1>

                <motion.div
                    variants={itemVariants}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-emerald-200 opacity-20 rounded-xl" />
                    <AddTodo />
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        variants={itemVariants}
                        className="mt-8"
                        layout
                    >
                        <TodoList />
                    </motion.div>
                </AnimatePresence>

                {/* Elementos decorativos */}
                <motion.div
                    className="absolute text-3xl -bottom-4 -right-4"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity
                    }}
                >
                    🌱
                </motion.div>
                <motion.div
                    className="absolute text-3xl -top-4 -left-4"
                    animate={{
                        rotate: [0, -360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity
                    }}
                >
                    🎍
                </motion.div>
            </motion.div>
        </motion.div>
    );
};