import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marco Rossi',
      role: 'Food Critic',
      rating: 5,
      content: 'The best Italian food I\'ve had outside of Italy. The pasta is perfectly al dente and the sauces are rich and flavorful.',
      image: 'M',
      color: '#e9c46a'
    },
    {
      id: 2,
      name: 'Sophia Chen',
      role: 'Regular Customer',
      rating: 5,
      content: 'I come here every Friday night with my family. The pizza is incredible and the staff makes us feel like part of the family.',
      image: 'S',
      color: '#2a9d8f'
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'First-time Visitor',
      rating: 4,
      content: 'Great atmosphere and even better food. The tiramisu was the perfect ending to our meal. Will definitely be back!',
      image: 'J',
      color: '#e76f51'
    },
    {
      id: 4,
      name: 'Elena Martinez',
      role: 'Food Blogger',
      rating: 5,
      content: 'Authentic flavors and beautiful presentation. The wine selection perfectly complements the menu. A must-visit!',
      image: 'E',
      color: '#264653'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying, nextTestimonial]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-5 bg-white">
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="text-uppercase text-primary fw-bold small">Testimonials</span>
          <h2 className="display-5 fw-bold mb-3">What Our Guests Say</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Don't just take our word for it. Here's what our valued customers have to say about their experience.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div 
              className="card border-0 shadow-sm p-4 p-lg-5"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="text-center mb-4">
                <div 
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center text-white fw-bold"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: currentTestimonial.color,
                    fontSize: '2rem'
                  }}
                >
                  {currentTestimonial.image}
                </div>
                <div className="d-flex justify-content-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < currentTestimonial.rating ? 'text-warning' : 'text-muted'} 
                    />
                  ))}
                </div>
                <h3 className="h5 fw-bold mb-1">{currentTestimonial.name}</h3>
                <p className="text-muted small">{currentTestimonial.role}</p>
              </div>
              
              <div className="text-center px-lg-5 position-relative">
                <FaQuoteLeft className="text-muted mb-3" style={{ opacity: 0.1, fontSize: '3rem' }} />
                <p className="lead mb-4 position-relative">
                  <FaQuoteLeft className="position-absolute" style={{ top: '-10px', left: '-20px', opacity: 0.2 }} />
                  {currentTestimonial.content}
                </p>
                

                
                <div className="d-flex justify-content-center gap-3 d-block d-sm-flex">
                  <button
                    className="btn rounded-circle d-flex align-items-center justify-content-center me-2 me-sm-0"
                    style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#e74c3c',
                      borderColor: '#e74c3c',
                      color: 'white',
                      fontSize: '18px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)',
                      zIndex: '10',
                      position: 'relative'
                    }}
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#c0392b';
                      e.target.style.transform = 'scale(1.1)';
                      e.target.style.boxShadow = '0 6px 20px rgba(231, 76, 60, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#e74c3c';
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = '0 4px 15px rgba(231, 76, 60, 0.3)';
                    }}
                  >
                    <FaChevronLeft style={{ fontSize: '16px' }} />
                  </button>
                  <button
                    className="btn rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#e74c3c',
                      borderColor: '#e74c3c',
                      color: 'white',
                      fontSize: '18px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)',
                      zIndex: '10',
                      position: 'relative'
                    }}
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#c0392b';
                      e.target.style.transform = 'scale(1.1)';
                      e.target.style.boxShadow = '0 6px 20px rgba(231, 76, 60, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#e74c3c';
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = '0 4px 15px rgba(231, 76, 60, 0.3)';
                    }}
                  >
                    <FaChevronRight style={{ fontSize: '16px' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .card {
          transition: all 0.3s ease;
          border-radius: 1rem;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }

        .btn-outline-primary {
          transition: all 0.3s ease;
        }

        .btn-outline-primary:hover {
          background-color: var(--bs-primary);
          border-color: var(--bs-primary);
          color: white;
        }

        /* Ensure navigation buttons are always visible */
        .btn.rounded-circle {
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        @media (min-width: 768px) {
          .btn.rounded-circle {
            width: 55px !important;
            height: 55px !important;
            font-size: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
