import React, { Component } from 'react';
import { products, categoryProduct, Color, Brand } from '../data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductsContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: products,
        cart: [],
        colors: Color,
        brands: Brand,
        sortShop: products,
        quanlity: 1,
        category: categoryProduct,
        cartSubtotal: 0,
        cartTotals: 0,
        cartShipping: 0,
        colorFilter: "all",
        brandFilter: "all",
        categoryFilter: "all",
        priceFilter: 'all',
        // paging
        currentPage: 1,
        todosPerPage: 4


    }
    componentDidMount() {

    }

    getItem(id) {
        const listProductNew = [...this.state.products];
        const product = listProductNew.find(item => item.sys.id === id);
        return product;
    }
    getProductDetail(slug) {
        const listProductNew = [...this.state.products];
        let product = listProductNew.find(item => item.fields.slug === slug);
        const category = this.getCategoryProduct(product);
        product.category = category;
        return product;
    }
    addToCart(id) {
        let product = this.getItem(id);
        let listCart = [...this.state.cart];

        // check in cart 
        if (!product.fields.incart) {
            // chua in cart
            product.fields.count = 1;
            product.fields.incart = true;
            product.fields.subtotal = parseInt(product.fields.count * product.fields.price);

            this.setState({
                cart: [...listCart, product],
                quanlity: 1
            }, this.addTotalsCart.bind(this))
            product.fields.count = 1;

        } else {
            // da in cart 
            product.fields.count = product.fields.count + this.state.quanlity;
            product.fields.subtotal = parseInt(product.fields.count * product.fields.price);
            this.setState({
                quanlity: 1
            }, this.addTotalsCart.bind(this));
        }
        this.notify(
            <span className="toast-icon">
                <i className="fa fa-check" aria-hidden="true"></i>This product has been added to your cart!
            </span>
        );
    }

    notify(content) {
        toast(
            content, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    getCategoryProduct(id) {
        const categoriesNew = [...categoryProduct];
        const category = categoriesNew.find(item => item.id = id);
        return category;
    }

    // Decrement count cart

    deCrement(id) {
        const listCart = [...this.state.cart];
        const product = listCart.find(item => item.sys.id === id);

        if (id) {
            product.fields.count = product.fields.count - 1;
            product.fields.subtotal = parseInt(product.fields.count * product.fields.price);
            this.setState({
                cart: listCart
            }, this.addTotalsCart.bind(this))
            if (product.fields.count < 1) {
                this.removeCartItem(id);
            }

        } else {
            let quanlityNew = this.state.quanlity;
            if (quanlityNew > 1) {
                quanlityNew = quanlityNew - 1;
            }
            this.setState({
                quanlity: quanlityNew
            }, this.addTotalsCart.bind(this))
        }
    }

    // increment count cart

    inCrement(id) {
        const listCart = [...this.state.cart];
        const product = listCart.find(item => item.sys.id === id);

        if (id) {
            product.fields.count = product.fields.count + 1;
            product.fields.subtotal = parseInt(product.fields.count * product.fields.price);
            this.setState({
                cart: listCart
            }, this.addTotalsCart.bind(this))

        } else {
            let quanlityNew = this.state.quanlity;
            quanlityNew = quanlityNew + 1;
            this.setState({
                quanlity: quanlityNew
            })

        }

    }

    // Remove item

    removeCartItem(id) {
        const listCart = [...this.state.cart];
        const product = listCart.find(item => item.sys.id === id);
        product.fields.incart = false;
        const listCartNew = listCart.filter(item => item.sys.id !== id);
        this.setState({
            cart: listCartNew
        }, this.addTotalsCart.bind(this));
        this.notify(
            <span className="toast-icon">
                <i className="fa fa-check" aria-hidden="true"></i>This product has been removed to your cart!
            </span>
        );
    }

    // Clear Cart

    clearCart() {
        const listCart = [...this.state.cart];
        listCart.map(item => item.fields.incart = false);
        this.setState({
            cart: [],
        }, this.addTotalsCart.bind(this))
    }
    // Total Cart

    addTotalsCart() {
        const listCart = [...this.state.cart];
        let subTotal = 0;
        listCart.map(item => (subTotal = item.fields.subtotal + subTotal));
        let totals = subTotal + this.state.cartShipping;

        this.setState({
            cartSubtotal: subTotal,
            cartTotals: totals
        })
    }
    // Cart shipping
    cartOnShipping(price, event) {
        event.preventDefault();
        this.setState({
            cartShipping: price
        }, this.addTotalsCart.bind(this));
        event.target.closest('.list').querySelector('.active').classList.remove('active');
        event.target.closest('li').classList.add("active");

    }

    handleChangeFilter(event, id, type) {
        event.preventDefault();
        type = type + 'Filter';
        this.setState({
            [type]: id
        }, this.FilterProduct.bind(this))

        if (event.target.closest('.list').querySelector('.active') !== null) {
            event.target.closest('.list').querySelector('.active').classList.remove('active');
            event.target.closest('li').classList.add("active");
        } else {
            event.target.closest('li').classList.add("active");
        }


    }
    FilterProduct() {
        let { products, categoryFilter, colorFilter, brandFilter, priceFilter } = this.state;
        let tempProduct = [...products];
        console.log(categoryFilter, 'state');
        if (categoryFilter !== 'all') {
            tempProduct = tempProduct.filter(product => product.fields.category === categoryFilter);
        }
        if (colorFilter !== 'all') {
            tempProduct = tempProduct.filter(product => product.fields.color === colorFilter);
        }
        if (brandFilter !== 'all') {
            tempProduct = tempProduct.filter(product => product.fields.brand === brandFilter);
        }
        if (priceFilter !== 'all') {
            let maxPrice = Math.max(tempProduct.map(item => item.price));
        }

        this.setState({
            sortShop: tempProduct
        })
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        return (
            <ProductsContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart.bind(this),
                getProductDetail: this.getProductDetail.bind(this),
                deCrement: this.deCrement.bind(this),
                inCrement: this.inCrement.bind(this),
                removeCartItem: this.removeCartItem.bind(this),
                clearCart: this.clearCart.bind(this),
                cartOnShipping: this.cartOnShipping.bind(this),
                handleChangeFilter: this.handleChangeFilter.bind(this),
                handleClick: this.handleClick.bind(this)

            }}>
                {this.props.children}
                <ToastContainer />
            </ProductsContext.Provider>
        )
    }
}
const ProductConsumer = ProductsContext.Consumer;

export default function withContainerProduct(ComponentProduct) {
    return function ConsumerWrapper(props) {
        return <ProductConsumer>
            {value => <ComponentProduct {...props} context={value} />}
        </ProductConsumer>
    }
}
export { ProductProvider, ProductConsumer, ProductsContext }