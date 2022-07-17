import React from 'react'
import Link from 'next/dist/client/link'

const style = {
  wrapper: `relative h-screen`,
  container: `before:content-[''] before:bg-gray-100 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://th.bing.com/th/id/R.d5f6edc87d3bbb47d5e3b60a23d53130?rik=hrqN%2bTJEAZDdAA&riu=http%3a%2f%2ffiles.cluster2.hostgator.co.in%2fhostgator87928%2fimage%2frgpv.jpg&ehk=2D9X8E6SyDf2jGQSQMNzQXd8bgFWoZv%2fvdQWiGSacOo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1')] before:bg-cover before:bg-center before:opacity-50 before:blur h-[100%] `
}

const index = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className='h-[80%] w-[100%] flex flex-col items-center justify-center gap-4'>
          <div className='relative  md:text-[46px] md:font-bold sm:text-[28px] font-semibold text-[30px] leading-tight'>UNIVERSITY INSTITUTE OF TECHNOLOGY, RGPV</div>
          <div className='font-bold text-[25px] text-white'>Information Technology</div>
          <div className='flex'>
            <button className='relative text-lg font-semibold px-10 py-2.5 border-2 bg-white border-[#2181e2] rounded-lg mr-5 text-blue-500 hover:text-white hover:bg-[#42a0ff] hover:border-[#42a0ff] cursor-pointer'><Link href="/department"><a>Department</a></Link></button>
            <button className=' relative text-lg font-semibold px-10 py-2.5 rounded-lg mr-5 text-white bg-[#42a0ff]  cursor-pointer'>Faculty</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index