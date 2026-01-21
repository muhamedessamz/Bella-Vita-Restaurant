import React from 'react';

const OnlineOrder = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="py-5">
        <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">Online Ordering</h1>
          <p className="lead text-muted">Order your favorite dishes online for pickup or delivery</p>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="text-center py-4">
                  <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '100px', height: '100px'}}>
                    <img
                      src="/images/logo.png"
                      alt="Bella Vita Logo"
                      style={{
                        height: '60px',
                        width: '60px',
                        objectFit: 'contain',
                        borderRadius: '8px'
                      }}
                    />
                  </div>
                  <h3 className="mt-4 mb-3">Coming Soon!</h3>
                  <p className="text-muted mb-4">
                    We're currently working on our online ordering system to serve you better.
                    In the meantime, please call us to place your order.
                  </p>
                  <a href="tel:+1234567890" className="btn btn-primary btn-lg">
                    Call to Order
                  </a>
                </div>

                <div className="mt-5">
                  <h4 className="mb-4">How It Will Work</h4>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="text-center p-3">
                        <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                          <span className="h4 mb-0 text-white fw-bold">1</span>
                        </div>
                        <h5>Browse Menu</h5>
                        <p className="text-muted mb-0">Select your favorite dishes from our menu</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center p-3">
                        <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                          <span className="h4 mb-0 text-white fw-bold">2</span>
                        </div>
                        <h5>Customize Order</h5>
                        <p className="text-muted mb-0">Add special instructions or dietary preferences</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center p-3">
                        <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                          <span className="h4 mb-0 text-white fw-bold">3</span>
                        </div>
                        <h5>Checkout</h5>
                        <p className="text-muted mb-0">Pay online and get your order confirmation</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="alert alert-info">
                    <div className="text-center">
                      <div className="mb-3">
                        <i className="bi bi-info-circle-fill fs-4"></i>
                      </div>
                      <div>
                        <h5>Need Help?</h5>
                        <p className="mb-0">
                          Call us at <a href="tel:+1234567890" className="text-primary">(123) 456-7890</a> or
                          email <a href="mailto:orders@ristoranteinternazionale.com" className="text-primary">orders@ristoranteinternazionale.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
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

export default OnlineOrder;
