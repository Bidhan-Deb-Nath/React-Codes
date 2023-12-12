/** @format */
import { useState } from "react";
const ColorComponents = () => {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-xl">
            <button
              className="outline-none px-6 py-2 bg-black text-white rounded-xl shadow-lg"
              onClick={() => setColor("black")}
            >
              Black
            </button>
            <button
              className="outline-none px-6 py-2 text-white rounded-xl shadow-lg"
              style={{ backgroundColor: "#ff0000" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-6 py-2  text-white rounded-xl shadow-lg"
              style={{ backgroundColor: "#008000" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-6 py-2  text-white rounded-xl shadow-lg"
              style={{ backgroundColor: "#0000ff" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-5 py-2  text-white rounded-xl shadow-lg"
              style={{ backgroundColor: "#ffff00" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorComponents;
