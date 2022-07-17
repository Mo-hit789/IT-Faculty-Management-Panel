import Image from 'next/image'
import React from 'react'

const Profile = ({ name, role, course, spec, exp, url, img }) => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <Image src={img} alt="profile" width={150} height={250} />
            <div className='flex flex-col justify-center gap-2'>
                <h2 className='font-bold capitalize'>Name : <span className='font-normal text-gray-300'>{name}</span></h2>
                <h2 className='font-bold capitalize'>designation : <span className='font-normal text-gray-300'>{role}</span></h2>
                <h2 className='font-bold capitalize'>course : <span className='font-normal text-gray-300'>{course}</span></h2>
                <h2 className='font-bold capitalize'>specialization : <span className='font-normal text-gray-300'>{spec}</span></h2>
                <h2 className='font-bold capitalize'>experience : <span className='font-normal text-gray-300'>{exp} years</span></h2>
                <button className='bg-blue-400 p-2 rounded-md w-[50%]'><a href={url}>IT Department Of UIT RGPV</a></button>
            </div>
        </div>
    )
}

export default Profile