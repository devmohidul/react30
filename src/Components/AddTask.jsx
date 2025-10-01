import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input_box gap"
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={handleChangeText}
        required
      />
      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
}
