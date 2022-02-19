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
    export const cate = (cateId) =>{
        const url = `/products/${cateId}`;
        return instance.get(url);
    }
    export const ProductCate = (cateId) =>{
        const url = `/products/?categoriId=${cateId}&_expand=categori`;
        return instance.get(url);
    }