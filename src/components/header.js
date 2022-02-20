import { reLoad } from "../util/reRender";

const Header = {
  render() {
    return /* html */ `
        <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="/#/"><h2>Phone <em>Giá rẻ</em></h2></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/#/">Trang chủ
                  <span class="sr-only">(current)</span>
                </a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="/#/product">Sản phẩm</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#/new">Tin tức</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#/contact">Liên hệ</a>
              </li>
            </ul>
          <div id="acchide" class="dropdown navbar-nav ml-auto">
            <a href="/#/signin" id="account" class="nut_dropdown">Đăng nhập</a>
            <div class="noidung_dropdown">
              <a href="/#/signup">Đăng ký</a>
            </div>
          </div>
          <div id="accshow" class="dropdown navbar-nav ml-auto">
            <a href="" id="acc" class="nut_dropdown"></a>
            <div class="noidung_dropdown">
            ${localStorage.getItem('user') ? '<button id="logout">Đăng Xuất</button>' : ""}
            </div>
          </div>

          <a class="ico" href="/#/cart"><i class=" fa fa-cart-arrow-down"></i></a>
          </div>
        </div>
      </nav>
    </header>

    
        `
  },
  afterRender() {
    if (localStorage.getItem('user') !== null) {
      const account = document.querySelector('#acc');
      const logout = document.querySelector('#logout');
      $('#acchide').hide()
      account.innerHTML = JSON.parse(localStorage.getItem('user')).username;
      logout.addEventListener('click', function () {
        localStorage.removeItem('user');
        alert("Đăng xuất thành công")
        window.location.reload();
      });
    } else {
      $('#acchide').show()
      $('#accshow').hide()

    }
  }
};
export default Header;