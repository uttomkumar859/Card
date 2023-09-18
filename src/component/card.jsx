// eslint-disable-next-line react/prop-types
const Cardcomponent = ( {img,heading , price, title , btn} ) => {
    return (
        <div className="card_box">
            <div className="card_content">
            <img src={img}/>
            <h1>{heading}</h1>
            <h3>{price}</h3>
            <p>{title}</p>
            <button>{btn}</button>
            </div>
        </div>
    );
};

export default Cardcomponent;