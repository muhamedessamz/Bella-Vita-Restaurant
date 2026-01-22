import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { authService } from '../../api/services';

const Profile = () => {
    const { user, updateUser } = useAuth();

    // State for form fields - initialized with user data
    const [formData, setFormData] = useState({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.email || '',
        phone: user?.phoneNumber || '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    // const [loading, setLoading] = useState(false); // Removed unused state

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ type: '', text: '' });
        // setLoading(true);

        try {
            // 1. Update Profile Details
            const profileData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                phoneNumber: formData.phone
            };

            const profileResponse = await authService.updateProfile(profileData);

            // Update context user if successful
            if (profileResponse.user) {
                updateUser(profileResponse.user);
            }

            // 2. Change Password (if fields are filled)
            if (formData.newPassword) {
                if (formData.newPassword !== formData.confirmPassword) {
                    throw new Error("New passwords do not match");
                }

                if (!formData.currentPassword) {
                    throw new Error("Current password is required to set a new password");
                }

                await authService.changePassword({
                    currentPassword: formData.currentPassword,
                    newPassword: formData.newPassword,
                    confirmNewPassword: formData.confirmPassword
                });
            }

            setMessage({ type: 'success', text: 'Profile updated successfully!' });
            setIsEditing(false);

            // Clear password fields
            setFormData(prev => ({
                ...prev,
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            }));

        } catch (error) {
            console.error(error);
            setMessage({
                type: 'danger',
                text: error.response?.data?.message || error.message || 'Failed to update profile'
            });
        } finally {
            // setLoading(false);
        }
    };

    return (
        <div className="container py-5 mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                        <div className="card-header bg-dark text-white p-4">
                            <h2 className="mb-0 fw-bold">My Profile</h2>
                            <p className="mb-0 text-white-50">Manage your personal information</p>
                        </div>

                        <div className="card-body p-4 p-lg-5">
                            {message.text && (
                                <div className={`alert alert-${message.type === 'success' ? 'success' : 'danger'} mb-4 rounded-3`}>
                                    {message.text}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">
                                    {/* Personal Information Section */}
                                    <div className="col-12">
                                        <h5 className="border-bottom pb-2 mb-3 text-primary">Personal Details</h5>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-bold text-muted small">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="form-control form-control-lg bg-light"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-bold text-muted small">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            className="form-control form-control-lg bg-light"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-bold text-muted small">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control form-control-lg bg-light"
                                            value={formData.email}
                                            disabled // Email usually shouldn't be changeable easily
                                        />
                                        <div className="form-text">To change your email, please contact support.</div>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-bold text-muted small">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control form-control-lg bg-light"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                        />
                                    </div>

                                    {/* Security Section - Only shows when editing */}
                                    {isEditing && (
                                        <>
                                            <div className="col-12 mt-4">
                                                <h5 className="border-bottom pb-2 mb-3 text-primary">Security (Optional)</h5>
                                            </div>

                                            <div className="col-12">
                                                <label className="form-label fw-bold text-muted small">Current Password</label>
                                                <input
                                                    type="password"
                                                    name="currentPassword"
                                                    className="form-control form-control-lg bg-light"
                                                    placeholder="Enter only if changing password"
                                                    value={formData.currentPassword}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label fw-bold text-muted small">New Password</label>
                                                <input
                                                    type="password"
                                                    name="newPassword"
                                                    className="form-control form-control-lg bg-light"
                                                    value={formData.newPassword}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label fw-bold text-muted small">Confirm New Password</label>
                                                <input
                                                    type="password"
                                                    name="confirmPassword"
                                                    className="form-control form-control-lg bg-light"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="d-flex justify-content-end gap-3 mt-5">
                                    {!isEditing ? (
                                        <button
                                            type="button"
                                            className="btn btn-outline-dark px-4 py-2 rounded-pill fw-bold"
                                            onClick={() => setIsEditing(true)}
                                        >
                                            Edit Profile
                                        </button>
                                    ) : (
                                        <>
                                            <button
                                                type="button"
                                                className="btn btn-light px-4 py-2 rounded-pill fw-bold text-muted"
                                                onClick={() => {
                                                    setIsEditing(false);
                                                    setMessage({ type: '', text: '' });
                                                }}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-dark px-4 py-2 rounded-pill fw-bold"
                                            >
                                                Save Changes
                                            </button>
                                        </>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
        .form-control:focus {
            border-color: #2c3e50;
            box-shadow: 0 0 0 0.25rem rgba(44, 62, 80, 0.1);
        }
      `}</style>
        </div>
    );
};

export default Profile;
