// ... (imports)

export const ListTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const [editableTodos, setEditableTodos] = useState([]);
    const [todoMsg, setTodoMsg] = useState('');


    const editTodo = (todoId) => {
        dispatch(updateTodo({ id: todoId, message: todoMsg }));
        setEditableTodos(prev => prev.filter(id => id !== todoId));
    };

    const toggleCompleted = (todoId) => {
        dispatch(toggleComplete(todoId));
    };

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}
                    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                        }`}
                >
                    {/* ... (checkbox and text inputs) */}
                    <button
                        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                        onClick={() => {
                            if (todo.completed) return;

                            if (editableTodos.includes(todo.id)) {
                                editTodo(todo.id);
                            } else setEditableTodos(prev => [...prev, todo.id]);
                        }}
                        disabled={todo.completed}
                    >
                        {editableTodos.includes(todo.id) ? "📁" : "✏️"}
                    </button>
                    <button
                        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                        onClick={() => dispatch(removeTodo(todo.id))}
                    >
                        ❌
                    </button>
                </div>
            ))}
        </div>
    );
};
