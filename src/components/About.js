import React, { Component } from 'react';
import {FaSearchLocation} from "react-icons/fa"
import {FaPhone} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpeg" alt="" />

            </div>

            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       				  <span>{resumeData.name}</span>
                     <br></br>
                     <FaSearchLocation />
                     <h7>Address:</h7>
                     <br></br>
                     <span>{resumeData.address}</span>
                     <br></br>
                     <FaGithub />
                     <h8>GitHub:</h8>
                     <br></br>
                     <span>{resumeData.website}</span>
                     <br></br>
                     <FaEnvelope />
                     <h9>Mail:</h9>
                     <br></br>
       				   <span>{resumeData.mail}</span>
                     <br></br>
                     <FaPhone />
                     <h10>Phone:</h10>
                     <br></br>
       				  <span>{resumeData.tel}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}