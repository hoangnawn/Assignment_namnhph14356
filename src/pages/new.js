
import { getAll } from "../api/new";
import Footer from "../components/footer";
import Header from "../components/header";
import { monney } from "../util/reRender";

const NewHome = {
    async render(){
        const { data: pro } = await getAll()

        return /* html */ `
        ${Header.render()}
        <div class="page-heading products-heading header-text">
            <div class="container">
                <div class="row">
                <div class="col-md-12">
                    <div class="text-content">
                    <h4>Tin tức</h4>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="products">
            <div class="container">
                <div class="row">
                <div class="col-md-12">
                    <div class="filters-content">
                        <div class="row grid">
                            ${pro.map((proo) =>  /* html */ `
                            <div class="col-lg-4 col-md-4 all des">
                            <div class="product-item">
                                <a href="/#/new/${proo.id}"><img src="${proo.images}" style="width: 300px; margin-left: 15px;" alt=""></a>
                                <div class="down-content">
                                    <a href="/#/new/${proo.id}"><h4>${proo.titles}</h4></a>
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
export default NewHome;