import { Link } from "react-router-dom";
const CTA = () => {
  return (
    <div className="cta">
      <p className="cta-text">
        Oh! you have a message for me ?{" "}
        <Link to="/contact" className="btn">
          Let's Contact
        </Link>
      </p>
    </div>
  );
};

export default CTA;
