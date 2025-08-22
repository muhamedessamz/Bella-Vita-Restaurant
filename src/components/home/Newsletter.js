import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaPaperPlane, FaGift, FaUtensils, FaCalendarAlt } from 'react-icons/fa';

const Newsletter = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Thank you for subscribing!', {
        position: 'bottom-right',
        autoClose: 5000,
      });
      
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: <FaGift />, text: 'Exclusive Offers' },
    { icon: <FaUtensils />, text: 'New Menu Updates' },
    { icon: <FaCalendarAlt />, text: 'Event Invites' }
  ];

  return (
    <section className="py-5 bg-primary text-white">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mb-3">Stay Updated</h2>
            <p className="lead mb-4">
              Subscribe to our newsletter for the latest menu updates, special offers, and events.
            </p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3 justify-content-center">
              <div className="col-md-8">
                <div className="input-group">
                  <input
                    type="email"
                    className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Your email address"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    disabled={isSubmitting}
                  />
                  <button 
                    className="btn btn-light text-primary px-4" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    ) : (
                      <FaPaperPlane className="me-2" />
                    )}
                    Subscribe
                  </button>
                  {errors.email && (
                    <div className="invalid-feedback d-block text-start w-100">
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <p className="small text-white-50 mt-2 mb-0">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </form>
            
            <div className="mt-4 d-flex flex-wrap justify-content-center gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="d-flex align-items-center">
                  <div className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center me-2" 
                       style={{ width: '30px', height: '30px' }}>
                    {React.cloneElement(benefit.icon, { className: 'text-white' })}
                  </div>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
