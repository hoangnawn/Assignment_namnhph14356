import instance from "./config";
    export const getAll = () => {
        const url = `/orders`;
        return instance.get(url);
    }
    export const getProductCate = () => {
        const url = `/orders?_expand=categori`;
        return instance.get(url);
    }
    export const get = (id) => {
        const url = `/orders/${id}`;
        return instance.get(url);
    }
    export const add = (post) => {
        const url = `/orders`;
        return instance.post(url, post)
    }
    export const addorder = (post) => {
        const url = `/orderDetails`;
        return instance.post(url, post)
    }
    export const remove = (id) => {
        const url = `/orders/${id}`;
        return instance.delete(url)
    }
    export const update = (post) => {
        const url = `/orders/${post.id}`;
        return instance.put(url, post)
    }
    export const getOrderDetail = (id) =>{
        const url = `orderDetails/?orderId=${id}&_expand=product`;
        return instance.get(url);
    }
