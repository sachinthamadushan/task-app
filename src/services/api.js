const BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '')
    || 'http://localhost:3000/api/v1';

const request = async (path, options = {}) => {

    let res;
    try {
        res = await fetch(`${BASE_URL}${path}`, {
            headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
            ...options
        });
    } catch (e) {
        // Network-level error: server down, wrong port, CORS/preflight blocked, etc.
        const err = new Error(`Cannot reach API at ${BASE_URL}. Is the server running?`);
        err.cause = e;
        err.isNetworkError = true;
        throw err;
    }

    const contentType = res.headers.get('content-type');
    const text = await res.text();

    let data = null;
    if (text) {
        if (contentType.includes('application/json')) {
            try {
                data = JSON.parse(text);
            } catch {
                // If server sent invalid JSON but claimed application/json, fall back to raw text
                data = text;
            }
        } else {
            data = text;
        }
    }

    if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const err = new Error(data.message || `Request faild:${res.status}`);
        err.status = res.status;
        throw err;
    }

    return data;
}


const taskAPI = {
    createTask: (taskData) => request('/tasks/create', {
        method: 'POST',
        body: JSON.stringify(taskData)
    }),
    getAllTasks: () => request('/tasks/all')
};

export { taskAPI };
