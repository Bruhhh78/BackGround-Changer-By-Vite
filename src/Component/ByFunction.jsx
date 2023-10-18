// By Creating One Function namely handle color change


import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const colorButtons = [
    { name: "Red", color: "red" },
    { name: "Green", color: "green" },
    { name: "Blue", color: "blue" },
    { name: "Olive", color: "olive" },
    { name: "Gray", color: "gray" },
    { name: "Yellow", color: "yellow" },
    { name: "Pink", color: "pink" },
    { name: "Purple", color: "purple" },
    { name: "Lavender", color: "lavender" },
    { name: "White", color: "white" },
    { name: "Black", color: "black" },
  ];

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            {colorButtons.map((button) => (
              <button
                key={button.color}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: button.color }}
                onClick={() => handleColorChange(button.color)}
              >
                {button.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ByFunction;
