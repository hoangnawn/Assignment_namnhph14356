const NavAdmin = {
    render(){
        return /* html */ `
        <div class="left main-sidebar">

			<div class="sidebar-inner leftscroll">

				<div id="sidebar-menu">

					<ul>
						<li class="submenu">
							<a class="active" href="/admin/dashboard"><i class="fa fa-fw fa-bars"></i><span> Bảng điều khiển </span>
							</a>
						</li>

						<li class="submenu">
							<a href="/admin/product"><i class="fa fa-shopping-cart bigfonts"></i><span> Sản phẩm </span> </a>
						</li>

						<li class="submenu">
							<a href="danhmuc.html"><i class="fa fa-bookmark bigfonts"></i><span> Danh mục </span> </a>
						</li>

						<li class="submenu">
							<a href="index.php?act=news"><i class="fa fa-newspaper-o bigfonts"></i><span> Tin tức </span> </a>
						</li>
						<li class="submenu">
							<a href="index.php?act=donhang"><i class="fa fa-cart-arrow-down bigfonts"></i><span> Đơn hàng </span> </a>
						</li>
						<li class="submenu">
							<a href="../index.php"><i class="fa fa-cart-arrow-down bigfonts"></i><span> WEBSITE </span> </a>
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