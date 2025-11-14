import React from 'react';
import DarkModeToggle from './DarkModeToggle';
export default function Navbar() {
  return (<div className='w-full bg-white dark:bg-gray-800 p-4 flex justify-between items-center shadow'><h2 className='text-lg font-semibold text-gray-800 dark:text-white'>Welcome, User!</h2><DarkModeToggle /></div>);
}
