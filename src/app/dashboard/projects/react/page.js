'use client';

import { useState, useEffect } from 'react';

export default function ReactProject() {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let interval;
    if (startTime) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime]);

  const handleStart = () => {
    setStartTime(Date.now());
  };

  const handleStop = () => {
    if (startTime) {
      const duration = Math.floor((Date.now() - startTime) / 1000);
      const newTask = {
        name: 'React Task ' + (tasks.length + 1),
        duration,
      };
      setTasks([...tasks, newTask]);
      setStartTime(null);
      setElapsedTime(0);
    }
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m
      .toString()
      .padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container">
      <h1>React Project Time Tracker</h1>
      <p>Total Tasks: <strong>{tasks.length}</strong></p>

      <div className="buttons">
        <button className="start-button" onClick={handleStart}>Start Task</button>
        <button className="stop-button" onClick={handleStop}>Stop Task</button>
      </div>

      <div className="timer">
        Elapsed Time: {formatTime(elapsedTime)}
      </div>

      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{formatTime(task.duration)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 30px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f9fafb;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 15px;
        }

        p {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 20px;
        }

        .buttons {
          margin-bottom: 20px;
        }

        button {
          padding: 10px 20px;
          font-size: 1rem;
          background-color: #4A90E2; /* اللون الأزرق الموحد */
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-right: 10px;
        }

        button:hover {
          background-color: #357ABD; /* تدرج اللون الأزرق عند التمرير */
        }

        .timer {
          font-size: 1.3rem;
          color: #444;
          margin-bottom: 20px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 30px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        th, td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #4A90E2; /* اللون الأزرق الموحد للرأس */
          color: white;
        }

        tr:hover {
          background-color: #f1f1f1;
        }

        td {
          color: #555;
        }
      `}</style>
    </div>
  );
}