import React from 'react';
import './Doa.css';

const Doa = (props) => {
    const {title, description, arabic_doa, transliteration, translate }=props.singleDoa;
    return (
        <div className='single-doa'>
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
            <p className='arabic-doa'>{arabic_doa}</p>
            <h4 className='sub-title'>transliteration:</h4>
            <p>{transliteration}</p>
            <h4 className='sub-title'>translate:</h4>
            <p>{translate}</p>
        </div>
    );
};

export default Doa;