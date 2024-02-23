export type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  };
  
  // Array of projects
  export const projects: Project[] = [
    {
      id: 1,
      title: 'Project One',
      description: 'This is a brief description of Project One. It showcases our work on e-commerce platforms.',
      imageUrl: 'https://i.pinimg.com/564x/7e/80/f0/7e80f09f54fa7ef0e9eb13a0be293635.jpg', // Replace with your actual image path
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'This is a brief description of Project Two. It showcases our work on blogs and personal sites.',
      imageUrl: 'https://i.pinimg.com/564x/51/0f/ad/510fad7ac4829296ea029b69deea4319.jpg', // Replace with your actual image path
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'This is a brief description of Project Three. It showcases our innovative solutions for startups.',
      imageUrl: 'https://i.pinimg.com/736x/36/ee/9a/36ee9aa3055b1e1b2c9e03fe0beef0dd.jpg', // Replace with your actual image path
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'This is a brief description of Project Four. Highlighting our expertise in creating educational platforms.',
      imageUrl: 'https://i.pinimg.com/564x/00/8e/d3/008ed3ecc4859739a5c209dc36aa61a1.jpg', // Replace with your actual image path
    },
  ];