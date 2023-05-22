import "../index.css";
import { BsGithub, BsLinkedin, BsLink45Deg } from "react-icons/bs";
import arunima from "../Assets/arunima.jpeg";
import amisha from "../Assets/amisha.jpeg";
import NavBars from "./navbar";
import Footer from "./footer";

function Team() {
  return (
    <div>
      <NavBars />
      <section className="section-area section-sp3 team-wraper">
        <div className="container">
          <div className="heading-bx text-center">
            <h1 className="text-danger"><b>Our Team</b></h1>
            <h2 className="title">Meet the Developers from RKMGEC</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={arunima} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Arunima Pal</h4>
                    <span className="text-secondary">B.Tech 3rd Year ECE</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member active">
                <div className="team-media">
                  <img src={amisha} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Amisha Kumari</h4>
                    <span className="text-secondary">B.Tech 3rd Year ECE</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Team;
