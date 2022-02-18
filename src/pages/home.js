import Footer from "../components/footer";
import Header from "../components/header";
import homeProduct from "../components/homeProduct";

const HomePage = {
    async render(){
        return /* html */ `

        ${Header.render()}

        <div class="banner header-text">
            <div class="owl-banner owl-carousel">
                <div class="banner-item-01">
                <div class="text-content">
                    <h4>Best Offer</h4>
                    <h2>New Arrivals On Sale</h2>
                </div>
                </div>
                <div class="banner-item-02">
                <div class="text-content">
                    <h4>Flash Deals</h4>
                    <h2>Get your best products</h2>
                </div>
                </div>
                <div class="banner-item-03">
                <div class="text-content">
                    <h4>Last Minute</h4>
                    <h2>Grab last minute deals</h2>
                </div>
                </div>
            </div>
        </div>

        ${await homeProduct.render()}

        <div class="call-to-action">
            <div class="container">
                <div class="row">
                <div class="col-md-12">
                    <div class="inner-content">
                    <div class="row">
                        <div class="col-md-8">
                        <h4>Liên Hệ với <em>Chúng tôi</em> Ngay</h4>
                        <p>Chúng tôi luôn cho ra những sản phẩm chất lượng tốt nhất</p>
                        </div>
                        <div class="col-md-4">
                        <a href="#" class="filled-button">Liên hệ ngay</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        ${Footer.render()}
        `
    },
};
export default HomePage;