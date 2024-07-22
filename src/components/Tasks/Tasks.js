import React from 'react'

const Tasks = (props) => {
  return (
    <div className='task-container'>
        <h1>{props.taskName}</h1>
        <div className='footer-container'>
            <section className='percentage-section'> 
                <img src="/icons/icon1.png"
                    width={16}
                    height={16}
                    />
                <h3>{props.taskPercentage}</h3>
            </section>
            <section className='options-section'>
                <img src="/icons/icon2.png"
                    width={16.5}
                    height={4.12}
                    />
            </section>
        </div>
        
    </div>
  )
}

export default Tasks