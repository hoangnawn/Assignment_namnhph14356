import Navigo from "navigo";
import Categori from "./pages/admin/categori/categori";
import Dashbroad from "./pages/admin/dashboard";
import NewAdmin from "./pages/admin/new";
import AddNew from "./pages/admin/new/addnew";
import ProductAdmin from "./pages/admin/product";
import AddProduct from "./pages/admin/product/addproduct";
import EditProduct from "./pages/admin/product/editproduct";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import Cart from "./pages/cart";
import HomePage from "./pages/home";
import NewHome from "./pages/new";
import NewDetail from "./pages/newDetail";
import Product from "./pages/product";
import ProductCate from "./pages/productCate";
import ProductDetail from "./pages/productDetail";
import CheckOut from "./pages/checkout";
import Contact from "./pages/contact";
import UserAdmin from "./pages/admin/user/user";
import EditUser from "./pages/admin/user/edituser";
import CartAdmin from "./pages/admin/cart/cart";
import EditCart from "./pages/admin/cart/editcart";


const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
    if (content.getTitle) document.title = await content.getTitle(id);
};
router.on("/admin/*", () => {}, {
    before(done, match) {
      // do something
      if(localStorage.getItem('user')){
        const userId = JSON.parse(localStorage.getItem('user')).role;
        if(userId === 1){
            done();  
        } else {
            document.location.href="/";
        }
      } else{
          document.location.href="/";
      }
      
    }
  })

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
    "/category/:id/": ({ data }) => {
        print(ProductCate, data.id);
    },
    "/signin": () =>{
        print(SignIn)
    },
    "/signup": () =>{
        print(SignUp)
    },
    "/new": () =>{
        print(NewHome)
    },
    "/new/:id/": ({ data }) =>{
        print(NewDetail, data.id)
    },
    "/cart": () =>{
        print(Cart)
    },
    "/checkout": () =>{
        print(CheckOut)
    },
    "/contact": () =>{
        print(Contact)
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
        print(NewAdmin)
    },
    "/admin/new/add": () =>{
        print(AddNew)
    },
    "/admin/user": () =>{
        print(UserAdmin)
    },
    "/admin/user/:id/edit": ({ data }) =>{
        print(EditUser, data.id)
    },
    "/admin/cart": () =>{
        print(CartAdmin)
    },
    "/admin/order/:id/edit": ({ data }) =>{
        print(EditCart, data.id)
    },
});
router.notFound(() => print("Not Found Page"));
router.resolve();