import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageServiceCard = ({ service, services, setServices }) => {

    const { _id, service_name, service_image, service_provider_email, service_provider_name, description, service_price } = service;


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('delete');

                fetch(`https://career-maker-server-three.vercel.app/services/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())

                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Service Deleted',
                                'success'
                            )
                            const remaining = services.filter(car => car._id !== _id);
                            setServices(remaining);
                        }

                    })
            }
        })
    }


    return (
        <div>


            <div className="card  bg-yellow-50 hover:border-2  hover:border-blue-700 hover:bg-yellow-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={service_image} alt="Shoes" className="rounded-xl h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-blue-900">{service_name}</h2>


                    <p className="text-lg font-bold mb-4">Price : <span className="italic">{service_price}</span></p>
                    <div className="card-actions">
                        <Link to={`/updateservice/${_id}`}>
                            <button className="btn btn-outline">Update Product</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-outline">delete product</button>
                    </div>
                </div>
            </div>
        

            
        </div>
    );
};

export default ManageServiceCard;