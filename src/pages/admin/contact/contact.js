import { getAll, remove } from "../../../api/contact";
import HeaderAdmin from "../../../components/admin/headerAdmin";
import NavAdmin from "../../../components/admin/navAdmin";
import { reLoad } from "../../../util/reRender";

const ContactAdmin = {
    async render(){
        const { data } = await getAll();
        return /* html */ `
        ${HeaderAdmin.render()}
        ${NavAdmin.render()}

        <div class="row">
                        <div class="col-xl-12">
                            <div class="breadcrumb-holder">
                                <h1 class="main-title float-left">Đơn hàng</h1>
                                <ol class="breadcrumb float-right">
                                    <li class="breadcrumb-item">Trang chủ</li>
                                    <li class="breadcrumb-item active">Đơn hàng</li>
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
                                    <h3><i class="fa fa-file-text-o"></i> Liên hệ với khách hàng </h3>
                                </div>
                                <div>
                                    
                                </div>
                                <!-- end card-header -->

                                <div class="card-body">

                                    <div class="table-responsive">
                                        <table id="example3" class="table table-bordered table-hover display">
                                            <thead>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Tên khách hàng</th>
                                                    <th>Email</th>
                                                    <th>Số điện thoại</th>
                                                    <th>Lời nhắn</th>
                                                    <th>Chức năng</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            ${data.map((list, index) => /* html */ `
                                                <tr>
                                                    <td>${index+1}</td>
                                                    <td>${list.name}</td>
                                                    <td>${list.email}</td>
                                                    <td>${list.phone}</td>
                                                    <td>${list.message}</td>
                                                    <td>
                                                    
                                                        <button data-id="${list.id}"  class="abc btn-danger btn-sm"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
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
                        .then(()=> reLoad(ContactAdmin, "#app"));
                }
            })
        });
    }
};
export default ContactAdmin;