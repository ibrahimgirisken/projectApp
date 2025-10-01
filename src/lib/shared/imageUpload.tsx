'use client'
import { useEffect, useState } from 'react'
import { Button, Form, Image } from 'react-bootstrap'

type Props = {
    name: string
    folder: 'products' | 'categories' | 'blogs' | 'datasheets' | 'pages' | 'settings' | 'modules' | 'banners' | 'homes' | 'langs'
    value?: string
    label?: string
    onChange: (name: string, value: string) => void
}

export default function ImageUpload({ name, folder, value, label = 'Görsel', onChange }: Props) {
    const [preview, setPreview] = useState(
        value ? `/uploads/${folder}/${value}` : ''
    )

    useEffect(() => {
        if (value) {
            setPreview(`/uploads/${folder}/${value}`)
        }
    }, [value, folder]);

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
            {preview && (<>
                <div className="mt-2">
                    <Image
                        src={preview}
                        width={200}
                        height={200}
                        style={{ objectFit: 'contain', border: '1px solid #ddd' }}
                        alt="Önizleme"
                    />
                </div>
                <div className="mt-2">
                    <Button variant='danger' name={name} onClick={(e) => {
                        const fieldName = e.currentTarget.name
                        setPreview('')
                        onChange(fieldName, '')
                    }} >Görseli Sil</Button>
                </div>
            </>
            )}
        </Form.Group>
    )
}
