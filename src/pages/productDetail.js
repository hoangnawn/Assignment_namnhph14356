import { get } from "../api/product";
import Footer from "../components/footer";
import Header from "../components/header"
import { monney } from "../util/reRender";
import { $ } from "../util/selector";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import { addToCart } from "../util/cart";


const ProductDetail = {
    getTitle(){
        return "Chi tiết sản phẩm";
    },
    async render(id){
        const { data: pro } = await get(id);

        return /* html */ `
        ${Header.render()}
        
        <div class="page-heading products-heading header-text">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="text-content">
                        <h4>Chi tiết sản phẩm</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="find-us">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                        <h2>Chi tiết sản phẩm</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 mb-5 ftco-animate">
    				<a href="images/product-1.jpg" class="image-popup"><img src="${pro.images}" class="img-fluid" alt="Colorlib Template"></a>
    			</div>
                <div class="col-lg-6 product-details pl-md-5 ftco-animate">
                    <h3>${pro.titles}</h3>
                    <p class="price"><span>${monney(pro.prices)}</span></p>
                    <p>${pro.contents}</p>
                    <div class="row mt-4">
                        <div class="w-100"></div>
                        <div class="input-group col-md-6 d-flex mb-3">
                            <span class="input-group-btn mr-2">
                                <button onclick="var result = document.getElementById('quantity'); var qty = result.value; if( !isNaN(qty) &amp; qty > 1 ) result.value--;return false;" id="plus" type="button" class="fa fa-minus btn" data-type="minus" data-field="">
                                    <i class="ion-ios-remove"></i>
                                </button>
                            </span>
                            <input type="text" style="margin-top:20px" id="quantity" name="quantity" class="form-control input-number" value="1"
                                min="1" max="100">
                            <span class="input-group-btn ml-2">
                                <button onclick="var result = document.getElementById('quantity'); var qty = result.value; if( !isNaN(qty)) result.value++;return false;" id="minus" type="button" class="fa fa-plus btn" data-type="plus" data-field="">
                                    <i class="ion-ios-add"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <p><button class="btn filled-button py-3 px-5" id="addCart">Add to Cart</button></p>
                    
                </div>
            </div>
            <p class="desc">${pro.descs}</p>

        </div>
    </div>

        ${Footer.render()}
        `
    },
    afterRender(id){
        Header.afterRender();
        $('#addCart').addEventListener('click', async function(){
            const { data } = await get(id);
            addToCart({...data, quantity: +$('#quantity').value}, () =>{
                toastr.success("thêm thành công")
            })
        })
    }
};
export default ProductDetail;