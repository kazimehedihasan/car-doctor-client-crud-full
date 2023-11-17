import { useState } from "react";
import useServices from "../../../Hooks/useServices";
import ServiceCard from "./ServiceCard";


const Services = () => {
    // const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('')
    // useEffect(() => {
    //     fetch('http://localhost:5000/services?sort=${asc ? 'asc' : 'desc'}&search=${search}')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])
    const services = useServices(asc, search)


     const handlersearch = e => {
        e.preventDefault();
const searchText = e.target.search.value;
// console.log(searchText);
setSearch(searchText)
     }
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
<form onSubmit={handlersearch}>
    <input type="text" name="search" id="" className="h-[43px] border border-orange-500"/>
    <input type="submit" value="search" className="btn" />
</form>

                <button onClick={() => setAsc(!asc)}
                 className="btn bg-orange-200 mt-10">
               {asc ? 'price: High to Low' : 'price : Low to High'}
                    </button>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={services.service}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;