import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AwardCard from "./AwardCard";


const Award = () => {

    const [awards,setAwards] = useState([]);
    useEffect(()=>{
        axios.get('https://career-maker-server-three.vercel.app/awards')
        .then(res=>setAwards(res.data))
        .then(err=>console.log(err))
    },[])
    return (
        <div className="text-center my-10">
            <h2 className="text-2xl my-6 font-bold italic">Awards we get recent time</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    awards.map(award => <AwardCard key={award._id} award={award}></AwardCard>)
                }
             </div>
        </div>
    );
};

export default Award;