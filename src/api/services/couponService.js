import api from '../axiosConfig';

const validateCoupon = async (code, orderTotal) => {
    const response = await api.post('/coupons/validate', { code, orderTotal });
    return response.data;
};

const couponService = {
    validateCoupon,
};

export default couponService;
