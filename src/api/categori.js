import instance from "./config";
    export const getAll = () => {
        const url = `/categoris`;
        return instance.get(url);
    }
    export const get = (id) => {
        const url = `/categoris/${id}`;
        return instance.get(url);
    }
    export const add = (post) => {
        const url = `/categoris`;
        return instance.post(url, post)
    }
    export const remove = (id) => {
        const url = `/categoris/${id}`;
        return instance.delete(url)
    }
    export const update = (post) => {
        const url = `/categoris/${post.id}`;
        return instance.put(url, post)
    }