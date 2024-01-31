import React, { useState } from "react";
import ColorList from "./Colorlist";

interface ItemProps {
  content: string;
  color: string;
  onModify: (newContent: string, newColor: string) => void;
  onDelete: () => void;
}

export default function Item({
  content,
  color,
  onModify,
  onDelete,
}: ItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<string>(content);
  const [newColor, setNewColor] = useState<string>(color);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleEdit = () => {
    onModify(newContent, newColor);
    setIsEditing(false);
  };

  const selectColor = (color: string) => {
    setNewColor(color);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            style={{
              backgroundColor: `${newColor}`,
              borderRadius: "5px",
              borderColor: "#c0c0c0",
            }}
          />
          <ColorList selectColor={(color) => selectColor(color)} />
          <button onClick={handleEdit}>완료</button>
        </>
      ) : (
        <>
          <div
            onDoubleClick={handleDoubleClick}
            style={{ backgroundColor: `${color}` }}
          >
            {content}
          </div>
          <button onClick={onDelete}>삭제</button>
        </>
      )}
    </div>
  );
}
