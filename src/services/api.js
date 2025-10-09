const BASE_URL=import.meta.env.VITE_API_URL?.replace(/\/$/, '') 
||'http://localhost:3000/api/v1';

const request = async (path,options={}) => {
    const res = await fetch(`${BASE_URL}${path}`,{
      headers:{'Content-Type':'application/json', ...(options.headers || {})},
      ...options  
    });

    if(!res.ok){
        const data = await res.json().catch(()=>({}));
        const err = new Error(data.message || `Request faild:${res.status}`);
        err.status = res.status;
        throw err;
    }

    if(res.status === 204) return null;
    return res.json;
}


const taskAPI = {
    createTask:(taskData)=>request('/tasks/create',{
        method:'POST',
        body:JSON.stringify(taskData)
    })
};

export {taskAPI};
