import React from 'react'
import Profile from '../../components/faculty/Profile'
import { Teachers } from "../../helper/Teachers"

const index = () => {
    //console.log(Teachers)
    return (
        <div className='px-8 py-4'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-3xl font-bold underline py-4'>About IT Department</h2>
                <div className='text-gray-300'><span className='text-xl font-bold text-blue-500'>Mission: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel beatae provident voluptatem libero in. Eveniet officia perferendis voluptatibus excepturi nulla dolorem provident ex dignissimos, eaque impedit deserunt non obcaecati harum.</div>
                <div className='text-gray-300'><span className='text-xl font-bold text-blue-500'>Vision: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel beatae provident voluptatem libero in. Eveniet officia perferendis voluptatibus excepturi nulla dolorem provident ex dignissimos, eaque impedit deserunt non obcaecati harum.</div>
            </div>
            <div>
                <h2 className='text-2xl font-bold  py-4'>Academics Section</h2>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-lg'>Total Research Paper Published : 42</h2>
                    <h2 className='text-lg'>Total Faculty In Department : 12</h2>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-bold  py-4'>All Faculty</h2>
                <div className='w-[70%] py-4'>
                    {Teachers.map((t) => {
                        return (
                            <div className='my-4 p-4 shadow-lg rounded-md bg-gray-700'>
                                <Profile name={t.name} role={t.designation} course={t.course} spec={t.specialization} exp={t.experience} url={t.url}/>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default index