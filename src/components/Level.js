// src/components/Level.js
/*
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Level = ({
  level,
  handleCheck,
  handleDelete,
  handleEditItem,
  handleSaveEdit,
  editItem,
  editText,
  setEditText,
  calculateProgress,
}) => (
  <div>
    <h3>Level {level.level}</h3>
    <p>Progress: {calculateProgress(level)}%</p>
    <ul>
      {level.tasks.map((task) => (
        <li className="item" key={task.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(level.level, task.id)}
            checked={task.checked}
          />
          {editItem === task.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(level.level, task.id)}>
                Save
              </button>
            </>
          ) : (
            <label
              style={task.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => handleEditItem(level.level, task.id)}
            >
              {task.item} (Due: {task.dueDate})
            </label>
          )}
          <FaTrashAlt
            role="button"
            onClick={() => handleDelete(level.level, task.id)}
            tabIndex="0"
          />
        </li>
      ))}
    </ul>
  </div>
);

export default Level;
*/


// src/components/Level.js

import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Level = ({
  level,
  handleCheck,
  handleDelete,
  handleEditItem,
  handleSaveEdit,
  editItem,
  editText,
  setEditText,
  calculateProgress
}) => {
  const progress = calculateProgress(level);
  return (
    <div className="level">
      <h3>
        Level {level.level} 
        <div className="progress-circle" style={{ '--progress': progress / 100 }}>
          {Math.round(progress)}%
        </div>
      </h3>
      <ul>
        {level.tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(level.level, task.id)}
              checked={task.checked}
            />
            {editItem === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(level.level, task.id)}>
                  Save
                </button>
              </>
            ) : (
              <label
                style={task.checked ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleEditItem(level.level, task.id)}
              >
                {task.item} (Due: {task.dueDate})
              </label>
            )}
            <FaTrashAlt
              role="button"
              onClick={() => handleDelete(level.level, task.id)}
              tabIndex="0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Level;

/*
// src/components/Level.js
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Level = ({
  level,
  handleCheck,
  handleDelete,
  handleEditItem,
  handleSaveEdit,
  editItem,
  editText,
  setEditText,
  dueDate,
  setDueDate,
  calculateProgress
}) => {
  const progress = calculateProgress(level);
  return (
    <div className="level">
      <h3>
        Level {level.level} 
        <div className="progress-circle" style={{ '--progress': progress / 100 }}>
          {Math.round(progress)}%
        </div>
      </h3>
      <ul>
        {level.tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(level.level, task.id)}
              checked={task.checked}
            />
            {editItem === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(level.level, task.id)}>
                  Save
                </button>
              </>
            ) : (
              <label
                style={task.checked ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleEditItem(level.level, task.id)}
              >
                {task.item} (Due: {task.dueDate})
              </label>
            )}
            <FaTrashAlt
              role="button"
              onClick={() => handleDelete(level.level, task.id)}
              tabIndex="0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Level;
*/