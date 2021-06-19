import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  function keyPressEnter(e) {
    if (e.key === "Enter") {
      addTask(input);
      setInput("");
    }
  }
  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="enter task here..."
        onKeyPress={keyPressEnter}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default TaskInput;
