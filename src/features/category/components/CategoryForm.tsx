'use client'
import { useEffect, useState } from 'react';
import { Button, Col, Form, Row, Tab, Tabs } from 'react-bootstrap'
import { Category } from '../types/category'
import { useCreateCategory, useUpdateCategory } from '../hooks/useCategory'
import ImageUpload from '@/shared/imageUpload';

type CategoryFormProps = {
    initialData?: Category,
    categoryList:Category[],
    onSuccess?: () => void
}

export default function CategoryForm({ initialData,categoryList, onSuccess }: CategoryFormProps) {

    const [formData, setFormData] = useState<Category>({
        id: '',
        image1: '',
        parentId: null,
        order: 1,
        children: [],
        status: true,
        categoryTranslations: [
            {
                langCode: 'tr',
                name: '',
                title: '',
                url: '',
                brief: '',
                metaDescription: ''
            },
            {
                langCode: 'en',
                name: '',
                title: '',
                url: '',
                brief: '',
                metaDescription: ''
            },
            {
                langCode: 'de',
                name: '',
                title: '',
                url: '',
                brief: '',
                metaDescription: ''
            }
        ]
    })

    const { mutateAsync: createCategory, isPending: creating } = useCreateCategory();
    const { mutateAsync: updateCategory, isPending: updating } = useUpdateCategory();

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
            const updatedTranslations = [...prev.categoryTranslations]
            updatedTranslations[index] = {
                ...updatedTranslations[index],
                [field]: value,
            }

            return {
                ...prev,
                categoryTranslations: updatedTranslations,
            }
        })
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (formData.id) {
                await updateCategory({ data: formData })
            } else {
                const { id, ...payload } = formData
                await createCategory(payload)
            }
            if (onSuccess) onSuccess()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Col>
                    <ImageUpload
                        name="image1"
                        folder="categories"
                        value={formData.image1}
                        onChange={(name, val) =>
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        } />
                </Col>
            </Row>
            <Form.Group className="mb-3">
                <Form.Label>Kategori</Form.Label>
                <Form.Select
                    name="parentId"
                    value={formData.parentId ?? ''}
                    onChange={handleChange}>
                        <option value="">Seçiniz</option>
                        {categoryList?.map((category)=>(
                            <option key={category.id} value={category.id}>{category.categoryTranslations.find(t=>t.langCode==='tr')?.name}</option>
                        ))}
                </Form.Select>
            </Form.Group>

            <Tabs defaultActiveKey="tr" className="mb-3">
                {formData.categoryTranslations.map((translation, index) => (
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
                            <Form.Label>Başlık</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={translation.title}
                                onChange={(e) => handleTranslationChange(index, 'title', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>URL</Form.Label>
                            <Form.Control
                                type="text"
                                name="url"
                                value={translation.url}
                                onChange={(e) => handleTranslationChange(index, 'url', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Kısa Açıklama</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="brief"
                                value={translation.brief}
                                onChange={(e) => handleTranslationChange(index, 'brief', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Meta Açıklama</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="metaDescription"
                                value={translation.metaDescription}
                                onChange={(e) => handleTranslationChange(index, 'metaDescription', e.target.value)}
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
        </Form>
    )
}
