import logo from '../../../assets/logo.png'
const Logo = () => {
    return ( 
        <div className='mb-4 md:mb-0 '>
            <img src={logo} alt="" className='rounded-full' width={60} />
        </div>
    );
};

export default Logo;