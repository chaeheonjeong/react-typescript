import React from "react";

interface ColorListProps {
  selectColor: (color: string) => void;
}

export default function ColorList({ selectColor }: ColorListProps) {
  const colors: string[] = ["white", "red", "blue", "yellow", "green"];

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      {colors.map((color: string, idx: number) => (
        <div
          key={idx + color}
          style={{
            backgroundColor: color,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            borderStyle: "solid",
            borderWidth: "0.5px",
            borderColor: "black",
          }}
          onClick={() => {
            selectColor(color);
          }}
        ></div>
      ))}
    </div>
  );
}
