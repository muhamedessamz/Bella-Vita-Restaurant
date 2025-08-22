import React from 'react';
import { FaLeaf, FaUtensils, FaAward, FaHeart } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaLeaf className="display-4 text-success mb-3" />,
      title: 'Fresh Ingredients',
      description: 'We source only the freshest, locally-sourced ingredients for authentic flavors in every dish.'
    },
    {
      icon: <FaUtensils className="display-4 text-primary mb-3" />,
      title: 'Seasonal Menus',
      description: 'Our menus change with the seasons to bring you the best flavors all year round.'
    },
    {
      icon: <FaAward className="display-4 text-warning mb-3" />,
      title: 'Award-Winning Chef',
      description: 'Experience culinary excellence from our internationally trained, award-winning chef.'
    },
    {
      icon: <FaHeart className="display-4 text-danger mb-3" />,
      title: 'Cozy Ambience',
      description: 'Enjoy our warm, inviting atmosphere perfect for any occasion.'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="text-uppercase text-primary fw-bold small">Why Choose Us</span>
          <h2 className="display-5 fw-bold mb-3">The Ristorante Experience</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Discover what makes Ristorante Internazionale a culinary destination like no other.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 bg-white shadow-sm p-4 text-center">
                <div className="icon-wrapper mx-auto mb-4" style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}>
                  {React.cloneElement(feature.icon, {
                    className: `${feature.icon.props.className}`,
                    style: { transition: 'all 0.3s ease' }
                  })}
                </div>
                <h3 className="h5 fw-bold mb-3">{feature.title}</h3>
                <p className="text-muted mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5 pt-4">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="card border-0 bg-primary text-white p-4 p-lg-5 h-100 text-center">
              <h3 className="h4 fw-bold mb-3">Our Philosophy</h3>
              <p className="mb-4">
                At Ristorante Internazionale, we believe in the power of food to bring people together.
                Our philosophy is simple: use the best ingredients, prepare them with care, and serve
                them with passion.
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <div className="me-3">
                  <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <FaUtensils className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-1">Chef Giovanni</h4>
                  <p className="small mb-0 opacity-75">Head Chef & Founder</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card border-0 bg-dark text-white p-4 p-lg-5 h-100 text-center">
              <h3 className="h4 fw-bold mb-3">Sustainability</h3>
              <p className="mb-4">
                We're committed to sustainable practices, from sourcing local ingredients to minimizing
                food waste. Our eco-friendly approach ensures that we're not just serving great food,
                but also protecting our planet.
              </p>
              <ul className="list-unstyled mb-0">
                <li className="mb-2 d-flex align-items-center justify-content-center">
                  <FaLeaf className="text-success me-2" />
                  <span>Locally-sourced ingredients</span>
                </li>
                <li className="mb-2 d-flex align-items-center justify-content-center">
                  <FaLeaf className="text-success me-2" />
                  <span>Eco-friendly packaging</span>
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaLeaf className="text-success me-2" />
                  <span>Zero food waste policy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 1rem;
          overflow: hidden;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        
        .card:hover .icon-wrapper {
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .card:hover .icon-wrapper > * {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
