import "./ProductSection.css";

const ProductSection = () => {
  const isAuthenticated = false; // later connect backend

  return (
    <div className="main" id="p4">
      
      {/* Card 1 */}
      <div className="cards">
        <div>
          <img
            className="card-img"
            src="/images/Monstera-Deliciosa-Plant.webp"
            height="260"
            alt=""
          />
          <h1 className="name">Monstera Deliciosa</h1>
          <p className="type">Category: Indoor Plant</p>

          <div className="card-bottom">
            <p className="price">From ₹799</p>

            {isAuthenticated ? (
              <a href="/billing">
                <button className="cart">Buy Now</button>
              </a>
            ) : (
              <a href="/registration">
                <button className="cart">Buy Now</button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="cards">
        <div>
          <img
            className="card-img"
            src="/images/Peacock-Plant.webp"
            height="260"
            alt=""
          />
          <h1 className="name">Peacock Plant</h1>
          <p className="type">Category: Outdoor Plant</p>

          <div className="card-bottom">
            <p className="price">From ₹899</p>

            {isAuthenticated ? (
              <a href="/billing">
                <button className="cart">Buy Now</button>
              </a>
            ) : (
              <a href="/registration">
                <button className="cart">Buy Now</button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="cards">
        <div>
          <img
            className="card-img"
            src="/images/thuja-plant-xl.webp"
            height="260"
            alt=""
          />
          <h1 className="name">Thuja Plant (XL)</h1>
          <p className="type">Category: Outdoor Plant</p>

          <div className="card-bottom">
            <p className="price">From ₹1999</p>

            {isAuthenticated ? (
              <a href="/billing">
                <button className="cart">Buy Now</button>
              </a>
            ) : (
              <a href="/registration">
                <button className="cart">Buy Now</button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="cards">
        <div>
          <img
            className="card-img"
            src="/images/areca-palm-plant-xl.webp"
            height="260"
            alt=""
          />
          <h1 className="name">Areca Palm Plant (XL)</h1>
          <p className="type">Category: Outdoor Plant</p>

          <div className="card-bottom">
            <p className="price">From ₹1199</p>

            {isAuthenticated ? (
              <a href="/billing">
                <button className="cart">Buy Now</button>
              </a>
            ) : (
              <a href="/registration">
                <button className="cart">Buy Now</button>
              </a>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductSection;