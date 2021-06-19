import React from "react";

function TaskDisplay({ task, handleDone, handleRemove }) {
  return (
    <div className="task-display">
      {task.map((eachTask, index) => {
        return (
          <div className="each-task" key={eachTask.id}>
            {eachTask.done ? (
              <>
                <p
                  style={{
                    textDecoration: "line-through",
                  }}
                >
                  {eachTask.task}
                </p>
                <button
                  className="btn btn-remove"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </>
            ) : (
              <>
                <p>{eachTask.task}</p>
                <button
                  className="btn btn-done"
                  onClick={() => handleDone(index)}
                >
                  Done
                </button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TaskDisplay;
