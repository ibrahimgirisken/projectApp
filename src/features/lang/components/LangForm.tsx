import { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Lang } from '../types/lang'
import ImageUpload from '@/shared/imageUpload'
import { useCreateLang, useUpdateLang } from '../hooks/useLang'

type LangFormProps = {
    initialData?: Lang,
    onSuccess?: () => void
}

export default function LangForm({ initialData, onSuccess }: LangFormProps) {

    const [formData, setFormData] = useState<Lang>({
        id: '',
        langCode: '',
        title: '',
        Image: ''
    })

    const { mutateAsync: createLang, isPending: creating } = useCreateLang();
    const { mutateAsync: updateLang, isPending: updating } = useUpdateLang();
    useEffect(() => {
        if (initialData) {
            setFormData(initialData)
        }
    }, [initialData])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'number' ? Number(value) : value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (formData.id) {
                await updateLang({ data: formData })
            } else {
                const { id, ...payload } = formData
                await createLang(payload)
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
                        folder="langs"
                        value={formData.Image}
                        onChange={(name, val) =>
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        }
                    />
                    <Form.Group>
                        <Form.Label>Dil Kodu</Form.Label>
                        <Form.Control
                            type="text"
                            name="langCode"
                            value={formData.langCode}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Başlık</Form.Label>
                        <Form.Control
                            type="text"
                            name="code"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit">
                {formData.id ? 'Güncelle' : 'Ekle'}
            </Button>
        </Form>
    )
}
