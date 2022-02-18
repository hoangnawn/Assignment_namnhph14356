import ProductAdmin from ".";
import { getAll } from "../../../api/categori";
import { get, update } from "../../../api/product";
import HeaderAdmin from "../../../components/admin/headerAdmin";
import NavAdmin from "../../../components/admin/navAdmin";
import { reLoad, uploadImg } from "../../../util/reRender";

const EditNew = {
     async render(id){
         const { data: cateList } = await getAll();
        const { data: pro } = await get(id);
        return /* html */ `
        ${HeaderAdmin.render()}
        ${NavAdmin.render()}
        <div class="content-page">

            <!-- Start content -->
            <div class="content">

                <div class="container-fluid">


                    <div class="row">
                        <div class="col-xl-12">
                            <div class="breadcrumb-holder">
                                <h1 class="main-title float-left">Thêm sản phẩm</h1>
                                <ol class="breadcrumb float-right">
                                    <li class="breadcrumb-item">Home</li>
                                    <li class="breadcrumb-item">Articles</li>
                                    <li class="breadcrumb-item active">Add article</li>
                                </ol>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->



                    <div class="row">

                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                            <div class="card mb-3">

                                <div class="card-body">
                                    <div class="clearfix">
                                        <p style='color:red;'></p>
                                    </div>


                                    <form action="" id="formEdit">
                                        <div class="row">
                                            <div class="form-group col-xl-9 col-md-8 col-sm-12">
                                                <div class="form-group">
                                                    <label>Tên sp</label>
                                                    <input class="form-control" id="name" type="text" value="${pro.titles}">
                                                </div>
                                                <div class="form-group">
                                                    <label>Mô tả</label>
                                                    <textarea rows="3" class="form-control editor"
                                                        id="desc">${pro.descs}</textarea>

                                                </div>
                                                <div class="form-group">
                                                    <label>Ảnh sản phẩm</label><br />
                                                    <input type="file" id="image">
                                                    <img src="${pro.images}" class="w-40 py-4 object-cover rounded-md">
                                                </div>
                                                <div class="form-group">
                                                    <button type="submit" id="btn-them" class="btn btn-primary">Sửa
                                                        sản phẩm</button>
                                                    <a href="/admin/product"><button type="button"
                                                            class="btn btn-info">Quay lại</button></a>
                                                </div>
                                            </div>
                                            <div class="form-group col-xl-3 col-md-4 col-sm-12 border-left">
                                                <div class="form-group">
                                                    <label>Giá</label>
                                                    <input type="text" class="form-control" id="price" value="${pro.prices}">
                                                    <div class="form-group">
                                                        <label>Danh mục</label>
                                                        <select id="categori" class="form-control">
                                                            ${cateList.map((cate) => `
                                                            <option value="${cate.id}" ${cate.id === pro.categoriId ? "selected" : ""}>${cate.names}</option>
                                                            `).join("")}
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class=" form-group">
                                                            <label>Chi tiết sp</label><br />
                                                            <textarea id="content" class="form-control editor"
                                                                cols="30"
                                                                rows="10">${pro.contents}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div><!-- end row -->
                                    </form>
                                </div>
                                <!-- end card-body -->
                            </div>
                            <!-- end card -->
                        </div>
                        <!-- end col -->
                    </div>
                    <!-- end row -->
                </div>
                <!-- END container-fluid -->
            </div>
            <!-- END content -->
        </div>
        `
    },
     afterRender(id){
        const formAdd = document.getElementById("formEdit");
        const img = document.getElementById("image");
        const date = new Date();
        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            const productData = {
                id: id,
                titles: document.getElementById("name").value,
                descs: document.getElementById("desc").value,
                prices: +document.getElementById("price").value,
                categoriId: +document.getElementById("categori").value,
                contents: document.getElementById("content").value,
                createdAt: date.toString(),
            };

            if(img.files.length){
                const response = await uploadImg(img.files[0])
                productData.images = response.data.url
            }

            update(productData)
            .then(() => reLoad(ProductAdmin, "#app"));
        })
        
        
    }
};

export default EditNew;