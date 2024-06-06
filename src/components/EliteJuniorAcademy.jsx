import React from 'react';
import elite_academy from '../data/hope_junior_academy.json';
import junior_academy_pic  from '../images/hope_elite_junior_academy.jpg';

const EliteJuniorAcademy = () => {
    return (
        <div className='center'>
            <h2>Name: {elite_academy.ACADEMY_NAME}</h2>
            <img src={junior_academy_pic} alt="Elite junior academy picture" />
            <h2>School Motto</h2>
            {elite_academy.SCHOOL_MOTTO}
            <h2>School Mission</h2>
            {elite_academy.SCHOOL_MISSION}
            <h2>School Vision</h2>
            {elite_academy.SCHOOL_VISION}
        </div>
    )
}

export default EliteJuniorAcademy;