import Image from 'next/image'
import React from 'react'

const Profile = ({name, role, course, spec, exp}) => {
    return (
        <div className='grid grid-cols-2 gap-4 items-center'>
            <Image src="https://photovideolounge.com/wp-content/uploads/2019/11/blonde-girl-in-blue-neutral-facial-expression-1.jpg" alt="profile" width={200} height={400} />
            <div>
                <h2 className='font-bold capitalize'>Name : <span className='font-normal text-gray-300'>{name}</span></h2>
                <h2 className='font-bold capitalize'>designation : <span className='font-normal text-gray-300'>{role}</span></h2>
                <h2 className='font-bold capitalize'>course : <span className='font-normal text-gray-300'>{course}</span></h2>
                <h2 className='font-bold capitalize'>specialization : <span className='font-normal text-gray-300'>{spec}</span></h2>
                <h2 className='font-bold capitalize'>experience : <span className='font-normal text-gray-300'>{exp} years</span></h2>
            </div>
        </div>
    )
}

export default Profile