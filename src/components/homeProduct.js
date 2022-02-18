import { getProduct } from "../api/product";
import { monney } from "../util/reRender";

const homeProduct = {
    async render(){
        const {data} = await getProduct();
        return /* html */ `
        
        <div class="latest-products">
            <div class="container">
                <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                    <h2>Tất cả sản phẩm</h2>
                    <a href="/#/product">Xem nhiều sản phẩm tại đây <i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
                ${data.map((pro)=> /* html */ `

                <div class="col-md-4">
                    <div class="product-item">
                    <a href="/#/product/${pro.id}"><img src="${pro.images}" style="width: 200px; margin-left: 70px; " alt=""></a>
                    <div class="down-content">
                        <a href="/#/product/${pro.id}"><h4>${pro.titles}</h4></a>
                        <h6>${monney(pro.prices)}</h6>
                        <p style="display:inline-block;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        max-width: 40ch">${pro.descs}</p>
                    </div>
                    </div>
                </div>  
                
                `).join("")}
            </div>
        </div>
        
        `
    },
};
export default homeProduct;