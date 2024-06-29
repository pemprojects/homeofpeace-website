import React, { useState } from 'react';
import orphanage from '../data/hope_orphanage.json';
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
    let date = new Date().getFullYear();

    return (
        <footer className="footer">
            <ul className="footer_contents">
                <li style={{ textAlign: 'left' }}>
                    <div>
                        <p>{orphanage.ORPHANAGE_NAME}</p>
                        <p><i className="bi bi-mailbox-flag"></i> {orphanage.ADDRESS}</p>
                        <p><i className="bi bi-twitter"></i> {orphanage.PROVINCE}</p>
                        <p><i className="bi bi-flag"></i> {orphanage.COUNTRY}</p>
                        <p><i className="bi bi-telephone-inbound"></i> {orphanage.PHONE_NUMBER}</p>
                    </div>
                </li>
                <li style={{ textAlign: 'right' }}>
                    <div>
                        <p>Copyright © {date} Purpose on the Planet</p>
                        <p>approved 501(c)(3) non-profit organization</p>
                    </div>
                </li>
            </ul>
        </footer>
        
    );
};

export default Footer;
