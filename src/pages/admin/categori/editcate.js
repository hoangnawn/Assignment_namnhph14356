import { get, update } from "../../../api/categori";
import HeaderAdmin from "../../../components/admin/headerAdmin";
import NavAdmin from "../../../components/admin/navAdmin";

const EditCate = {
    async render(id){
        const { data } = await get(id);
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
                                <h1 class="main-title float-left">Sửa danh mục</h1>
                                <ol class="breadcrumb float-right">
                                    
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


                                    <form action="" id="form-edit">
                                        <div class="row">

                                            <div class="form-group col-xl-9 col-md-8 col-sm-12">
                                                <div class="form-group">
                                                    <label>Tên danh mục</label>
                                                    <input class="form-control" id="names" type="text" value="${data.names}">

                                                </div>
                                                <div class="form-group">
                                                    <button type="submit" class="btn btn-primary">Sửa</button>
                                                    <a href="/admin/categori"><button type="button"
                                                            class="btn btn-info">Quay lại</button></a>
                                                </div>
                                            </div>
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
        const formEdit = document.querySelector("#form-edit");
        formEdit.addEventListener("submit", (e) =>{
            update({
                id: id,
                names: document.getElementById("names").value,
            });
        });
    }
};
export default EditCate;