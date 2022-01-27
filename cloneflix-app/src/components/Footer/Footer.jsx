import React from 'react';
import './Footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>
{
    const links = [
        'Häufig gestellte Fragen (FAQ)',
        'Hilfe-Center',
        'Konto',
        'Medien-Center',
        'Anlegerbeziehungen',
        'Karriere',
        'Geschenkkarten einlösen',
        'Geschenkkarten kaufen',
        'So können Sie Cloneflix ansehen',
        'Nutzungsbedingungen',
        'Datenschutz',
        'Cookie-Einstellungen',
        'Impressum', 
        'Kontakt',
        'Geschwindigkeitstest',
        'Rechtliche Hinweise',
        'Nur auf Cloneflix',
    ]
  return (
    <footer>
        <div className="social-links">
            <li><a href="/"><FontAwesomeIcon icon={ faFacebook } /></a></li>
            <li><a href="/"><FontAwesomeIcon icon={ faInstagram } /></a></li>
            <li><a href="/"><FontAwesomeIcon icon={ faTwitter } /></a></li>
            <li><a href="/"><FontAwesomeIcon icon={ faYoutube } /></a></li>
        </div>
        <div className="footer-links">
            <ul className='links-ulist'>
                { links.map(link =>(
                    <li 
                    key={ link }
                    className='list'>
                        <a href="/">
                            { link }
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div className="copyright">
            <h6>2022, Deutschland - This is a final project from Single Page Application(SPA) at DCI</h6>
        </div>
    </footer>
  );
};

export default Footer;
