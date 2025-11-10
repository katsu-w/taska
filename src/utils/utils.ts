
// @ts-ignore
export const fetchServer = async (method: string, { id, ...payload } = {}) => {
	let url: string = 'http://localhost:3000/tasks';
	let options: { method: string; headers: HeadersInit; body?: BodyInit } = {
		method,
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
	};

	if (id !== undefined) {
		url += `/${id}`;
		options.body = JSON.stringify(payload);
	}

	if (method === 'POST') {
		options.body = JSON.stringify({
			...payload,
			completed: false,
		});
	}

	const loadedData = await fetch(url, options);
	return await loadedData.json();
};
