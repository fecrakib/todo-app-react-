import React from 'react';

const Fotter = () => {
    return (
        <div className='bg-gray-900 container mx-auto text-center p-10 text-sm text-teal-600 border-dashed border-x-teal-900'>
           <p>&copy; {new Date().getFullYear()} React Todo App .All rights reserved</p> 
        </div>
    );
};

export default Fotter;