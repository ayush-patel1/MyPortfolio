import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid } from "react-icons/gi";

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={"/images/image.png"}
            alt="Ayush Patel"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Ayush Patel">
            Ayush Patel
          </h1>

          <p className="title">Full-Stack Developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <GiClawSlashes />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:ayush005rkt@gmail.com" className="contact-link">
                ayush005rkt@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiCalendar />
            </div>

            <div className="contact-info">
              <p className="contact-title">Date of Birth</p>
              <time dateTime="2005-10-26">October 26, 2005</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Varanasi, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/ayush-patel05/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://github.com/ayush-patel1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://twitter.com/DevAyushX"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;

