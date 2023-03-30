import React from 'react';

const SkillItem = ({ name, image }) => {
  return (
    <div className='w-full max-w-xs mx-auto mb-4'>
      <div className='flex items-center justify-center p-4 mx-6 shadow-lg rounded-lg cursor-pointer transition-all transform hover:scale-105  hover:border-2 hover:border-gray-400 hover:bg-gradient-to-r hover:from-slate-600  hover:to-gray-800'>
        <img src={image} alt={name + ' logo'} className='flex-shrink-0 w-8 h-8 mr-4' />
        <span className='text-center'>{name}</span>
      </div>
    </div>
  );
};

export default SkillItem;
