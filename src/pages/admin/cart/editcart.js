import { get, getOrderDetail, update } from "../../../api/order";
import HeaderAdmin from "../../../components/admin/headerAdmin";
import NavAdmin from "../../../components/admin/navAdmin";
import { monney, reLoad } from "../../../util/reRender";
import CartAdmin from "./cart";

const EditCart= {
    async render(id){
        const { data: cartDetails } = await getOrderDetail(id);
        const { data: order } = await get(id);
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
                                <h1 class="main-title float-left">Đơn hàng</h1>
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
                                        <p style='color:red;'>Sản phẩm đã chọn</p>
                                    </div>
                                <div class="table-responsive">
                                    <table id="example3" class="table table-bordered table-hover display">
                                        <thead>
                                            <tr>
                                                <th>Mã đơn hàng</th>
                                                <th>Ảnh sản phẩm</th>
                                                <th>Tên Hàng</th>
                                                <th>Số lượng</th>
                                                <th>Tổng tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        ${cartDetails.map(list => /* html */ `
                                            <tr>
                                                <td>${list.orderId}</td>
                                                <td><img style="width:100px" src="${list.product.images}" alt=""> </td>
                                                <td>${list.product.titles}</td>
                                                <td>${list.quantity}</td>
                                                <td>${monney(list.quantity * list.productPrice)}</td>
                                            </tr>
                                        
                                        `).join("")}
                                                

                                        </tbody>
                                    </table>
                                </div>
                                <!-- end card-body -->

                            </div>

                                <form action="" id="formEdit">
                                    <div class="row">
                                        <div class="form-group col-xl-9 col-md-8 col-sm-12">
                                            <div class="form-group">
                                                <label>Tên Khách hàng</label>
                                                <input class="form-control" id="name"  type="text" value="${order.name}" readonly>
                                            </div>
                                            <div class="form-group">
                                                <label>Địa chỉ</label>
                                                <input class="form-control" id="address"  type="text" value="${order.address}" readonly>

                                            </div>
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input class="form-control" id="email"  type="text" value="${order.email}" readonly>

                                            </div>
                                            <div class="form-group">
                                                <label>Ngày mua</label><br />
                                                <input class="form-control" id="creatdate"  type="text" value="${order.creatdate}"readonly>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" id="btn-them" class="btn btn-primary">Cập nhật</button>
                                                <a href="/#/admin/cart"><button type="button"
                                                        class="btn btn-info">Quay lại</button></a>
                                            </div>
                                        </div>
                                        <div class="form-group col-xl-3 col-md-4 col-sm-12 border-left">
                                            <div class="form-group">
                                                <label>Tổng tiền</label>
                                                <input type="text" class="form-control" id="total" value="${order.total}"readonly>
                                                <div class="form-group">
                                                    <label>Trạng thái</label>
                                                    <select id="status" class="form-control">
                                                        <option value="0" ${order.status == 0? "selected" : ""}>Chưa xác nhận</option>
                                                        <option value="1" ${order.status == 1? "selected" : ""}>Đã xác nhận</option>
                                                        <option value="3" ${order.status == 3? "selected" : ""}>Đã hủy</option>
                                                    </select>
                                                </div>
                                                
                                            </div>
                                        </div><!-- end row -->
                                </form>

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
        const formEdit = document.querySelector("#formEdit");
        formEdit.addEventListener("submit", (e) =>{
            e.preventDefault();
            update({
                id: id,
                name: document.getElementById("name").value,
                address: document.getElementById("address").value,
                email: document.getElementById("email").value,
                creatdate: document.getElementById("creatdate").value,
                total: document.getElementById("total").value,
                status: +document.getElementById("status").value,
            });
            window.location.href=`/admin/cart`
        });
    }
};
export default EditCart;