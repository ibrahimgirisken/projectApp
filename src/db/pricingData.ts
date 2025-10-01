export type PriceDataType ={
    id:number | string,
    plan: string,
    price: string,
    frequency: string,
    description: string,
    features: string[],
    buttonText: string,
    buttonLink: string,
    delay: string,
    isActive: boolean
}
export const pricingData:PriceDataType[] = [
    {
        id: 'monthly-basic',
        plan: 'Basic Plan',
        price: '$149',
        frequency: 'Per month',
        description: 'Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et',
        features: [
            'Branding and design Identity',
            'Web site Marketing Solutions',
            'Free 15 GB Linux Hosting',
            '24/7 system Monitoring',
            'Unlimited Download Data'
        ],
        buttonText: 'Choose Plan',
        buttonLink: '/contact',
        delay: '.3',
        isActive: false
    },
    {
        id: 'monthly-popular',
        plan: 'Most Popular',
        price: '$179',
        frequency: 'Per month',
        description: 'Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et',
        features: [
            'Branding and design Identity',
            'Web site Marketing Solutions',
            'Free 15 GB Linux Hosting',
            '24/7 system Monitoring',
            'Unlimited Download Data'
        ],
        buttonText: 'Choose Plan',
        buttonLink: '/contact',
        delay: '.5',
        isActive: true
    },
    {
        id: 'monthly-premium',
        plan: 'Premium',
        price: '$199',
        frequency: 'Per month',
        description: 'Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et',
        features: [
            'Branding and design Identity',
            'Web site Marketing Solutions',
            'Free 15 GB Linux Hosting',
            '24/7 system Monitoring',
            'Unlimited Download Data'
        ],
        buttonText: 'Choose Plan',
        buttonLink: '/contact',
        delay: '.7',
        isActive: false
    }
];