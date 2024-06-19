/*
import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";


const Content = () => {
    const [items, setItems] = useState([
        { id: 1, checked: false, item: "Exercise" },
        { id: 2, checked: false, item: "Cricket" },
        { id: 3, checked: false, item: "Practice coding" }
    ]);

    const [newItem, setNewItem] = useState("");
    const [editItem, setEditItem] = useState(null);
    const [editText, setEditText] = useState("");

    

    
    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem("todo_list", JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem("todo_list", JSON.stringify(listItems));
    }

    const handleAddItem = () => {
        if (newItem.trim()) {
            const newItemObj = { id: items.length + 1, checked: false, item: newItem.trim() };
            const listItems = [...items, newItemObj];
            setItems(listItems);
            setNewItem("");
            localStorage.setItem("todo_list", JSON.stringify(listItems));
        }
    }

    const handleEditItem = (id) => {
        const item = items.find(item => item.id === id);
        setEditItem(id);
        setEditText(item.item);
    }

    const handleSaveEdit = (id) => {
        const listItems = items.map(item => item.id === id ? { ...item, item: editText } : item);
        setItems(listItems);
        setEditItem(null);
        setEditText("");
        localStorage.setItem("todo_list", JSON.stringify(listItems));
    }

    return (
        <main>
            <div className="quote">
                <p>The universe always falls in love with a stubborn heart</p>
            </div>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add a new item"
            />
            <button onClick={handleAddItem}>Add</button>

            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            {editItem === item.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                    />
                                    <button onClick={() => handleSaveEdit(item.id)}>Save</button>
                                </>
                            ) : (
                                <label
                                    style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                    onDoubleClick={() => handleEditItem(item.id)}
                                >
                                    {item.item}
                                </label>
                            )}
                            <FaTrashAlt
                                role="button"
                                onClick={() => handleDelete(item.id)}
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='bottom'>Your to-do list is empty</p>
            )}
        </main>
    );
}

export default Content;
*/



// src/Content.js
/*
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Level from './components/Level';

const Content = () => {
  const [levels, setLevels] = useState([
    {
      level: 1,
      tasks: [
        { id: 1, checked: false, item: "Task 1", dueDate: "2024-06-01" },
        { id: 2, checked: false, item: "Task 2", dueDate: "2024-06-02" },
        { id: 3, checked: false, item: "Task 3", dueDate: "2024-06-03" },
        { id: 4, checked: false, item: "Task 4", dueDate: "2024-06-04" },
        { id: 5, checked: false, item: "Task 5", dueDate: "2024-06-05" },
        { id: 6, checked: false, item: "Task 6", dueDate: "2024-06-06" },
        { id: 7, checked: false, item: "Task 7", dueDate: "2024-06-07" },
        { id: 8, checked: false, item: "Task 8", dueDate: "2024-06-08" }
      ]
    },
    // Add 9 more levels
  ]);

  const [newItem, setNewItem] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [editText, setEditText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedLevels = JSON.parse(localStorage.getItem("todo_levels"));
    if (savedLevels) setLevels(savedLevels);
  }, []);

  useEffect(() => {
    localStorage.setItem("todo_levels", JSON.stringify(levels));
  }, [levels]);

  const handleCheck = (levelId, taskId) => {
    const updatedLevels = levels.map(level =>
      level.level === levelId ? {
        ...level, tasks: level.tasks.map(task =>
          task.id === taskId ? { ...task, checked: !task.checked } : task
        )
      } : level
    );
    setLevels(updatedLevels);
  }

  const handleDelete = (levelId, taskId) => {
    const updatedLevels = levels.map(level =>
      level.level === levelId ? {
        ...level, tasks: level.tasks.filter(task => task.id !== taskId)
      } : level
    );
    setLevels(updatedLevels);
  }

  const handleAddItem = (levelId) => {
    if (newItem.trim()) {
      const newTask = { id: Date.now(), checked: false, item: newItem.trim(), dueDate: "2024-06-01" };
      const updatedLevels = levels.map(level =>
        level.level === levelId ? {
          ...level, tasks: [...level.tasks, newTask]
        } : level
      );
      setLevels(updatedLevels);
      setNewItem("");
    }
  }

  const handleEditItem = (levelId, taskId) => {
    const task = levels.find(level => level.level === levelId).tasks.find(task => task.id === taskId);
    setEditItem(taskId);
    setEditText(task.item);
  }

  const handleSaveEdit = (levelId, taskId) => {
    const updatedLevels = levels.map(level =>
      level.level === levelId ? {
        ...level, tasks: level.tasks.map(task =>
          task.id === taskId ? { ...task, item: editText } : task
        )
      } : level
    );
    setLevels(updatedLevels);
    setEditItem(null);
    setEditText("");
  }

  const calculateProgress = (level) => {
    const totalTasks = level.tasks.length;
    const completedTasks = level.tasks.filter(task => task.checked).length;
    return (completedTasks / totalTasks) * 100;
  };

  if (!isLoggedIn) {
    return <Login onLogin={setIsLoggedIn} />;
  }

  return (
    <main>
      <div className="quote">
        <p>The universe always falls in love with a stubborn heart</p>
      </div>
      {levels.map(level => (
        <Level
          key={level.level}
          level={level}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleEditItem={handleEditItem}
          handleSaveEdit={handleSaveEdit}
          editItem={editItem}
          editText={editText}
          setEditText={setEditText}
          calculateProgress={calculateProgress}
        />
      ))}
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={() => handleAddItem(levels[0].level)}>Add</button>
    </main>
  );
}

export default Content;
*/


