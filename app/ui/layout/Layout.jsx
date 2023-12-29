import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Content from '../content/Content';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-row h-screen w-screen '>
      <Sidebar />
      <Content>
        {children}
      </Content>
    </div>
  );
}

export default Layout;
