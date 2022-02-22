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
      <div class="row justify-center">
        <form>
        <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3">
        <button class=" inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
        </form>
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