const NavAdmin = {
    render(){
        return /* html */ `
        <div class="left main-sidebar">

			<div class="sidebar-inner leftscroll">

				<div id="sidebar-menu">

					<ul>
						<li class="submenu">
							<a class="active" href="/#/admin/"><i class="fa fa-fw fa-bars"></i><span> Bảng điều khiển </span>
							</a>
						</li>

						<li class="submenu">
							<a href="/#/admin/product"><i class="fa fa-shopping-cart bigfonts"></i><span> Sản phẩm </span> </a>
						</li>

						<li class="submenu">
							<a href="/#/admin/categori"><i class="fa fa-bookmark bigfonts"></i><span> Danh mục </span> </a>
						</li>

						<li class="submenu">
							<a href="/#/admin/new"><i class="fa fa-newspaper-o bigfonts"></i><span> Tin tức </span> </a>
						</li>
						<li class="submenu">
							<a href="/#/admin/cart"><i class="fa fa-cart-arrow-down bigfonts"></i><span> Đơn hàng </span> </a>
						</li>
						<li class="submenu">
							<a href="/#/"><i class="fa fa-cart-arrow-down bigfonts"></i><span> WEBSITE </span> </a>
						</li>

					</ul>

					<div class="clearfix"></div>

				</div>

				<div class="clearfix"></div>

			</div>

		</div>
        `
    },

};
export default NavAdmin;