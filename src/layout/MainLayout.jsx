import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
    return (
        <div>
            {/* navbar  */}
          <Navbar></Navbar>

        <div className='min-h-[calc(100vh-232px)] py-12 container mx-auto px-12'>
       {/* dynamic section  */}

       <Outlet></Outlet>
        </div>

        {/* footer start  */}
          <Footer></Footer>
           
        </div>
    );
};

export default MainLayout;