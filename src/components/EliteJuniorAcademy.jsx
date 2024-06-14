import React from 'react';
import elite_academy from '../data/hope_junior_academy.json';
import junior_academy_pic  from '../images/hope_elite_junior_academy.jpg';
import junior_academy_cert  from '../images/elite_junior_cert.jpg';

const EliteJuniorAcademy = () => {
    return (
        <div className='center'>
            <h2>Name: {elite_academy.ACADEMY_NAME}</h2>
            <img src={junior_academy_pic} alt="Elite junior academy" />
            <h2>School Motto</h2>
            {elite_academy.SCHOOL_MOTTO}
            <h2>School Mission</h2>
            {elite_academy.SCHOOL_MISSION}
            <h2>School Vision</h2>
            {elite_academy.SCHOOL_VISION}
            <h2>Extra programs from school programs</h2>
            <h3>Why the feeding program</h3>
            {elite_academy.WHY_FEEDING_PROGRAM}
            <h3>Why was the school established</h3>
            {elite_academy.SCHOOL_ESTABLISHMENT}
            <h3>When was the school started</h3>
            {elite_academy.SCHOOL_STARTED}
            <h3>Has the school been registered</h3>
            {elite_academy.SCHOOL_REGISTERED}
            <h3>How many learners are in the school currently</h3>
            {elite_academy.LEARNERS}
            <h3>Why this newsletter</h3>
            {elite_academy.NEWSLETTER_PURPOSE}
            <img src={junior_academy_cert} alt="Elite junior certificate" />
        </div>
    )
}

export default EliteJuniorAcademy;