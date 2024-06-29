/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import OrganizationDetails from './components/OrganizationDetails';
import OrphanageDetails from './components/OrphanageDetails';
import EliteJuniorAcademy from './components/EliteJuniorAcademy';
import Carousel from './components/Carousel';
import Header from './components/Header';
import './App.css';

import church_building_img from './images/church_building.jpg';
import church_service_img from './images/church_service.jpg';
import hope_buildings_img from './images/hope_buildings.jpg';
import hope_elite_academy_img from './images/hope_elite_junior_academy.jpg';
import hope_church_cert_img from './images/hope_church_cert.jpg';
import elite_junior_cert from './images/elite_junior_cert.jpg';

function App() {
    const images = [
        {name: "Church Service", imageSrc: church_service_img},
        {name: "Church Buildings", imageSrc: church_building_img},
        {name: "Hope Buildings", imageSrc: hope_buildings_img},
        {name: "Hope Elite Academy", imageSrc: hope_elite_academy_img},
        {name: "Hope Church Certificate", imageSrc: hope_church_cert_img},
        {name: "Elite Junior Certificate", imageSrc: elite_junior_cert},
    ];
    return (
        <div>
            <Header />
            <div className="carousel-content">
                <Carousel images={images} />
            </div>
            <div style={{ margin: 20, padding: 20 }}>
                <OrganizationDetails />
                <OrphanageDetails />
                <EliteJuniorAcademy />
            </div>
        </div>
    );
}

export default App;
