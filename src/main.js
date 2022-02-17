import Navigo from "navigo";
import Categori from "./pages/admin/categori/categori";
import Dashbroad from "./pages/admin/dashboard";
import ProductAdmin from "./pages/admin/product";
import AddProduct from "./pages/admin/product/addproduct";
import EditProduct from "./pages/admin/product/editproduct";
import HomePage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
};

router.on({
    "/": () =>{
        print(HomePage)
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
});
router.notFound(() => print("Not Found Page"));
router.resolve();