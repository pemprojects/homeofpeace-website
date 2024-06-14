import React from 'react';
import church from '../data/hope_church.json';
import cert from '../images/hope_church_cert.jpg';

const OrganizationDetails = () => {
    return (
        <div className='center'>
            <h2>History</h2>
            <p>{church.HISTORY}</p>
            <h2>Mission Statement</h2>
            <p>{church.MISSION_STATEMENT}</p>
            <h2>Vision</h2>
            <ul>
                {church.VISION.map((vision, index) => (
                    <li key={index}>{vision}</li>
                ))}
            </ul>
            <h2>Objectives</h2>
            <ul>
                {church.OBJECTIVES.map((objective, index) => (
                    <li key={index}>{objective}</li>
                ))}
            </ul>
            <h2>Programs</h2>
            <ul>
                {church.PROGRAMS.map((program, index) => (
                    <React.Fragment key={index}>
                        <li>{program}</li>
                    </React.Fragment>
                ))}
            </ul>
            <h2>Church Operation Certificate</h2>
            <img src={cert} alt="Church operation certificate"/>

        </div>
    );
};

export default OrganizationDetails;
