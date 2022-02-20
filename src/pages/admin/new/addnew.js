import axios from "axios";
import { add } from "../../../api/new";
import HeaderAdmin from "../../../components/admin/headerAdmin";
import NavAdmin from "../../../components/admin/navAdmin";
import $ from 'jquery';
import validate from 'jquery-validation';
import { reLoad } from "../../../util/reRender";
import NewAdmin from ".";

const AddNew = {
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
                                <h1 class="main-title float-left">Thêm bài viết</h1>
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


                                    <form action="" id="formAdd">
                                        <div class="row">

                                            <div class="form-group col-xl-9 col-md-8 col-sm-12">
                                                <div class="form-group">
                                                    <label>Tiêu đề</label>
                                                    <input class="form-control" id="name" type="text" value="">

                                                </div>

                                                <div id="sample" class="form-group">
                                                    <label>Mô tả</label>
                                                    <textarea name="area2" cols="30" rows="10" id="desc" class="form-control editor" style="width: 100%;"></textarea><br>                                                    
                                            </div>
                                                <script>
                                                </script>
                                                <div class="form-group">
                                                    <label>Ảnh sản phẩm</label><br />
                                                    <input type="file" id="image">
                                                    <img id="imgpre" src="http://2.bp.blogspot.com/-MowVHfLkoZU/VhgIRyPbIoI/AAAAAAAATtI/fHk-j_MYUBs/s640/placeholder-image.jpg" class="w-40 py-4 object-cover rounded-md">
                                                </div>

                                                <div class="form-group">
                                                    <button type="submit" id="btn-them" class="btn btn-primary">Thêm
                                                        bài viết</button>
                                                    <a href="/admin/new"><button type="button"
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
    afterRender() {
        const formAdd = $("#formAdd");
        const img = document.getElementById("image");
        const date = new Date();
        const imgPreview = document.querySelector('#imgpre');
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dleceiun0/image/upload";
        const CLOUDINARY_PRESET = "brakvqrw";
        let imgLink = "";


        img.addEventListener('change', async (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
        formAdd.validate({
            rules: {
                name: {
                    required: true,
                    minlength: 5
                },
                desc: {
                    required: true,
                    minlength: 5
                },
                
            },
            messages: {
                name: {
                    required: "Phải nhập vào trường này",
                    minlength: "Phải nhập trên 5 ký tự"
                },
                desc: {
                    required: "Phải nhập vào trường này",
                    minlength: "Phải nhập trên 5 ký tự"
                },
                
            },
            submitHandler: function () {
                async function addPro() {
                    const file = img.files[0];
                    if (file) {
                        const formData = new FormData();

                        formData.append('file', file);
                        formData.append('upload_preset', CLOUDINARY_PRESET)

                        const { data } = await axios.post(CLOUDINARY_API, formData, {
                            headers: {
                                "Content-Type": "application/form-data"
                            }
                        });
                        imgLink = data.url;
                    }
                    add({
                        titles: document.getElementById("name").value,
                        descs: document.getElementById("desc").value,
                        createdAt: date.toString(),
                        images: imgLink ? imgLink : "",
                    })
                }

                addPro()
                .then(() => reLoad(NewAdmin, "#app"));

            }
        });

    }
};

export default AddNew;