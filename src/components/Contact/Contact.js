import React, { useState } from "react";
import "./Contact.css";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../translations";
import { useTheme } from "../../context/ThemeContext";
import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:burakfevzikar@hotmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MdOutlineEmail className="contact-icon" />,
      label: language === "en" ? "Email" : "E-posta",
      value: "burakfevzikar@hotmail.com",
      link: "mailto:burakfevzikar@hotmail.com",
    },
    {
      icon: <BsWhatsapp className="contact-icon" />,
      label: language === "en" ? "Phone" : "Telefon",
      value: "+90 532 723 0419",
      link: "https://api.whatsapp.com/send?phone+905327230419",
    },
    {
      icon: <MdLocationOn className="contact-icon" />,
      label: language === "en" ? "Location" : "Konum",
      value: language === "en" ? "Istanbul, Turkiye" : "Istanbul, Turkiye",
      link: "https://maps.app.goo.gl/ZZuU6Myg3Z2V1Uh28",
    },
  ];

  return (
    <section
      id="contact"
      className={`contact ${theme === "dark" ? "dark-theme" : "light-theme"}`}
    >
      <h2>{translations[language].contact}</h2>
      <div className="contact-container">
        <form
          className={`contact-form ${
            theme === "dark" ? "dark-theme" : "light-theme"
          }`}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder={language === "en" ? "Your Name" : "Adınız"}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={language === "en" ? "Your Email" : "E-postanız"}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder={language === "en" ? "Your Message" : "Mesajınız"}
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">
            {language === "en" ? "Send Message" : "Mesaj Gönder"}
          </button>
        </form>
        <div className="contact-info">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-info-item">
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                {info.icon}
                <div>
                  <p>{info.value}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
