export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function getCaption(imageUrl: string): Promise<string> {
	const response = await fetch(`${API_BASE_URL}/`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ imageUrl })
	});

	if (!response.ok) {
		throw new Error('Failed to generate image caption');
	}

	const data = (await response.json()) as { caption: string };
	return data.caption;
}