const Header = {
    render(){
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
                <a class="nav-link" href="products.html">Sản phẩm</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">Tin tức</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Liên hệ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
        `
    },
};
export default Header;