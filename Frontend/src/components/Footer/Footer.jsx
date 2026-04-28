import "./Footer.css";
import { toast } from "react-hot-toast";

const Footer = () => {
  const handleSubscribe = () => {
    const email = document.getElementById("emailInput").value.trim();

    // Empty email check
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Success toast
    toast.success(`Subscribed successfully with: ${email}`);

    // Clear input field
    document.getElementById("emailInput").value = "";
  };

  return (
    <>
      {/* Delivery Images Section */}
      <div className="delivery-container">
        <img
          src="/images/delivery1.png"
          alt="Delivery Service 1"
          width="170px"
        />
        <img
          src="/images/delivery2 (3).png"
          alt="Delivery Service 2"
          width="220px"
        />
        <img
          src="/images/delivery3 (2).png"
          alt="Delivery Service 3"
          width="160px"
        />
        <img
          src="/images/delivery4 (2).png"
          alt="Delivery Service 4"
          width="160px"
        />
      </div>

      {/* Footer Section */}
      <footer>
        <div className="row primary">
          {/* About Section */}
          <div className="column about">
            <h3 className="footer-heading">PlantsBuy</h3>
            <p>
              PlantsBuy is dedicated to bringing the joy of plants to everyone.
              We offer a wide variety of healthy, unique plants, along with
              expert care tips and personalized recommendations. Whether you're
              a seasoned plant parent or just starting out, we're here to help
              you create a thriving indoor jungle.
            </p>
          </div>

          {/* Quick Links */}
          <div className="column links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/ourteam">Our Team</a>
              </li>
              <li>
                <a href="/terms">Terms Of Service</a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="column subscribe">
            <h3 className="footer-heading">Subscribe</h3>
            <div>
              <input
                type="email"
                id="emailInput"
                placeholder="Your email id here"
              />
              <button onClick={handleSubscribe}>Subscribe</button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="row secondary">
          <div>
            <p className="icon-space">
              <i className="fa-solid fa-phone"></i>
            </p>
            <p>+91 8249254469</p>
          </div>

          <div>
            <p className="icon-space">
              <i className="fas fa-envelope"></i>
            </p>
            <p>support@plantsbuy.in</p>
          </div>

          <div>
            <p className="icon-space">
              <i className="fas fa-map-marker-alt"></i>
            </p>
            <p>Bhadrak, Odisha</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="row copyright">
          <p>Copyright &copy; 2024 PlantsBuy | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;