import { get, update } from "../../../api/user";
import HeaderAdmin from "../../../components/admin/headerAdmin";
import NavAdmin from "../../../components/admin/navAdmin";
import { reLoad } from "../../../util/reRender";

const EditUser = {
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
                                <h1 class="main-title float-left">Cập nhật người dùng</h1>
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
                                                    <label>Họ và tên</label>
                                                    <input class="form-control" id="username" type="text" value="${data.username}">

                                                </div>
                                                <div class="form-group">
                                                    <label>Email</label>
                                                    <input class="form-control" id="email" type="text" value="${data.email}">

                                                </div>
                                                <div class="form-group">
                                                <label>Cấp quyền</label>
                                                <select id="role" class="form-control">
                                                    <option value="">- Chọn -</option>
                                                    <option value="2" ${data.role == 2? "selected" : ""}>Khách hàng</option>
                                                    <option value="1" ${data.role == 1 ? "selected" : ""}>Admin</option>
                                                </select>
                                                <input type="hidden" id="password" value="${data.password}">
                                            </div>
                                                <div class="form-group">
                                                    <button type="submit" class="btn btn-primary">Sửa</button>
                                                    <a href="/admin/user"><button type="button"
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
            console.log(id);
            e.preventDefault();

            update({
                id,
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                role: +document.getElementById("role").value,
                password: document.getElementById("password").value
            });
            
        });
    }
};
export default EditUser;