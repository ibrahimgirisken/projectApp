import { BlogPostDataType } from "./blogPostsThreeData";

export const blogStandardData:BlogPostDataType[] = [
    {
        id:1,
        image: '/img/news/post-1.jpg',
        date: { day: '17', month: 'Feb', year:'2025' },
        author: 'Admin',
        category: 'IT Services',
        title: '5 energy innovations revolution',
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur..',
        link: '/news-details',
        delay:'0.2s'
    },
    {
        id:2,
        image: '/img/news/post-2.jpg',
        date: { day: '19', month: 'Feb', year:'2025' },
        author: 'Admin',
        category: 'IT Services',
        title: 'How Solar Energy is the Solution',
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur..',
        link: '/news-details',
        delay:'0.2s'
    },
    {
        id:3,
        image: '/img/news/post-3.jpg',
        date: { day: '28', month: 'Feb', year:'2025' },
        author: 'Admin',
        category: 'IT Services',
        title: 'Professionals and relevant experience!',
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur..',
        link: '/news-details',
        delay:'0.2s'
    },
];
