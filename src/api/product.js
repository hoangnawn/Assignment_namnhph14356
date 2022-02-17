import instance from "./config";
    export const getProduct = () => {
        const url = `/product`;
        return instance.get(url);
    }
    export const get = (id) => {
        const url = `/product/${id}`;
        return instance.get(url);
    }
    export const add = (post) => {
        const url = `/product`;
        return instance.post(url, post)
    }
    export const remove = (id) => {
        const url = `/product/${id}`;
        return instance.delete(url)
    }
    export const update = (post) => {
        const url = `/product/${post.id}`;
        return instance.put(url, post)
    }
    export const cate = (cateId) =>{
        const url = `/product/${cateId}`;
        return instance.get(url);
    }