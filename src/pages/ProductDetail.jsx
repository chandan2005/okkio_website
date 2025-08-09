import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';

// Dummy product data (replace with actual data fetching later)
const dummyProducts = [
  { id: '1', name: "Urban Blaze Sneakers", price: 2799, img: "/assets/placeholder_product.png", rating: 4.5, description: "Step up your style game with these sleek and comfortable urban blaze sneakers. Perfect for daily wear and light activities.", sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'White', 'Grey'] },
  { id: '2', name: "Black Panther Perfume", price: 899, img: "/assets/placeholder_product.png", rating: 4.0, description: "A captivating fragrance that embodies strength and elegance. Long-lasting and perfect for any occasion.", sizes: [], colors: [] },
  { id: '3', name: "Denim Jacket Classic", price: 1299, img: "/assets/placeholder_product.png", rating: 5.0, description: "Timeless classic denim jacket. Durable, stylish, and versatile for all seasons. A must-have for your wardrobe.", sizes: ['S', 'M', 'L', 'XL'], colors: ['Blue', 'Black'] },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = dummyProducts.find(p => p.id === id);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-grow pt-16">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="flex-grow p-8">
            <h1 className="text-4xl font-bold text-dark-text mb-8 text-center">Product Not Found</h1>
            <p>The product you are looking for does not exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar toggleSidebar={toggleSidebar} />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleSidebar}
        ></div>
      )}
      <div className="flex flex-grow pt-16">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-grow p-8">
          <div className={styles.productLayout}>
            <div className={styles.imageGallery}>
              <img src={product.img} alt={product.name} className={styles.mainImage} />
              {/* Add more image thumbnails here if needed */}
            </div>
            <div className={styles.productInfo}>
              <h1 className={styles.productName}>{product.name}</h1>
              <p className={styles.productPrice}>₹ {product.price}</p>
              <div className={styles.productRating}>
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.floor(product.rating) ? styles.starFilled : styles.starEmpty}
                  />
                ))}
                <span>({product.rating})</span>
              </div>
              <p className={styles.productDescription}>{product.description}</p>

              {product.sizes.length > 0 && (
                <div className={styles.optionGroup}>
                  <label>Size:</label>
                  <div className={styles.options}>
                    {product.sizes.map(size => (
                      <button key={size} className={styles.optionButton}>{size}</button>
                    ))}
                  </div>
                </div>
              )}

              {product.colors.length > 0 && (
                <div className={styles.optionGroup}>
                  <label>Color:</label>
                  <div className={styles.options}>
                    {product.colors.map(color => (
                      <button key={color} className={styles.optionButton} style={{ backgroundColor: color.toLowerCase() }}></button>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.actionButtons}>
                <button className={styles.addToCartButton}><FaShoppingCart /> Add to Cart</button>
                <button className={styles.wishlistButton}><FaHeart /> Add to Wishlist</button>
              </div>

              {/* Placeholder for Reviews & Ratings */}
              <div className={styles.reviewsSection}>
                <h3>Customer Reviews</h3>
                <p>No reviews yet. Be the first to review this product!</p>
              </div>
            </div>
          </div>

          {/* Placeholder for Related Products Carousel */}
          <div className={styles.relatedProductsSection}>
            <h2>Related Products</h2>
            {/* Implement a carousel here similar to HeroSlider */}
            <p>Related products will appear here.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
