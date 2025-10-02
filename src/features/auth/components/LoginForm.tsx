import React, { useEffect, useState } from 'react'
import { LoginDto } from '../types/auth'
import { Button, Form } from 'react-bootstrap'
type LoginFormProps = {
    initialData?: LoginDto,
    onSuccess?: () => void
}

export default function LoginForm({ initialData, onSuccess }: LoginFormProps) {
    const [formData, setFormData] = useState<LoginDto>({
        email: '',
        password: '',
    })

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {

            if (onSuccess) onSuccess()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Mail | Kullanıcı Adı</Form.Label>
                <Form.Control
                    type="string"
                    name="code"
                    value={formData.email}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Şifre</Form.Label>
                <Form.Control
                    type="string"
                    name="name"
                    value={formData.password}
                    onChange={handleChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    )
}
