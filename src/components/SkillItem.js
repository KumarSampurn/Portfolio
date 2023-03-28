import React from 'react';

const SkillItem = ({ name, image }) => {
    return (
        <div className='flex items-center justify-center p-4 mx-[2rem] my-2.5 shadow-lg rounded-lg cursor-pointer transition-all transform hover:scale-105 hover:border-2 hover:border-gray-400 hover:bg-gradient-to-r hover:from-blue-300 hover:to-gray-800'>
            <img src={image} alt={name + ' logo'} className='w-12 h-12 mr-4' />
            <span>{name}</span>
        </div>
    );
};

export default SkillItem;
