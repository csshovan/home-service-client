import banner1 from './../../../assets/1.jpg'
import banner2 from './../../../assets/2.jpg'
import banner3 from './../../../assets/3.jpg'

const Banner = () => {
  return (

    <div className="carousel w-full rounded-lg">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={banner3} className="w-full " />
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle btn-primary mr-5">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full rounded-lg">
        <img src={banner2} className="w-full " />
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle btn-primary mr-5">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full rounded-lg">
        <img src={banner1} className="w-full " />
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle btn-primary mr-5">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>
  );
};

export default Banner;