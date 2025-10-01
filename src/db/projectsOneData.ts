export interface ProjectDataType {
    id: number;
    image: string;
    category: string;
    title: string;
    link: string;
    delay?: string;
}

export const projectsOneData: ProjectDataType[] = [
    {
        id: 1,
        image: "/img/project/01.jpg",
        category: "Solar energy",
        title: "Solar Industry in UK",
        link: "/project-details"
    },
    {
        id: 2,
        image: "/img/project/02.jpg",
        category: "Solar energy",
        title: "Greener Planet",
        link: "/project-details"
    },
    {
        id: 3,
        image: "/img/project/03.jpg",
        category: "Solar energy",
        title: "Solar Industry in USA",
        link: "/project-details"
    },
    {
        id: 4,
        image: "/img/project/04.jpg",
        category: "Hybrid energy",
        title: "Solar Power in UAE",
        link: "/project-details"
    },
    {
        id: 5,
        image: "/img/project/02.jpg",
        category: "Solar energy",
        title: "Greener Planet",
        link: "/project-details"
    },
];
