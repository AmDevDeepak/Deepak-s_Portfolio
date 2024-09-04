import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const CTA = () => {
  return (
    <div className="cta">
      <p className="cta-text">
        Oh! you have a message for me ? <br className="sm:block hidden" />
        <Link to="/contact" className="btn">
          Let's Contact
        </Link>
      </p>
    </div>
  );
};

export default CTA;