// src/Content.js

import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Level from './components/Level';

const Content = () => {
  const [levels, setLevels] = useState([
    { level: 1, tasks: createTasks() },
    { level: 2, tasks: createTasks() },
    { level: 3, tasks: createTasks() },
    { level: 4, tasks: createTasks() },
    { level: 5, tasks: createTasks() },
    { level: 6, tasks: createTasks() },
    { level: 7, tasks: createTasks() },
    { level: 8, tasks: createTasks() }
  ]);

  const [newItem, setNewItem] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [editText, setEditText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedLevels = JSON.parse(localStorage.getItem("todo_levels"));
    if (savedLevels) setLevels(savedLevels);
  }, []);

  useEffect(() => {
    localStorage.setItem("todo_levels", JSON.stringify(levels));
  }, [levels]);

  const handleCheck = (levelId, taskId) => {
    const updatedLevels = levels.map(level =>
      level.level === levelId ? {
        ...level, tasks: level.tasks.map(task =>
          task.id === taskId ? { ...task, checked: !task.checked } : task
        )
      } : level
    );
    setLevels(updatedLevels);
  };

  const handleDelete = (levelId, taskId) => {
    const updatedLevels = levels.map(level =>
      level.level === levelId ? {
        ...level, tasks: level.tasks.filter(task => task.id !== taskId)
      } : level
    );
    setLevels(updatedLevels);
  };

  const handleAddItem = (levelId) => {
    if (newItem.trim()) {
      const newTask = { id: Date.now(), checked: false, item: newItem.trim(), dueDate: "2024-06-01" };
      const updatedLevels = levels.map(level =>
        level.level === levelId ? {
          ...level, tasks: [...level.tasks, newTask]
        } : level
      );
      setLevels(updatedLevels);
      setNewItem("");
    }
  };

  const handleEditItem = (levelId, taskId) => {
    const task = levels.find(level => level.level === levelId).tasks.find(task => task.id === taskId);
    setEditItem(taskId);
    setEditText(task.item);
  };

  const handleSaveEdit = (levelId, taskId) => {
    const updatedLevels = levels.map(level =>
      level.level === levelId ? {
        ...level, tasks: level.tasks.map(task =>
          task.id === taskId ? { ...task, item: editText } : task
        )
      } : level
    );
    setLevels(updatedLevels);
    setEditItem(null);
    setEditText("");
  };

  const calculateProgress = (level) => {
    const totalTasks = level.tasks.length;
    const completedTasks = level.tasks.filter(task => task.checked).length;
    return (completedTasks / totalTasks) * 100;
  };

  if (!isLoggedIn) {
    return <Login onLogin={setIsLoggedIn} />;
  }

  return (
    <main>
      <div className="quote">"Your time is limited, don't waste it living someone else's life." - Steve Jobs</div>
      {levels.map(level => (
        <Level
          key={level.level}
          level={level}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleEditItem={handleEditItem}
          handleSaveEdit={handleSaveEdit}
          editItem={editItem}
          editText={editText}
          setEditText={setEditText}
          calculateProgress={calculateProgress}
        />
      ))}
      <div className="add-task">
        <input
          type="text"
          placeholder="Add new task"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={() => handleAddItem(1)}>Add Task to Level 1</button>
      </div>
    </main>
  );
};

