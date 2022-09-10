import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>

         <div className="row skills">
            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.skills && resumeData.skills.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.skillsname}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>

         <div className="row idioms">
            <div className="three columns header-col">
               <h1><span>Idioms</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.idioms && resumeData.idioms.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <p className="info">
                          {item.idiomsname}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>

         <div className="row knowledge">

            <div className="three columns header-col">
               <h1><span>knowledge</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.knowledgeDescription}
               </p>

   				<div className="bars">

   				   <ul className="knowledge">
                {
                  resumeData.knowledge && resumeData.knowledge.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.knowledgename.toLowerCase()}`}>
                      </span><em>{item.knowledgename}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}