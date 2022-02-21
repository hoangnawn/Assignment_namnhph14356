import { getUser, remove } from "../../../api/user";
import HeaderAdmin from "../../../components/admin/headerAdmin";
import NavAdmin from "../../../components/admin/navAdmin";
import { reLoad } from "../../../util/reRender";

const UserAdmin = {
    async render(){
        const { data } = await getUser();
        
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
                            <h1 class="main-title float-left">Người dùng</h1>
                            <ol class="breadcrumb float-right">
                                <li class="breadcrumb-item">Trang chủ</li>
                                <li class="breadcrumb-item active">Người dùng</li>
                            </ol>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                        <div class="card mb-3">

                            <div class="card-header">
                                
                                
                                <h3><i class="fa fa-sitemap"></i> Người dùng</h3>
                            </div>
                            <!-- end card-header -->

                            <div class="card-body">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th> Stt </th>
                                            <th>Tên người dùng</th>
                                            <th>Email</th>
                                            <th>Vai trò</th>

                                            <th style="width:120px">Chức năng</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                    
                                        ${data.map((user, index) => /* html */`
                                            <tr>

                                                <td>
                                                    <strong>
                                                        ${index+1}
                                                    </strong><br />
                                                </td>
                                                <td>
                                                    <strong>
                                                        ${user.username }
                                                    </strong><br />
                                                </td>
                                                <td>
                                                    <strong>
                                                        ${user.email }
                                                    </strong><br />
                                                </td>
                                                <td>
                                                    <strong>
                                                    ${user.role == 1? "Admin" : "Khách hàng"}
                                                    </strong><br />
                                                </td>

                                                <td>
                                                    <a href="/admin/user/${user.id}/edit"
                                                        class="btn-primary btn-sm"><i
                                                            class="fa fa-pencil" aria-hidden="true"></i></a>
                                                    
                                                    <button data-id="${user.id}" class="abc btn-danger btn-sm"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
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
        const btn = document.querySelectorAll(".abc");
        btn.forEach((buttonElement)=>{
            const id = buttonElement.dataset.id;
            buttonElement.addEventListener("click", () =>{
                const confirm = window.confirm("Bạn có chắc muốn xóa");
                if(confirm){
                    remove(id)
                        .then(()=> alert("bạn đã xóa thành công"))
                        .then(()=> reLoad(UserAdmin, "#app"));
                }
            })
        });
    }

};
export default UserAdmin;