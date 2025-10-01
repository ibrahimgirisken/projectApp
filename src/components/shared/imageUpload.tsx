'use client'

import { useState } from 'react'
import { Form } from 'react-bootstrap'

type Props = {
    name: string
    folder: 'product' | 'category' | 'blog' | 'datasheet'
    value?: string
    label?: string
    onChange: (name: string, value: string) => void
}

export default function ImageUpload({ name, folder, value, label = 'Görsel', onChange }: Props) {
    const [preview, setPreview] = useState(
        value ? `/uploads/${folder}/${value}` : ''
    )

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const formData = new FormData()
        formData.append('file', file)
        formData.append('folder', folder)

        const res = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        })

        const data = await res.json()
        if (data.filename) {
            setPreview(`/uploads/${folder}/${data.filename}`)
            onChange(name, data.filename)
        }
    }

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
            {preview && (
                <div className="mt-2">
                    <img
                        src={preview}
                        alt="Önizleme"
                        style={{ maxWidth: '100%', maxHeight: 200 }}
                    />
                </div>
            )}
        </Form.Group>
    )
}
