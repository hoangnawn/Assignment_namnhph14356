import { getAll } from "../api/categori";
import { getProduct, search } from "../api/product";
import Footer from "../components/footer";
import Header from "../components/header";
import { monney } from "../util/reRender";

const Search = {
    getTitle(){
        return "Tìm kiếm sản phẩm";
    },
    async render(key){
        const { data: cate } = await getAll();
        const { data: pro } = await search(key);

        return /* html */ `
        ${Header.render()}
        <div class="page-heading products-heading header-text">
            <div class="container">
                <div class="row">
                <div class="col-md-12">
                    <div class="text-content">
                    <h4>Tìm kiếm sản phẩm</h4>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="row justify-center">
        <form id="search-form" class="flex">
        <input type="search" id="key" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3">
        <button type="submit" class=" inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" id="button-addon3">Search</button>
        </form>
      </div>
        
        <div class="products">
        
            <div class="container">
                <div class="row">
                <div class="col-md-12">
                    <div class="filters">
                    <ul>
                        <li class="active" data-filter="*">Tất cả sản phẩm</li>
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
        const searchForm = document.querySelector("#search-form")
        searchForm.addEventListener('submit', (e) =>{
            e.preventDefault()
            const key = document.querySelector('#key').value;
            if(!key){
                toastr.info("vui lòng nhập từ khóa")
            }else{
                document.location.href = `/#/search/${key}`;
            }

        })
    }
};
export default Search;