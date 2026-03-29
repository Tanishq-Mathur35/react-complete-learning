import { useState } from "react";

function App() {
    const [num, setNum] = useState(0);

    return (
        <div className="container">
            <h1>Value of num: {num}</h1>

            <div className="btn-group">
                <button className="inc" onClick={() => setNum(num + 1)}>
                    Increase
                </button>

                <button className="dec" onClick={() => setNum(num - 1)}>
                    Decrease
                </button>

                <button className="inc5" onClick={() => setNum(num + 5)}>
                    Increase by 5
                </button>

                <button className="reset" onClick={() => setNum(0)}>
                    Reset num = 0
                </button>

                <button className="dec5" onClick={() => setNum(num - 5)}>
                    Decrease by 5
                </button>
            </div>
        </div>
    );
}

export default App;
