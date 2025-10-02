'use client'
import React, { useEffect, useState } from 'react'
import { Module } from '../types/module'
import { moduleService } from '../api/moduleService';
import { Button, Col, Form, Row, Tab, Tabs } from 'react-bootstrap';
import ImageUpload from '@/shared/imageUpload';
import { useCreateModule, useUpdateModule } from '../hooks/useModules';

type ModuleFormProps = {
    initialData?: Module,
    onSuccess?: () => void
}

export default function ModuleForm({ initialData, onSuccess }: ModuleFormProps) {
    const [formData, setFormData] = useState<Module>({
        id: '',
        contentType: '',
        image1: '',
        image2: '',
        image3: '',
        video: '',
        order: 1,
        status: true,
        moduleTranslations: [{
            langCode: 'tr',
            name: '',
            moduleData: ''
        },
        {
            langCode: 'en',
            name: '',
            moduleData: ''
        },
        {
            langCode: 'de',
            name: '',
            moduleData: ''
        }]
    });

    const { mutateAsync: createModule, isPending: creating } = useCreateModule();
    const { mutateAsync: updateModule, isPending: update } = useUpdateModule();
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
            const updatedTranslations = [...prev.moduleTranslations]

            updatedTranslations[index] = {
                ...updatedTranslations[index],
                [field]: value,
            }

            return {
                ...prev,
                moduleTranslations: updatedTranslations,
            }
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (formData.id) {
                await updateModule({ data: formData })
            } else {
                const { id, ...dataToSend } = formData
                await createModule(dataToSend)
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
                    <Form.Group className="mb-3">
                        <Form.Label>İçerik Tipi</Form.Label>
                        <Form.Control
                            type="text"
                            name="contentType"
                            value={formData.contentType}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <ImageUpload
                        name="image1"
                        folder="modules"
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
                        folder="modules"
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
                        folder="modules"
                        value={formData.image3}
                        onChange={(name, val) =>
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        }
                    />
                    <ImageUpload
                        name="video"
                        folder="modules"
                        value={formData.video}
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
                {formData.moduleTranslations.map((translation, index) => (
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
                            <Form.Label>İçerik</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="moduleData"
                                value={translation.moduleData}
                                onChange={(e) => handleTranslationChange(index, 'moduleData', e.target.value)}
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
