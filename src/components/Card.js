const Card = ({ primaryText, description, headline, CTA, imageUrl }) => {
  console.log(primaryText);
  return (
    <div className='border w-56  m-3 p-2'>
      <div>
        <img src={imageUrl} alt='Ad image' />
      </div>
      <h6 className='font-semibold py-3'>{primaryText}</h6>
      <p className='font-medium'>{headline}</p>
      <small className='font-normal  py-3'>{description}</small>
      <div className='relative flex '>
        <button className='p-4 border mt-5 '>{CTA}</button>
      </div>
    </div>
  );
};

export default Card;
