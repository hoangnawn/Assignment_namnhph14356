import Navigo from "navigo";
import Categori from "./pages/admin/categori/categori";
import Dashbroad from "./pages/admin/dashboard";
import ProductAdmin from "./pages/admin/product";
import AddProduct from "./pages/admin/product/addproduct";
import EditProduct from "./pages/admin/product/editproduct";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import HomePage from "./pages/home";
import Product from "./pages/product";
import ProductDetail from "./pages/productDetail";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
};

router.on({
    "/": () =>{
        print(HomePage)
    },
    "/product": () =>{
        print(Product)
    },
    "/product/:id/": ({ data }) =>{
        print(ProductDetail, data.id)
    },

    "/signin": () =>{
        print(SignIn)
    },
    "/signup": () =>{
        print(SignUp)
    },
    
    "/admin": () =>{
        print(Dashbroad)
    },
    "/admin/product": () =>{
        print(ProductAdmin)
    },
    "/admin/product/add": () =>{
        print(AddProduct)
    },
    "/admin/product/:id/edit": ({ data }) =>{
        print(EditProduct, data.id)
    },
    "/admin/categori": () =>{
        print(Categori)
    },
    "/admin/categori/:id/edit": ({ data }) =>{
        print(EditCate, data.id)
    },
    "/admin/new": () =>{
        print(ProductAdmin)
    },
    "/admin/new/add": () =>{
        print(AddProduct)
    },
    "/admin/new/:id/edit": ({ data }) =>{
        print(EditProduct, data.id)
    },
});
router.notFound(() => print("Not Found Page"));
router.resolve();