import React, { useEffect, useState } from 'react'
import { Banner } from '../types/banner'
import { reviseTheText } from '@/lib/reviseTheText';
import { Button, Col, Form, Row, Tab, Tabs } from 'react-bootstrap';
import ImageUpload from '@/shared/imageUpload';
import { useCreateBanner, useUpdateBanner } from '../hooks/useBanner';

type BannerFormProps = {
    initialData?: Banner,
    onSuccess?: () => void
}

export default function BannerForm({ initialData, onSuccess }: BannerFormProps) {
    const [formData, setFormData] = useState<Banner>({
        id: '',
        desktopImage: '',
        tableteImage: '',
        mobileImage: '',
        desktopVideo: '',
        mobileVideo: '',
        order: 1,
        status: true,
        bannerTranslations: [{
            langCode: 'tr',
            url: '',
            title: '',
            content: '',
        },
        {
            langCode: 'en',
            url: '',
            title: '',
            content: '',
        },
        {
            langCode: 'de',
            url: '',
            title: '',
            content: '',
        }]
    });


    const { mutateAsync: createBanner, isPending: creating } = useCreateBanner();
    const { mutateAsync: updateBanner, isPending: updating } = useUpdateBanner();

    useEffect(() => {
        if (initialData)
            setFormData(initialData)
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
            const updatedTranslations = [...prev.bannerTranslations]

            updatedTranslations[index] = {
                ...updatedTranslations[index],
                [field]: value,
            }

            updatedTranslations[index].url = reviseTheText(updatedTranslations[index].url.trim() === '' ? updatedTranslations[index].title : updatedTranslations[index].url)

            return {
                ...prev,
                bannerTranslations: updatedTranslations,
            }
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (formData.id) {
                await updateBanner({ data: formData });
            } else {
                const { id, ...dataToSend } = formData
                await createBanner(dataToSend)
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
                        name="desktopImage"
                        folder="banners"
                        value={formData.desktopImage}
                        onChange={(name, val) =>
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        }
                    />
                    <ImageUpload
                        name="tableteImage"
                        folder="banners"
                        value={formData.tableteImage}
                        onChange={(name, val) =>
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        }
                    />
                    <ImageUpload
                        name="mobileImage"
                        folder="banners"
                        value={formData.mobileImage}
                        onChange={(name, val) =>
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        }
                    />
                    <ImageUpload
                        name="desktopVideo"
                        folder="banners"
                        value={formData.desktopVideo}
                        onChange={(name, val) =>
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        }
                    />
                    <ImageUpload
                        name="mobileVideo"
                        folder="banners"
                        value={formData.mobileVideo}
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
                {formData.bannerTranslations.map((translation, index) => (
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
                            <Form.Label>Url</Form.Label>
                            <Form.Control
                                type="text"
                                name="url"
                                value={translation.url}
                                onChange={(e) => handleTranslationChange(index, 'url', e.target.value)}
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
