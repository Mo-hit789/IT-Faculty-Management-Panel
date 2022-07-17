import React from 'react'
import Profile from '../../components/faculty/Profile'
import { Teachers } from '../../helper/teachers';

const Asmita = () => {
  const t = Teachers[0]
  console.log(t)
  return (
    <div className='max-w-[80%] m-auto h-full'>
      <Profile name={t.name} role={t.designation} course={t.course} exp={t.experience} spec={t.specialization} />
      <h2 className='text-2xl font-bold  py-4'>Research</h2>
      {t.research.map((f) => {
        return (
          <div key={Math.random()}>
            <h3 >{f.title}</h3>
            <h3>{f.journal}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Asmita