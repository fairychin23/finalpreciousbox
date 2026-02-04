export type movie = {
    title: string;
    year: number;
    rating: number;
    image: string;
    id: string;

 };

 export const movies: movie[] = [
    { title: "Barbie",
        year: 2023,
        rating: 9,
        image: "/images/barbieposter.jpg",
        id: "1",

    },
    {
        title: "Bar Boys",
        year: 2017,
        rating: 10,
        image: "/images/barboysposter.jpg",
        id: "2",
    },
    { 
        title: "Knives Out",
        year: 2019,
        rating: 9,
        image: "/images/knivesoutposter.jpg",
        id: "3",

    },
    {
        title: "Guardians of the Galaxy Vol. 3",
        year: 2023,
        rating: 10,
        image: "/images/gotgposter.jpg",
        id: "4",
    },
    {
        title: "Inside Out 2",
        year: 2024,
        rating: 10,
        image: "/images/insideout2poster.jpg",
        id: "5",
    },
    {
        title: "Soul",
        year: 2020,
        rating : 10,
        image: "/images/soulposter.jpg",
        id: "6",
    },
    {
        title: "Avatar: Fire and Ash",
        year: 2025,
        rating : 10,
        image: "/images/avatar.jpg",
        id: "7",
    }
    ,
    {
        title: "Interstellar",
        year: 2014,
        rating : 10,
        image: "/images/Interstellarposter.jpg",
        id: "8",
    }
    ,
    {
        title: "Legally Blonde",
        year: 2001,
        rating : 10,
        image: "/images/legallyblonde.jpg",
        id: "9",
    }
    ,
    {
        title: "Princess Mononoke",
        year: 1997,
        rating : 10,
        image: "/images/princessmononoke.jpg",
        id: "10",
    }

];