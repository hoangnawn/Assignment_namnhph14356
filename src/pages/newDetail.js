import { get } from "../api/new";
import Footer from "../components/footer";
import Header from "../components/header"
import { monney } from "../util/reRender";

const NewDetail = {
    async render(id){
        const { data: pro } = await get(id);

        return /* html */ `
        ${Header.render()}
        
        <div class="page-heading contact-heading header-text">
        </div>


    <div class="find-us">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                        <h2>${pro.titles}</h2>
                    </div>
                </div>
            </div>
            <div class="row">
    			<img src="${pro.images}" class="img-fluid" alt="Colorlib Template">
            </div>
            <p class="desc">${pro.descs}</p>


        </div>
    </div>

        ${Footer.render()}
        `
    },
    afterRender(){
        Header.afterRender();
    }
};
export default NewDetail;