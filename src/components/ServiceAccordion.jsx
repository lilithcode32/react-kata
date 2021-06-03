// import "./ServiceAccordion.css";

import {useEffect, useState} from 'react';
import {getAppointmentsByService} from '../utils/services';
import moment from 'moment';

const ServiceAccordion = ({service}) => {
        const {serviceName, id, serviceDuration} = service;

        const [appointments, setAppointments] = useState(null);
        const [open, setOpen] = useState(false);

        useEffect(() => {
            if (open && !appointments) {
                getAppointmentsByService(id).then(setAppointments);
            }
        }, [open, appointments, id]);

        let appointmentList;
        if (appointments && open) {
            appointmentList = appointments.map(appointment => <label key={appointment.id}>
                <input type="radio" id="appointment" value={appointment.id} />
                <span>{moment(appointment.apptStartTime).format('dddd MMMM Do h:mm:ss a')}</span>
            </label>);
        }

        return <div>
            <label onClick={() => setOpen(!open)}>{serviceName}</label>
            <div className={'service-appointments-available'}>
                {appointmentList}
            </div>
        </div>;

        //<Link to={'/schedule/' + appointment.id}>
    }
;

export default ServiceAccordion;
