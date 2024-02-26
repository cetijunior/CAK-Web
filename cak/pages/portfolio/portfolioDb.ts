export type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  
}
  // Array of projects
  export const projects: Project[] = [
    {
      id: 1,
      title: 'Projekt Eins',
      description: 'Das Design der Webseite ist schlicht und elegant, ideal für moderne Restaurants, die Wert auf eine gesunde und ansprechende Präsentation ihrer Speisen legen. Die übersichtliche Gestaltung und die dezente Farbwahl unterstreichen den minimalistischen Stil, der für eine Vielzahl von gastronomischen Konzepten geeignet ist.',
      imageUrl: '/template1.jpg', // Replace with your actual image path
    },
    {
      id: 2,
      title: 'Projekt Zwei',
      description: 'Das Design nutzt dunkle Töne für eine edle Ausstrahlung, ideal für ein gehobenes Restaurant. Klare Linien und hochwertige Bilder vermitteln Qualität und Stil, während die übersichtliche Struktur eine einfache Navigation ermöglicht.',
      imageUrl: '/template2.jpg', // Replace with your actual image path
    },
    {
      id: 3,
      title: 'Projekt Drei',
      description: 'Das Webseitendesign ist hell und freundlich, mit einem klaren Fokus auf Bio-Produkte. Die saubere Aufteilung und das frische Farbschema unterstreichen das gesunde und natürliche Angebot. Es eignet sich perfekt für Bio-Märkte oder Restaurants mit Schwerpunkt auf biologischer Küche.',
      imageUrl: '/template3.jpg', // Replace with your actual image path
    },
    {
      id: 4,
      title: 'Projekt Vier',
      description: 'Das elegante Webseitendesign mit cremefarbenen und marineblauen Tönen, klarer Typografie und viel Weißraum schafft eine exklusive Atmosphäre, ideal für Fisch- und Meeresfrüchterestaurants, wobei strukturierte Seiten und ansprechende Fotos das Menü und Ambiente betonen.',
      imageUrl: '/template4.jpg', // Replace with your actual image path
    },
  ];