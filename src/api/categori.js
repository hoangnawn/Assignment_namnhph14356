import instance from "./config";
    export const getAll = () => {
        const url = `/categori`;
        return instance.get(url);
    }
    export const get = (id) => {
        const url = `/categori/${id}`;
        return instance.get(url);
    }
    export const add = (post) => {
        const url = `/categori`;
        return instance.post(url, post)
    }
    export const remove = (id) => {
        const url = `/categori/${id}`;
        return instance.delete(url)
    }
    export const update = (post) => {
        const url = `/categori/${post.id}`;
        return instance.put(url, post)
    }