import MobileImg from "../Assets/mobile.f82d7322.png";
import WomanImg from "../Assets/women.eb5c49c5.png";
import "./account.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBooking, createPatient } from "../Redux/booking/action";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (text) => toast(text);

function Account() {
  let initialData = {
    patientName: "",
    age: "",
    gender: "",
    mobile: "",
    address: "",
    email: "",
    disease: "",
    time: "",
    date: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleDoctorChange = (doctor) => {
    setSelectedDoctor(doctor);
    setSelectedDate(null); // Reset selected date
    setSelectedTime(null); // Reset selected time
  };
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset selected time
  };
  
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      dispatch(createPatient({ ...formData, patientID: Date.now() })).then(
        (res) => {
          console.log(res);
          let data = { ...formData, patientID: res.id };
          dispatch(createBooking(data));
          setFormData(initialData);
          setSelectedDoctor(null);
          setSelectedDate(null);
          setSelectedTime(null);
          notify("Appointment Booked Successfully");
          setLoading(false);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  const doctors = [
    {
      id: 1,
      name: "Dr. Amit Kumar",
      specialization: "Cardiologist",
      background: "MBBS - AIIMS, MD - AIIMS",
      availableDates: ["2023-05-25", "2023-05-26", "2023-05-27"],
    },
    {
      id: 2,
      name: "Dr. Nisha Patel",
      specialization: "Dermatologist",
      background: "MBBS - Maulana Azad Medical College, MD - Maulana Azad Medical College",
      availableDates: ["2023-05-25", "2023-05-26", "2023-05-27"],
    },
    {
      id: 3,
      name: "Dr. Rajesh Sharma",
      specialization: "Pediatrician",
      background: "MBBS - Grant Medical College, MD - Grant Medical College",
      availableDates: ["2023-05-25", "2023-05-26", "2023-05-27"],
    },
    {
      id: 4,
      name: "Dr. Priya Singh",
      specialization: "Gynecologist",
      background: "MBBS - Lady Hardinge Medical College, MD - Lady Hardinge Medical College",
      availableDates: ["2023-05-25", "2023-05-26", "2023-05-27"],
    },
    {
      id: 5,
      name: "Dr. Rohit Verma",
      specialization: "Orthopedic Surgeon",
      background: "MBBS - King George's Medical University, MS - King George's Medical University",
      availableDates: ["2023-05-25", "2023-05-26", "2023-05-27"],
    },
  ];
  
  
  const doctorOptions = doctors.map((doctor) => (
    <option key={doctor.id} value={doctor.id}>
      {doctor.name}
    </option>
  ));
  
  const dateOptions = selectedDoctor
    ? doctors.find((doctor) => doctor.id === selectedDoctor)?.availableDates.map((date) => (
        <option key={date} value={date}>
          {date}
        </option>
      ))
    : null;
  
  const timeOptions = selectedDate
    ? ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"].map((time) => (
        <option key={time} value={time}>
          {time}
        </option>
      ))
    : null;
  
  return (
    <div>
      <ToastContainer />
      <section className="section-area account-wraper1">
        <div className="container-fluid">
          <div className="appointment-inner section-sp2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                  <div className="appointment-form form-wraper">
                    <h3>Book Appointment</h3>
                    <form action="#">
                      <div className="form-group">
                        <select
                          className="form-select form-control"
                          name="doctor"
                          onChange={(e) => handleDoctorChange(parseInt(e.target.value))}
                          required
                        >
                          <option value="">Select Doctor</option>
                          {doctorOptions}
                        </select>
                      </div>
                      {selectedDoctor && (
                        <div className="doctor-summary">
                          <h4>Doctor Summary</h4>
                          <p>{doctors.find((doctor) => doctor.id === selectedDoctor)?.name}</p>
                          <p>Specialization: {doctors.find((doctor) => doctor.id === selectedDoctor)?.specialization}</p>
                          <p>Background: {doctors.find((doctor) => doctor.id === selectedDoctor)?.background}</p>
                        </div>
                      )}
                      {selectedDoctor && (
                        <div className="form-group">
                          <select
                            className="form-select form-control"
                            name="date"
                            onChange={(e) => handleDateChange(e.target.value)}
                            required
                          >
                            <option value="">Select Date</option>
                            {dateOptions}
                          </select>
                        </div>
                      )}
                      {selectedDoctor && selectedDate && (
                        <>
                          <div className="form-group">
                            <select
                              className="form-select form-control"
                              name="time"
                              onChange={(e) => handleTimeChange(e.target.value)}
                              required
                            >
                              <option value="">Select Time</option>
                              {timeOptions}
                            </select>
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              value={formData.email}
                              name="email"
                              onChange={handleFormChange}
                              required
                            ></input>
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Name"
                              value={formData.patientName}
                              name="patientName"
                              onChange={handleFormChange}
                              required
                            ></input>
                          </div>
                          <div className="form-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Phone Number"
                              value={formData.mobile}
                              name="mobile"
                              onChange={handleFormChange}
                              required
                            ></input>
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Disease"
                              value={formData.disease}
                              name="disease"
                              onChange={handleFormChange}
                              required
                            ></input>
                          </div>
                          <div className="form-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Age"
                              value={formData.age}
                              name="age"
                              onChange={handleFormChange}
                              required
                            ></input>
                          </div>
                          <div className="form-group">
                            <select
                              className="form-select form-control"
                              name="gender"
                              onChange={handleFormChange}
                              required
                            >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Address"
                              value={formData.address}
                              name="address"
                              onChange={handleFormChange}
                              required
                            ></input>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-secondary btn-lg"
                            onClick={handleSubmit}
                          >
                            {loading ? "Loading..." : "Book Now"}
                          </button>
                        </>
                      )}
                    </form>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12">
                  <div className="appointment-thumb">
                    <img src={MobileImg} alt="img" />
                    <div className="images-group">
                      <img className="img1" src={WomanImg} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Account;
