import React from "react";
import { ProductType } from '../types/product'
type ProductProps = {
    products: ProductType[]
}
const Product = (props: ProductProps) => {
    return (
        <>
            <div className="shop_area shop_reverse">
                <div className="container">
                    <div className="shop_inner_area">
                        <div className="row">
                            <div className="col-lg-3 col-md-12">
                                {/*sidebar widget start*/}
                                <div className="sidebar_widget">
                                    <div className="widget_list widget_filter">
                                        <h2>Filter by price</h2>
                                        <form action="#">
                                            <div id="slider-range" />
                                            <button type="submit">Filter</button>
                                            <input type="text" name="text" id="amount" />
                                        </form>
                                    </div>
                                    <div className="widget_list widget_categories">
                                        <h2>Product categories</h2>
                                        <ul>
                                            <li><a href="#">Categories1 <span>6</span></a> </li>
                                            <li><a href="#"> Categories2 <span>10</span></a> </li>
                                            <li><a href="#">Categories3 <span>4</span></a> </li>
                                            <li><a href="#"> Categories4 <span>4</span></a> </li>
                                            <li><a href="#">Categories5 <span>3</span></a> </li>
                                        </ul>
                                    </div>
                                    <div className="widget_list widget_categories">
                                        <h2>Manufacturer</h2>
                                        <ul>
                                            <li><a href="#">Calvin Klein <span>6</span></a> </li>
                                            <li><a href="#"> Chanel <span>10</span></a> </li>
                                            <li><a href="#">Christian Dior <span>4</span></a> </li>
                                            <li><a href="#"> ferragamo <span>4</span></a> </li>
                                            <li><a href="#">hermes <span>10</span></a> </li>
                                            <li><a href="#">louis vuitton <span>8</span></a> </li>
                                            <li><a href="#">Tommy Hilfiger <span>7</span></a> </li>
                                            <li><a href="#">Versace <span>6</span></a> </li>
                                        </ul>
                                    </div>
                                    <div className="widget_list widget_categories">
                                        <h2>Select By Color</h2>
                                        <ul>
                                            <li><a href="#">Black <span>6</span></a> </li>
                                            <li><a href="#"> Blue <span>10</span></a> </li>
                                            <li><a href="#">Brown <span>4</span></a> </li>
                                            <li><a href="#"> Green <span>4</span></a> </li>
                                            <li><a href="#">Pink <span>7</span></a> </li>
                                            <li><a href="#">White<span>8</span></a> </li>
                                            <li><a href="#">Yellow <span>5</span></a> </li>
                                        </ul>
                                    </div>
                                    <div className="widget_list tag-cloud">
                                        <h2>Popular Tags</h2>
                                        <div className="tag_widget">
                                            <ul>
                                                <li><a href="#">Creams</a></li>
                                                <li><a href="#">Eyebrow Pencil</a></li>
                                                <li><a href="#">Eyeliner</a></li>
                                                <li><a href="#">Eye Shadow</a></li>
                                                <li><a href="#">Lotions</a></li>
                                                <li><a href="#">Mascara</a></li>
                                                <li><a href="#">Oils</a></li>
                                                <li><a href="#">Powders</a></li>
                                                <li><a href="#">Shampoos</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/*sidebar widget end*/}
                            </div>
                            <div className="col-lg-9 col-md-12">
                                {/*shop wrapper start*/}
                                {/*shop toolbar start*/}
                                <div className="shop_title">
                                    <h1>shop</h1>
                                </div>
                                <div className="shop_toolbar_wrapper">
                                    <div className="shop_toolbar_btn">
                                        <button data-role="grid_3" type="button" className="active btn-grid-3" data-toggle="tooltip" />
                                        <button data-role="grid_4" type="button" className=" btn-grid-4" data-toggle="tooltip" />
                                        <button data-role="grid_5" type="button" className="btn-grid-5" data-toggle="tooltip" />
                                        <button data-role="grid_list" type="button" className="btn-list" data-toggle="tooltip" title="List" />
                                    </div>
                                    <div className=" niceselect_option">
                                        <form className="select_option" action="#">
                                            <select name="orderby" id="short">
                                                <option selected value={1}>Sort by average rating</option>
                                                <option value={2}>Sort by popularity</option>
                                                <option value={3}>Sort by newness</option>
                                                <option value={4}>Sort by price: low to high</option>
                                                <option value={5}>Sort by price: high to low</option>
                                                <option value={6}>Product Name: Z</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className="page_amount">
                                        <p>Showing 1–9 of 21 results</p>
                                    </div>
                                </div>
                                {/*shop toolbar end*/}
                                <div className="row shop_wrapper">
                                    {props.products?.map((product) => {
                                        return <>
                                            <div className="col-lg-4 col-md-4 col-12 ">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <a className="primary_img" href="product-details.html"><img src="src/assets/img/product/product15.jpg" /></a>
                                                        <a className="secondary_img" href="product-details.html"><img src="src/assets/img/product/product16.jpg" /></a>
                                                        <div className="quick_button">
                                                            <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                        </div>
                                                        <div className="double_base">
                                                            <div className="product_sale">
                                                                <span>-7%</span>
                                                            </div>
                                                            <div className="label_product">
                                                                <span>new</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product_content grid_content">
                                                        <h3>{product.name}</h3>
                                                        <span className="current_price">{product.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    })}

                                </div>
                                <div className="shop_toolbar t_bottom">
                                    <div className="pagination">
                                        <ul>
                                            <li className="current">1</li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li className="next"><a href="#">next</a></li>
                                            <li><a href="#">&gt;&gt;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Product