import { getAll, remove } from "../../../api/order";
import HeaderAdmin from "../../../components/admin/headerAdmin";
import NavAdmin from "../../../components/admin/navAdmin";
import { reLoad } from "../../../util/reRender";

const CartAdmin = {

    async render() {
        const { data: order } = await getAll();
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
                                    <h3><i class="fa fa-file-text-o"></i> Tất cả đơn hàng</h3>
                                </div>
                                <div>
                                    <form action="" method="POST">
                                        <div class="input-group rounded" id="input">



                                            <input type="search" class="form-control rounded" id="search" name="keywords" placeholder="Tìm kiếm đơn hàng" aria-label="Search" aria-describedby="search-addon" />
                                            
                                            <button type="submit" name="search">Tìm</button>
                                    </form>
                                </div>
                                <!-- end card-header -->

                                <div class="card-body">

                                    <div class="table-responsive">
                                        <table id="example3" class="table table-bordered table-hover display">
                                            <thead>
                                                <tr>
                                                    <th>Mã đơn hàng</th>
                                                    <th>Tên khách hàng</th>
                                                    <th>Ngày mua</th>
                                                    <th>Địa chỉ</th>
                                                    <th>Tổng tiền</th>
                                                    <th>Trạng thái</th>
                                                    <th>Chức năng</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            ${order.map(list => /* html */ `
                                                <tr>
                                                    <td>${list.id}</td>
                                                    <td>${list.name}</td>
                                                    <td>${list.creatdate}</td>
                                                    <td>${list.address}</td>
                                                    <td>${list.total}</td>
                                                    <td>${list.status == 0 ? "Chưa xác nhận" : list.status == 1? "Đã Xác nhận": "Đã hủy"}</td>
                                                    <td>
                                                    <a href="/#/admin/order/${list.id}/edit" class="btn-primary btn-sm"
                                                    data-placement="top" data-toggle="tooltip"
                                                    data-title="Edit"><i class="fa fa-pencil"
                                                        aria-hidden="true"></i></a>
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
                        .then(()=> reLoad(CartAdmin, "#app"));
                }
            })
        });
    }
};
export default CartAdmin;