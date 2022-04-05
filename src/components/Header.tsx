import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <div>
        <header className="header_area header_three">
          <div className="header_top">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="top_right text-right">
                    <ul>
                      <li className="top_links"><a href="#">My Account <i className="ion-chevron-down" /></a>
                        <ul className="dropdown_links">
                          <li><a href="wishlist.html">My Wish List </a></li>
                          <li><a href="my-account.html">My Account </a></li>
                          <li><a href="#">Sign In</a></li>
                          <li><a href="compare.html">Compare Products </a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header_middel">
            <div className="container-fluid">
              <div className="middel_inner">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="search_bar">
                      <form action="#">
                        <input placeholder="Search entire store here..." type="text" />
                        <button type="submit"><i className="ion-ios-search-strong" /></button>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="logo">
                      <a href="index.html"><img src="src/assets/img/logo/logo.png" /></a>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="cart_area">
                      <div className="cart_link">
                        <a href="#"><i className="fa fa-shopping-basket" />2 item(s)</a>
                        <div className="mini_cart">
                          <div className="cart_item top">
                            <div className="cart_img">
                              <a href="#"><img src="src/assets/img/s-product/product.jpg" /></a>
                            </div>
                            <div className="cart_info">
                              <a href="#">Apple iPhone SE 16GB</a>
                              <span>1x $60.00</span>
                            </div>
                            <div className="cart_remove">
                              <a href="#"><i className="ion-android-close" /></a>
                            </div>
                          </div>
                          <div className="cart_item bottom">
                            <div className="cart_img">
                              <a href="#"><img src="src/assets/img/s-product/product2.jpg" /></a>
                            </div>
                            <div className="cart_info">
                              <a href="#">Marshall Portable Bluetooth</a>
                              <span> 1x $160.00</span>
                            </div>
                            <div className="cart_remove">
                              <a href="#"><i className="ion-android-close" /></a>
                            </div>
                          </div>
                          <div className="cart__table">
                            <table>
                              <tbody>
                                <tr>
                                  <td className="text-left">Sub-Total :</td>
                                  <td className="text-right">$150.00</td>
                                </tr>
                                <tr>
                                  <td className="text-left">Total :</td>
                                  <td className="text-right">$184.00</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="cart_button view_cart">
                            <a href="cart.html">View Cart</a>
                          </div>
                          <div className="cart_button checkout">
                            <a href="checkout.html">Checkout</a>
                          </div>
                        </div>
                        {/*mini cart end*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="horizontal_menu">
                <div className="left_menu">
                  <div className="main_menu">
                    <nav>
                      <ul>
                        <li className="active"><a href="index.html">Home <i className="fa fa-angle-down" /></a>
                          <ul className="sub_menu">
                            <li><a href="index.html">Home 1</a></li>
                            <li><a href="index-2.html">Home 2</a></li>
                            <li><a href="index-3.html">Home 3</a></li>
                            <li><a href="index-4.html">Home 4</a></li>
                            <li><a href="index-5.html">Home 5</a></li>
                            <li><a href="index-6.html">Home 6</a></li>
                            <li><a href="index-7.html">Home 7</a></li>
                            <li><a href="index-8.html">Home 8</a></li>
                          </ul>
                        </li>
                        <li className="mega_items"><a href="shop.html">shop <i className="fa fa-angle-down" /></a>
                          <ul className="mega_menu">
                            <li><a href="#">Shop Layouts</a>
                              <ul>
                                <li><a href="shop-fullwidth.html">Full Width</a></li>
                                <li><a href="shop-fullwidth-list.html">Full Width list</a></li>
                                <li><a href="shop-right-sidebar.html">Right Sidebar </a></li>
                                <li><a href="shop-right-sidebar-list.html"> Right Sidebar list</a>
                                </li>
                                <li><a href="shop-list.html">List View</a></li>
                              </ul>
                            </li>
                            <li><a href="#">other Pages</a>
                              <ul>
                                <li><a href="portfolio.html">portfolio</a></li>
                                <li><a href="portfolio-details.html">portfolio details</a></li>
                                <li><a href="cart.html">cart</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="my-account.html">my account</a></li>
                              </ul>
                            </li>
                            <li><a href="#">Product Types</a>
                              <ul>
                                <li><a href="product-details.html">product details</a></li>
                                <li><a href="product-sidebar.html">product sidebar</a></li>
                                <li><a href="product-gallery.html">product gallery</a></li>
                                <li><a href="product-grouped.html">product grouped</a></li>
                                <li><a href="variable-product.html">product variable</a></li>
                              </ul>
                            </li>
                            <li><a href="#">collection</a>
                              <ul>
                                <li><a href="shop.html">Handbag</a></li>
                                <li><a href="shop.html">Accessories</a></li>
                                <li><a href="shop.html">Clothing</a></li>
                                <li><a href="shop.html">Shoes</a></li>
                                <li><a href="shop.html">Check Trousers</a></li>
                              </ul>
                            </li>
                            <li className="banner_menu"><a href="#"><img src="src/assets/img/bg/banner1.jpg" /></a></li>
                          </ul>
                        </li>
                        <li><a href="blog.html">blog <i className="fa fa-angle-down" /></a>
                          <ul className="sub_menu pages">
                            <li><a href="blog-details.html">blog details</a></li>
                            <li><a href="blog-sidebar.html">blog Sidebar</a></li>
                            <li><a href="blog-fullwidth.html">blog fullwidth</a></li>
                          </ul>
                        </li>
                        <li><a href="#">pages <i className="fa fa-angle-down" /></a>
                          <ul className="sub_menu pages">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="services.html">services</a></li>
                            <li><a href="faq.html">Frequently Questions</a></li>
                            <li><a href="login.html">login</a></li>
                            <li><a href="my-account.html">my account</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                            <li><a href="404.html">Error 404</a></li>
                            <li><a href="compare.html">compare</a></li>
                            <li><a href="privacy-policy.html">privacy policy</a></li>
                            <li><a href="coming-soon.html">coming soon</a></li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="logo_container">
                  <a href="index.html"><img src="src/assets/img/logo/logo.png" /></a>
                </div>
                <div className="right_menu">
                  <div className="main_menu">
                    <nav>
                      <ul>
                        <li><a href="#">Specials</a></li>
                        <li><a href="#">Sneaker</a></li>
                        <li><a href="about.html">About us</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header_bottom sticky-header">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="main_menu_inner">
                    <div className="main_menu">
                      <nav>
                        <ul>
                          <li className="active"><a href="index.html">Home </a></li>
                          <li><a href="shop_category.html">shop </a></li>
                          <li><a href="about.html">About us</a></li>
                          <li><a href="#">pages <i className="fa fa-angle-down" /></a>
                            <ul className="sub_menu pages">
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="services.html">services</a></li>
                              <li><a href="faq.html">Frequently Questions</a></li>
                              <li><a href="login.html">login</a></li>
                              <li><a href="my-account.html">my account</a></li>
                              <li><a href="wishlist.html">Wishlist</a></li>
                              <li><a href="404.html">Error 404</a></li>
                              <li><a href="compare.html">compare</a></li>
                              <li><a href="privacy-policy.html">privacy policy</a></li>
                              <li><a href="coming-soon.html">coming soon</a></li>
                            </ul>
                          </li>
                          <li><a href="blog.html">blog</a></li>
                          <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <div className="slider_area slider_style home_three_slider owl-carousel">
          <div className="single_slider" data-bgimg="src/assets/img/slider/slider4.jpg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="slider_content content_one">
                    <img src="src/assets/img/slider/content3.png" />
                    <p>the wooboom clothing summer collection is back at half price</p>
                    <a href="shop.html">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/*slider area end*/}
        {/*banner area start*/}
        <div className="banner_section banner_section_three">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-lg-4 col-md-6">
                <div className="banner_area">
                  <div className="banner_thumb">
                    <a href="shop.html"><img src="src/assets/img/bg/banner8.jpg" alt="#" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="banner_area">
                  <div className="banner_thumb">
                    <a href="shop.html"><img src="src/assets/img/bg/banner9.jpg" alt="#" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="banner_area bottom">
                  <div className="banner_thumb">
                    <a href="shop.html"><img src="src/assets/img/bg/banner10.jpg" alt="#" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
};

export default Header;