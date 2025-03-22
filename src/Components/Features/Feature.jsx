import React from "react";
import "./Features.css";


const Feature = ({ Icon, p, title }) => {
  return (
    <div className='con max-wid'>
      <div className='feature'>
        <div className='left'>
          <Icon className='icon mar-top' />
        </div>
        <div className='right'>
          <span className='t-3'>{title}</span>
          <p className='p-1'>{p}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