const createTasks = () => [
  { id: 1, item: 'Task 1', checked: false, dueDate: '2024-06-01' },
  { id: 2, item: 'Task 2', checked: false, dueDate: '2024-06-02' },
];

export default Content;



// src/Content.js
/*
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Level from './components/Level';

const Content = () => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [levels, setLevels] = useState(Array.from({ length: 8 }, (_, i) => ({
    level: i + 1,
    tasks: createTasks()
  })));

  const [newItem, setNewItem] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [editText, setEditText] = useState("");
  
  const handleLogin = () => {
    setUser({ username: 'example' }); // Placeholder for actual login logic
  };

  const handleSignup = () => {
    // Placeholder for actual signup logic
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleSwitchToSignup = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  const handleCheck = (level, taskId) => {
    const updatedLevels = levels.map(l => {
      if (l.level === level) {
        return {
          ...l,
          tasks: l.tasks.map(task => task.id === taskId ? { ...task, checked: !task.checked } : task)
        };
      }
      return l;
    });
    setLevels(updatedLevels);
  };

  const handleDelete = (level, taskId) => {
    const updatedLevels = levels.map(l => {
      if (l.level === level) {
        return {
          ...l,
          tasks: l.tasks.filter(task => task.id !== taskId)
        };
      }
      return l;
    });
    setLevels(updatedLevels);
  };

  const handleAddItem = (level) => {
    if (newItem.trim()) {
      const newTask = {
        id: levels[level - 1].tasks.length + 1,
        item: newItem.trim(),
        checked: false,
        dueDate
      };
      const updatedLevels = levels.map(l => {
        if (l.level === level) {
          return {
            ...l,
            tasks: [...l.tasks, newTask]
          };
        }
        return l;
      });
      setLevels(updatedLevels);
      setNewItem("");
      setDueDate("");
    }
  };

  const handleEditItem = (level, taskId) => {
    const task = levels[level - 1].tasks.find(t => t.id === taskId);
    setEditItem(taskId);
    setEditText(task.item);
    setDueDate(task.dueDate);
  };

  const handleSaveEdit = (level, taskId) => {
    const updatedLevels = levels.map(l => {
      if (l.level === level) {
        return {
          ...l,
          tasks: l.tasks.map(task => task.id === taskId ? { ...task, item: editText, dueDate } : task)
        };
      }
      return l;
    });
    setLevels(updatedLevels);
    setEditItem(null);
    setEditText("");
    setDueDate("");
  };

  const calculateProgress = (level) => {
    const totalTasks = levels[level - 1].tasks.length;
    const completedTasks = levels[level - 1].tasks.filter(task => task.checked).length;
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  };

  const calculateOverallProgress = () => {
    const totalTasks = levels.reduce((acc, level) => acc + level.tasks.length, 0);
    const completedTasks = levels.reduce((acc, level) => {
      const completed = level.tasks.filter(task => task.checked).length;
      return acc + completed;
    }, 0);
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  };

  return (
    <main>
      {!user ? (
        isLogin ? (
          <Login onLogin={handleLogin} onSwitchToSignup={handleSwitchToSignup} />
        ) : (
          <Signup onSignup={handleSignup} onSwitchToLogin={handleSwitchToLogin} />
        )
      ) : (
        <>
          <div className="quote">
            <p>Your time is limited, don't waste it living someone else's life. - Steve Jobs</p>
          </div>
          {levels.map(level => (
            <Level
              key={level.level}
              level={level}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
              handleEditItem={handleEditItem}
              handleSaveEdit={handleSaveEdit}
              editItem={editItem}
              editText={editText}
              dueDate={dueDate}
              setDueDate={setDueDate}
              calculateProgress={calculateProgress}
            />
          ))}
          <div className="add-task">
            <input
              type="text"
              placeholder="Add new task"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <button onClick={() => handleAddItem(1)}>Add Task to Level 1</button>
          </div>
          <div className="overall-progress">
            Overall Progress
            <div className="progress-circle" style={{ '--progress': calculateOverallProgress() + '%' }}>
              {Math.round(calculateOverallProgress())}%
            </div>
          </div>
        </>
      )}
    </main>
  );
};

const createTasks = () => [
  { id: 1, item: 'Task 1', checked: false, dueDate: '2024-06-01' },
  { id: 2, item: 'Task 2', checked: false, dueDate: '2024-06-02' },
];

export default Content;

*/
