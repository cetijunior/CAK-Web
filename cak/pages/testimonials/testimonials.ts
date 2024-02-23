export type Testimonial = {
    id: number;
    username: string;
    comment: string;
    rating: number; // Assuming a 5-star rating system
  };
  
  export const testimonials: Testimonial[] = [
    {
      username: "@birgitschneider",
      id: 1,
      comment: "Der Service war gut. Ich bin zufrieden mit dem Ergebnis. Vielen Dank!",
      rating: 3,
    },
    {
      username: "@kathrinschmidt",
      id: 2,
      comment: "Der Designer hat meine Erwartungen übertroffen. Ich bin begeistert von der Qualität der Arbeit.",
      rating: 5,
    },
    {
      username: "@andiweber",
      id: 2,
      comment: "Für ein kleines Geschäft, erhält man mehr als erwartet. Aber Verbesserungsraum gibt es immer.",
      rating: 4,
    },
    {
      username: "@danylokovalenko",
      id: 2,
      comment: "Good for their price",
      rating: 3,
    },
    {
      username: "@ahmetaksoy",
      id: 2,
      comment: "Die Entwickler haben gute Arbeit geleistet. Meine Website sieht besser als je zuvor aus.",
      rating: 4,
    },
    // Add more testimonials as needed
  ];