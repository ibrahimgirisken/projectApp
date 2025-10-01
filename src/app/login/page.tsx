'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Button, Col, Container, Form, Row, Alert } from 'react-bootstrap';

type LoginForm = { usernameOrEmail: string; password: string };

export default function Page() {
  const [formData, setFormData] = useState<LoginForm>({ usernameOrEmail: '', password: '' });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const sp = useSearchParams();
  const callbackUrl = sp.get('callbackUrl') || '/admin';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('../api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // HttpOnly cookie sunucuda set edildi; client tarafında token yok.
        router.replace(callbackUrl);
        return;
      }

      // Hata durumunda güvenli mesaj çıkar
      let message = 'Giriş başarısız';
      try {
        const data = await res.json().catch(() => null);
        if (data?.error) {
          message = typeof data.error === 'string' ? data.error : (data.error.message ?? message);
        }
      } catch {
        /* yutulabilir */
      }
      setError(message);
    } catch {
      setError('Sunucuya bağlanılamadı');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row className="border rounded p-4 shadow" style={{ width: '100%', maxWidth: '500px' }}>
        <Col>
          <h3 className="text-center mb-4">Kullanıcı Girişi</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="usernameOrEmail">
              <Form.Label>Kullanıcı Adı | E-posta</Form.Label>
              <Form.Control
                type="text"
                name="usernameOrEmail"
                value={formData.usernameOrEmail}
                onChange={(e) => setFormData((s) => ({ ...s, usernameOrEmail: e.target.value }))}
                autoComplete="username"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Şifre</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => setFormData((s) => ({ ...s, password: e.target.value }))}
                autoComplete="current-password"
                required
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? 'Giriş yapılıyor…' : 'Giriş Yap'}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
