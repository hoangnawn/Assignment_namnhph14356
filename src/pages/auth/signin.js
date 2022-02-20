import Footer from "../../components/footer";
import Header from "../../components/header"
import $ from 'jquery';
import validate from 'jquery-validation';
import { signin } from "../../api/user";

const SignIn = {
    render(){
        return /* html */ `
        ${Header.render()}
        <div class="bi container-fluid">
            <div class="row no-gutter">
                <div class="col-md-6 d-none d-md-flex bg-image"></div>
                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7 col-xl-6 mx-auto">
                                    <h3 class="display-4">Đăng nhập!!</h3> <br>
                                    <form id="signin">
                                    <div class="form-group mb-3"> <input id="email" name="email"  type="email" placeholder="Email " required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"> </div>
                                    <div class="form-group mb-3"> <input id="pass" name="pass" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-danger"><br> </div>
                                        <div class="custom-control custom-checkbox mb-3"> <input id="customCheck1" type="checkbox" checked class="custom-control-input"> <label for="customCheck1" class="custom-control-label">Remember password</label> </div> 
                                        <button type="submit" class="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm">Đăng nhập</button>
                                        <div class="text-center d-flex justify-content-between mt-4">
                                            <p> Hoặc &nbsp<a href="/#/signup" class="font-italic text-muted"> <u>Đăng ký</u></a></p>
                                        </div>
                                    </form>
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
        const formSigIn = document.querySelector('#signin');
        formSigIn.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const response = await signin({
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#pass').value,
                });
                
                localStorage.setItem('user', JSON.stringify(response.data.user));
                if(response.data.user.role === 1){
                    document.location.href="/admin/";
                } else {
                    document.location.href="/";
                }
                console.log(response.data.user);
            } catch (error) {
                console.log(error.response.data);
            }
        });
    },
};
export default SignIn;