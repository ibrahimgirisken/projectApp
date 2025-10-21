'use client'
import React, { useEffect, useState } from 'react';
import { Product } from '../types/product'
import { reviseTheText } from '@/lib/reviseTheText'
import { productService } from '../api/productService';
import { Button, Col, Form, Row, Tab, Tabs } from 'react-bootstrap'
import ImageUpload from '@/shared/imageUpload'
import { Category } from '@/features/category/types/category'
import { Brand } from '@/features/brand/types/brand'

type ProductFormProps = {
  initialData?: Product,
  categoryList: Category[],
  brandList: Brand[],
  onSuccess?: () => void
}

export default function ProductForm({ initialData, categoryList, brandList, onSuccess }: ProductFormProps) {

  const [formData, setFormData] = useState<Product>({
    id: '',
    code: '',
    brandId: null,
    categoryId: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    video: '',
    order: 1,
    status: true,
    productTranslations: [
      {
        langCode: 'tr',
        name: '',
        url: '',
        title: '',
        brief: '',
        pageTitle: '',
        metaDescription: '',
        content: '',
      },
      {
        langCode: 'en',
        name: '',
        url: '',
        title: '',
        brief: '',
        pageTitle: '',
        metaDescription: '',
        content: '',
      },
      {
        langCode: 'de',
        name: '',
        url: '',
        title: '',
        brief: '',
        pageTitle: '',
        metaDescription: '',
        content: '',
      }
    ]
  })


  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    }
  }, [initialData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }))
  }

  const handleTranslationChange = (index: number, field: string, value: string) => {
    setFormData((prev) => {
      const updatedTranslations = [...prev.productTranslations]

      updatedTranslations[index] = {
        ...updatedTranslations[index],
        [field]: value,
      }

      updatedTranslations[index].url = reviseTheText(updatedTranslations[index].url.trim() === '' ? updatedTranslations[index].name : updatedTranslations[index].url)

      return {
        ...prev,
        productTranslations: updatedTranslations,
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await productService.update(formData );
      } else {
        const { id, ...payload } = formData;
        await productService.create(payload)
      }
      if (onSuccess) onSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className='m-5'>
      <Row className="mb-3">
        <Col>
          <ImageUpload
            name="image1"
            folder="products"
            value={formData.image1}
            onChange={(name, val) =>
              setFormData((prev) => ({
                ...prev,
                [name]: val,
              }))
            }
          />
          <ImageUpload
            name="image2"
            folder="products"
            value={formData.image2}
            onChange={(name, val) =>
              setFormData((prev) => ({
                ...prev,
                [name]: val,
              }))
            }
          />
          <ImageUpload
            name="image3"
            folder="products"
            value={formData.image3}
            onChange={(name, val) =>
              setFormData((prev) => ({
                ...prev,
                [name]: val,
              }))
            }
          />
          <ImageUpload
            name="image4"
            folder="products"
            value={formData.image4}
            onChange={(name, val) =>
              setFormData((prev) => ({
                ...prev,
                [name]: val,
              }))
            }
          />
          <ImageUpload
            name="image5"
            folder="products"
            value={formData.image5}
            onChange={(name, val) =>
              setFormData((prev) => ({
                ...prev,
                [name]: val,
              }))
            }
          />
          <Form.Group>
            <Form.Label>Ürün Kodu</Form.Label>
            <Form.Control
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Marka</Form.Label>
        <Form.Select
          name="brandId"
          value={formData.brandId ?? ''}
          onChange={handleChange}>
          <option value="">Seçiniz</option>
          {brandList.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Kategori</Form.Label>
        <Form.Select
          name="categoryId"
          value={formData.categoryId ?? ''}
          onChange={handleChange}>
          <option value="">Ana Kategori</option>
          {categoryList.map((category) => (
            <option key={category.id} value={category.id}>
              {category.categoryTranslations.find(t => t.langCode === 'tr')?.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Tabs defaultActiveKey="tr" className="mb-3">
        {formData.productTranslations.map((translation, index) => (
          <Tab key={translation.langCode} eventKey={translation.langCode} title={translation.langCode.toUpperCase()}>
            <Form.Group className="mb-3">
              <Form.Label>Ad</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={translation.name}
                onChange={(e) => handleTranslationChange(index, 'name', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Url</Form.Label>
              <Form.Control
                type="text"
                name="url"
                value={translation.url}
                onChange={(e) => handleTranslationChange(index, 'url', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Başlık</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={translation.title}
                onChange={(e) => handleTranslationChange(index, 'title', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Sayfa Başlık</Form.Label>
              <Form.Control
                type="text"
                name="pageTitle"
                value={translation.pageTitle}
                onChange={(e) => handleTranslationChange(index, 'pageTitle', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Kısa Açıklama</Form.Label>
              <Form.Control
                type="text"
                name="brief"
                value={translation.brief}
                onChange={(e) => handleTranslationChange(index, 'brief', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Meta Açıklama</Form.Label>
              <Form.Control
                type="text"
                name="metaDescription"
                value={translation.metaDescription}
                onChange={(e) => handleTranslationChange(index, 'metaDescription', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>İçerik</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="content"
                value={translation.content}
                onChange={(e) => handleTranslationChange(index, 'content', e.target.value)}
              />
            </Form.Group>
          </Tab>
        ))}
      </Tabs>

      <Form.Group className="mb-3">
        <Form.Label>Sıra</Form.Label>
        <Form.Control
          type="number"
          name="order"
          value={formData.order}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="status">
        <Form.Check
          type="checkbox"
          name="status"
          label="Aktif mi?"
          checked={formData.status}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              status: e.target.checked,
            }))
          }
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {formData.id ? 'Güncelle' : 'Ekle'}
      </Button>
    </Form >
  )
}
