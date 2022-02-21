import { get, getOrderDetail } from "../../../api/order";
import HeaderAdmin from "../../../components/admin/headerAdmin";
import NavAdmin from "../../../components/admin/navAdmin";

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
                                        <p style='color:red;'></p>
                                    </div>


                                    <form action="" id="formEdit">
                                        <div class="row">
                                            <div class="form-group col-xl-9 col-md-8 col-sm-12">
                                                <div class="form-group">
                                                    <label>Tên Khách hàng</label>
                                                    <input class="form-control" id="name" name=" type="text" value="${order.name}" readonly>
                                                </div>
                                                <div class="form-group">
                                                    <label>Địa chỉ</label>
                                                    <input class="form-control" id="name" name=" type="text" value="${order.address}" readonly>

                                                </div>
                                                <div class="form-group">
                                                    <label>Ngày mua</label><br />
                                                    <input class="form-control" id="name" name=" type="text" value="${order.creatdate}"readonly>
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
                                                    <label>Tổng tiền</label>
                                                    <input type="text" class="form-control" id="price" value="${order.total}"readonly>
                                                    <div class="form-group">
                                                        <label>Trạng thái</label>
                                                        <select id="categori" class="form-control">
                                                            <option value="">Chưa xác nhận</option>
                                                        </select>
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
        const formEdit = document.querySelector("#form-edit");
        formEdit.addEventListener("submit", (e) =>{
            update({
                id: id,
                names: document.getElementById("names").value,
            });
        });
    }
};
export default EditCart;