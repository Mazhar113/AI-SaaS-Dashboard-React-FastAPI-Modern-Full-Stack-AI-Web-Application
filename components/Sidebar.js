import React from 'react';
import { HomeIcon, AcademicCapIcon, UserCircleIcon, VideoCameraIcon, ClockIcon } from '@heroicons/react/24/outline';
export default function Sidebar() {
  const menuItems = [{name:'Dashboard', icon:HomeIcon},{name:'Learning Path', icon:AcademicCapIcon},{name:'Life Coach', icon:UserCircleIcon},{name:'Synthetic Media', icon:VideoCameraIcon},{name:'Time Crystal', icon:ClockIcon}];
  return (<div className='w-64 bg-gray-100 dark:bg-gray-900 h-screen p-5 flex flex-col'><h1 className='text-xl font-bold mb-10 text-gray-800 dark:text-white'>AI Dashboard</h1><nav className='flex flex-col gap-4'>{menuItems.map((item)=>(<div key={item.name} className='flex items-center gap-3 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer text-gray-800 dark:text-white'><item.icon className='h-6 w-6'/><span>{item.name}</span></div>))}</nav></div>);
}
