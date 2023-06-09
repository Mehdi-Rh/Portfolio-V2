import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">{console.log(resumeData)}
          {
                              

            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                
                <div key={item.name} className="columns portfolio-item">
                  {console.log("item",item)}
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img alt={item.name} src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}