import instance from './axios';

function createBooking({ ...values }) {
    return instance
        .post('/booking/create', {
            ...values,
        })
        .then(
            (res) => res,
            (error) => error.response
        );
}

function getAllBookings() {
    return instance.get('/bookings/list').then(
        (res) => res,
        (error) => error.response
    );
}

export { createBooking, getAllBookings };