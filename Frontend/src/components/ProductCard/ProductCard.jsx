const ProductCard = ({ name, category, price, image, isAuthenticated }) => {
  return (
    <div className="cards">
      <img className="card-img" src={image} alt={name} />

      <div className="card-content">
        <h1 className="name">{name}</h1>

        <p className="type">Category: {category}</p>

        <div className="card-bottom">
          <p className="price">From ₹{price}</p>

          <a href={isAuthenticated ? "/billing" : "/registration"}>
            <button className="cart">Buy Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;