import React, { useState } from 'react'
import "../../Assets/Styles/dashboard.css"

const Dashboard = () => {

        const [activeTab, setActiveTab] = useState('patientInquiry');
      
        const opentab = (tabname) => {
          setActiveTab(tabname);
        };
  return (
    <div>
        <div className='container'>
      <div className="tab-titles">
        <p className={`tab-links ${activeTab === 'patientInquiry' ? 'active-link' : ''}`} onClick={() => opentab('patientInquiry')}>Patient Inquiry</p>
        <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => opentab('experience')}>Experience</p>
        <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => opentab('education')}>Education</p>
      </div>
      <div className={`tab-contents ${activeTab === 'patientInquiry' ? 'active-tab' : ''}`} id="patientInquiry">
        
      <form class="form-group">
        <h2>Please fill out all information, so that we may better server you.</h2>
        <div class="form-group">
          <label for="first_name">First Name</label>
          <input type="text" class="form-control" id="first_name" placeholder="First Name" required autofocus autocomplete="on"/>
          <span class="help-block"></span>
        </div>
        <div class="form-group">
          <label for="last_name">Last Name</label>
          <input type="text" class="form-control" id="last_name" placeholder="Last Name" required autofocus autocomplete="on"/>
          <span class="help-block"></span>
        </div>  
        <div class="form-group">
          <label for="email_address">Email Address</label>
          <input type="email" class="form-control" id="email_addr" placeholder="Email address" required/>
          <span class="help-block"></span>
        </div>
        <div class="form-group">
          <label for="email_address_confirm">Please re-confirm your email address.</label>
          <input type="email" class="form-control" id="email_address_confirm" placeholder="Confirm email address" required autocomplete="off"/>
          <span class="help-block"></span>
        </div>
        <div class="form-group">
          <label for="phone_number">Phone Number</label>
          <input type="tel" class="form-control" id="phone_number" placeholder="+1-416-967-1111"/>
          <span class="help-block"></span>
        </div>
        <div class="form-group">
          <label for="dob">Date of Birth</label>
          <input type="date" class="form-control" id="dob"/>
          <span class="help-block"></span>
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" class="form-control" id="age" placeholder="Age" min="1" max="110" required/>
          <span class="help-block"></span>
        </div>     
        <button class="btn btn-lg btn-primary btn-block" type="submit">Make appointment</button>
      </form>
      </div>


      
      <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
        <p>Experience Content</p>
      </div>
      <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
        <p>Education Content</p>
      </div>
    </div>
    </div>
  )
}

export default Dashboard