import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import reservationService from '../api/services/reservationService';

const Reservations = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user ? `${user.firstName} ${user.lastName}` : '',
    email: user?.email || '',
    phone: user?.phoneNumber || '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const convertToTimeSpan = (timeStr) => {
    // timeStr format "11:00 AM"
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}:00`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isAuthenticated()) {
      navigate('/login', { state: { from: '/reservations' } });
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        reservationDate: formData.date,
        reservationTime: convertToTimeSpan(formData.time),
        partySize: parseInt(formData.guests),
        specialRequests: formData.specialRequests
      };

      await reservationService.createReservation(payload);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Failed to make reservation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ paddingTop: '100px' }}>
        <div className="container py-5 text-center">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-5">
              <div className="text-success mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
              </div>
              <h2 className="mb-3">Reservation Confirmed!</h2>
              <p className="lead">Thank you for your reservation, {formData.name}!</p>
              <p>We've sent a confirmation to {formData.email}.</p>
              <button
                className="btn btn-primary mt-3"
                onClick={() => {
                  setSubmitted(false);
                  setFormData(prev => ({ ...prev, date: '', time: '', specialRequests: '' }));
                }}
              >
                Make Another Reservation
              </button>
              <div className="mt-3">
                <Link to="/profile" className="text-secondary">View My Reservations</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-md-5">
                  <h1 className="text-center mb-4">Make a Reservation</h1>
                  <p className="text-center text-muted mb-5">
                    Book your table online for an unforgettable dining experience.
                  </p>

                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

                  {!isAuthenticated() && (
                    <div className="alert alert-info" role="alert">
                      Please <Link to="/login" state={{ from: '/reservations' }} className="alert-link">Sign In</Link> to make a reservation.
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      <div className="col-md-6 text-start">
                        <label htmlFor="name" className="form-label fw-bold">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={!!user} // Auto-filled for logic users
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="col-md-6 text-start">
                        <label htmlFor="email" className="form-label fw-bold">
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={!!user}
                          placeholder="Enter your email address"
                        />
                      </div>

                      {/* Phone Number Field Removed from form submission on Backend for ReservationRequest but good for contact info if needed. Keeping it but not sending to API as CreateReservationRequest doesn't have it explicitly unless User update? 
                        Actually User data has phone. The ReservationRequest doesn't take Phone. 
                        We will keep it as ReadOnly if user has it, or edit. But backend doesn't take it in CreateReservationRequest. 
                        It relies on User Profile. 
                    */}
                      <div className="col-md-6 text-start">
                        <label htmlFor="phone" className="form-label fw-bold">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={!!user?.phoneNumber}
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div className="col-md-6 text-start">
                        <label htmlFor="guests" className="form-label fw-bold">Number of Guests <span className="text-danger">*</span></label>
                        <select
                          className="form-select"
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                            <option key={num} value={num === '9+' ? 9 : num}>
                              {num} {num === 1 ? 'person' : 'people'}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-6 text-start">
                        <label htmlFor="date" className="form-label fw-bold">Date <span className="text-danger">*</span></label>
                        <input
                          type="date"
                          className="form-control"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>

                      <div className="col-md-6 text-start">
                        <label htmlFor="time" className="form-label fw-bold">Time <span className="text-danger">*</span></label>
                        <select
                          className="form-select"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a time</option>
                          {['11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'].map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>

                      <div className="col-12 text-start">
                        <label htmlFor="specialRequests" className="form-label fw-bold">Special Requests</label>
                        <textarea
                          className="form-control"
                          id="specialRequests"
                          name="specialRequests"
                          rows="3"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          placeholder="Allergies, high chairs, special occasions, etc."
                        ></textarea>
                      </div>

                      <div className="col-12 mt-4">
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary px-5 py-3"
                            disabled={loading || !isAuthenticated()}
                            style={{
                              borderRadius: '50px',
                              fontWeight: '600',
                              fontSize: '1.1rem'
                            }}
                          >
                            {loading ? 'Booking...' : 'Book Table'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
