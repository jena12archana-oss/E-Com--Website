import React, { useState } from "react";
import "./PlantCarousel.css";

const PlantCarousel = () => {
  const [carouselClass, setCarouselClass] = useState("carousel");

  const [plants, setPlants] = useState([
    {
      image: "/images/img1.png",
      title: "Fiddle-Leaf Fig",
      topic: "Ficus lyrata",
      intro:
        "Ficus lyrata, commonly known as the fiddle-leaf fig, is a species of plant in the mulberry and fig family Moraceae.",
      detail:
        "Ficus lyrata leaves are lyrate, resembling a lyre or fiddle. The leaves can grow large with leathery texture, prominent veins and wavy margins.",
      specs: [
        ["Type", "Indoors"],
        ["Temp", "18°C-24°C"],
        ["Propagation", "Division"],
        ["Family", "Moraceae"],
        ["Conservation", "Least Concern"],
      ],
    },
    {
      image: "/images/img2.png",
      title: "Swiss Cheese Plant",
      topic: "Monstera adansonii",
      intro:
        "Variegated Monstera or Swiss cheese plant is famous for its fenestrated leaves and high collector value.",
      detail:
        "The Swiss cheese plant develops holes in leaves as it matures. Native to Central and South America, it thrives indoors.",
      specs: [
        ["Type", "Indoors"],
        ["Temp", "18°C-27°C"],
        ["Propagation", "Air Layering"],
        ["Family", "Araceae"],
        ["Conservation", "NA"],
      ],
    },
    {
      image: "/images/img3.png",
      title: "Compacta",
      topic: "Hoya carnosa",
      intro:
        "Hoya carnosa compacta, also called Hindu Rope Plant, is prized for twisted waxy foliage.",
      detail:
        "This low-maintenance trailing houseplant thrives in bright indirect light and produces fragrant star-shaped flowers.",
      specs: [
        ["Type", "Indoors"],
        ["Temp", "18°C-27°C"],
        ["Propagation", "Stem Cutting"],
        ["Family", "Apocynaceae"],
        ["Conservation", "Least Concern"],
      ],
    },
    {
      image: "/images/img4.png",
      title: "Minima",
      topic: "Rhaphidophora Tetrasperma",
      intro:
        "Mini Monstera is loved for compact foliage and tropical aesthetic.",
      detail:
        "Philodendron Minima is a low-maintenance houseplant with trailing growth and bright green leaves.",
      specs: [
        ["Type", "Indoors"],
        ["Temp", "15°C-20°C"],
        ["Propagation", "Division"],
        ["Family", "Arum"],
        ["Conservation", "Rare"],
      ],
    },
    {
      image: "/images/img5.png",
      title: "Old Pine Bonsaii",
      topic: "Pinus thunbergii",
      intro:
        "Old Pine Bonsai represents patience and artistry through miniature tree shaping.",
      detail:
        "Crafted over decades, bonsai pines symbolize resilience, time, and harmony between nature and human design.",
      specs: [
        ["Type", "Both"],
        ["Temp", "10°C-25°C"],
        ["Propagation", "Cuttings"],
        ["Family", "Pinaceae"],
        ["Conservation", "NA"],
      ],
    },
  ]);

  const handleNext = () => {
    setCarouselClass("carousel next");

    setTimeout(() => {
      setPlants((prev) => [...prev.slice(1), prev[0]]);
      setCarouselClass("carousel");
    }, 500);
  };

  const handlePrev = () => {
    setCarouselClass("carousel prev");

    setTimeout(() => {
      setPlants((prev) => [
        prev[prev.length - 1],
        ...prev.slice(0, prev.length - 1),
      ]);
      setCarouselClass("carousel");
    }, 500);
  };

  const showDetail = () => {
    setCarouselClass("carousel showDetail");
  };

  const hideDetail = () => {
    setCarouselClass("carousel");
  };

  return (
    <div className={carouselClass}>
      <div className="list">
        {plants.map((plant, index) => (
          <div className="item" key={index}>
            <img src={plant.image} alt={plant.title} />

            <div className="introduce">
              <div className="title">{plant.title}</div>
              <div className="topic">{plant.topic}</div>
              <div className="des">{plant.intro}</div>
              <button className="seeMore" onClick={showDetail}>
                SEE MORE ↗
              </button>
            </div>

            <div className="detail">
              <div className="title">{plant.title}</div>
              <div className="des">{plant.detail}</div>

              <div className="specifications">
                {plant.specs.map((spec, i) => (
                  <div key={i}>
                    <p>{spec[0]}</p>
                    <p>{spec[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={handlePrev}>
          &#10094;
        </button>

        <button id="next" onClick={handleNext}>
          &#10095;
        </button>

        <button id="back" onClick={hideDetail}>
          See All ↗
        </button>
      </div>
    </div>
  );
};

export default PlantCarousel;