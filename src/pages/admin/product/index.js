import { getProduct, remove } from "../../../api/product";
import HeaderAdmin from "../../../components/admin/headerAdmin";
import NavAdmin from "../../../components/admin/navAdmin";
import { reLoad } from "../../../util/reRender";

const ProductAdmin = {
    async render(){
        const { data: pro } = await getProduct();
        
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
                            <h1 class="main-title float-left">Sản phẩm</h1>
                            <ol class="breadcrumb float-right">
                                <li class="breadcrumb-item">Trang chủ</li>
                                <li class="breadcrumb-item active">Sản phẩm</li>
                            </ol>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                <!-- end row -->
                <div class="row">

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                        <div class="card mb-3">

                            <div class="card-header">
                                <span class="pull-right"><a href="/#/admin/product/add"
                                        class=" btn-primary btn-sm"><i class="fa fa-plus" aria-hidden="true"></i>
                                        Thêm sản phẩm</a></span>
                                <h3><i class="fa fa-file-text-o"></i> Tất cả sản phẩm </h3>
                            </div>
                            <div>
                                <form action="index.php?act=sp-search" method="POST">
                                    <div class="input-group rounded" id="input">



                                        <input type="search" class="form-control rounded" id="search"
                                            name="keywords" placeholder="Tìm kiếm sản phẩm" aria-label="Search"
                                            aria-describedby="search-addon" />
                                        <button type="submit" name="search">Tìm</button>
                                </form>
                            </div>
                            <!-- end card-header -->

                            <div class="card-body">
                                <div class="clearfix">
                                    <p style='color:red;'></p>

                                </div>

                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Stt</th>
                                                <th>Sản phẩm</th>
                                                <th>Ảnh sp</th>
                                                <th>Giá sp</th>
                                                <th>Mô tả</th>
                                                <th style="width:140px">Danh mục</th>
                                                <th style="width:150px">Chức năng</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                        ${pro.map((post, index) => /* html */ `
                                            <tr>
                                                <td>
                                                   <h5>${index + 1}</h5>
                                                </td>
                                                <td>
                                                    <h5>
                                                        ${post.titles} 
                                                    </h5>
                                                </td>
                                                <td>
                                                    <span
                                                        style="float: left; margin-right:10px; padding-left: 22px;"><img
                                                            alt="anh" width="80px"
                                                            src="${post.images}"></span>

                                                </td>
                                                <td>
                                                    <h5>
                                                        ${post.prices}
                                                    </h5>

                                                </td>
                                                <td>
                                                    <h5 id="in">
                                                    <h5>${post.descs}
                                                    </h5>

                                                </td>
                                                
                                                <td>
                                                    <h5>${post.names}</h5>
                                                </td>

                                                <td>
                                                    <a href="/#/admin/product/${post.id}/edit" class="btn-primary btn-sm"
                                                        data-placement="top" data-toggle="tooltip"
                                                        data-title="Edit"><i class="fa fa-pencil"
                                                            aria-hidden="true"></i></a>
                                                    <button data-id="${post.id}"  class="btn btn-danger btn-sm"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                                </td>
                                            </tr>
                                        
                                        `).join("")}
                                            
                                        </tbody>
                                        
                                    </table>
                                </div>


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
    afterRender(){
        const btn = document.querySelectorAll(".btn");
        btn.forEach((buttonElement)=>{
            const id = buttonElement.dataset.id;
            buttonElement.addEventListener("click", () =>{
                const confirm = window.confirm("Bạn có chắc muốn xóa");
                if(confirm){
                    remove(id)
                        .then(()=> alert("bạn đã xóa thành công"))
                        .then(()=> reLoad(ProductAdmin, "#app"));
                }
            })
        });
    }
};
export default ProductAdmin;