import React from 'react';


const Layout = ({ children }) => {
  return (
    <div className="container lg:max-w-[1200px] mx-auto flex flex-col justify-center items-center my-12 px-8">
      {children}
    </div>
  )
}

export default Layout;