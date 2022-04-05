import React from 'react'
import { ProductType } from '../types/product'

type HomeProductProps ={
  data : ProductType [],
  onRemove :(id : number) => void

}



const Home = (props: HomeProductProps) => {
  return (
    <>
 <section className="product_section womens_product">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section_title">
          <h2>Sản phẩm của chúng tôi</h2>
          <p>Các sản phẩm thiết kế hiện đại,mới nhất</p>
        </div>
      </div>
    </div>
    <div className="product_area">
      <div className="row">
        <div className="col-12">
          <div className="product_tab_button">
            <ul className="nav" role="tablist">
              <li>
                <a className="active" data-toggle="tab" href="#clothing" role="tab" aria-controls="clothing" aria-selected="true">Women’s</a>
              </li>
              <li>
                <a data-toggle="tab" href="#handbag" role="tab" aria-controls="handbag" aria-selected="false">Men’s</a>
              </li>
              <li>
                <a data-toggle="tab" href="#shoes" role="tab" aria-controls="shoes" aria-selected="false">Kid's</a>
              </li>
              <li>
                <a data-toggle="tab" href="#accessories" role="tab" aria-controls="accessories" aria-selected="false">Shoes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="clothing" role="tabpanel">
          <div className="product_container">
            <div className="row product_column4">
            {props.data && props.data.map((item) => {
              return <div className="col-lg-3">
                <div className="single_product">
                  <div className="product_thumb">
                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product21.jpg"  /></a>
                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product22.jpg" /></a>
                    <div className="quick_button">
                      <a href="#" title="quick_view">Xem sản phẩm</a>
                    </div>
                    <div className="product_sale">
                      <span>-7%</span>
                    </div>
                  </div>
                  <div className="product_content">
                    <h3><a href="product-details.html">{item.name}</a></h3>
                    <span className="current_price">{item.price}</span>
                    <span className="old_price">£86.00</span>
                  </div>
                </div>
              </div>
               })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></section>

    </>
  )
}

export default Home