import { useState } from "react";

const App = () => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const [task, setTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();

        const copyTask = [...task];
        copyTask.push({ title, details });

        setTask(copyTask);

        setTitle("");
        setDetails("");
    };

    const deleteNote = (idx) => {
        const copyTask = [...task];
        copyTask.splice(idx, 1);

        setTask(copyTask);
    };

    return (
        <div className="min-h-screen bg-gradient-br from-gray-950 to-gray-900 text-white flex flex-col lg:flex-row">
            <div className="lg:w-1/3 w-full p-6 border-b lg:border-b-0 lg:border-r border-gray-800 flex items-center">
                <div className="w-full max-w-md mx-auto bg-gray-900/60 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-800">
                    <h1 className="text-3xl font-bold mb-6">Add Note</h1>

                    <form
                        onSubmit={submitHandler}
                        className="flex flex-col gap-4"
                    >
                        <input
                            type="text"
                            placeholder="Title..."
                            className="bg-gray-950 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <textarea
                            placeholder="Write something..."
                            className="bg-gray-950 border border-gray-700 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                        />

                        <button className="bg-blue-600 hover:bg-blue-700 transition active:scale-95 rounded-lg py-2 font-semibold">
                            Add Note
                        </button>
                    </form>
                </div>
            </div>

            <div className="lg:w-2/3 w-full p-6">
                <h1 className="text-3xl font-bold mb-6">Your Notes</h1>

                {task.length === 0 ? (
                    <p className="text-gray-500">
                        No notes yet. Start writing something.
                    </p>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {task.map((elem, idx) => (
                            <div
                                key={idx}
                                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                            >
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png"
                                    alt="note"
                                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                                />

                                <div className="relative z-10 p-4 flex flex-col justify-between h-52 text-black">
                                    <div>
                                        <h3 className="text-lg font-bold leading-tight">
                                            {elem.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-800 line-clamp-4">
                                            {elem.details}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => deleteNote(idx)}
                                        className="mt-4 bg-red-500 hover:bg-red-600 text-white text-sm py-1 rounded active:scale-95"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
