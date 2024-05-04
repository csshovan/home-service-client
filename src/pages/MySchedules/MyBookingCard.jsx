

const MyBookingCard = ({booking}) => {

    const {service_image,service_name,service_price,status,service_provide_name,date} = booking;
    // let smallDesc;
    // description.length > 50 ? smallDesc = description.slice(0, 48) : description
    return (
        <div className="card  bg-yellow-50 hover:border-2  hover:border-blue-700 hover:bg-yellow-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={service_image} alt="Shoes" className="rounded-xl h-52" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-blue-900">{service_name}</h2>
           <p className="text-lg font-bold ">Price : <span className="italic">{service_price}</span></p>
           <p className="text-lg font-bold ">Status : <span className="italic">{status}</span></p>
           <p className="text-lg font-bold ">Service Date : <span className="italic">{date}</span></p>
             
        </div>
    </div>
    );
};

export default MyBookingCard;