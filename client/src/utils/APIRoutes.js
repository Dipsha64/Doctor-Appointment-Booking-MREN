const host = "http://localhost:4006";

export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const getAllDoctor = `${host}/api/doctor/`;
export const getUserProfile = `${host}/api/users/profile/me`;
export const getUserAppointment = `${host}/api/users/appointment`;
export const updateUser = `${host}/api/users/`;
export const getDoctorProfile = `${host}/api/doctor/profile/me`;
export const updateDoctorProfile = `${host}/api/doctor/`;
export const createReview = `${host}/api/doctor/`;
export const getSingleDoctor = `${host}/api/doctor/`;
export const getBookingSession = `${host}/api/booking/checkout-session/`;