

const AwardCard = ({award}) => {
    const {award_image,award_title} = award;
    return (
        <div className="card  bg-base-300 hover:border-2 my-2 hover:border-blue-700 shadow-xl">
        <figure className="px-10 h-[300px] pt-10">
          <img src={award_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{award_title}</h2>
        </div>
      </div>
    );
};

export default AwardCard;