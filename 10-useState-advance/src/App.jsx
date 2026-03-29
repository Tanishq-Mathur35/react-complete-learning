import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(10);
    const [user, setUser] = useState({ name: "Tanishq", age: 20 });
    const [numbers, setNumbers] = useState([10, 20, 30]);

    const incrementCount = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    };

    const updateAge = () => {
        setUser((prev) => ({ ...prev, age: 50 }));
    };

    const addNumber = () => {
        setNumbers((prev) => [...prev, 40]);
    };

    return (
        <div>
            {/* Number state */}
            <h1>Count: {count}</h1>
            <button onClick={incrementCount}>Increment x3</button>

            {/* Object state */}
            <h2>
                {user.name}, {user.age}
            </h2>
            <button onClick={updateAge}>Update Age</button>

            {/* Array state */}
            <h3>{numbers.join(", ")}</h3>
            <button onClick={addNumber}>Add Number</button>
        </div>
    );
};

export default App;
