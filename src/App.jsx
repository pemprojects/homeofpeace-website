/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import church from './images/church_service.jpg';
import OrganizationDetails from './components/OrganizationDetails';
import OrphanageDetails from './components/OrphanageDetails';
import EliteJuniorAcademy from './components/EliteJuniorAcademy';
import './App.css';

function App() {
    return (
        <div>
            <h1>Home Of Peace Childrens Home</h1>
            <img
                src={church}
                alt="church service image"
            />
            <OrganizationDetails />
            <OrphanageDetails />
            <EliteJuniorAcademy />
        </div>
    );
}

export default App;
