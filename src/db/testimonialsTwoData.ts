export interface TestimonialType {
    id: number;
    name: string;
    role: string;
    image: string;
    icon: string;
    stars: number;
    feedback: string;
}

export const testimonialsTwoData:TestimonialType[] = [
    {
        id: 1,
        name: 'Kathryn Murphy',
        role: 'Web Designer',
        image: '/img/testimonial/02.jpg',
        icon: '/img/testimonial/icon.png',
        stars: 5,
        feedback: 'Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo',
    },
    {
        id: 2,
        name: 'Albert Flores',
        role: 'Medical Assistant',
        image: '/img/testimonial/03.jpg',
        icon: '/img/testimonial/icon.png',
        stars: 4.5,
        feedback: 'Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo',
    },
    {
        id: 3,
        name: 'Kathryn Murphy',
        role: 'Web Designer',
        image: '/img/testimonial/02.jpg',
        icon: '/img/testimonial/icon.png',
        stars: 5,
        feedback: 'Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo',
    },
];