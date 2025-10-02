import React, { useEffect, useState } from 'react'
import { User } from '../types/userResponse'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useCreateUser, useUpdateUser } from '../hooks/useUser'

type UserFormProps = {
    initialData?: User,
    onSuccess?: () => void
}
export default function UserForm({ initialData, onSuccess }: UserFormProps) {

    const [formData, setFormData] = useState<User>({
        id: '',
        nameSurname: '',
        userName: '',
        email: ''
    })

    const { mutateAsync: createUser, isPending: creating } = useCreateUser();
    const { mutateAsync: updateUser, isPending: updating } = useUpdateUser();

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
        e.preventDefault()
        try {
            if (formData.id) {
                await updateUser({ data: formData })
            } else {
                const { id, ...dataToSend } = formData
                await createUser(dataToSend);
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
                    <Form.Group>
                        <Form.Label>İsim Soyisim</Form.Label>
                        <Form.Control
                            type="text"
                            name="nameSurname"
                            value={formData.nameSurname}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Kullanıcı Adı</Form.Label>
                        <Form.Control
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>E-Mail</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="primary" type="submit">
                {formData.id ? 'Güncelle' : 'Ekle'}
            </Button>
        </Form >
    )
}
