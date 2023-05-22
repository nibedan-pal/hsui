import React, { useState } from "react";
import "./about.css";
import { FiHome } from "react-icons/fi";
import NavBars from "../Sections/navbar";
import Footer from "../Sections/footer";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import member1 from "../Assets/member1.22ac1d59.jpg";
import member2 from "../Assets/member2.d03a0686.jpg";
import member3 from "../Assets/member3.0d822ecc.jpg";
import member4 from "../Assets/member4.9045579a.jpg";
import member5 from "../Assets/member5.24eb1821.jpg";
import member6 from "../Assets/member6.be2a77ad.jpg";
import ToTop from "../Sections/totop";
import { Link } from "react-router-dom";

function OurTeam() {
  const doctors = [
    {
      name: "Dr. Amit Kumar",
      specialization: "Cardiologist",
      patients: "Cardiac patients",
      image: member3,
      availableDates: ["2023-05-25", "2023-05-26", "2023-05-27"],
    },
    {
      name: "Dr. Rajendra Patel",
      specialization: "Cardiologist",
      patients: "Cardiac patients",
      image: member4,
      availableDates: ["2023-05-25", "2023-05-26", "2023-05-27"],
    },
    {
      name: "Dr. Salman Ajani",
      specialization: "Neurologist",
      patients: "Neurological patients",
      image: member6,
      availableDates: ["2023-05-25", "2023-05-26", "2023-05-27"],
    },
    {
      name: "Dr. Addition Smith",
      specialization: "Physiotherapist",
      patients: "Physical therapy patients",
      image: member1,
      availableDates: ["2023-05-25", "2023-05-26", "2023-05-27"],
    },
    {
      name: "Dr. Mahfuz Riad",
      specialization: "ENT",
      patients: "ENT patients",
      image: member2,
      availableDates: ["2023-05-25", "2023-05-26", "2023-05-27"],
    },
    {
      name: "Dr. David Benjamin",
      specialization: "Operations",
      patients: "Surgical patients",
      image: member5,
      availableDates: ["2023-05-25", "2023-05-26", "2023-05-27"],
    },
  ];

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleBookNow = (doctor, date) => {
    setSelectedDoctor(doctor);
    setSelectedDate(date);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <NavBars />
      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>Doctors</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/home"}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Doctors
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {doctors.map((doctor, index) => (
            <div className="col-lg-4 col-sm-6 mb-30" key={index}>
              <div className="team-member">
                <div className="team-media">
                  <img src={doctor.image} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">{doctor.name}</h4>
                    <span className="text-secondary">{doctor.specialization}</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <Link to="">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FaLinkedin />
                      </Link>
                    </li>
                  </ul>
                  <div className="book-now-btn">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleBookNow(doctor, doctor.availableDates[0])}
                    >
                      Availability
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <h3>Book Appointment</h3>
            <p>
              Doctor: <strong>{selectedDoctor.name}</strong>
            </p>
            <p>
              Specialization: <strong>{selectedDoctor.specialization}</strong>
            </p>
            <p>
              Patients: <strong>{selectedDoctor.patients}</strong>
            </p>
            <p>
              Available Date: <strong>{selectedDate}</strong>
            </p>
            <button className="btn btn-primary" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
      <ToTop />
    </div>
  );
}

export default OurTeam;
