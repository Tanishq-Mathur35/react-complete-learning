import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";

const App = () => {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(1);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `https://picsum.photos/v2/list?page=${index}&limit=14`,
            );
            setData(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [index]);

    let printData = (
        <div className="flex flex-wrap justify-center gap-6 p-4">
            {Array(8)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className="h-40 w-60 bg-gray-800 animate-pulse rounded-xl shadow-md"
                    />
                ))}
        </div>
    );

    if (!loading && data.length > 0) {
        printData = data.map((elem, idx) => (
            <div
                key={idx}
                className="transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
                <Card elem={elem} />
            </div>
        ));
    }

    return (
        <div className="bg-gradient-b from-black to-gray-900 overflow-auto h-screen p-4 text-white">
            <div className="flex flex-wrap justify-center gap-6 p-4">
                {printData}
            </div>

            <div className="flex justify-center gap-6 items-center p-4">
                <button
                    disabled={index === 1}
                    onClick={() => {
                        if (index > 1) {
                            setIndex(index - 1);
                        }
                    }}
                    className="bg-amber-400 text-sm cursor-pointer active:scale-95 hover:bg-amber-300 transition text-black rounded-lg px-5 py-2 font-semibold disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                    Prev
                </button>

                <h4 className="px-4 py-1 bg-gray-800 rounded-md">
                    Page{" "}
                    <span className="text-amber-400 font-bold">{index}</span>
                </h4>

                <button
                    onClick={() => setIndex(index + 1)}
                    className="bg-amber-400 text-sm cursor-pointer active:scale-95 hover:bg-amber-300 transition text-black rounded-lg px-5 py-2 font-semibold"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default App;
