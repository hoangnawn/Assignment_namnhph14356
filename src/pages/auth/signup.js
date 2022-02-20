import { signup } from "../../api/user";
import Footer from "../../components/footer";
import Header from "../../components/header"
import $ from 'jquery';
import validate from 'jquery-validation';

const SignUp = {
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
                                    <h3 class="display-4">Đăng ký!!</h3> <br>
                                    <form id="signup">
                                        <div class="form-group mb-3"> <input id="username" name="username" type="text" placeholder="Họ và tên" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"> </div>
                                        <div class="form-group mb-3"> <input id="email" name="email"  type="email" placeholder="Email " required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"> </div>
                                        <div class="form-group mb-3"> <input id="pass" name="pass" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-danger"><br> </div>
                                        <input id="role" type="hidden" value="2">
                                        <button type="submit" class="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm">Đăng ký</button>
                                        <div class="text-center d-flex justify-content-between mt-4">
                                            <p> Hoặc &nbsp<a href="/#/signin" class="font-italic text-muted"> <u>Đăng nhập</u></a></p>
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
        const formSigup = $('#signup');
        formSigup.validate({
            rules: {
                username: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    minlength: 5
                },
                pass: {
                    required: true,
                    minlength: 5
                },
            },
            messages: {
                username: {
                    required: "Phải nhập vào trường này",
                    minlength: "Phải nhập trên 5 ký tự"
                },
                email: {
                    required: "Phải nhập vào trường này",
                    minlength: "Phải nhập trên 5 ký tự"
                },
                pass: {
                    required: "Phải nhập vào trường này",
                    minlength: "Phải nhập trên 5 ký tự"
                },
                
            },
            submitHandler: function(){
                    async function signupUser(){
                        try {
                            const response = await signup({
                                username: document.querySelector('#username').value,
                                email: document.querySelector('#email').value,
                                password: document.querySelector('#pass').value,
                                role: +document.querySelector('#role').value
                            });
                            console.log(response);
            
                        } catch (error) {
                            console.log(error.response.data);
                        }
                }
                signupUser();
            }
        })
    },
};
export default SignUp;