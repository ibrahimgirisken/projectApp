import React, { useEffect, useState } from 'react'
import { Brand } from '../types/brand'
import { Button, Form } from 'react-bootstrap'
import { useCreateBrand, useUpdateBrand } from '../hooks/useBrand';

type BrandFormProps = {
    initialData?: Brand,
    onSuccess?: () => void
}
export default function BrandForm({ initialData, onSuccess }: BrandFormProps) {
    const [formData, setFormData] = useState<Brand>({
        id: '',
        name: '',
        code: '',
        order: 1,
        status: true
    });

    const { mutateAsync: createBrand, isPending: creating } = useCreateBrand();
    const { mutateAsync: updateBrand, isPending: updating } = useUpdateBrand();


    useEffect(() => {
        if (initialData) {
            setFormData(initialData)
        }
    }, [initialData])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'number' ? Number(value) : value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (formData.id) {
                await updateBrand({ data: formData })
            } else {
                const { id, ...payload } = formData;
                await createBrand(payload);
            }
            if (onSuccess) onSuccess()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Marka Kodu</Form.Label>
                <Form.Control
                    type="string"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Marka Adı</Form.Label>
                <Form.Control
                    type="string"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Sıra</Form.Label>
                <Form.Control
                    type="string"
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

