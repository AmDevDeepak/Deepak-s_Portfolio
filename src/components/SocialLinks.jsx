import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const SocialLinks = () => {
  return (
    <section className="mt-10">
      <div className="flex gap-2">
        {socialLinks.map((link) => (
          <div className="flex items-center gap-2">
            <img
              src={link.iconUrl}
              className="w-7 h-7 object-contain"
              alt="icon"
            />
            <Link to={link.link}>{link.name}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
