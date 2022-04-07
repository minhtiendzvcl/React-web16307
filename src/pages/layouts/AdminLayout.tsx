import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    
      <><>
      <div>
        <style dangerouslySetInnerHTML={{ __html: "\n       /* Googlefont Poppins CDN Link */\n        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');\n        *{\n          margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: 'Poppins', sans-serif;\n}\n        .sidebar{\n          position: fixed;\n        height: 100%;\n        width: 240px;\n        background: #0A2558;\n        transition: all 0.5s ease;\n}\n        .sidebar.active{\n          width: 60px;\n}\n        .sidebar .logo-details{\n          height: 80px;\n        display: flex;\n        align-items: center;\n}\n        .sidebar .logo-details i{\n          font - size: 28px;\n        font-weight: 500;\n        color: #fff;\n        min-width: 60px;\n        text-align: center\n}\n        .sidebar .logo-details .logo_name{\n          color: #fff;\n        font-size: 24px;\n        font-weight: 500;\n}\n        .sidebar .nav-links{\n          margin - top: 10px;\n}\n        .sidebar .nav-links li{\n          position: relative;\n        list-style: none;\n        height: 50px;\n}\n        .sidebar .nav-links li a{\n          height: 100%;\n        width: 100%;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        transition: all 0.4s ease;\n}\n        .sidebar .nav-links li a.active{\n          background: #081D45;\n}\n        .sidebar .nav-links li a:hover{\n          background: #081D45;\n}\n        .sidebar .nav-links li i{\n          min - width: 60px;\n        text-align: center;\n        font-size: 18px;\n        color: #fff;\n}\n        .sidebar .nav-links li a .links_name{\n          color: #fff;\n        font-size: 15px;\n        font-weight: 400;\n        white-space: nowrap;\n}\n        .sidebar .nav-links .log_out{\n          position: absolute;\n        bottom: 0;\n        width: 100%;\n}\n        .home-section{\n          position: relative;\n        background: #f5f5f5;\n        min-height: 100vh;\n        width: calc(100% - 240px);\n        left: 240px;\n        transition: all 0.5s ease;\n}\n        .sidebar.active ~ .home-section{\n          width: calc(100% - 60px);\n        left: 60px;\n}\n        .home-section nav{\n          display: flex;\n        justify-content: space-between;\n        height: 80px;\n        background: #fff;\n        display: flex;\n        align-items: center;\n        position: fixed;\n        width: calc(100% - 240px);\n        left: 240px;\n        z-index: 100;\n        padding: 0 20px;\n        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n        transition: all 0.5s ease;\n}\n        .sidebar.active ~ .home-section nav{\n          left: 60px;\n        width: calc(100% - 60px);\n}\n        .home-section nav .sidebar-button{\n          display: flex;\n        align-items: center;\n        font-size: 24px;\n        font-weight: 500;\n}\n        nav .sidebar-button i{\n          font - size: 35px;\n        margin-right: 10px;\n}\n        .home-section nav .search-box{\n          position: relative;\n        height: 50px;\n        max-width: 550px;\n        width: 100%;\n        margin: 0 20px;\n}\n        nav .search-box input{\n          height: 100%;\n        width: 100%;\n        outline: none;\n        background: #F5F6FA;\n        border: 2px solid #EFEEF1;\n        border-radius: 6px;\n        font-size: 18px;\n        padding: 0 15px;\n}\n        nav .search-box .bx-search{\n          position: absolute;\n        height: 40px;\n        width: 40px;\n        background: #2697FF;\n        right: 5px;\n        top: 50%;\n        transform: translateY(-50%);\n        border-radius: 4px;\n        line-height: 40px;\n        text-align: center;\n        color: #fff;\n        font-size: 22px;\n        transition: all 0.4 ease;\n}\n        .home-section nav .profile-details{\n          display: flex;\n        align-items: center;\n        background: #F5F6FA;\n        border: 2px solid #EFEEF1;\n        border-radius: 6px;\n        height: 50px;\n        min-width: 190px;\n        padding: 0 15px 0 2px;\n}\n        nav .profile-details img{\n          height: 40px;\n        width: 40px;\n        border-radius: 6px;\n        object-fit: cover;\n}\n        nav .profile-details .admin_name{\n          font - size: 15px;\n        font-weight: 500;\n        color: #333;\n        margin: 0 10px;\n        white-space: nowrap;\n}\n        nav .profile-details i{\n          font - size: 25px;\n        color: #333;\n}\n        .home-section .home-content{\n          position: relative;\n        padding-top: 104px;\n}\n        .home-content .overview-boxes{\n          display: flex;\n        align-items: center;\n        justify-content: space-between;\n        flex-wrap: wrap;\n        padding: 0 20px;\n        margin-bottom: 26px;\n}\n        .overview-boxes .box{\n          display: flex;\n        align-items: center;\n        justify-content: center;\n        width: calc(100% / 4 - 15px);\n        background: #fff;\n        padding: 15px 14px;\n        border-radius: 12px;\n        box-shadow: 0 5px 10px rgba(0,0,0,0.1);\n}\n        .overview-boxes .box-topic{\n          font - size: 20px;\n        font-weight: 500;\n}\n        .home-content .box .number{\n          display: inline-block;\n        font-size: 35px;\n        margin-top: -6px;\n        font-weight: 500;\n}\n        .home-content .box .indicator{\n          display: flex;\n        align-items: center;\n}\n        .home-content .box .indicator i{\n          height: 20px;\n        width: 20px;\n        background: #8FDACB;\n        line-height: 20px;\n        text-align: center;\n        border-radius: 50%;\n        color: #fff;\n        font-size: 20px;\n        margin-right: 5px;\n}\n        .box .indicator i.down{\n          background: #e87d88;\n}\n        .home-content .box .indicator .text{\n          font - size: 12px;\n}\n        .home-content .box .cart{\n          display: inline-block;\n        font-size: 32px;\n        height: 50px;\n        width: 50px;\n        background: #cce5ff;\n        line-height: 50px;\n        text-align: center;\n        color: #66b0ff;\n        border-radius: 12px;\n        margin: -15px 0 0 6px;\n}\n        .home-content .box .cart.two{\n          color: #2BD47D;\n        background: #C0F2D8;\n }\n        .home-content .box .cart.three{\n          color: #ffc233;\n        background: #ffe8b3;\n }\n        .home-content .box .cart.four{\n          color: #e05260;\n        background: #f7d4d7;\n }\n        .home-content .total-order{\n          font - size: 20px;\n        font-weight: 500;\n}\n        .home-content .sales-boxes{\n          display: flex;\n        justify-content: space-between;\n  /* padding: 0 20px; */\n}\n\n        /* left box */\n        .home-content .sales-boxes .recent-sales{\n          width: 65%;\n        background: #fff;\n        padding: 20px 30px;\n        margin: 0 20px;\n        border-radius: 12px;\n        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n        .home-content .sales-boxes .sales-details{\n          display: flex;\n        align-items: center;\n        justify-content: space-between;\n}\n        .sales-boxes .box .title{\n          font - size: 24px;\n        font-weight: 500;\n  /* margin-bottom: 10px; */\n}\n        .sales-boxes .sales-details li.topic{\n          font - size: 20px;\n        font-weight: 500;\n}\n        .sales-boxes .sales-details li{\n          list - style: none;\n        margin: 8px 0;\n}\n        .sales-boxes .sales-details li a{\n          font - size: 18px;\n        color: #333;\n        font-size: 400;\n        text-decoration: none;\n}\n        .sales-boxes .box .button{\n          width: 100%;\n        display: flex;\n        justify-content: flex-end;\n}\n        .sales-boxes .box .button a{\n          color: #fff;\n        background: #0A2558;\n        padding: 4px 12px;\n        font-size: 15px;\n        font-weight: 400;\n        border-radius: 4px;\n        text-decoration: none;\n        transition: all 0.3s ease;\n}\n        .sales-boxes .box .button a:hover{\n          background:  #0d3073;\n}\n\n        /* Right box */\n        .home-content .sales-boxes .top-sales{\n          width: 35%;\n        background: #fff;\n        padding: 20px 30px;\n        margin: 0 20px 0 0;\n        border-radius: 12px;\n        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n        .sales-boxes .top-sales li{\n          display: flex;\n        align-items: center;\n        justify-content: space-between;\n        margin: 10px 0;\n}\n        .sales-boxes .top-sales li a img{\n          height: 40px;\n        width: 40px;\n        object-fit: cover;\n        border-radius: 12px;\n        margin-right: 10px;\n        background: #333;\n}\n        .sales-boxes .top-sales li a{\n          display: flex;\n        align-items: center;\n        text-decoration: none;\n}\n        .sales-boxes .top-sales li .product,\n        .price{\n          font - size: 17px;\n        font-weight: 400;\n        color: #333;\n}\n        /* Responsive Media Query */\n        @media (max-width: 1240px) {\n  .sidebar{\n          width: 60px;\n  }\n        .sidebar.active{\n          width: 220px;\n  }\n        .home-section{\n          width: calc(100% - 60px);\n        left: 60px;\n  }\n        .sidebar.active ~ .home-section{\n          /* width: calc(100% - 220px); */\n          overflow: hidden;\n        left: 220px;\n  }\n        .home-section nav{\n          width: calc(100% - 60px);\n        left: 60px;\n  }\n        .sidebar.active ~ .home-section nav{\n          width: calc(100% - 220px);\n        left: 220px;\n  }\n}\n        @media (max-width: 1150px) {\n  .home - content.sales - boxes{\n          flex - direction: column;\n  }\n        .home-content .sales-boxes .box{\n          width: 100%;\n        overflow-x: scroll;\n        margin-bottom: 30px;\n  }\n        .home-content .sales-boxes .top-sales{\n          margin: 0;\n  }\n}\n        @media (max-width: 1000px) {\n  .overview - boxes.box{\n          width: calc(100% / 2 - 15px);\n        margin-bottom: 15px;\n  }\n}\n        @media (max-width: 700px) {\n          nav.sidebar - button.dashboard,\n          nav.profile - details.admin_name,\n          nav.profile - details i{\n          display: none;\n  }\n        .home-section nav .profile-details{\n          height: 50px;\n        min-width: 40px;\n  }\n        .home-content .sales-boxes .sales-details{\n          width: 560px;\n  }\n}\n        @media (max-width: 550px) {\n  .overview - boxes.box{\n          width: 100%;\n        margin-bottom: 15px;\n  }\n        .sidebar.active ~ .home-section nav .profile-details{\n          display: none;\n  }\n}\n        @media (max-width: 400px) {\n  .sidebar{\n          width: 0;\n  }\n        .sidebar.active{\n          width: 60px;\n  }\n        .home-section{\n          width: 100%;\n        left: 0;\n  }\n        .sidebar.active ~ .home-section{\n          left: 60px;\n        width: calc(100% - 60px);\n  }\n        .home-section nav{\n          width: 100%;\n        left: 0;\n  }\n        .sidebar.active ~ .home-section nav{\n          left: 60px;\n        width: calc(100% - 60px);\n  }\n}\n      " }} />
        <div className="sidebar">
          <div className="logo-details">
            <i className="bx bxl-c-plus-plus" />
            <span className="logo_name">CodingLab</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#" className="active">
                <i className="bx bx-grid-alt" />
                <span className="links_name">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-box" />
                <span className="links_name">Product</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-list-ul" />
                <span className="links_name">Order list</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-pie-chart-alt-2" />
                <span className="links_name">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-coin-stack" />
                <span className="links_name">Stock</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-book-alt" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-user" />
                <span className="links_name">Team</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-message" />
                <span className="links_name">Messages</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-heart" />
                <span className="links_name">Favrorites</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-cog" />
                <span className="links_name">Setting</span>
              </a>
            </li>
            <li className="log_out">
              <a href="#">
                <i className="bx bx-log-out" />
                <span className="links_name">Log out</span>
              </a>
            </li>
          </ul>
        </div>
        <section className="home-section">
          <nav>
            <div className="sidebar-button">
              <i className="bx bx-menu sidebarBtn" />
              <span className="dashboard">Dashboard</span>
            </div>
            <div className="search-box">
              <input type="text" placeholder="Search..." />
              <i className="bx bx-search" />
            </div>
            <div className="profile-details">
              {/*<img src="images/profile.jpg" alt="">*/}
              <span className="admin_name">Prem Shahi</span>
              <i className="bx bx-chevron-down" />
            </div>
          </nav>
          <div className="home-content">
          <Outlet />
          </div>
        </section>
      </div>

    </><main>
       
      </main></>

      )
}

      export default AdminLayout