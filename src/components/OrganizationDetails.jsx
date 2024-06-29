import React from 'react';
import church from '../data/hope_church.json';
import orphanage from '../data/hope_orphanage.json';

const OrganizationDetails = () => {
    return (
        <div className="center" id="about">
            <section className="content-section">
                <div className="left-item">
                    <h3 className="center">Christian International Ministry</h3>
                    <p>{church.HISTORY}</p>
                </div>
                <div className="left-item">
                    <h3 className="center">Childrens Home</h3>
                    <p>{orphanage.HISTORY}</p>
                </div>
            </section>
            <section className="content-section" id="services">
                <div>
                    <h3 className="center">Objectives</h3>
                    <ul>
                        {church.OBJECTIVES.map((objective, index) => (
                            <li key={index}>{objective}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Programs</h3>
                    <ul>
                        {church.PROGRAMS.map((program, index) => (
                            <React.Fragment key={index}>
                                <li>{program}</li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default OrganizationDetails;
