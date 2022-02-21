import { add, addorder } from "../api/order";
import Footer from "../components/footer";
import Header from "../components/header";
import { monney, reLoad } from "../util/reRender";

const CheckOut = {
    async render(){
        let cart = [];
        if (localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        const getTotalPrice = () => {
            let totalPrice = 0;

            if (cart.length) {
                totalPrice = cart.reduce((total, item) => {
                    // eslint-disable-next-line no-param-reassign
                    total += (item.prices) * item.quantity;
                    return total;
                }, 0);
            }
            return totalPrice;
            reLoad(Cart, "#app")
        };
        let user = [];
        if (localStorage.getItem('user')) {

            user = JSON.parse(localStorage.getItem('user'));
        }
        return /* html */ `
            ${Header.render()}
        <div class="page-heading contact-heading header-text">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="text-content">
                            <h4>Thanh toán</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>


            <div class="container">
                <div class="py-5 text-center">
                    <h2>Thanh toán</h2>
                </div>
                <div class="row">
                    <div class="col-md-4 order-md-2 mb-4">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted">Sản phẩm</span>
                        </h4>
                        <ul class="list-group mb-3 sticky-top">
                            ${cart.length > 0 ? cart.map(item => /* html */ `
                                <li class="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 class="my-0">${item.titles}</h6>
                                    </div>
                                    <span class="text-muted">${monney(item.prices * item.quantity)}</span>
                                </li>
                            `).join(""): `
                            <div class="row main align-items-center">Không có mặt hàng nào</div>
                            
                            `}
                            
                            
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Tổng tiền</span>
                                <strong>${monney(getTotalPrice())}</strong>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-8 order-md-1">
                        <form class="needs-validation" id="formOrder" novalidate="">
                            <div class="mb-3">
                                <label for="address">Họ và tên</label>
                                <input type="text" class="form-control" id="username" placeholder="Nguyễn Văn A" value="${user.username}" required="">
                            </div>
                            <div class="mb-3">
                                <label for="email">Email <span class="text-muted">(Optional)</span></label>
                                <input type="email" class="form-control" id="email" value="${user.email }" placeholder="you@example.com">
                                <div class="invalid-feedback"> Vui lòng nhập email
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="address">Địa chỉ</label>
                                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">
                                <div class="invalid-feedback"> Vui lòng nhập địa chỉ </div>
                            </div>
                            
                            <hr class="mb-4">
                            <button  class="btn btn-primary btn-lg btn-block" type="submit">Đặt hàng</button>
                        </form>
                    </div>
                </div>
            </div>
            ${Footer.render()}
        `
    },
    afterRender(){
        let cart = [];
        if (localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        const getTotalPrice = () => {
            let totalPrice = 0;

            if (cart.length) {
                totalPrice = cart.reduce((total, item) => {
                    // eslint-disable-next-line no-param-reassign
                    total += (item.prices) * item.quantity;
                    return total;
                }, 0);
            }
            return totalPrice;
        };
        Header.afterRender();
       const formOrder = document.querySelector("#formOrder");
       formOrder.addEventListener('submit', async (e) =>{
           e.preventDefault();
           const orderData = {
            name: document.querySelector("#username").value,
               email: document.querySelector("#email").value,
               address: document.querySelector("#address").value,  
               creatdate: new Date().toISOString().slice(0,10),
               total: monney(getTotalPrice()),
               status: "Chờ xác nhận",
            };
            const { data } = await add(orderData);
            const orderId = data.id;

            const cartList = JSON.parse(localStorage.getItem("cart")) || [];
            cartList.forEach(async (cart) => {
                addorder({
                    orderId,
                    productId: cart.id,
                    productPrice: cart.prices,
                    quantity: cart.quantity,
                })
            })
            localStorage.removeItem('cart');
            reLoad(CheckOut, "#app");
       })
    }
};
export default CheckOut;