'use client'
import React, {  useState } from 'react';
import LeftSidebar from './Sidebar';
import Navbar from './Navbar';

interface Props{
  children:React.ReactNode
}
const Layout = ({children}:Props) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex h-screen">
      <LeftSidebar toggle={toggle} />

      <div className={`flex-1 transition-all duration-300 ${toggle ? 'ml-[230px]' : 'ml-[60px]'}`}>
        <Navbar toggle={toggle} handleToggle={handleToggle} />

        <div className="p-6 mt-10">
         {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
