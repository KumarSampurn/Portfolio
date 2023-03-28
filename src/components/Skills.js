import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import SkillItem from './SkillItem';
import data from './data.json';

const Skills = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className='flex items-center justify-center mt-40'>
        <span className='text-2xl font-semibold'>Skills</span>
      </div>

      <div className='block w-10/12 mx-auto mt-20 h-92'>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={6000}>
          {data.items.map((item, index) => (
            <Carousel.Item key={index}>
              <div className='flex items-center justify-center p-10'>
                <span className='text-lg font-semibold'>{item.heading}</span>
              </div>

              <div className='p-0 m-0 w-9/11 '>
                <div className='flex flex-wrap justify-center mb-20 '>
                  {item.tools.map((tool, index) => (
                    <SkillItem key={index} name={tool.name} image={tool.image} />
                  ))}
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Skills;
