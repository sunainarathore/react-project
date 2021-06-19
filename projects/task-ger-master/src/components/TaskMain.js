import React, { useState } from "react";
import TaskDisplay from "./TaskDisplay";
import TaskInput from "./TaskInput";

function TaskMain() {
  const [task, setTask] = useState([]);

  function addTask(e) {
    const newTaskList = [...task];
    const newTask = { id: newTaskList.length, task: e, done: false };
    newTaskList.push(newTask);
    setTask(newTaskList);
  }

  function handleDone(index) {
    const doneList = [...task];
    doneList[index].done = true;
    setTask(doneList);
  }

  function handleRemove(index) {
    const afterRemovedList = [...task];
    afterRemovedList.splice(index, 1);
    setTask(afterRemovedList);
  }

  return (
    <div className="task-container">
      <TaskInput addTask={addTask} />
      <TaskDisplay
        task={task}
        handleDone={handleDone}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default TaskMain;
