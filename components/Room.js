import React from "react";

const Room = ({ title, text, src, description }) => {
    return (
        <div className="flex p-12 m-auto">
            <img src={src} alt={description} className="w-16 md:w-32 lg:w-64 h-16 md:h-32 lg:h-64 rounded mb-4" />
            <div className="flex flex-col justify-evenly m-4">
                <h2 className="text-sm lg:text-2xl text-red-400">{title}</h2>
                <p className="text-sm lg:text-2xl text-red-400">{text}</p>
            </div>
        </div>
    );
};

export default Room;
