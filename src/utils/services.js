import axios from 'axios';

const getServices = async () => {
    return axios.get('/services').then(res => res.data);
};

const getAppointmentsByService = async (id) => {
    return axios.get(`/appointments/${id}`).then(res => res.data);
};

export {
    getServices,
    getAppointmentsByService
};
