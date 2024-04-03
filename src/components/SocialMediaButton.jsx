import { Link } from "react-router-dom";
import '../index.css';
// eslint-disable-next-line react/prop-types
const SocialMediaButton = ({ icon, color, href }) => (
    <Link
       className="btn btn-primary btn-floating m-1 redondo "
       style={{ backgroundColor: color }}
       to={href}
       role="button"
    >
       <i className={icon}></i>
    </Link>
   );
   export default SocialMediaButton;