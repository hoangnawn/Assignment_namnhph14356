import HeaderAdmin from "../../../components/admin/headerAdmin";
import NavAdmin from "../../../components/admin/navAdmin";

const AddProduct = {
    render(){
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


                                    <form action="index.php?act=add-sp" method="post" enctype="multipart/form-data">
                                        <div class="row">

                                            <div class="form-group col-xl-9 col-md-8 col-sm-12">
                                                <div class="form-group">
                                                    <label>Tên sp</label>
                                                    <input class="form-control" name="tensp" type="text" value="">
                                                    <input class="form-control" name="so_luot_xem" type="hidden">

                                                </div>

                                                <div class="form-group">
                                                    <label>Mô tả</label>
                                                    <textarea rows="3" class="form-control editor"
                                                        name="mota"></textarea>

                                                </div>

                                                <div class="form-group">
                                                    <label>Ảnh sản phẩm</label><br />
                                                    <input type="file" name="anh_sp">

                                                </div>

                                                <div class="form-group">
                                                    <button type="submit" name="btn-them" class="btn btn-primary">Thêm
                                                        sản phẩm</button>
                                                    <a href="index.php?act=sanpham"><button type="button"
                                                            class="btn btn-info">Quay lại</button></a>
                                                </div>
                                            </div>

                                            <div class="form-group col-xl-3 col-md-4 col-sm-12 border-left">
                                                <div class="form-group">
                                                    <label>Giá</label>
                                                    <input type="text" class="form-control" name="gia" value="">

                                                    <div class="form-group">
                                                        <label>Danh mục</label>
                                                        <select name="dm" class="form-control">
                                                            <option value="">- Chọn -</option>
                                                            <option value="">' . $ten_danhmuc . '</option>
                                                        </select>

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
};
export default AddProduct;