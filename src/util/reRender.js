import axios from "axios";

export const reLoad = async (component, domElement) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.render();
    }
    if (component.afterRender) await component.afterRender();
}
// hàm upload file
export const uploadImg = (file) => {
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dleceiun0/image/upload";

    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', "brakvqrw")

    const response = axios.post(CLOUDINARY_API, formData, {
        headers: {
            "Content-Type": "application/form-data",
        },
    });
    return response;
}