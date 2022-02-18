const HeaderAdmin = {
    render(){
        return /* html */`
        <div class="headerbar">
			<!-- LOGO -->
			<div class="headerbar-left">
				<a href="/#/admin/" class="logo">Admin</a>
			</div>
			<nav class="navbar-custom">

				<ul class="list-inline float-right mb-0">
					<li class="list-inline-item dropdown notif">
						<a class="nav-link dropdown-toggle nav-user" data-toggle="dropdown" href="#" role="button"
							aria-haspopup="false" aria-expanded="false">
							<img src="https://res.cloudinary.com/dleceiun0/image/upload/v1645004758/hrktxwkfxppzstwdjihf.jpg" alt="Profile image" class="avatar-rounded">
						</a>
						<div class="dropdown-menu dropdown-menu-right profile-dropdown ">
							<!-- item-->
							<div class="dropdown-item noti-title">
								<h5 class="text-overflow"><small>Xin chào, admin</small> </h5>
							</div>
							<!-- item-->
							<a href="#" class="dropdown-item notify-item">
								<i class="fa fa-power-off"></i> <span>Đăng xuất</span>
							</a>
						</div>
					</li>

				</ul>
				<ul class="list-inline menu-left mb-0">
					<li class="float-left">
						<button class="button-menu-mobile open-left">
							<i class="fa fa-fw fa-bars"></i>
						</button>
					</li>
				</ul>

			</nav>

		</div>
        `
    },
};
export default HeaderAdmin;