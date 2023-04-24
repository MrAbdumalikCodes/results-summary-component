import React from 'react'
import { useState } from 'react'
import '../src/index.css'
import data from './data.json'
export default function App() {
  const [items] = useState(data)

  return (
    <div className='md:flex md:items-center md:justify-center md:h-screen max-w-2xl md:mx-auto'>
      <section className='md:flex bg-white shadow rounded-3xl '>
      <div id='bg-div' className='md:pt-10 p-8 text-center text-white rounded-b-3xl md:flex-1 md:flex md:flex-col md:items-center md:justify-center md:rounded-3xl'>
        <p className='mb-6'>Your Result</p>
        <div className='flex justify-center items-center'>
          <p className='bg-indigo-700 w-24 h-24 md:w-40 md:h-40 flex items-center justify-center flex-col gap-2 rounded-full md:text-6xl text-white text-3xl font-bold'>
            76
          <p className='text-slate-200 text-base font-normal'>
            of 100
          </p>
          </p>
        </div>

        <h2 className='my-6 text-white font-bold text-lg md:text-2xl'>Great</h2>
        <p>You scored high than 65% of the people who have taken these tests.</p>
      </div>
      <div className='p-8 md:flex-1'>
        <h2 className="text-slate-700 mb-6 text-lg font-bold">Summary</h2>

        <div className='flex flex-col gap-4'>
          {items.map((item, index) =>{
          return  <div key={index} 
          className='flex items-center gap-2 justify-between p-4 rounded-lg'
          style={
            {
              backgroundColor: `${item.color}25`
            }
          }
          >
              <h3
                className='flex items-center gap-2'
                style={
                {
                  color:item.color
                }
              }>
                <img src={item.icon} alt={item.category} />
                {item.category}
              </h3>
              <p className='flex items-center gap-2 text-slate-600'>
                <span className='text-slate-700 font-bold'>{item.score}</span> / 100
                </p>
            </div>
          })}
        </div>

        <button className='bg-slate-700 py-4 px-6 rounded-full text-white w-full mt-6 hover:bg-indigo-600
        transition-all duration-200'>Continue</button>
      </div>
    </section>
    </div>
  )
}
