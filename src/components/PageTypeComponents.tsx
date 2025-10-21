import React from 'react';
import ProductPage from './pages/products/page';
import StaticPage from './pages/static/page';


// Harita Tip Tanımı
interface PageComponentMap {
    [key: string]: React.FC<any>;
}

// pageType değerleri ile bileşenleri eşleştirme
export const PageTypeComponents: PageComponentMap = {
    'products': ProductPage,
    'static':StaticPage
    // API'dan gelen diğer pageType'ları buraya ekleyin
};