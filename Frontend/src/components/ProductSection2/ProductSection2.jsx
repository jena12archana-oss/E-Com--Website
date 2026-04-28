import "./ProductSection2.css";
const TopTrending = ({ isAuthenticated = false }) => {
  const plants = [
    {
      image: "/images/Chlorophytum-Spider-Plant.webp",
      name: "Chlorophytum Plant",
      category: "Indoor Plant",
      price: "₹299",
    },
    {
      image: "/images/Lucky-Bamboo-Plant.webp",
      name: "Lucky Bamboo Plant",
      category: "Indoor Plant",
      price: "₹699",
    },
    {
      image: "/images/Money-Plant-Vareigated.webp",
      name: "Money Plant",
      category: "Indoor/Outdoor Plant",
      price: "₹599",
    },
    {
      image: "/images/Money-Plant.webp",
      name: "Money Plant",
      category: "Indoor/Outdoor Plant",
      price: "₹399",
    },
    {
      image: "/images/Rubber-Plant.webp",
      name: "Rubber Plant",
      category: "Indoor Plant",
      price: "₹299",
    },
    {
      image: "/images/ZZ-Plant.webp",
      name: "ZZ Plant",
      category: "Indoor Plant",
      price: "₹1399",
    },
    {
      image: "/images/Snake-Plant.webp",
      name: "Snake Plant",
      category: "Indoor/Outdoor Plant",
      price: "₹749",
    },
    {
      image: "/images/Broken-heart.webp",
      name: "Broken Heart",
      category: "Indoor Plant",
      price: "₹649",
    },
  ];

  return (
    <>
      <img
        src="/images/top-trending.jpg"
        alt="Top Trending"
        className="top-trending-banner"
      />

      <div className="main" id="p4">
        {plants.map((plant, index) => (
          <div className="cards" key={index}>
            <div>
              <img
                className="card-img"
                src={plant.image}
                height="260px"
                alt={plant.name}
              />

              <h1 className="name">{plant.name}</h1>

              <p className="type">Category: {plant.category}</p>

              <div className="card-bottom">
                <p className="price">From {plant.price}</p>

                <a
                  href={isAuthenticated ? "/billing" : "/registration"}
                >
                  <button className="cart">Buy Now</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopTrending;