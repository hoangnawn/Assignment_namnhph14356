import { getProduct } from "../api/product";
import Footer from "../components/footer";
import Header from "../components/header";
import { monney } from "../util/reRender";

const Product = {
    async render(){
        const { data: pro } = await getProduct();
        return /* html */ `
        ${Header.render()}
        <div class="page-heading products-heading header-text">
            <div class="container">
                <div class="row">
                <div class="col-md-12">
                    <div class="text-content">
                    <h4>Tất cả sản phẩm</h4>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="products">
            <div class="container">
                <div class="row">
                <div class="col-md-12">
                    <div class="filters">
                    <ul>
                        <li class="active" data-filter="*">Tất cả sản phẩm</li>
                        <li><a href="">Iphone</a></li>
                    </ul>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="filters-content">
                        <div class="row grid">
                            ${pro.map((proo) =>  /* html */ `
                            <div class="col-lg-4 col-md-4 all des">
                            <div class="product-item">
                                <a href="/#/product/${proo.id}"><img src="${proo.images}" style="width: 200px; margin-left: 70px;" alt=""></a>
                                <div class="down-content">
                                    <a href="/#/product/${proo.id}"><h4>${proo.titles}</h4></a>
                                    <h6>${monney(proo.prices)}</h6>
                                    <p style="display:inline-block;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    max-width: 40ch">${proo.descs}</p>
                                </div>
                            </div>
                            </div>

                            `).join("")}
                            
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
export default Product;