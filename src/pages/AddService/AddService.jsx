import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AddService = () => {

    const { user} = useContext(AuthContext);
    const handleAddService =e =>{
        e.preventDefault();
        const form = event.target;
        const service_name = form.service_name.value;
        const service_image = form.service_image.value;
        const service_provider_name = form.service_provider_name.value;
        const service_provider_email = form.service_provider_email.value;
        const service_provider_image = user.photoURL;
        const service_area = form.service_area.value;
        const description = form.description.value;
        const service_provider_description = form.service_provider_description.value;
        const service_price = form.service_price.value;

        const service ={
            service_area,service_name,service_image,service_provider_email,service_provider_name,description,service_price,service_provider_description,service_provider_image
        }

        console.log(service);
        axios.post('https://career-maker-server-three.vercel.app/services',service)
        .then(res=>{
           console.log(res.data);
           if (res.data.insertedId) {
               Swal.fire({
                   icon: 'success',
                   title: 'Service added',

               })
           }
        })
        .then(err=>{
           console.log(err);
        })
    }
    return (
        <div>
            <Helmet>
                <title>Home Care | Add-service</title>
            </Helmet>
            <form onSubmit={handleAddService} className=" md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <select id="cars" required name="service_name"  className="input input-bordered">
                            <option value="Home Cleaning">Home Cleaning</option>
                            <option value="Plumbing">Plumbing</option>
                            <option value="Electrical Repaire">Electrical Repaire</option>
                            <option value="HVAC">HVAC</option>
                            <option value="Home Renovation">Home Renovation</option>
                        </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Image Url</span>
                    </label>
                    <input type="text"  required name="service_image"  className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Provider Name</span>
                    </label>
                    <input type="text"  readOnly name="service_provider_name"  defaultValue={user?.displayName} className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Provide Email</span>
                    </label>
                    <input type="email" readOnly name="service_provider_email" defaultValue={user?.email} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service provider Description</span>
                    </label>
                    <textarea name="service_provider_description" required cols="20" rows="10" className="rounded-lg"></textarea>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Area</span>
                    </label>
                    <input type="text" required name="service_area" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description" required cols="20" rows="10" className="rounded-lg"></textarea>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" required defaultValue={'$'} name="service_price"  className="input input-bordered" />
                </div>



                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Service</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;