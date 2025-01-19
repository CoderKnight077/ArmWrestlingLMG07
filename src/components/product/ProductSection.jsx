import React from "react";
import img1 from "../../assets/img/img_1.jpeg"
import img2 from "../../assets/img/Arm_Tshirt.jpeg"
import img3 from "../../assets/img/Arm_sleeves.jpeg"
import img4 from "../../assets/img/Arm_sweeters.jpeg"
import "./ProductSection.css";
import dotenv from 'dotenv';


const products = [
  {
    id: 1,
    name: "Adjustable Bench – FID3 – With Removable Foot Catch",
    Mode : "Rental system",
    stock : false,
    image: img1, // Replace with actual image URLs
  },
  {
    id: 2,
    name: "Arm wrestling T-shirt",
    price: "₹500",
    stock: true,
    discount: null,
    isNew: false,
    image: img2,
  },
  {
    id: 3,
    name: "Arm-wrestling Sleeves",
    price: "₹840",
    originalPrice: "1200",
    discount : "-30%",
    stock : true,
    isNew: true,
    image: img3,
  },
  {
    id: 4,
    name: "Inter-LMG Arm-wrestling Sweeters",
    price: "₹960",
    originalPrice: "₹1,374",
    gstPrice: "₹814",
    stock: true,
    discount: "-30%",
    isNew: false,
    image: img4,
  },
];

const ProductSection = () => {

  const sendWhatapp = (product) => {

 

    const phoneNumber = import.meta.env.VITE_WHATSAPP;
    const message = `*Product Details*\n\n*Name:* ${product.name}\n*Price:* ${product.price}\n*Original Price:* ${product.originalPrice}\n*GST Price:* ${product.gstPrice}\n*In Stock:* ${product.stock ? "Yes" : "No"
      }\n\n*Image URL:* ${window.location.origin}/${product.image}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }

 
  return (
    <section className="product-section">
      <div className="breadcrumb">
        <a href="#home">Home</a> / <a href="#products">Products</a>
      </div>
      <h2 className="section-title">Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              {product.discount && <span className="product-discount">{product.discount}</span>}
              {product.isNew && <span className="product-new">NEW</span>}
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-pricing">
                <span className="original-price">{product.originalPrice}</span>
                <span className="current-price">{product.price}</span>
                <div className="gst-price">18% Ex GST Price: <strong>{product.gstPrice}</strong></div>
              </div>
              <div className={`stock-status ${product.stock ? "in-stock" : "out-of-stock"}`}>
                {product.stock ? "✔ In stock" : "✖ Out of stock"}
              </div>

              <button className="add-to-basket" onClick={()=> sendWhatapp(product)}>Purchase now</button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;

