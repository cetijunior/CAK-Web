import pfp1 from '../pages/about/cjPFP.jpg'
import pfp2 from '../pages/about/keniPFP.jpg'
import pfp3 from '../pages/about/archiePFP.jpg'
import { StaticImageData } from 'next/image';
import React from 'react';


export type Image = {
    id: number;
    src: StaticImageData;
    alt: string;
    name: string;
    descriptionShort: string;
    descriptionLong: string;

}

export const images: Image[] = [
    {
        id: 1,
        src: pfp1,
        alt: 'Team Member 1', 
        name: 'CetiJunior',
        descriptionShort: 'Front- und Backend-Entwickler',
        descriptionLong: 'Ceti ist unser Front- und Backend-Entwickler und Designer. Der ist Co-Founder von CAK Web Solutions und hat eine Leidenschaft für Webentwicklung und Design. Mit mehrere Jahre Erfahrung kann er dabei helfen, Ihre Ideen in die Realität umzusetzen.',
    },
    {
        id: 2,
        src: pfp2,
        alt: 'Team Member 2', 
        name: 'Krenar',
        descriptionShort: 'Front- und Backend-Entwickler und Designer',
        descriptionLong: 'Krenar ist unser Front- und Backend-Entwickler und Designer. Der ist Co-Founder von CAK Web Solutions und ist dafür verantwortlich, mit den Kunden immer im Kontakt zu bleiben und die Projekte zu managen. Mit ihm als Projekt-manager werden Ihre Website zum besten möglichen Stand hergestellt.',
    },
    {
        id: 3,
        src: pfp3,
        alt: 'Team Member 3', 
        name: 'Archie',
        descriptionShort: 'Fullstack-Entwickler',
        descriptionLong: 'Archie ist unser Fullstack-Entwickler. Der ist Co-Founder von CAK Web Solutions. Seine Leidenschaft für die Entwicklung, ermöglicht uns und Ihnen eine  benutzerfreundliche und effiziente Website zu erstellen.',
    },
];
