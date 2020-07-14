import React from 'react';
import HotDeal from '../products/HotDeal';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TitleMain from '../common/TitleMain';
import { ProductConsumer } from '../../contexts/ProductProvider';
import ProductItem from '../products/ProductItem';

export default class FeatureProduct extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <section className="feature_product_area" >
                <div className="main_box">
                    <div className="container">
                        <div className="row hot_product_inner">
                            <HotDeal link="/shop">Hot Deals <br /> of this Month</HotDeal>
                            <HotDeal link="/shop">Hot Deals <br /> of this Month</HotDeal>
                        </div>
                        <div className="feature_product_inner">
                            <TitleMain title="Featured Products">
                                Who are in extremely love with eco friendly system.
                            </TitleMain>
                            <OwlCarousel className="feature_p_slider" loop margin={10}
                                items={4} responsiveClass={true} responsive={
                                    {
                                        0: { items: 1 }, 360: { items: 2 }, 576: { items: 3, }, 768: { items: 4 }
                                    }} >

                                <ProductConsumer>
                                    {value => {
                                        const { products } = value;
                                        return (
                                            <>{products.map((item, index) => <ProductItem key={index} item={item} value={value} classname="item" />)}</>
                                        )
                                    }}
                                </ProductConsumer>

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
