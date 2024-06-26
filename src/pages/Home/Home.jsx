import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import PopularServices from "../../components/PopularServices/PopularServices";
import { Helmet } from "react-helmet-async";
import ContactUs from "../../components/ContactUs/ContactUs";
import Award from "../../components/Award/Award";
import About from "../../components/About/About";






const Home = () => {
    const popularServices = useLoaderData();
    
    const services = popularServices.slice(0,4);
   
    return (
        <div>
            <Helmet>
                <title>Home Care | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularServices services={services}></PopularServices>
            <About></About>
            <Award></Award>
            <ContactUs></ContactUs>
            
           
            
         
        </div>
    );
};

export default Home;