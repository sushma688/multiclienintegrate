import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "OnePlus 8T 5G",
                "src": "https://www.oppomart.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/o/n/oneplus_8t_silver.png",
                "description": " Lunar Silver 12GB RAM, 256GB Storage",
                "content": "Rear Quad Camera with 48 MP Sony IMX586 Sensor, 16 MP Ultra Wide Angle, 5 MP macro lens and 2 MP monochrome lens | Front Camera with 16 MP Sony IMX471 Sensor. 2.86 GHz Qualcomm Snapdragon 865 Octa-core Processor + Adreno 650 GPU , Oxygen OS based on Android 11 Operating system.",
                "price": 45000,
                "count": 1
            },
            {
                "_id": "2",
                "title": "Samsung Galaxy S10+",
                "src": "https://c1.neweggimages.com/NeweggImage/ProductImage/AEJW_131964279264510796x1pS8ktV3w.jpg",
                "description": "128 GB, 8 GB RAM, Prism blue",
                "content": "12MP + 12MP + 16MP Triple Rear Camera, 10MP + 8MP Dual Selfie Camera, Android Pie Operating System, 4100 mAh Battery Capacity, The 15.49 cm (6.1 inch) full-HD Infinity-O display comes with no notch.",
                "price": 68000,
                "count": 1
            },
            {
                "_id": "3",
                "title": "iPhone 12 Pro",
                "src": "https://usedeals.pk/image/cache/catalog/Used%20Mobiles/g4%20play/iph3-600x315.jpg",
                "description": "Apple iPhone 12 Pro 128 GB, Pacific Blue",
                "content": "6.1-inch (15.5 cm diagonal) Super Retina XDR display. Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 4x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording.",
                "price": 99000,
                "count": 1
            },
            {
                "_id": "4",
                "title": "OnePlus 9 Pro",
                "src": "https://static.digit.in/default/4f7f8b1973d7f2345d3e6df46222ead8ca181211.jpeg?tr=n-product_detail_leader_thumb",
                "description": "8GB/12GB LPDDR5, 128GB/256GB UFS 3.1 2-LANE",
                "content": " OxygenOS based on Android™ 11, Qualcomm® Snapdragon™ 888, 4,500 mAh (2S1P 2,250 mAh, non-removable Warp Charge 65T (10V/6.5A) 50W Wireless Charging",
                "price": 64999,
                "count": 1
            },
            {
                "_id": "5",
                "title": "iPhone 12 Mini",
                "src": "https://images-na.ssl-images-amazon.com/images/I/71sNNCTfMuL._SL1500_.jpg",
                "description": "New Apple iPhone 12 Mini (64GB) - Blue",
                "content": "5.4-inch (13.7 cm diagonal) Super Retina XDR display. Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording. Industry-leading IP68 water resistance.",
                "price": 66900,
                "count": 1
            },
            {
                "_id": "6",
                "title": "Samsung s21 Plus 5G",
                "src": "https://media.extra.com/i/aurora/100230268_100_01?w=400&h=400&img404=missing_product&v=false",
                "description": "Phantom Silver, 8GB, 128GB Storage",
                "content": "Triple rear camera setup- Main Camera 12MP Dual Pixel + Ultra Wide 12MP Camera + Tele1 3X 64MP Camera | 10MP front Dual Pixel Camera. (6.7-inch) Dynamic AMOLED 2X Display. Android Pie v10.0 operating system with 2.9GHz Exynos 2100 octa core processor. 4800mAH lithium-ion battery.",
                "price": 76999,
                "count": 1
            }
        ],
        cart:[],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been successfully added to cart!!")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


