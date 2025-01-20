import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { db } from "../../api/api";
import "./Products.scss"
import ReactModal from 'react-modal';


export default function Carousel() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [selectedProduct, setSelectedProduct] = React.useState<any>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    function openModal(product: any) {
        setSelectedProduct(product);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setSelectedProduct(null);
    }

    return (
        <div className="productsContainer">
            <Slider {...settings}>
                    {
                        db.products.map((product) => {
                            return (
                                <div key={product.productName} className="item">
                                    <img src={product.photo} alt={product.productName} />
                                    <h2>{product.productName}</h2>
                                    <p>R$ {(product.price / 100).toFixed(2)}</p>
                                    <button onClick={() => openModal(product)}>Comprar</button>
                                </div>
                            )
                        })
                    }
            </Slider>

            {modalIsOpen && selectedProduct && (
                <ReactModal 
                    isOpen={modalIsOpen} 
                    onRequestClose={closeModal} 
                    contentLabel="Produto Detalhes"
                    style={{
                        overlay: {
                            backgroundColor: "rgba(0, 0, 0, 0.75)"
                        },
                        content: {
                            color: "black",
                            padding: "20px",
                            borderRadius: "10px",
                            maxWidth: "400px",
                            margin: "auto",
                            
                        }
                    }}
                >
                    <div>
                        <h2>{selectedProduct.productName}</h2>
                        <img src={selectedProduct.photo} alt={selectedProduct.productName} />
                        <p>{selectedProduct.descriptionShort}</p>
                        <p>R$ {(selectedProduct.price / 100).toFixed(2)}</p>
                        <p>{selectedProduct.descriptionShort}</p>
                        <button onClick={closeModal}>Fechar</button>
                    </div> 
                </ReactModal>
            )}
        </div>
    )
}