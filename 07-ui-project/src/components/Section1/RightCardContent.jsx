import React from "react";

const RightCardContent = (props) => {
    return (
        <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
            <h2 className="bg-white text-2xl font-semiblod rounded-full h-14 w-14 flex items-center justify-center">
                {props.id + 1}
            </h2>
            <div>
                <p className="text-lg leading-relaxed text-white mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores inventore mollitia quam id consequuntur
                    exercitationem?
                </p>
                <div className="flex justify-between">
                    <button
                        style={{ backgroundColor: props.color }}
                        className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full"
                    >
                        {props.tag}
                    </button>
                    <button className="bg-blue-600 text-white font-medium px-5 py-3 rounded-full">
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightCardContent;
