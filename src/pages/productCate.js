import { getAll } from "../api/categori";
import { getProductCategori } from "../api/product";
import Footer from "../components/footer";
import Header from "../components/header";
import { monney } from "../util/reRender";

const ProductCate = {
    getTitle(){
        return "Sản phẩm";
    },
    async render(id){
        console.log(id);
        const { data: cate } = await getAll();
        const { data: pro } = await getProductCategori(id);
        console.log(pro);
        return /* html */ `

        ${Header.render()};
             
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
                        <li><a class="active" data-filter="*" href="/#/product/">Tất cả sản phẩm</a></li>
                        ${cate.map((cat) =>`
                        <li><a href="/#/category/${cat.id}/">${cat.names}</a></li>

                        `).join("")}
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
    afterRender(){
        Header.afterRender();
    }
};
export default ProductCate;