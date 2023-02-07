import React from 'react'
import Figure from './Components/Figure'
import Krcover from '../../Assets/kr-cover.png'

const krista = () => {
  return (
    <>
      <img src={Krcover} alt="" className="cover" />
      <div className="port-container">
        <div className="content-con">
          <div className="tittle-con">
            <a href="/"> Back to Home</a>
            <h2>Krista Client, Mobile App for Krista’s Partners</h2>
          </div>

          <div className="parag-con">
            <h4>Project Overview</h4>
            <p>Krista is an outsourcing company from Indonesia that focus on cleaning services. Currently, they have a mobile app that used by employees to do attendance and work reports. Apparently, Krista have received some feedbacks by their clients that they are unsure about the employee performance because they don’t receive the reports directly.</p>
          </div>
          <Figure idFig={1} arr={"kr"}/>

          <h5 className="paragraph-div">♢ ♢ ♢</h5>

          <div className="parag-con">
            <h4>Problem Statement</h4>
            <p>The current app (Krista Mobile) is only used for employee attendance and work reports. The reports that employees did are sent directly to the Krista dashboard website so they are the only one who has access to all of the employee reports. The clients of Krista also want to see the reports and sent complaints directly to the employee from mobile app so they can monitor the employee performance and interact with them directly through the app. </p>
          </div>
          <Figure idFig={2} arr={"kr"}/>

          <h5 className="paragraph-div">♢ ♢ ♢</h5>

          <div className="parag-con">
            <h4>The User</h4>
            <p>The user of this app is the clients of Krista, specifically companies that have hired Krista's outsourcing employees or are utilizing their services.</p>
          </div>

          <h5 className="paragraph-div">♢ ♢ ♢</h5>

          <div className="parag-con">
            <h4>Scope & Challenges</h4>
            <p>Krista has requested that additional features be added to the current app, Krista Mobile, so that both employees and clients can use it for their respective purposes. However, our product manager has determined that this would be inefficient due to the current app architecture. As a result, the new requirements will be implemented in a separate app specifically designed for use by Krista's clients. This will ensure that the app is optimized and efficient for the needs of the clients while still providing the necessary functionality.</p>
          </div>

          <h5 className="paragraph-div">♢ ♢ ♢</h5>

          <div className="parag-con">
            <h4>The Process</h4>
            <h5>Requirements Gathering</h5>
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
            <h5>User Flows</h5>
            <p>Using the acquired requirements, I created user flows based on the accepted features. These flows were then sent to Krista first to ensure that they accurately reflected the requested functionality. By working closely with Krista and verifying the flows, we can ensure that the final product meets their needs and expectations.</p>
          </div>

          <Figure idFig={3} arr={"kr"}/>

          <div className="parag-con">
            <h5>Wireframes</h5>
            <p>Once my team and Krista agreed on the proposed user flows, I continued to work on the wireframes based on those flows. The completed wireframes were then discussed again with the team and Krista representatives to gather feedback and after that we can move to the next step in the design process.</p>
          </div>

          <Figure idFig={4} arr={"kr"}/>

          <div className="parag-con">
            <h5>High Fidelity Design</h5>
            <p>The next step is to add visual properties to the completed wireframes. This process include adding colors, Icons, illustrations and refining the spacing and the overall layouts.</p>
          </div>

          <Figure idFig={5} arr={"kr"}/>

          <div className="parag-con">
            <p>To ensure a smooth handoff to the engineer, I also create state pages to provide additional information about the design. These state pages serve as a substitute for the interactive prototype and hopefully will help communicate the desired design and functionality to the engineer.</p>
          </div>

          <h5 className="paragraph-div">♢ ♢ ♢</h5>

          <div className="parag-con">
            <h4>Result & Learnings</h4>
            <p>Once the designs have been completed and approved, the mobile team begins the development process for the app. Upon completion, the app will be released on the App Store and Google Play. This project has taught me two valuable lessons about the realities of the development process. Firstly, the importance of considering technical constraints, budgets, and time when making design decisions in order to deliver results on time. Secondly, while collaborative discussions with Krista's representative have been beneficial for the design process, they can also be time-consuming and energy-intensive.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default krista