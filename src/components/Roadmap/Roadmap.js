import React from 'react'
import Tasks from '../Tasks/Tasks'
import task_q1 from '../assets/task-q1'
import task_q2 from '../assets/task-q2'
import task_q3 from '../assets/task-q3'
import task_q4 from '../assets/task-q4'

const Roadmap = () => {
  return (
    <main className='main-roadmap'>
      <header>
        <h1>Product Roadmap</h1>
      </header>
      <div className='grid-container'>
          <section className='q-container'>
            <div className='main-content'>
              <h1>Q1 2019</h1>
              <h2>January - March</h2>
              <div className='task'>
              {task_q1.length > 0 ? (
                task_q1.map((task, i) => {
                  return <Tasks key={i} taskName={task.taskName} taskPercentage={task.taskPercentage} />;
                })) : (
                <p>No tasks available</p>
                )}
              </div>
              <div className='add-task'>
                <img src="/icons/icon3.png"
                width={8.54}
                height={8.54}
              />
              <p>Create new task</p>
              </div>
            </div>
          </section>
          <section className='q-container'>
            <div className='main-content'>
              <h1>Q2 2019</h1>
              <h2>April - June</h2>
              <div className='task'>
              {task_q2.length > 0 ? (
                task_q2.map((task, i) => {
                  return <Tasks key={i} taskName={task.taskName} taskPercentage={task.taskPercentage} />;
                })) : (
                <p>No tasks available</p>
                )}
              </div>
              <div className='add-task'>
                <img src="/icons/icon3.png"
                width={8.54}
                height={8.54}
              />
              <p>Create new task</p>
              </div>
            </div>
          </section>
          <section className='q-container'>
            <div className='main-content'>
              <h1>Q3 2019</h1>
              <h2>July - September</h2>
              <div className='task'>
              {task_q3.length > 0 ? (
                task_q3.map((task, i) => {
                  return <Tasks key={i} taskName={task.taskName} taskPercentage={task.taskPercentage} />;
                })) : (
                <p>No tasks available</p>
                )}
              </div>
              <div className='add-task'>
                <img src="/icons/icon3.png"
                width={8.54}
                height={8.54}
              />
              <p>Create new task</p>
              </div>
            </div>
          </section>
          <section className='q-container'>
            <div className='main-content'>
              <h1>Q4 2019</h1>
              <h2>October - December</h2>
              <div className='task'>
              {task_q4.length > 0 ? (
                task_q4.map((task, i) => {
                  return <Tasks key={i} taskName={task.taskName} taskPercentage={task.taskPercentage} />;
                })) : (
                <p>No tasks available</p>
                )}
              </div>
              <div className='add-task'>
                <img src="/icons/icon3.png"
                width={8.54}
                height={8.54}
              />
              <p>Create new task</p>
              </div>
            </div>
          </section>
          
      </div>
    </main>
    
  )
}

export default Roadmap