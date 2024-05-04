import React, { Component } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions via:{" "}
              <a href="mailto:mehdi.rahal92@gmail.com">
                mehdi.rahal92@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <a
                href={resumeData.resumeLink}
                style={{ display: "flex", gap: "0.5rem" }}
                target="_blank"
              >
                <h4 style={{ color: "inherit" }}>Resume</h4>{" "}
                <LaunchIcon fontSize="large" />
              </a>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
