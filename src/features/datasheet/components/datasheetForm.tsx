'use client'
import React, { useEffect, useState } from 'react'
import { reviseTheText } from '@/lib/reviseTheText'
import { Button, Col, Form, Row, Tab, Tabs } from 'react-bootstrap'
import ImageUpload from '@/shared/imageUpload'
import { Datasheet } from '../types/datasheet'
import { useCreateDatasheet, useUpdateDatasheet } from '../hooks/useDatasheet'

type DatasheetFormProps = {
    initialData?: Datasheet,
    onSuccess?: () => void
}

export default function DatasheetForm({ initialData, onSuccess }: DatasheetFormProps) {

    const [formData, setFormData] = useState<Datasheet>({
        id: '',
        code: '',
        image1: '',
        order: 1,
        status: true,
        datasheetTranslations: [
            {
                langCode: 'tr',
                name: '',
                url: '',
                content: '',
                path: '',
            },
            {
                langCode: 'en',
                name: '',
                url: '',
                content: '',
                path: '',
            },
            {
                langCode: 'de',
                name: '',
                url: '',
                content: '',
                path: '',
            }
        ]
    })

    const { mutateAsync: createDatasheet, isPending: creating } = useCreateDatasheet();
    const { mutateAsync: updateDatasheet, isPending: updating } = useUpdateDatasheet();

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
            const updatedTranslations = [...prev.datasheetTranslations]

            updatedTranslations[index] = {
                ...updatedTranslations[index],
                [field]: value,
            }

            updatedTranslations[index].url = reviseTheText(updatedTranslations[index].url.trim() === '' ? updatedTranslations[index].name : updatedTranslations[index].url)

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
                await updateDatasheet({ data: formData })
            } else {
                const { id, ...dataToSend } = formData
                await createDatasheet(dataToSend)
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
                </Col>
            </Row>

            <Tabs defaultActiveKey="tr" className="mb-3">
                {formData.datasheetTranslations.map((translation, index) => (
                    <Tab key={translation.langCode} eventKey={translation.langCode} title={translation.langCode.toUpperCase()}>
                        <Form.Group className="mb-3">
                            <Form.Label>Başlık</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={translation.name}
                                onChange={(e) => handleTranslationChange(index, 'title', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Sayfa Başlık</Form.Label>
                            <Form.Control
                                type="text"
                                name="pageTitle"
                                value={translation.path}
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
