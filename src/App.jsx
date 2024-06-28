/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import church from './images/church_service.jpg';
import OrganizationDetails from './components/OrganizationDetails';
import OrphanageDetails from './components/OrphanageDetails';
import EliteJuniorAcademy from './components/EliteJuniorAcademy';
import './App.css';
import ImageCarousel from './components/ImageCarousel';
import Header from './components/Header';

function App() {
    return (
        <div>
            <Header />
            <div style={{margin: 20, padding: 20}}>
                <img src={church} alt="church service image" />
                <OrganizationDetails />
                <OrphanageDetails />
                <EliteJuniorAcademy />
                <ImageCarousel />
            </div>
        </div>
    );
}

export default App;
