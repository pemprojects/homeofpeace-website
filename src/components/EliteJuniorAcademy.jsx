import React from 'react';
import elite_academy from '../data/hope_junior_academy.json';

const EliteJuniorAcademy = () => {
    return (
        <div className='center'>
            <h2>Name: {elite_academy.ACADEMY_NAME}</h2>
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
        </div>
    )
}

export default EliteJuniorAcademy;