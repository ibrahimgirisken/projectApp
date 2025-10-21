import React from 'react';
import ProductPage from './pages/products/page';
import StaticPage from './pages/static/page';


interface PageComponentMap {
    [key: string]: React.FC<any>;
}

export const PageTypeComponents: PageComponentMap = {
    'Products': ProductPage,
    'Static':StaticPage
};