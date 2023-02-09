import React from 'react'
import Figure from './Components/Figure'
import Krcover from '../../Assets/kr-cover.png'
import Relatedinfo from './Components/Relatedinfo'
import Listcontent from './Components/Listcontent'
import Contactfooter from '../../Components/Footer/Contactfooter'
import { TitleFunction } from '../../Components/TitleFunction'
import { useState } from 'react'

const Krista = () => {
  TitleFunction("Case Study - Krista Client, Mobile App for Krista’s Partners")
  const [isSTCShowing, setIsSTCShowing] = useState(false)
  return (
    <div>
      <button href="" className="sticky-toc" onClick={() => setIsSTCShowing(!isSTCShowing)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 13.5C4.08333 13.5 3.72933 13.354 3.438 13.062C3.146 12.7707 3 12.4167 3 12C3 11.5833 3.146 11.2293 3.438 10.938C3.72933 10.646 4.08333 10.5 4.5 10.5C4.91667 10.5 5.27067 10.646 5.562 10.938C5.854 11.2293 6 11.5833 6 12C6 12.4167 5.854 12.7707 5.562 13.062C5.27067 13.354 4.91667 13.5 4.5 13.5ZM4.5 7.5C4.08333 7.5 3.72933 7.354 3.438 7.062C3.146 6.77067 3 6.41667 3 6C3 5.58333 3.146 5.22933 3.438 4.938C3.72933 4.646 4.08333 4.5 4.5 4.5C4.91667 4.5 5.27067 4.646 5.562 4.938C5.854 5.22933 6 5.58333 6 6C6 6.41667 5.854 6.77067 5.562 7.062C5.27067 7.354 4.91667 7.5 4.5 7.5ZM4.5 19.5C4.08333 19.5 3.72933 19.354 3.438 19.062C3.146 18.7707 3 18.4167 3 18C3 17.5833 3.146 17.2293 3.438 16.938C3.72933 16.646 4.08333 16.5 4.5 16.5C4.91667 16.5 5.27067 16.646 5.562 16.938C5.854 17.2293 6 17.5833 6 18C6 18.4167 5.854 18.7707 5.562 19.062C5.27067 19.354 4.91667 19.5 4.5 19.5ZM9 19C8.71667 19 8.47933 18.904 8.288 18.712C8.096 18.5207 8 18.2833 8 18C8 17.7167 8.096 17.4793 8.288 17.288C8.47933 17.096 8.71667 17 9 17H20C20.2833 17 20.5207 17.096 20.712 17.288C20.904 17.4793 21 17.7167 21 18C21 18.2833 20.904 18.5207 20.712 18.712C20.5207 18.904 20.2833 19 20 19H9ZM9 13C8.71667 13 8.47933 12.904 8.288 12.712C8.096 12.5207 8 12.2833 8 12C8 11.7167 8.096 11.479 8.288 11.287C8.47933 11.0957 8.71667 11 9 11H20C20.2833 11 20.5207 11.0957 20.712 11.287C20.904 11.479 21 11.7167 21 12C21 12.2833 20.904 12.5207 20.712 12.712C20.5207 12.904 20.2833 13 20 13H9ZM9 7C8.71667 7 8.47933 6.90433 8.288 6.713C8.096 6.521 8 6.28333 8 6C8 5.71667 8.096 5.479 8.288 5.287C8.47933 5.09567 8.71667 5 9 5H20C20.2833 5 20.5207 5.09567 20.712 5.287C20.904 5.479 21 5.71667 21 6C21 6.28333 20.904 6.521 20.712 6.713C20.5207 6.90433 20.2833 7 20 7H9Z" fill="currentcolor"/>
          </svg>
      </button>

      <div className={`sticky-toc-list ${isSTCShowing ? 'show-stc' : 'hide-stc'}`}>
        <Listcontent/>
      </div>
      
      <img src={Krcover} alt="" className="cover" />
      <div className="content-wrapperd">
        <div className="l-column">
            <Listcontent></Listcontent>
        </div>
        <div className="content-wrapperd port-container">
          <div className="content-con">
            <div className="tittle-con">
              <a href="/" className='back-btn'> <span>
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.83638 8.99991L0.381836 4.54537L4.83638 0.0908203L5.60201 0.846502L2.45002 3.99849H10.6134V5.09224H2.45002L5.60201 8.23429L4.83638 8.99991Z" fill="currentcolor"/>
                  </svg>
              </span>
                Back to Home
              </a>
              <h2>Krista Client, Mobile App for Krista’s Partners</h2>
            </div>
            <div className="parag-con">
              <h4 id="project-overview">Project Overview</h4>
              <p>Krista is an outsourcing company from Indonesia that focus on cleaning services. Currently, they have a mobile app that used by employees to do attendance and work reports. Apparently, Krista have received some feedbacks by their clients that they are unsure about the employee performance because they don’t receive the reports directly.</p>
            </div>
            <Figure idFig={1} arr={"kr"}/>
            <h6 className="paragraph-div">✦ ✦ ✦</h6>
            <div className="parag-con">
              <h4 id="problem-statement">Problem Statement</h4>
              <p>The current app (Krista Mobile) is only used for employee attendance and work reports. The reports that employees did are sent directly to the Krista dashboard website so they are the only one who has access to all of the employee reports. The clients of Krista also want to see the reports and sent complaints directly to the employee from mobile app so they can monitor the employee performance and interact with them directly through the app. </p>
            </div>
            <Figure idFig={2} arr={"kr"}/>
            <h6 className="paragraph-div">✦ ✦ ✦</h6>
            <div className="parag-con">
              <h4 id="user">The User</h4>
              <p>The user of this app is the clients of Krista, specifically companies that have hired Krista's outsourcing employees or are utilizing their services.</p>
            </div>
            <h6 className="paragraph-div">✦ ✦ ✦</h6>
            <div className="parag-con">
              <h4 id="scope">Scope & Challenges</h4>
              <p>Krista has requested that additional features be added to the current app, Krista Mobile, so that both employees and clients can use it for their respective purposes. However, our product manager has determined that this would be inefficient due to the current app architecture. As a result, the new requirements will be implemented in a separate app specifically designed for use by Krista's clients. This will ensure that the app is optimized and efficient for the needs of the clients while still providing the necessary functionality.</p>
            </div>
            <h6 className="paragraph-div">✦ ✦ ✦</h6>
            <div className="parag-con">
              <h4 id="process">The Process</h4>
              <h5 id="request-gathering">Requirements Gathering</h5>
              <p>To gather the necessary requirements for the new app, I (along with the lead engineer) set up several meetings with Krista representatives. These meetings allowed us to gather a detailed understanding of Krista's needs and expectations for the app. After acquiring the requirements, we then discussed them with the team to identify any constraints and narrow them down into some specifications :</p>
              <ul>
                <li><p>Authentication (no need to register because the account will be made in web dashboard</p></li>
                <li><p>A feature to accommodate user to create work request that will be broadcasted to every employees present.</p></li>
                <li><p>Report summary and report detail from employees</p></li>
                <li><p>Current progress of requested work</p></li>
                <li><p>Employees rating system</p></li>
                <li><p>List of active employees</p></li>
                <li><p>Shortcut to call/message employee through WhatsApp</p></li>
              </ul>
              <p>By considering these points, we were able to effectively plan and develop the app to meet Krista's needs while also taking into consideration any limitations or challenges.</p>
            </div>
            <div className="parag-con">
              <h5 id="flows">User Flows</h5>
              <p>Using the acquired requirements, I created user flows based on the accepted features. These flows were then sent to Krista first to ensure that they accurately reflected the requested functionality. By working closely with Krista and verifying the flows, we can ensure that the final product meets their needs and expectations.</p>
            </div>
            <Figure idFig={3} arr={"kr"}/>
            <div className="parag-con">
              <h5 id="wr">Wireframes</h5>
              <p>Once my team and Krista agreed on the proposed user flows, I continued to work on the wireframes based on those flows. The completed wireframes were then discussed again with the team and Krista representatives to gather feedback and after that we can move to the next step in the design process.</p>
            </div>
            <Figure idFig={4} arr={"kr"}/>
            <div className="parag-con">
              <h5 id="hifi">High Fidelity Design</h5>
              <p>The next step is to add visual properties to the completed wireframes. This process include adding colors, Icons, illustrations and refining the spacing and the overall layouts.</p>
            </div>
            <Figure idFig={5} arr={"kr"}/>
            <div className="parag-con">
              <p>To ensure a smooth handoff to the engineer, I also create state pages to provide additional information about the design. These state pages serve as a substitute for the interactive prototype and hopefully will help communicate the desired design and functionality to the engineer.</p>
            </div>
            <h6 className="paragraph-div">✦ ✦ ✦</h6>
            <div className="parag-con">
              <h4 id="result">Result & Learnings</h4>
              <p>Once the designs have been completed and approved, the mobile team begins the development process for the app. Upon completion, the app will be released on the App Store and Google Play. This project has taught me two valuable lessons about the realities of the development process. Firstly, the importance of considering technical constraints, budgets, and time when making design decisions in order to deliver results on time. Secondly, while collaborative discussions with Krista's representative have been beneficial for the design process, they can also be time-consuming and energy-intensive.</p>
            </div>
            <h6 className="paragraph-div">✦ ✦ ✦</h6>
          </div>
        </div>
        <div className="r-column">
            <Relatedinfo infoKey={2}/>
        </div>
      </div>
      <Contactfooter/>
    </div>
  )
}

export default Krista