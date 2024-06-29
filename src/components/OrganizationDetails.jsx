import React from 'react';
import church from '../data/hope_church.json';
import orphanage from '../data/hope_orphanage.json';

const OrganizationDetails = () => {
    return (
        <div className="center">
            <section class="content-section">
                <div className="left-item">
                    <h3 className="center">Christian International Ministry</h3>
                    <p>{church.HISTORY}</p>
                </div>
                <div className="left-item">
                    <h1 className="center">Childrens Home</h1>
                    <p>{orphanage.HISTORY}</p>
                </div>
            </section>

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
        </div>
    );
};

export default OrganizationDetails;
