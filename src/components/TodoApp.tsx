import React, { useState, useCallback } from "react";
import Item from "./Item";
import ColorList from "./Colorlist";

interface List {
  content: string;
  color: string;
}

export default function TodoApp() {
  const [list, setList] = useState<List[]>([]);
  const [todo, setTodo] = useState<string>("");
  const [inputColor, setInputColor] = useState<string>("white");

  const addList = useCallback(() => {
    const newItem: { content: string; color: string } = {
      content: todo,
      color: inputColor,
    };
    setList([...list, newItem]);
    setTodo("");
  }, [list, todo, inputColor]);

  const deleteList = useCallback(
    (index: number) => {
      const newList: List[] = list.filter((item, idx) => idx !== index);
      setList(newList);
    },
    [list]
  );

  const selectColor = useCallback((color: string) => {
    setInputColor(color);
  }, []);

  const modifyTodo = useCallback(
    (index: number, newContent: string, newColor: string) => {
      const newList: List[] = [...list];
      newList[index] = { content: newContent, color: newColor };
      setList(newList);
    },
    [list]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="입력"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
          style={{
            backgroundColor: `${inputColor}`,
            borderColor: "#c0c0c0",
            borderRadius: "5px",
          }}
        />
        <button onClick={addList}>입력</button>
      </div>
      <ColorList selectColor={(color: string) => selectColor(color)} />
      <h2>Todo Items</h2>
      {list.map((item, index) => (
        <Item
          key={index + item.content}
          content={item.content}
          color={item.color}
          onModify={(newContent, newColor) =>
            modifyTodo(index, newContent, newColor)
          }
          onDelete={() => deleteList(index)}
        />
      ))}
    </div>
  );
}
