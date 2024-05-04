import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education?.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <ul style={{ listStyle: "unset", marginLeft: "1rem" }}>
                        {item.Achievements?.map((ach) => (
                          <li>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work?.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <ul style={{ listStyle: "unset", marginLeft: "1rem" }}>
                        {item.Achievements?.map((ach) => (
                          <li>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill" style={{ display: "flex" }}>
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div>
            <div>
              <h2>
                <span>Languages</span>
              </h2>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  margin: "1rem 0",
                }}
              >
                {resumeData.skills &&
                  resumeData.skills["languages"]?.map((item) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "center",
                          margin: "1rem 0",
                        }}
                      >
                        <img
                          src={item.image}
                          alt="Language"
                          style={{ width: "5rem", height: "5rem" }}
                        />
                        <p style={{ margin: "0" }}>{item.skillname}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div>
              <h2 style={{ marginTop: "3rem" }}>
                <span>Tools & Frameworks</span>
              </h2>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                  margin: "3rem 0",
                }}
              >
                {resumeData.skills &&
                  resumeData.skills["tools-frameworks"]?.map((item) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "center",
                          flex: "0 0 calc(25% - 10px)" /* Adjust width as needed */,
                          margin: "1rem 0",
                        }}
                      >
                        <img
                          src={item.image}
                          alt="Language"
                          style={{ width: "5rem", height: "5rem" }}
                        />
                        <p style={{ margin: "0" }}>{item.skillname}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
