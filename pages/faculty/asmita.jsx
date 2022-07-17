import React from 'react'
import Profile from '../../components/faculty/Profile'
import { Teachers } from '../../helper/teachers';

const Asmita = () => {
  const t = Teachers[1]
  console.log(t)
  return (
    <div className='max-w-[80%] m-auto h-full py-8'>
      <Profile name={t.name} role={t.designation} course={t.course} exp={t.experience} spec={t.specialization} img={t.img} />
      <h2 className='text-2xl font-bold  py-4'>Research</h2>
      <div className='flex flex-col gap-4 w-[70%] '>
        {t.research.map((f) => {
          return (
            <div key={Math.random()} className=" flex flex-col gap-1 bg-gray-700 p-4 rounded-md">
              <h3 className='text-lg font-bold' >{f.title}</h3>
              <h3 className='text-sm text-gray-250'>{f.journal} <span className='font-bold text-white capitalize'>-{f.date}</span></h3>
              <div className='flex gap-4'>
                <p>Vol No. - {f.vol}</p>
                <p>ISSN - {f.issn}</p>
              </div>
              <div className='text-blue-400 rounded-md underline'><a href={f.doi}>Read Now</a></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Asmita