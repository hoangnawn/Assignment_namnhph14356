import { add, getAll, remove } from "../../../api/categori";
import HeaderAdmin from "../../../components/admin/headerAdmin";
import NavAdmin from "../../../components/admin/navAdmin";
import { reLoad } from "../../../util/reRender";

const Categori = {
    async render(){
        const { data } = await getAll();
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
                            <h1 class="main-title float-left">Danh mục</h1>
                            <ol class="breadcrumb float-right">
                                <li class="breadcrumb-item">Trang chủ</li>
                                <li class="breadcrumb-item active">Danh mục</li>
                            </ol>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                        <div class="card mb-3">

                            <div class="card-header">
                                <span class="pull-right"><button class=" btn-primary btn-sm" data-toggle="modal"
                                        data-target="#modal_add_category"><i class="fa fa-plus"
                                            aria-hidden="true"></i> Thêm danh mục</button></span>
                                <div class="modal fade custom-modal" tabindex="-1" role="dialog" aria-hidden="true"
                                    id="modal_add_category">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <form action="#" id="form-add">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Thêm danh mục</h5>
                                                    <button type="button" class="close" data-dismiss="modal"><span
                                                            aria-hidden="true">&times;</span><span
                                                            class="sr-only">Đóng</span></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class="form-group">
                                                                <label>Tên danh mục</label>
                                                                <input class="form-control" id="name-cate" type="text">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="submit" name="btn-add"
                                                        class=" btn-primary">Thêm danh mục</button>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                                <h3><i class="fa fa-sitemap"></i> Danh mục</h3>
                            </div>
                            <!-- end card-header -->

                            <div class="card-body">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th> Stt </th>
                                            <th>Danh mục</th>

                                            <th style="width:120px">Chức năng</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                    
                                        ${data.map((cate, index) => /* html */`
                                            <tr>

                                                <td>
                                                    <strong>
                                                        ${index+1}
                                                    </strong><br />
                                                </td>
                                                <td>
                                                    <strong>
                                                        ${cate.names}
                                                    </strong><br />
                                                </td>

                                                <td>
                                                    <a href="/admin/categori/${cate.id}/edit"
                                                        class="btn-primary btn-sm"><i
                                                            class="fa fa-pencil" aria-hidden="true"></i></a>
                                                    
                                                    <button data-id="${cate.id}" class="btn btn-danger btn-sm"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                                </td>
                                        </tr>
                                        `).join("")}

                                    </tbody>
                                </table>

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
        const formAdd = document.getElementById('form-add');

        formAdd.addEventListener("submit",(e)=>{
            add({
                names: document.querySelector("#name-cate").value,
            })
        });

        const btn = document.querySelectorAll(".btn");
        btn.forEach((buttonElement)=>{
            const id = buttonElement.dataset.id;
            buttonElement.addEventListener("click", () =>{
                const confirm = window.confirm("Bạn có chắc muốn xóa");
                if(confirm){
                    remove(id)
                        .then(()=> alert("bạn đã xóa thành công"))
                        .then(()=> reLoad(Categori, "#app"));
                }
            })
        });
    }

};
export default Categori;