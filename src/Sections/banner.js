import { Link } from "react-router-dom";
import doctor from "../Assets/doctorbanner.jpg";
import "./banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <h5 className="backimg"><b>Experience Good Healthcare for Today. Tomorrow. Always</b></h5>
            <h2>Seamless Appointments, Online Reports, and Expert Doctors!</h2>
            <button>
              <Link to={"/booking"}>Book Now</Link>
            </button>
          </div>

          <div className="col-lg-5 col-md-5 bannerImg">
            <img src={doctor} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
