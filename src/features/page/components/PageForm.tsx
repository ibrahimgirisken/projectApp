'use client'
import React, { useEffect, useState } from 'react'
import { Page } from '../types/page'
import { reviseTheText } from '@/lib/reviseTheText'
import { pageService } from '../api/pageService'
import { Button, Col, Form, Row, Tab, Tabs } from 'react-bootstrap'
import ImageUpload from '@/shared/imageUpload'
import { Module } from '@/features/module/types/module'

type PageFormProps = {
    initialData?: Page,
    moduleList: Module[],
    onSuccess?: () => void
}

export default function PageForm({ initialData, moduleList, onSuccess }: PageFormProps) {

    const [formData, setFormData] = useState<Page>({
        id: '',
        image1: '',
        image2: '',
        image3: '',
        order: 1,
        status: true,
        moduleIds: '',
        pageTranslations: [
            {
                langCode: 'tr',
                title: '',
                url: '',
                pageTitle: '',
                brief: '',
                metaDescription: '',
                content: '',
            },
            {
                langCode: 'en',
                title: '',
                url: '',
                pageTitle: '',
                brief: '',
                metaDescription: '',
                content: '',
            },
            {
                langCode: 'de',
                title: '',
                url: '',
                pageTitle: '',
                brief: '',
                metaDescription: '',
                content: '',
            }
        ]
    })

    useEffect(() => {
        if (initialData) {
            setFormData(initialData)
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'number' ? Number(value) : value,
        }))
    }

    const handleTranslationChange = (index: number, field: string, value: string) => {
        setFormData((prev) => {
            const updatedTranslations = [...prev.pageTranslations]

            updatedTranslations[index] = {
                ...updatedTranslations[index],
                [field]: value,
            }

            updatedTranslations[index].url = reviseTheText(updatedTranslations[index].url.trim() === '' ? updatedTranslations[index].title : updatedTranslations[index].url)

            return {
                ...prev,
                pageTranslations: updatedTranslations,
            }
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (formData.id) {
                await pageService.update(formData)
            } else {
                const { id, ...dataToSend } = formData
                await pageService.create(dataToSend)
            }
            if (onSuccess) onSuccess()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form onSubmit={handleSubmit} className='m-5'>
            <Row className="mb-3">
                <Col>
                    <ImageUpload
                        name="image1"
                        folder="pages"
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
                        folder="pages"
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
                        folder="pages"
                        value={formData.image3}
                        onChange={(name, val) =>
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        }
                    />
                </Col>
            </Row>

            <Form.Group className="mb-3">
                <Form.Label>Moduller</Form.Label>
                <Form.Select
                    name="moduleIds"
                    value={formData.moduleIds ?? ''}
                    onChange={handleChange}>
                    <option value="">Seçiniz</option>
                    {moduleList.map((module) => (
                        <option key={module.id} value={module.id}>
                            {module.moduleTranslations.find(t => t.langCode === 'tr')?.name}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>


            <Tabs defaultActiveKey="tr" className="mb-3">
                {formData.pageTranslations.map((translation, index) => (
                    <Tab key={translation.langCode} eventKey={translation.langCode} title={translation.langCode.toUpperCase()}>
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
                            <Form.Label>Url</Form.Label>
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
