import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
    return (
        <div
            id="right"
            className="h-full rounded-4xl overflow-x-auto flex flex-nowrap gap-10 p-6 w-2/3"
        >
            {props.users.map(function (elem, idx) {
                return (
                    <RightCard
                        key={idx}
                        id={idx}
                        color={elem.color}
                        img={elem.img}
                        tag={elem.tag}
                    />
                );
            })}
        </div>
    );
};

export default RightContent;
