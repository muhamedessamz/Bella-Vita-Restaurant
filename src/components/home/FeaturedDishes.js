import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaPepperHot, FaSeedling, FaBreadSlice, FaFish, FaCheese } from 'react-icons/fa';

const FeaturedDishes = () => {
  const dishes = [
    {
      id: 1,
      name: 'Truffle Mushroom Risotto',
      description: 'Creamy arborio rice with wild mushrooms, white truffle oil, and parmesan.',
      price: 24.99,
      dietary: ['vegetarian', 'gluten-free'],
      image: '/images/TruffleMushroomRisotto.jpg'
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      description: 'Classic Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, and basil.',
      price: 18.99,
      dietary: ['vegetarian'],
      image: '/images/MargheritaPizza.jpg'
    },
    {
      id: 3,
      name: 'Grilled Salmon',
      description: 'Atlantic salmon with lemon butter sauce, roasted vegetables, and herb potatoes.',
      price: 28.99,
      dietary: ['gluten-free', 'dairy-free'],
      image: '/images/Grilled-Salmon.jpg'
    },
    {
      id: 4,
      name: 'Spaghetti Carbonara',
      description: 'Al dente pasta with pancetta, pecorino romano, eggs, and black pepper.',
      price: 22.99,
      dietary: [],
      image: '/images/Spaghetti-Carbonara.webp'
    }
  ];

  const getDietaryIcon = (type) => {
    switch (type) {
      case 'vegetarian':
        return <FaLeaf className="text-success" title="Vegetarian" />;
      case 'vegan':
        return <FaSeedling className="text-success" title="Vegan" />;
      case 'gluten-free':
        return <FaBreadSlice className="text-warning" title="Gluten Free" />;
      case 'spicy':
        return <FaPepperHot className="text-danger" title="Spicy" />;
      case 'pescatarian':
        return <FaFish className="text-info" title="Pescatarian" />;
      case 'dairy-free':
        return <FaCheese className="text-muted" title="Dairy Free" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-5" style={{
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      color: 'white'
    }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3 text-white" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Our Signature Dishes
          </h2>
          <div className="divider mx-auto mb-4" style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #e74c3c, transparent)',
            borderRadius: '2px'
          }}></div>
          <p className="lead mb-0 text-white text-center" style={{
            fontSize: '1.2rem',
            fontWeight: '300',
            maxWidth: '600px',
            margin: '0 auto',
            opacity: '0.9'
          }}>
            Experience the taste of Italy with our chef's special selection
          </p>
        </div>
        
        <div className="row g-4 justify-content-center">
          {dishes.map((dish) => (
            <div key={dish.id} className="col-md-6 col-lg-3 d-flex justify-content-center">
              <div className="card h-100 border-0 shadow-lg overflow-hidden"
                   style={{
                     transition: 'all 0.3s ease',
                     borderRadius: '15px',
                     backgroundColor: 'white',
                     maxWidth: '300px',
                     width: '100%'
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-8px)';
                     e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                   }}>
                <div
                  className="dish-image position-relative"
                  style={{
                    height: '220px',
                    backgroundImage: `url(${dish.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '15px 15px 0 0'
                  }}
                >
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge rounded-pill px-3 py-2" style={{
                      backgroundColor: '#e74c3c',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      boxShadow: '0 2px 8px rgba(231, 76, 60, 0.3)'
                    }}>
                      ${dish.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="card-body p-4 text-center">
                  <h5 className="card-title mb-3" style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#2c3e50',
                    fontSize: '1.3rem',
                    fontWeight: '600'
                  }}>
                    {dish.name}
                  </h5>
                  <p className="card-text mb-3" style={{
                    color: '#6c757d',
                    fontSize: '0.95rem',
                    lineHeight: '1.5'
                  }}>
                    {dish.description}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/menu" className="btn btn-lg px-5 py-3"
                style={{
                  backgroundColor: 'white',
                  borderColor: 'white',
                  color: '#2c3e50',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  borderWidth: '2px',
                  boxShadow: '0 4px 15px rgba(255,255,255,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e74c3c';
                  e.target.style.borderColor = '#e74c3c';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(231, 76, 60, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.borderColor = 'white';
                  e.target.style.color = '#2c3e50';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(255,255,255,0.3)';
                }}>
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
