import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";


const useServices = (short) => {
    const [services, setServices] = useState([]);

 

    useEffect(() => {
        // fetch('http://localhost:5000/services')
        //     .then(res => res.json())
        //     .then(data => setServices(data));

            axiosSecure(`/services?shors=${short ? 'short' : 'desc'}`)
            .then(res => setServices(res.data));

    }, [short])
    return services
};

export default useServices;