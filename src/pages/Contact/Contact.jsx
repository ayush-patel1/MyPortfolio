

const Contact = () => {
    return (
      <section className="contact" data-page="contact">
  
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>
  
        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186380.7050192134!2d83.00401031626532!3d25.321685899315924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398eaeb0d3cf197b%3A0x8559636538fd3287!2sVaranasi%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1662592748970!5m2!1sen!2sus"
              width="400" height="300" loading="lazy" title="Google Map"></iframe>
          </figure>
        </section>
  
        <section className="contact-form">
  
          <h3 className="h3 form-title">Contact Form</h3>
  
          <form action="#" className="form" data-form>
  
            <div className="input-wrapper">
              <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
  
              <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
            </div>
  
            <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
  
            <button className="form-btn" type="submit" data-form-btn>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>
  
          </form>
  
        </section>
  
      </section>
    );
  };
  
  export default Contact;