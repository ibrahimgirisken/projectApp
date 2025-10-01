import { createServerApi } from '@/lib/serverApi';

export async function GET() {
  const api = createServerApi();
  const response = await api.get('Users/Profile');

  return Response.json(response.data);
}
