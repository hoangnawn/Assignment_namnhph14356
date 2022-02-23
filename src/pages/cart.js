import Footer from "../components/footer";
import Header from "../components/header";
import { removeItemInCart } from "../util/cart";
import { monney, reLoad } from "../util/reRender";
import { $ } from "../util/selector";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

const Cart = {
    render() {
        let cart = [];
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        console.log(cart.length);
        const getTotalPrice = () => {
            let totalPrice = 0;

            if (cart.length) {
                totalPrice = cart.reduce((total, item) => {
                    total += (item.prices) * item.quantity;
                    return total;
                }, 0);
            }
            return totalPrice;
            reLoad(Cart, "#app")
        };
        return /* html */ `
        
            ${Header.render()}
            <div class="page-heading contact-heading header-text">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-content">
                                <h4>Chi tiết giỏ hàng</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="find-us">
                <div class="container">
                    <div class="card">
                        <div class="row">
                            <div class="col-md-8 cart">
                                <div class="title">
                                    <div class="row">
                                        <div class="col">
                                            <h4><b>Chi tiết giỏ hàng</b></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="row border-top border-bottom">
                                ${cart.length > 0 ? cart.map(item =>/* html */`
                                
                                    <div class="row main align-items-center">
                                        <div class="col-2"><img class="img-fluid" src="${item.images}"></div>
                                        <div class="col">
                                            <div class="row">${item.titles}</div>
                                        </div>
                                        <div class="col"> 
                                            <button data-id="${item.id}" id="tru"  style="width:20px; font-size:20px">-</button>
                                            <input class="border" id="quatity" style="width:25px" value="${item.quantity}"></a>
                                            <button data-id="${item.id}" id="cong" style="width:20px; font-size:20px">+</button>
                                        </div>
                                        <div class="col">${monney(item.prices * item.quantity)}
                                        <button data-id="${item.id}" id="xoa" >&#10005;</button></div>
                                    </div>

                                `).join("") : `
                                    <div class="row main align-items-center">Không có mặt hàng nào</div>

                                `}
                                    
                                    
                                </div>
                                <div class="back-to-shop"><a href="/#/product">&leftarrow; <span class="text-muted">Back to
                                    shop</span></a></div>
                            </div>
                            <div class="col-md-4 summary">
                                <div>
                                    <h5><b>Tổng tiền hàng</b></h5>
                                </div>
                                <hr>
                                <div class="row">
                                    <div id="total" class="col text-center">${monney(getTotalPrice())}</div>
                                </div>
                                <a href="/#/checkout" class="btn text-white" >CHECKOUT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        ${Footer.render()}
        `
    },
    afterRender() {
        Header.afterRender();
        let carts = JSON.parse(localStorage.getItem("cart"));
        // console.log(carts);
        const btn_tru = document.querySelectorAll("#tru");
        const btn_cong = document.querySelectorAll("#cong");



        btn_tru.forEach((btn) => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id");
                tru(id);
            });
        });

        btn_cong.forEach((btn) => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id");
                cong(id);
            });
        });

        const cong = (id) => {
            const cart = carts.find((item) => item.id === +id);
            if (cart) {
                cart.quantity += 1;
            }
            localStorage.setItem("cart", JSON.stringify(carts));
            reLoad(Cart, "#app")
        };

        const tru = (id) => {
            const cart = carts.find((item) => item.id === +id);
            if (cart.quantity > 1) {
                cart.quantity -= 1;
            } else {
                if (window.confirm("Bạn có muốn xóa sản phầm này không ? ")) {
                    carts = carts.filter((item) => item.id !== id);
                }
            }

            localStorage.setItem("cart", JSON.stringify(carts));
            reLoad(Cart, "#app")
        };

        const xoa = document.querySelectorAll("#xoa");
        xoa.forEach((btn) => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id");
                console.log(id);
                removeItemInCart(id, () => {
                    toastr.success("Xóa sản phẩm thành công");
                    reLoad(Cart, "#app");
                });


            });
        });


    }
};

export default Cart;