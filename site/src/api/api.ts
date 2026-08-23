import secureFetch from './secure-fetch.ts';

export async function register(nickname: string) {
    const res = await secureFetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ nickname }),
    });
    return res.json();
}
