import React, { useState } from 'react';
import Footer from '../footer/Footer';
import Navbar from './Navbar';


const Layout = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true)

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className='dark:bg-gray-900 bg-gray-100 dark:text-white text-gray-800 relative'>
                <main className="md:w-[100%] md:m-auto md:px-2 px-4 h-[100%] ">
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;