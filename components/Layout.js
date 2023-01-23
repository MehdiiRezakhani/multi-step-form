import React from 'react';

const Layout = ({children}) => {
    return (
        <div className='bg-[#F9FAF5]'>
            <div className='bg-[#fff] m-[50px] overflow-hidden border-[1px] border-[#D9D9D9] rounded-[20px] shadow-shadowA'>
                <div className='p-10 border-b-[1px] border-[#C1C0C0] shadow-shadowA'>
                    <h2 className='text-base text-center text-N800 font-normal leading-6'>Define a project</h2>
                </div>
                <div className=''>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;