'use client'
import { useProducts } from '@/features/product/hooks/useProducts'
import { Row, Col, Card } from 'react-bootstrap';
import ProductType from '@/features/product/types/product'; // Tip ismini ProductType olarak değiştirdim
import { useLocale, useTranslations } from 'next-intl';
import { Page, PageTranslation } from '@/features/page/types/page'; // Page tipini ekledim
import PageTitle from '@/components/sections/pageTitle';

interface ProductPageProps {
    page: Page; 
    translation?: PageTranslation; 
}

function ProductPage({ page, translation }: ProductPageProps) {
    const locale = useLocale();
    const { data: products = [], error, isLoading } = useProducts(); 
    const t = useTranslations("Products");
    const d = useTranslations("Others");

    if (isLoading) return <div>Loading Products...</div>;
    if (error) return <div>Error: {error.message}</div>;
    
    
    const pageTranslation = translation || page?.pageTranslations.find(t => t.langCode === locale);
    const pageTitle = (pageTranslation as any)?.pageTitle || (pageTranslation as any)?.name || t('title');

    return (
        <>
           <PageTitle title={pageTitle} currentPage={pageTitle} />
           
           <section className="project-section section-padding fix">
               <div className="container">
                   {/* Buraya sayfanın açıklama içeriği (brief/content) gelebilir */}
               </div>
           </section>
           
           <h2 className="text-2xl font-semibold mb-4">{t('title')}</h2>
           <Row xs={1} md={3} className="g-4">
               {products?.map((product: ProductType) => {
                   const data = product.productTranslations.find(
                       t => t.langCode == locale
                   );
                   if (!data) return null;
                   return (
                       <Col key={product.id}>
                           <Card>
                               <Card.Img variant="top" src={"/placeholder.jpg"} /> 
                               <Card.Body>
                                   <Card.Title>{product.code}</Card.Title>
                                   <Card.Title>{data.name}</Card.Title>
                                   <Card.Text>{data.brief}</Card.Text>
                                   <a className='btn btn-primary' href={`products/${data.url}`}>{d('detail')}</a>
                               </Card.Body>
                           </Card>
                       </Col>
                   );
               })}
           </Row>
        </>
    );
}

export default ProductPage;