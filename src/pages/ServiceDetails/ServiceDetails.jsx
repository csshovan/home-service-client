import { Link, useLoaderData } from "react-router-dom";
import AddBookings from "./AddBookings";
import SameProvider from "./SameProvider";
import { Helmet } from "react-helmet-async";


const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, service_image, service_name, description, service_area, service_provider_image, service_provider_email, service_provider_name, service_price, service_provider_description } = service;
    return (
        <div>
            <Helmet>
                <title>Home Care | Services |{service_name}</title>
            </Helmet>

            {/* <h2>{service_provider_name}</h2>
             <img src={service_provider_image} alt="" />
             <p>{service_provider_description}</p> */}

            <div className="card max-w-xl mx-auto bg-amber-100 shadow-xl p-6 my-6">
            <h2 className="text-center font-bold text-3xl italic text-blue-800">Service Provider Information</h2>
                <figure className="px-10 pt-10">
               
                    <img src={service_provider_image} alt="no image" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl text-orange-500 font-bold">
                        Name : {service_provider_name}</h2>
                        <p className="italic">Description : {service_provider_description}</p>
                    <p className="text-lg font-medium">Service Area : {service_area}</p>
                </div>
            </div>


            <div className="card bg-yellow-50 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service_image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl  font-bold text-blue-900">{service_name}</h2>
                <p>{description}</p>
                
                <div className="flex justify-center items-center gap-6 my-4 border-2 border-red-700 rounded-lg p-3">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={service_provider_image}/>
                        </div>
                    </div>
                    <h2 className=" italic font-bold text-lg ">{service_provider_name}</h2>
                </div>
               
               <p className="text-lg font-bold ">Price : <span className="italic">{service_price}</span></p>
               <p className="text-lg font-bold mb-2">Service Area : <span className="italic">{service_area}</span></p>
                 <div className="card-actions">
                    <AddBookings service={service}></AddBookings>
                </div>
            </div>
        </div>


        <div>
            <SameProvider email = {service_provider_email} name={service_provider_name} id={_id}></SameProvider>
        </div>

                          
        </div>
    );
};

export default ServiceDetails;