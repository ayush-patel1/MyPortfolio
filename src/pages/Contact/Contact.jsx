import { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success animation
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ fullname: '', email: '', message: '' });
    }, 3000);
    
    // Open Gmail in new tab
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ayush005rkt@gmail.com&su=Contact from ${formData.fullname}&body=${formData.message}`;
    window.open(mailtoLink, '_blank');
  };

  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/place/Varanasi,+Uttar+Pradesh,+India/@25.3217562,83.0040103,11z', '_blank');
  };

  return (
    <section className="contact" data-page="contact" ref={contactRef}>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* Map Section with Animation */}
      <section className={`mapbox-modern ${isVisible ? 'visible' : ''}`}>
        <div className="map-container">
          <figure className="map-figure">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186380.7050192134!2d83.00401031626532!3d25.321685899315924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398eaeb0d3cf197b%3A0x8559636538fd3287!2sVaranasi%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1662592748970!5m2!1sen!2sus"
              width="100%" 
              height="400" 
              loading="lazy" 
              title="Google Map"
              allowFullScreen
            ></iframe>
          </figure>
          <button 
            className="view-location-btn"
            onClick={openGoogleMaps}
            aria-label="View on Google Maps"
          >
            <FaMapMarkerAlt />
            <span>View on Google Maps</span>
          </button>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className={`contact-form-modern ${isVisible ? 'visible' : ''}`}>
        <h3 className="h3 form-title">Get In Touch</h3>
        <p className="form-subtitle">Feel free to reach out for collaborations or just a friendly hello!</p>

        <form onSubmit={handleSubmit} className="modern-form">
          <div className="input-wrapper">
            <div className="floating-input">
              <input 
                type="text" 
                name="fullname" 
                className="form-input" 
                value={formData.fullname}
                onChange={handleInputChange}
                required 
                placeholder=" "
              />
              <label className="floating-label">Full Name</label>
            </div>

            <div className="floating-input">
              <input 
                type="email" 
                name="email" 
                className="form-input" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                placeholder=" "
              />
              <label className="floating-label">Email Address</label>
            </div>
          </div>

          <div className="floating-input">
            <textarea 
              name="message" 
              className="form-input form-textarea" 
              value={formData.message}
              onChange={handleInputChange}
              required 
              placeholder=" "
              rows="6"
            ></textarea>
            <label className="floating-label">Your Message</label>
          </div>

          <button type="submit" className="send-btn">
            <span className="btn-text">Send Message</span>
            <FaPaperPlane className="btn-icon" />
            <span className="btn-shine"></span>
          </button>
        </form>

        {/* Success Popup */}
        {showSuccess && (
          <div className="success-popup">
            <div className="success-content">
              <FaCheckCircle className="success-icon" />
              <p className="success-text">Message sent successfully!</p>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default Contact;