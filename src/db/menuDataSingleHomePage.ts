import { MenuItemDataType } from "./menuData";

export const menuDataSingleHomePage: MenuItemDataType[] = [
    {
        title: 'Home',
        link: '/',
        megamenu: [
            {
                image: '/img/header/home-1.jpg',
                title: 'Home 01',
                links: [
                    { title: 'Multi Page', link: '/' },
                    { title: 'One Page', link: '/home-one-single' },
                ],
            },
            {
                image: '/img/header/home-2.jpg',
                title: 'Home 02',
                links: [
                    { title: 'Multi Page', link: 'home-two' },
                    { title: 'One Page', link: '/home-two-single' },
                ],
            },
            {
                image: '/img/header/home-3.jpg',
                title: 'Home 03',
                links: [
                    { title: 'Multi Page', link: 'home-three' },
                    { title: 'One Page', link: '/home-three-single' },
                ],
            },
            {
                image: '/img/header/home-4.jpg',
                title: 'Home 04',
                links: [
                    { title: 'Multi Page', link: 'home-four' },
                    { title: 'One Page', link: '/home-four-single' },
                ],
            },
        ],
    },
    {
        title: 'About',
        link: '#about',
    },
    {
        title: 'Services',
        link: '#services',
    },
    {
        title: 'Projects',
        link: '#projects',
    },
    {
        title: 'Team',
        link: '#team',
    },
    {
        title: 'Blog',
        link: '#blog',
    },
];