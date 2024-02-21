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
      imageUrl: 'https://i.pinimg.com/originals/fe/d1/b3/fed1b3844d38e8b87fd8958f406fff70.jpg', // Replace with your actual image path
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'This is a brief description of Project Two. It showcases our work on blogs and personal sites.',
      imageUrl: 'https://i.pinimg.com/originals/fe/d1/b3/fed1b3844d38e8b87fd8958f406fff70.jpg', // Replace with your actual image path
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'This is a brief description of Project Three. It showcases our innovative solutions for startups.',
      imageUrl: 'https://i.pinimg.com/originals/fe/d1/b3/fed1b3844d38e8b87fd8958f406fff70.jpg', // Replace with your actual image path
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'This is a brief description of Project Four. Highlighting our expertise in creating educational platforms.',
      imageUrl: 'https://i.pinimg.com/originals/fe/d1/b3/fed1b3844d38e8b87fd8958f406fff70.jpg', // Replace with your actual image path
    },
  ];