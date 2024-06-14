/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import churchBuilding from '../images/hope_buildings.jpg';
import orphanage from '../data/hope_orphanage.json';


const OrphanageDetails = () => {
    return (
        <div className='center'>
            <h2>Home Of Peace Buildings</h2>
            <img
                src={churchBuilding}
                alt="church building image"
            />
            <h4>Orphanage Name:</h4> {orphanage.ORPHANAGE_NAME}
            <h4>Address:</h4> {orphanage.ADDRESS}
            <h4>Phone Number:</h4> {orphanage.PHONE_NUMBER}
            <h1>History</h1>
            <p>{orphanage.HISTORY}</p>
            <h2>WHY ARE THESE CHILDREN AT THE HOME</h2>
            <ul>{orphanage.WHY_ARE_THESE_CHILDREN_AT_THE_HOME.map( (reasons, index) => <li key={index}>{reasons}</li>)}</ul>
        </div>
    )
}

export default OrphanageDetails;