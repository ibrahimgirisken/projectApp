export interface BlogPostDataType {
    id: number;
    date: {
        day: string;
        month: string;
        year:string
    };
    image: string;
    author: string;
    category: string;
    title: string;
    link: string;
    delay: string;
    description: string;
}


export const blogPostsThreeData:BlogPostDataType[] = [
    {
        id:1,
        date: { day: '17', month: 'Feb', year:'2025' },
        image: '/img/news/04.jpg',
        author: 'Admin',
        category: 'IT Services',
        title: 'Growth of Clean Energy Part of Solution',
        link: '/news-details',
        description:'',
        delay:'.3'
    },
    {
        id:2,
        date: { day: '20', month: 'May', year:'2025' },
        image: '/img/news/07.jpg',
        author: 'Admin',
        category: 'UI/UX Design',
        title: 'Metal Roofing: The Best for Solar Panels',
        link: '/news-details',
        description:'',
        delay:'.3'
    },
    {
        id:3,
        date: { day: '10', month: 'Feb', year:'2025' },
        image: '/img/news/08.jpg',
        author: 'Admin',
        category: 'Cyber Security',
        title: 'Bill Gates Launches Clean Energy Panels',
        link: '/news-details',
        description:'',
        delay:'.3'
    },
    {
        id:4,
        date: { day: '20', month: 'May', year:'2025' },
        image: '/img/news/07.jpg',
        author: 'Admin',
        category: 'UI/UX Design',
        title: 'Metal Roofing: The Best for Solar Panels',
        link: '/news-details',
        description:'',
        delay:'.3'
    },
    {
        id:5,
        date: { day: '10', month: 'Feb', year:'2025' },
        image: '/img/news/05.jpg',
        author: 'Admin',
        category: 'Cyber Security',
        title: 'Exploring the Latest Innovations in Solar',
        link: '/news-details',
        description:'',
        delay:'.3'
    },
    {
        id:6,
        date: { day: '20', month: 'May', year:'2025' },
        image: '/img/news/06.jpg',
        author: 'Admin',
        category: 'Cyber Security',
        title: 'Investing in a Sustainable Energy Future',
        link: '/news-details',
        description:'',
        delay:'.3'
    },
];