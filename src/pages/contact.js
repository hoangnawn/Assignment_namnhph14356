import { add } from "../api/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import { reLoad } from "../util/reRender";

const Contact = {
    getTitle(){
        return "Liên hệ";
    },
    render(){
        return /* html */ `
            ${Header.render()}
            <div class="page-heading contact-heading header-text">
            <div class="container">
                <div class="row">
                <div class="col-md-12">
                    <div class="text-content">
                    <h4>Liên hệ</h4>
                    <h2>Liên hệ với chúng tôi ngay</h2>
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
                    <h2>Địa chỉ</h2>
                    </div>
                </div>
                <div class="col-md-8">
                    <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044334!2d105.74459841476343!3d21.03812778599329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1645415741814!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>                    </div>
                </div>
                <div class="col-md-4">
                    <div class="left-content">
                    <h4>Về chúng tôi</h4>
                    <p>Được xây dựng hơn 15 năm với hàng ngàn cửa hàng bán lẻ trên toàn quốc<br>
                    <br>Chúng tôi cam kết chất lượng, cũng như sự uy tín</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            
            <div class="send-message">
            <div class="container">
                <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                    <h2>Gửi yêu cầu cho chúng tôi</h2>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="contact-form">
                    <form id="contact">
                        <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <fieldset>
                            <input  type="text" class="form-control" id="name" placeholder="Họ và tên" >
                            </fieldset>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <fieldset>
                            <input  type="text" class="form-control" id="email" placeholder="E-Mail " >
                            </fieldset>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <fieldset>
                            <input  type="number" class="form-control" id="phone" placeholder="Số điện thoại">
                            </fieldset>
                        </div>
                        <div class="col-lg-12">
                            <fieldset>
                            <input type="text" class="form-control" id="message" placeholder="Yêu cầu"></textarea>
                            </fieldset>
                        </div>
                        <div class="col-lg-12">
                            <fieldset>
                            <button type="submit" id="form-submit" class="filled-button">Gửi phản hồi</button>
                            </fieldset>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                <div class="col-md-4">
                    <ul class="accordion">
                    <li>
                        <a>Liên hệ ngay với chúng tôi</a>
                        <div class="content">
                            <p>Phone Giá Rẻ là hệ thống bán lẻ uỷ quyền chính hãng của Apple Việt Nam (AAR - Apple Authorized Reseller).<br>
                            <br>Trải nghiệm trực tiếp, và dùng thử sản phẩm miễn phí                            </p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        
            ${Footer.render()}
        `
    },
    afterRender(){
        Header.afterRender();
        const formContact = document.querySelector("#contact")
        formContact.addEventListener('submit', () =>{
            add({
                name: document.querySelector("#name").value,
                email: document.querySelector("#email").value,
                phone: document.querySelector("#phone").value,
                message: document.querySelector("#message").value,
            })
        })
    }
};
export default Contact;