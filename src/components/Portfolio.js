import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const Portfolio = ({ resumeData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [projectData, setProjectData] = useState({});

  const handleOpenModal = (item) => {
    setProjectData(item);
    setOpenModal(true);
  };

  const handleClose = () => setOpenModal(false);

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-thirds s-bgrid-thirds cf"
          >
            {resumeData.portfolio &&
              resumeData.portfolio?.map((item) => {
                return (
                  <div
                    key={item.name}
                    className="columns portfolio-item"
                    onClick={() => handleOpenModal(item)}
                  >
                    <div className="item-wrap">
                      <img
                        alt={item.name}
                        src={`${item.imgurl}`}
                        className="item-img"
                        style={{ height: "100%" }}
                      />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <ProjectModal
            projectData={projectData}
            openModal={openModal}
            handleClose={handleClose}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
