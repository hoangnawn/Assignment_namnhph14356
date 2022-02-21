import Footer from "../components/footer";
import Header from "../components/header";
import homeProduct from "../components/homeProduct";

const HomePage = {
    getTitle(){
        return "Trang chủ";
    },
    async render(){
        return /* html */ `

        ${await Header.render()};

        <div class="banner header-text">
        <div class="owl-banner">
          <div class="banner-item-01">
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
                        <a href="/#/contact" class="filled-button">Liên hệ ngay</a>
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
    afterRender(){
        Header.afterRender();
    }
};
export default HomePage;