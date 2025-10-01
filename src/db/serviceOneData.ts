export interface ServiceDataType {
    id: number | string;
    title: string;
    description: string;
    icon: string;
    link: string;
    delay: string;
    active?:boolean;
    image:string;
}

export const serviceOneData: ServiceDataType[] = [
    {
        id: 1,
        title: "Weed Extraction",
        description: "For your car we will do everything advice repairs",
        icon: "/img/service/icon/s-icon-1.svg",
        link: "/service-details",
        delay:'.3',
        image:""
    },
    {
        id: 2,
        title: "Pristine Garden",
        description: "For your car we will do everything advice repairs",
        icon: "/img/service/icon/s-icon-2.svg",
        link: "/service-details",
        delay:'.5',
        active:true,
        image:""
    },
    {
        id: 3,
        title: "Garden Renewal",
        description: "For your car we will do everything advice repairs",
        icon: "/img/service/icon/s-icon-3.svg",
        link: "/service-details",
        delay:'.7',
        image:""
    },
    {
        id: 4,
        title: "SolarEdge Services",
        description: "For your car we will do everything advice repairs",
        icon: "/img/service/icon/s-icon-4.svg",
        link: "/service-details",
        delay:'.9',
        image:""
    },
    {
        id: 5,
        title: "Solar Repair",
        description: "Mauris ultrices ligula eget volutpat aliquet nullam",
        icon: "/img/service/icon/s-icon-10.svg",
        link: "/service-details",
        delay:'.3',
        image:""
    },
    {
        id: 6,
        title: "Power Storage",
        description: "Mauris ultrices ligula eget volutpat aliquet nullam",
        icon: "/img/service/icon/s-icon-11.svg",
        link: "/service-details",
        delay:'.5',
        image:""
    },
    {
        id: 7,
        title: "Solar Energy",
        description: "Mauris ultrices ligula eget volutpat aliquet nullam",
        icon: "/img/service/icon/s-icon-1.svg",
        link: "/service-details",
        delay:'.7',
        image:""
    },
    {
        id: 8,
        title: "SolarEdge Services",
        description: "Mauris ultrices ligula eget volutpat aliquet nullam",
        icon: "/img/service/icon/s-icon-2.svg",
        link: "/service-details",
        delay:'.9',
        image:""
    }
];
