import React from "react";

const App = () => {
    function btnClicked() {
        console.log("hello");
    }

    return (
        <div>
            <button onClick={btnClicked}>Click</button>
            <input
                onChange={function (elem) {
                    console.log(elem.target.value);
                }}
                type="text"
                placeholder="Enter Name"
            />
        </div>
    );
};

export default App;
