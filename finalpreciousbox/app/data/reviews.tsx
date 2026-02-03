export type review = {
    title: string;
    year: string;
    rating: number;
    review: string;
    id: string;
}

 export const reviews: review[] = [
    {  title: "Oppenheimer",
        year: "2023",
        rating: 9, 
        review: "A gripping and thought-provoking portrayal of J. Robert Oppenheimer's life and the moral dilemmas surrounding the creation of the atomic bomb. Nolan's direction is masterful, and Cillian Murphy delivers a haunting performance.",
        id: "1"
    },

    {
        title: "Flow",
        year: "2024",
        rating: 8,
        review: "An exhilarating dive into the world of competitive surfing, 'flow' captures the raw energy and passion of the sport. The cinematography is breathtaking, and the storyline keeps you hooked from start to finish.",
        id: "2"
    }
 ]