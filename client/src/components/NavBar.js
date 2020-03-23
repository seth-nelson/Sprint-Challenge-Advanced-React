import React from 'react';
import useDarkMode from '../hooks/useDarkMode';


const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode)
    }

    return (
        <nav className='nav-bar'>
            <div className='toggle-dark-mode'>
                <button 
                    onClick={toggleMode}
                    className='button'
                >Toggle Dark Mode</button>
            </div>
        </nav>
    )
}


export default NavBar;