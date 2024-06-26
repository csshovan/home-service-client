import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";
import ManageServiceCard from "./ManageServiceCard";
import { Helmet } from "react-helmet-async";


const ManageServices = () => {
    const {user} = useContext(AuthContext);
    const [services,setServices] = useState([]);
    console.log(user);
    const url = `https://career-maker-server-three.vercel.app/services?email=${user.email}`
    useEffect(()=>{
      axios.get(url)
      .then(res=>setServices(res.data))
      .then(err=>console.log(err))
    },[user])

    return (
        <div>
            <Helmet>
                <title>Home Care | My-services</title>
            </Helmet>
            <h2 className="text-3xl font-bold my-10 text-center font-bold italic">All Services Added By You</h2>
            {
                services.length == 0 ? <p className="text-center text-2xl font-semibold text-red-600">No Service Added By You</p>:

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service=><ManageServiceCard key={service._id} service={service} services={services} setServices={setServices}></ManageServiceCard>)
                }
            </div>
            }
           
           
        </div>
    );
};

export default ManageServices;