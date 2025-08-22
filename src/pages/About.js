import React from 'react';
import { FaLeaf, FaBreadSlice, FaStar, FaUtensils, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#f8f9fa' }}>
      <div className="container py-5">
        <style jsx>{`
          @media (max-width: 768px) {
            .chef-card {
              margin-bottom: 2rem;
            }
            .chef-image {
              height: 250px !important;
            }
          }

          .chef-card:hover {
            transform: translateY(-10px);
            transition: all 0.3s ease;
          }

          .badge-custom {
            font-size: 0.8rem;
            padding: 0.5rem 1rem;
            border-radius: 20px;
          }
        `}</style>
        <h1 className="text-center mb-5" style={{ color: '#2c3e50', fontWeight: 'bold' }}>
          The Bella Vita Story
        </h1>
      
      <div className="row mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="ratio ratio-16x9 rounded overflow-hidden shadow-lg">
            <img
              src="/images/aboutus.png"
              alt="About Bella Vita Restaurant"
              className="w-100 h-100 object-fit-cover"
              style={{ objectFit: 'cover' }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div
              className="bg-gradient d-flex align-items-center justify-content-center"
              style={{
                display: 'none',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              }}
            >
              <div className="text-white fs-1">🍽️</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h2 style={{ color: '#2c3e50', fontWeight: 'bold' }}>Welcome to Bella Vita</h2>
          <p className="lead" style={{ color: '#e74c3c', fontWeight: '500' }}>
            Since 1995, we've been crafting authentic Italian cuisine with a passionate international flair.
          </p>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Our journey began with a simple dream: to bring the warmth and flavors of Italy to every table.
            What started as a small family restaurant has grown into a beloved culinary destination, where
            tradition meets innovation in every dish we serve.
          </p>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            At Bella Vita, we believe that great food brings people together. Our master chefs combine
            time-honored Italian recipes with contemporary techniques and the finest international ingredients
            to create unforgettable dining experiences that celebrate the beautiful life.
          </p>

        </div>
      </div>

      <h2 className="text-center mb-5" style={{ color: '#2c3e50', fontWeight: 'bold' }}>
        Our Core Values
      </h2>
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="bg-success bg-opacity-15 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                <FaLeaf className="text-success" size={32} />
              </div>
              <h4>Fresh Ingredients</h4>
              <p>We source only the freshest, locally-sourced ingredients for authentic flavors.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="bg-warning bg-opacity-15 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                <FaUtensils className="text-warning" size={32} />
              </div>
              <h4>Traditional Recipes</h4>
              <p>Our dishes are prepared following traditional Italian recipes passed down through generations.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="bg-info bg-opacity-15 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                <FaBreadSlice className="text-info" size={32} />
              </div>
              <h4>Dietary Options</h4>
              <p>We offer a variety of vegetarian, vegan, and gluten-free options to accommodate all guests.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Chefs Section */}
      <div className="mb-5">
        <h2 className="text-center mb-5" style={{ color: '#2c3e50', fontWeight: 'bold' }}>
          Meet Our Master Chefs
        </h2>
        <div className="row g-4 mb-5">
          {/* Chef Marco */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-lg chef-card" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <div className="position-relative">
                <img
                  src="/images/Chef-Marco-Rossi.jpg"
                  alt="Chef Marco Rossi"
                  className="card-img-top chef-image"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 end-0 m-3">
                  <span className="badge bg-warning text-dark px-3 py-2" style={{ borderRadius: '15px' }}>
                    Head Chef
                  </span>
                </div>
              </div>
              <div className="card-body p-4">
                <h4 className="card-title mb-2" style={{ color: '#2c3e50' }}>Chef Marco Rossi</h4>
                <p className="text-muted mb-3">
                  <FaStar className="text-warning me-1" />
                  25+ Years Experience
                </p>
                <p className="card-text" style={{ lineHeight: '1.6' }}>
                  Born in Naples, Chef Marco brings authentic Italian flavors with modern innovation.
                  Specializes in traditional pasta and wood-fired pizzas.
                </p>
                <div className="mt-3">
                  <span className="badge bg-light text-dark me-2 mb-2">Italian Cuisine</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Pizza Master</span>
                  <span className="badge bg-light text-dark mb-2">Pasta Expert</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chef Sofia */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-lg chef-card" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <div className="position-relative">
                <img
                  src="/images/Chef-Sofia-Chen.webp"
                  alt="Chef Sofia Chen"
                  className="card-img-top chef-image"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 end-0 m-3">
                  <span className="badge bg-success text-white px-3 py-2" style={{ borderRadius: '15px' }}>
                    Pastry Chef
                  </span>
                </div>
              </div>
              <div className="card-body p-4">
                <h4 className="card-title mb-2" style={{ color: '#2c3e50' }}>Chef Sofia Chen</h4>
                <p className="text-muted mb-3">
                  <FaStar className="text-warning me-1" />
                  15+ Years Experience
                </p>
                <p className="card-text" style={{ lineHeight: '1.6' }}>
                  Award-winning pastry chef specializing in Italian desserts and artisanal gelato.
                  Creates magical sweet endings to every meal.
                </p>
                <div className="mt-3">
                  <span className="badge bg-light text-dark me-2 mb-2">Desserts</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Gelato</span>
                  <span className="badge bg-light text-dark mb-2">Tiramisu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chef Antonio */}
          <div className="col-lg-4 col-md-6 mx-auto">
            <div className="card h-100 border-0 shadow-lg chef-card" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <div className="position-relative">
                <img
                  src="/images/Chef-Antonio-Bianchi.jpg"
                  alt="Chef Antonio Bianchi"
                  className="card-img-top chef-image"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 end-0 m-3">
                  <span className="badge bg-info text-white px-3 py-2" style={{ borderRadius: '15px' }}>
                    Sous Chef
                  </span>
                </div>
              </div>
              <div className="card-body p-4">
                <h4 className="card-title mb-2" style={{ color: '#2c3e50' }}>Chef Antonio Bianchi</h4>
                <p className="text-muted mb-3">
                  <FaStar className="text-warning me-1" />
                  12+ Years Experience
                </p>
                <p className="card-text" style={{ lineHeight: '1.6' }}>
                  Master of seafood and risotto, trained in Venice. Brings coastal Italian flavors
                  and international fusion techniques to our kitchen.
                </p>
                <div className="mt-3">
                  <span className="badge bg-light text-dark me-2 mb-2">Seafood</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Risotto</span>
                  <span className="badge bg-light text-dark mb-2">Fusion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
    </div>
  );
};

export default About;
