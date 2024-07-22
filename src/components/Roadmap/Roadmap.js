import React from 'react'

const Roadmap = () => {
  return (
    <main className='main-roadmap'>
      <header>
        <h1>Product Roadmap</h1>
      </header>
      <div className='grid-container'>
          <section className='q-container'>
            <h1>Q1 2019</h1>
            <h2>January - March</h2>
          </section>
          <section className='q-container'>
            <h1>Q2 2019</h1>
            <h2>April - June</h2>
          </section>
          <section className='q-container'>
            <h1>Q3 2019</h1>
            <h2>July - September</h2>
          </section>
          <section className='q-container'>
            <h1>Q4 2019</h1>
            <h2>October - December</h2>
          </section>
      </div>
    </main>
    
  )
}

export default Roadmap