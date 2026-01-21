import React, { useState } from 'react';
import { FaRegHeart, FaHeart, FaPlus, FaStar, FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useCart } from '../../context/CartContext';


const MenuCategory = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    setIsAdding(true);

    try {
      // Ensure item has the correct image before adding to cart
      // Use the item's original image from menuData which should be correct
      console.log(`Adding to cart: ${item.name} with image: ${item.image}`);
      addToCart(item, quantity);

      // Show success toast
      toast.success(
        <div className="d-flex align-items-center">
          <FaCheck className="me-2 text-success" />
          <span>{quantity}x {item.name} added to cart!</span>
        </div>,
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      // Reset quantity after adding
      setQuantity(1);
    } catch (error) {
      toast.error('Failed to add item to cart');
    } finally {
      setTimeout(() => setIsAdding(false), 1000);
    }
  };

  // Generate a gradient background based on the item's name
  const generateGradient = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const h = Math.abs(hash % 360);
    return `linear-gradient(135deg, hsl(${h}, 70%, 80%), hsl(${(h + 30) % 360}, 70%, 70%))`;
  };

  const getItemImage = (itemName) => {
    if (!itemName) return null;

    // تحويل اسم الطعام إلى اسم الصورة
    const imageName = itemName
      .replace(/\s+/g, '-')
      .replace(/[àáâãäå]/g, 'a')
      .replace(/[èéêë]/g, 'e')
      .replace(/[ìíîï]/g, 'i')
      .replace(/[òóôõö]/g, 'o')
      .replace(/[ùúûü]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[ñ]/g, 'n');

    // قائمة بأسماء الصور المتاحة (مبسطة)
    const imageMap = {
      'margherita': 'MargheritaPizza.jpg',
      'quattro-formaggi': 'Quattro-Formaggi.jpg',
      'diavola': 'Pizza-Diavola.jpg',
      'capricciosa': 'Pizza-Capricciosa.jpg',
      'vegetariana': 'Pizza-Vegetariana.jpeg',
      'prosciutto': 'Pizza-Prosciutto-e-Funghi.png',
      'carbonara': 'Spaghetti-Carbonara.webp',
      'penne': 'Penne-al-Pomodoro-e-Basilico.webp',
      'lasagna': 'Lasagna-della-Casa.jpg',
      'ravioli': 'Ravioli-di-Ricotta-e-Spinaci.webp',
      'gnocchi': 'Gnocchi-alla-Sorrentina.jpeg',
      'pesto': 'Trofie-al-Pesto-Genovese.jpg',
      'risotto': 'Risotto-ai-Funghi-Porcini.jpeg',
      'truffle': 'TruffleMushroomRisotto.jpg',
      'osso-buco': 'Osso-Buco-alla-Milanese.jpg',
      'pollo': 'pollo-alla-parmigiana.jpg',
      'salmon': 'Salmone-alla-Griglia.jpg',
      'grilled': 'Grilled-Salmon.jpg',
      'branzino': 'Branzino-al-Forno.webp',
      'melanzane': 'Melanzane_alla_Parmigiana.jpg',
      'bruschetta': 'Bruschetta-al-Pomodoro.jpg',
      'antipasto': 'Antipasto-Misto.jpg',
      'arancini': 'Arancini-Siciliani.jpg',
      'calamari': 'Calamari-Fritti.jpg',
      'caprese': 'Insalat-Caprese.jpeg',
      'tiramisu': 'tiramisu.jpg',
      'panna-cotta': 'Panna-Cotta.jpg',
      'cannoli': 'cannoli_siciliani.jpg',
      'gelato': 'Gelato-Artigianale.webp',
      'affogato': 'Affogato-al-Caffè.jpeg',
      'limoncello': 'Torta-al-Limoncello.jpg',
      'espresso': 'Espresso-Italiano.webp',
      'cappuccino': 'Cappuccino.webp',
      'prosecco': 'Prosecco-di-Valdobbiadene.webp',
      'sangiovese': 'Sangiovese.jpg',
      'aperol': 'Aperol-Spritz.webp',
      'limonata': 'Limonata-della-Casa.jpg',
      'acqua': 'Acqua-Panna.png'
    };

    // البحث عن صورة مطابقة
    const lowerName = imageName.toLowerCase();
    for (const [key, image] of Object.entries(imageMap)) {
      if (lowerName.includes(key) || key.includes(lowerName)) {
        return `/images/${image}`;
      }
    }

    return null;
  };

  return (
    <div className="card border-0 shadow-sm d-flex flex-column" style={{
      borderRadius: '15px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      height: '100%',
      minHeight: '500px'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    }}>
      <div className="position-relative">
        {/* Item Image */}
        <div
          className="menu-item-image position-relative overflow-hidden"
          style={{
            backgroundImage: getItemImage(item.name) ? `url(${getItemImage(item.name)})` : (item.image ? `url(${item.image})` : generateGradient(item.name)),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '220px',
            borderRadius: '0',
          }}
        >
          {/* Favorite Button */}
          <button
            className="position-absolute top-0 end-0 m-3 btn btn-sm rounded-circle p-2"
            style={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              border: 'none',
              width: '40px',
              height: '40px',
              backdropFilter: 'blur(10px)'
            }}
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? (
              <FaHeart style={{ color: '#e74c3c', fontSize: '16px' }} />
            ) : (
              <FaRegHeart style={{ color: '#6c757d', fontSize: '16px' }} />
            )}
          </button>

          {/* Popular Badge */}
          {item.popular && (
            <div className="position-absolute top-0 start-0 m-3">
              <span className="badge d-flex align-items-center gap-1 px-3 py-2" style={{
                backgroundColor: '#f39c12',
                color: 'white',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600'
              }}>
                <FaStar style={{ fontSize: '12px' }} />
                Popular
              </span>
            </div>
          )}

          {/* Price Badge */}
          <div className="position-absolute bottom-0 end-0 m-3">
            <span className="badge px-3 py-2" style={{
              backgroundColor: '#e74c3c',
              color: 'white',
              fontSize: '16px',
              fontWeight: '700',
              borderRadius: '20px'
            }}>
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      
      {/* Item Details */}
      <div className="card-body d-flex flex-column p-4" style={{ flex: '1' }}>
        <div className="mb-3">
          <h3 className="h5 card-title mb-2" style={{
            fontFamily: "'Playfair Display', serif",
            color: '#2c3e50',
            fontWeight: '700',
            fontSize: '1.3rem'
          }}>{item.name}</h3>
        </div>

        <p className="card-text mb-3" style={{
          color: '#6c757d',
          fontSize: '14px',
          lineHeight: '1.5',
          flex: '1'
        }}>{item.description}</p>
        
        {/* Customization Options (if any) */}
        {item.options && item.options.length > 0 && (
          <div className="mb-3">
            <p className="small fw-bold mb-2 text-center" style={{ color: '#2c3e50' }}>Available Options:</p>
            <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
              {item.options.map((option, index) => (
                <span key={index} className="badge small px-2 py-1" style={{
                  backgroundColor: '#f8f9fa',
                  color: '#6c757d',
                  border: '1px solid #e9ecef',
                  borderRadius: '12px',
                  fontSize: '11px'
                }}>
                  {option}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart Controls */}
        <div className="d-flex justify-content-between align-items-center mt-auto pt-3">
          <div className="d-flex align-items-center" style={{ gap: '8px' }}>
            <button
              className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '35px',
                height: '35px',
                backgroundColor: quantity <= 1 ? '#f8f9fa' : '#fff',
                border: '2px solid #e74c3c',
                color: quantity <= 1 ? '#6c757d' : '#e74c3c',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
              onMouseEnter={(e) => {
                if (quantity > 1) {
                  e.target.style.backgroundColor = '#e74c3c';
                  e.target.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (quantity > 1) {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.color = '#e74c3c';
                }
              }}
            >
              -
            </button>
            <span className="fw-bold px-3 py-1 rounded" style={{
              minWidth: '40px',
              textAlign: 'center',
              color: '#2c3e50',
              fontSize: '16px',
              backgroundColor: '#f8f9fa',
              border: '2px solid #e9ecef'
            }}>
              {quantity}
            </span>
            <button
              className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '35px',
                height: '35px',
                backgroundColor: '#fff',
                border: '2px solid #e74c3c',
                color: '#e74c3c',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setQuantity(prev => prev + 1)}
              aria-label="Increase quantity"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e74c3c';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#fff';
                e.target.style.color = '#e74c3c';
              }}
            >
              +
            </button>
          </div>

          <button
            className="btn d-flex align-items-center gap-2 px-4 py-2"
            style={{
              backgroundColor: isAdding ? '#27ae60' : '#e74c3c',
              border: 'none',
              color: 'white',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '14px',
              transition: 'all 0.3s ease',
              minWidth: '130px'
            }}
            onClick={handleAddToCart}
            disabled={isAdding}
            onMouseEnter={(e) => {
              if (!isAdding) {
                e.target.style.backgroundColor = '#c0392b';
                e.target.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isAdding) {
                e.target.style.backgroundColor = '#e74c3c';
                e.target.style.transform = 'translateY(0)';
              }
            }}
          >
            {isAdding ? (
              <>
                <FaCheck style={{ fontSize: '12px' }} />
                Added!
              </>
            ) : (
              <>
                <FaPlus style={{ fontSize: '12px' }} />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
