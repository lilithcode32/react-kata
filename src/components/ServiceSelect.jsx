import "./ServiceSelect.css";
import {useEffect, useState} from 'react';
import {getServices} from '../utils/services';
import ServiceAccordion from './ServiceAccordion';

const ServiceSelect = () => {

    const [servicesAvailable, setAvailableServices] = useState(null);

    useEffect(()=> {
        if(!servicesAvailable){
            getServices().then(setAvailableServices);
        }
    }, [servicesAvailable]);


    if(servicesAvailable){
        return <>
            {servicesAvailable.map(service => <ServiceAccordion key={service.id} service={service} />)}
        </>
    }

    return null;
};

export default ServiceSelect;
