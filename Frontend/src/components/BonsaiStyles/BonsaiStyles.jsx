import "./BonsaiStyles.css";

const BonsaiStyles = () => {
  return (
    <div className="p-page" id="p3">
      <div className="p-plants">
        <div className="p-flex1">
          <img
            className="p-plant1"
            src="/images/formal-upright-bonsai.png"
            height="150"
            width="150"
            alt="Formal Upright Bonsai"
          />

          <div className="p-green-bg1">
            Formal Upright. It is one of the most natural styles whereas the
            trunk is perfectly straight. The branches should alternate left to
            right to suggest age. A bonsai is created beginning with a specimen
            of source material.
          </div>
        </div>

        <div className="p-flex1" id="pt-2">
          <div className="p-green-bg2">
            Informal Upright. This style is characterized by a lightly curving
            trunk displaying the harsh elements of nature. This can be achieved
            with ease using wire and/or cords. It is as appropriate for conifers
            as with deciduous trees.
          </div>

          <img
            className="p-plant2"
            src="/images/informal-bonsai-tree.webp"
            height="150"
            width="150"
            alt="Informal Upright Bonsai"
          />
        </div>

        <div className="p-flex1" id="pt-3">
          <img
            className="p-plant3"
            src="/images/black-hills-spruce-bonsai-forest-planting.jpg"
            height="150"
            width="150"
            alt="Black Hills Spruce Bonsai"
          />

          <div className="p-green-bg3">
            Black Hills spruce is a leftover from the last glacial retreat,
            10,000-15,000 years ago and exists with other species, twinflower,
            that are otherwise found further north.
          </div>
        </div>
      </div>

      <div className="p-descp">
        <p className="p-about">Japanese</p>

        <h2 className="p-keep">
          Art Technique
          <br />
        </h2>

        <h1 className="p-your">Bonsai Styles</h1>

        <div className="p-instructions">
          <p>
            Bonsai is the Japanese art of growing and shaping miniature trees in
            containers, developed from the traditional Chinese art form of
            penjing. Penjing and bonsai differ in that the former attempts to
            display wilder, more naturalistic scenes, often representing
            landscapes, including elements such as water, rocks, or figurines;
            on the other hand, bonsai typically focuses on a single tree or a
            group of trees of the same species, with a higher level of aesthetic
            refinement.
            <br />
            <br />
            They can go up to two weeks or more without water, so give them a
            drink before you go, and don’t worry about them too much.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BonsaiStyles;