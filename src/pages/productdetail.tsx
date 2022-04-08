import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ProductType } from '../types/productdetail'
import { read } from '../api/product';
import anh from '../assets/img/product/product5.jpg'
import '../css/detail.css'
type ProductDetailProps = {
    products: ProductType[];
}

type Show = {
    name: string,
    price: number,
    desc: string,
}
const productDetail = (props: ProductDetailProps) => {
    const { id } = useParams();
    console.log(id);
    
    const { register, formState: { errors }, reset } = useForm<Show>();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        };
        getProduct();
    }, []);
    return (
        <>
            <div>
                <div className="breadcrumbs_area product_bread">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_content">
                                    <ul>
                                        <li><a href="index.html">home</a></li>
                                        <li>/</li>
                                        <li>product details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="product_details">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5">
                                <div className="product-details-tab">
                                    <div id="img-1" className="zoomWrapper single-zoom">
                                        <a href="#">
                                        <img src={anh} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="product_d_right">
                                    <form action="#">
                                        <h1><input type="text" placeholder="Enter Name." className="input" {...register('name')} /></h1>
                                        <div className=" product_ratting">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-star" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" /></a></li>
                                                <li className="review"><a href="#"> 1 review </a></li>
                                                <li className="review"><a href="#"> Write a review </a></li>
                                            </ul>
                                        </div>
                                        <div className="product_price">
                                            <span className="current_price"><input type="text" placeholder="Enter Name." className="input" {...register('price')} /></span>
                                        </div>
                                        <div className="product_desc">
                                            <p>More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping through album art. Select an album to turn it over and see the track list. Enhanced interface. Experience a whole new way to browse and view your music and video. Sleeker design. Beautiful, durable, and sleeker than ever, iPod classic now features an anodized aluminum and polish.. </p>
                                        </div>
                                        <div className="product_variant color">
                                            <h3>color</h3>
                                            <select className="niceselect_option" id="color" name="produc_color">
                                                <option selected value={1}>choose in option</option>
                                                <option value={2}>choose in option2</option>
                                                <option value={3}>choose in option3</option>
                                                <option value={4}>choose in option4</option>
                                            </select>
                                        </div>
                                        <div className="product_variant size">
                                            <h3>size</h3>
                                            <select className="niceselect_option" id="color1" name="produc_color">
                                                <option selected value={1}>size</option>
                                                <option value={2}>x</option>
                                                <option value={2}>xl</option>
                                                <option value={3}>md</option>
                                                <option value={4}>xxl</option>
                                                <option value={4}>s</option>
                                            </select>
                                        </div>
                                        <div className="product_variant quantity">
                                            <label>quantity</label>
                                            <input min={1} max={100} defaultValue={1} type="number" />
                                            <button className="button" type="submit">add to cart</button>
                                        </div>
                                        <div className=" product_d_action">
                                            <ul>
                                                <li><a href="#" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true" /> Add to Wish List</a></li>
                                                <li><a href="#" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true" /> Compare this Product</a></li>
                                            </ul>
                                        </div>
                                    </form>
                                    <div className="priduct_social">
                                        <h3>Share on:</h3>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-rss" /></a></li>
                                            <li><a href="#"><i className="fa fa-vimeo" /></a></li>
                                            <li><a href="#"><i className="fa fa-tumblr" /></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
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

export default productDetail