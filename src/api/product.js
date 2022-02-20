import instance from "./config";
    export const getProduct = () => {
        const url = `/products`;
        return instance.get(url);
    }
    export const getProductCate = () => {
        const url = `/products?_expand=categori`;
        return instance.get(url);
    }
    export const get = (id) => {
        const url = `/products/${id}`;
        return instance.get(url);
    }
    export const add = (post) => {
        const url = `/products`;
        return instance.post(url, post)
    }
    export const remove = (id) => {
        const url = `/products/${id}`;
        return instance.delete(url)
    }
    export const update = (post) => {
        const url = `/products/${post.id}`;
        return instance.put(url, post)
    }
    export const getProductCategori = (id) =>{
        const url = `products/?categoriId=${id}&_expand=categori`;
        return instance.get(url);
    }