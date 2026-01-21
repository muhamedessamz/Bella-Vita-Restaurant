import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPizzaSlice, FaCheese, FaPepperHot, FaLeaf, FaArrowRight, FaPlay } from 'react-icons/fa';

const PizzaBuilderTeaser = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const features = [
    {
      icon: <FaPizzaSlice className="display-4 text-primary mb-3" />,
      title: 'Choose Your Base',
      description: 'Classic, whole wheat, or gluten-free crust',
      color: '#dc3545'
    },
    {
      icon: <FaCheese className="display-4 text-warning mb-3" />,
      title: 'Select Cheese',
      description: 'Mozzarella, parmesan, vegan, or extra cheese',
      color: '#ffc107'
    },
    {
      icon: <FaPepperHot className="display-4 text-danger mb-3" />,
      title: 'Add Toppings',
      description: 'Fresh vegetables, premium meats, and exotic flavors',
      color: '#28a745'
    },
    {
      icon: <FaLeaf className="display-4 text-success mb-3" />,
      title: 'Special Requests',
      description: 'Customize to your dietary needs',
      color: '#17a2b8'
    }
  ];

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => (prev + 1) % features.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-5 position-relative overflow-hidden">
      <div className="container py-4">
        <div className="row align-items-center">
          {/* Mobile: Pizza Design First */}
          <div className="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0">
            <div className="position-relative">
              <div
                className="rounded-4 shadow-lg overflow-hidden position-relative"
                style={{
                  aspectRatio: '1/1',
                  background: 'linear-gradient(135deg, #fff5f5 0%, #fff0f0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {/* Interactive Pizza Preview */}
                <div className="position-relative">
                  <div
                    className={`rounded-circle shadow-lg transition-all duration-500 ${isAnimating ? 'scale-110' : ''}`}
                    style={{
                      width: '280px',
                      height: '280px',
                      background: `
                        radial-gradient(circle at center,
                          #DEB887 0%,
                          #D2B48C 70%,
                          #8B4513 100%
                        )
                      `,
                      border: '8px solid #8B4513',
                      position: 'relative',
                      overflow: 'hidden',
                      transform: isAnimating ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    {/* Base Sauce */}
                    <div
                      className="position-absolute rounded-circle"
                      style={{
                        width: '240px',
                        height: '240px',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: '#DC143C',
                        opacity: 0.8
                      }}
                    />

                    {/* Cheese Layer */}
                    <div
                      className="position-absolute rounded-circle"
                      style={{
                        width: '220px',
                        height: '220px',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: '#FFFACD',
                        opacity: 0.9,
                        boxShadow: 'inset 0 0 20px rgba(255,255,255,0.3)'
                      }}
                    />

                    {/* Dynamic Toppings based on current step */}
                    {Array.from({ length: currentStep + 1 }).map((_, index) => {
                      const angle = (index * 45) % 360;
                      const radius = 50 + (index % 3) * 15;
                      const x = Math.cos(angle * Math.PI / 180) * radius;
                      const y = Math.sin(angle * Math.PI / 180) * radius;

                      return (
                        <div
                          key={index}
                          className="position-absolute rounded-circle"
                          style={{
                            width: '16px',
                            height: '16px',
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: 'translate(-50%, -50%)',
                            background: features[currentStep]?.color || '#8B0000',
                            border: '2px solid rgba(255,255,255,0.5)',
                            animation: `toppingPop 0.5s ease ${index * 0.1}s both`
                          }}
                        />
                      );
                    })}
                  </div>

                  {/* Step Indicator */}
                  <div className="position-absolute bottom-0 start-50 translate-middle-x">
                    <div className="bg-white rounded-pill px-3 py-2 shadow-sm">
                      <small className="fw-bold text-primary">
                        Step {currentStep + 1}: {features[currentStep]?.title}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div 
                className="position-absolute d-none d-lg-block"
                style={{
                  width: '200px',
                  height: '200px',
                  background: 'linear-gradient(135deg, #e9f7fe 0%, #d0edff 100%)',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  top: '-50px',
                  right: '-50px',
                  zIndex: 0,
                  animation: 'float 6s ease-in-out infinite'
                }}
              ></div>
              <div 
                className="position-absolute d-none d-lg-block"
                style={{
                  width: '150px',
                  height: '150px',
                  background: 'linear-gradient(135deg, #fff8e1 0%, #fff3e0 100%)',
                  borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
                  bottom: '-30px',
                  left: '-30px',
                  zIndex: 0,
                  animation: 'float 8s ease-in-out infinite',
                  animationDelay: '1s'
                }}
              ></div>
            </div>
          </div>

          {/* Mobile: Text Content Second */}
          <div className="col-lg-6 order-2 order-lg-1">
            <span className="text-uppercase text-primary fw-bold small">Create Your Masterpiece</span>
            <h2 className="display-5 fw-bold mb-4">Build Your Perfect Pizza</h2>
            <p className="lead text-muted mb-4">
              Unleash your creativity with our pizza builder. Choose from fresh, high-quality ingredients to create a pizza that's uniquely yours.
            </p>
            <div className="row g-4 mt-4">
              {features.map((feature, index) => (
                <div key={index} className="col-6">
                  <div className="text-center p-3 h-100">
                    <div className="mb-2">{feature.icon}</div>
                    <h5 className="h6 fw-bold mb-2">{feature.title}</h5>
                    <p className="small text-muted mb-0">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link to="/pizza-builder" className="btn btn-primary btn-lg px-4 position-relative overflow-hidden">
                  <span className="position-relative z-1">
                    <FaPlay className="me-2" />
                    Start Building Now
                  </span>
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient opacity-0 hover-opacity-20 transition-all"></div>
                </Link>
                <Link to="/menu?category=pizza" className="btn btn-outline-primary btn-lg px-4">
                  <FaArrowRight className="me-2" />
                  View Pizza Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes toppingPop {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }

        .transition-all {
          transition: all 0.3s ease;
        }

        .hover-opacity-20:hover {
          opacity: 0.2 !important;
        }

        .scale-110 {
          transform: scale(1.1);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .duration-500 {
          transition-duration: 500ms;
        }
      `}</style>
    </section>
  );
};

export default PizzaBuilderTeaser;
