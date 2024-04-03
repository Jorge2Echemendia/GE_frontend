import "bootstrap/dist/css/bootstrap.min.css";
import SocialMediaButton from "./SocialMediaButton";
const Footer = () => (
 <div className="">
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <SocialMediaButton
            icon="fab fa-facebook-f"
            color="#3b5998"
            href="#!"
          />
          <SocialMediaButton
            icon="fab fa-twitter"
            color="#55acee"
            href=""
          />
          <SocialMediaButton
            icon="fab fa-google"
            color="#dd4b39"
            href=""
          />
          <SocialMediaButton
            icon="fab fa-instagram"
            color="#ac2bac"
            href=""
          />
          <SocialMediaButton
            icon="fab fa-linkedin-in"
            color="#0082ca"
            href=""
          />
          <SocialMediaButton
            icon="fab fa-github"
            color="#333333"
            href=""
          />
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright: Gestion del Expediente
        
      </div>
    </footer>
 </div>
);

export default Footer;