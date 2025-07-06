/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
// import Testimonial from "./Testimonial";
import Service from "../About/Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Competitive Coder",
    description: "Demonstrates a modern and high-quality approach to competitive coding, solving complex problems with precision and efficiency at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web Development",
    description: "High-quality development of websites and web applications with a focus on performance, scalability, and user experience."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Open-Source Contributor",
    description: "Actively contributes to open-source projects, enhancing collaborative development and community-driven innovation."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Keen Learner",
    description: "Continuously expands knowledge and skills by exploring new technologies, frameworks, and problem-solving approaches to stay ahead in the ever-evolving tech landscape."
  }
];

const About = () => {
  // const [testimonials, setTestimonials] = useState([]);
  // useEffect(() => {
  //   fetch('testimonials.json').then(res => res.json()).then(data => {
  //     console.log(data)
  //     setTestimonials(data)
  //   });
  // }, [])
  
  return (
    <article className="about active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am Ayush Patel, a B.Tech student in Information Technology at NIT Raipur, passionate about technology and innovation. With a strong foundation in programming and competitive coding, I actively contribute to open-source projects and engage in developing impactful tech solutions. I enjoy exploring creative pursuits alongside honing my technical expertise.
        </p>
      </section>

      {/* <!-- - service --> */}
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* <!-- - testimonials --> */}
      {/*
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>
      */}

      {/* <!-- - clients --> */}
      {/*
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-1-color.png" alt="client logo"/>
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-2-color.png" alt="client logo"/>
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-3-color.png" alt="client logo"/>
            </a>
          </li>
        </ul>
      </section>
      */}
      
    </article>
  )
}

export default About;
