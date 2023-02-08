import React from 'react'
import Figure from './Components/Figure'
import Clcover from '../../Assets/cl-cover.png'
import Relatedinfo from './Components/Relatedinfo'
import Listcontent from './Components/Listcontent'

const cloudloop = () => {
  return (
    <>
      <img src={Clcover} alt="" className="cover" />
      <div className="content-wrapperd">
        <div className="lr-column">
          <Listcontent></Listcontent>
        </div>
        <div className="content-wrapperd port-container">
          
          <div className="content-con">
            <div className="tittle-con">
              <a href="/" className='back-btn'> Back to Home</a>
              <h2 id="tittle">CloudLoop, Blood Glucose Monitoring App</h2>
            </div>
            <div className="parag-con">
              <h4 id="project-overview">Project Overview</h4>
              <p>Cloudloop is a healthcare application designed for people with diabetes to monitor and track their blood glucose levels and carbohydrate intake. The application uses various sensors such as Continuous Glucose Monitoring (CGM) and insulin sensors to gather data and provide users with insights into their health.</p>
            </div>
            <Figure idFig={1} arr={"cl"}/>
            <h6 className="paragraph-div">♢ ♢ ♢</h6>
            <div className="parag-con">
              <h4 id="problem-statement">Problem Statement</h4>
              <p>Managing diabetes can be a complex and challenging task, particularly when it comes to monitoring blood glucose levels and tracking carbohydrate intake. Traditional methods of tracking these parameters, such as manual logbooks, can be time-consuming, prone to human error, and often fail to provide individuals with a complete picture of their health. Cloudloop addresses these challenges by offering a user-friendly platform that leverages the latest technology to provide individuals with diabetes a convenient, accurate, and comprehensive solution for managing their health and reducing the risk of health complications.</p>
            </div>
            <h6 className="paragraph-div">♢ ♢ ♢</h6>
            <div className="parag-con">
              <h4 id="the-user">The User</h4>
              <p>The target user of the Cloudloop app is individuals with diabetes who are looking for an easy and accurate solution to manage their blood glucose levels and carbohydrate intake. This app is specifically designed to meet the needs of people with diabetes and help them improve their health and well-being.</p>
            </div>
            <h6 className="paragraph-div">♢ ♢ ♢</h6>
            <div className="parag-con">
              <h4 id="scope-challenges">Scope & Challenges</h4>
              <p>The end goal of Cloudloop is to provide individuals with diabetes a seamless and automated solution for monitoring and tracking their blood glucose levels and carbohydrate intake. To achieve this, the app must be able to integrate with a variety of medical devices, such as Continuous Glucose Monitors (CGM) and insulin pumps.</p>
              <p>In the first phase of development, the team aims to create a working prototype of the app that can receive manual inputs from users. However, the development process faces several technical and design constraints, including limitations in the available chart library, limited access to the medical devices and tools being used, and a tight 3-week deadline for the design phase.</p>
            </div>
            <h6 className="paragraph-div">♢ ♢ ♢</h6>
            <div className="parag-con">
              <h4 id="design-process">Design Process</h4>
              <p>The client has provided detailed requirements for Cloudloop in the form of a sitemap and low-fidelity wireframes, however, some of the technical terms used in the documents were unfamiliar to me. In order to ensure a deep understanding of the project requirements and avoid potential mistakes during the design phase and avoid cognitive bias, I decided to conduct desk research to gain a better understanding of the terminologies and seek out design references.</p>
            </div>
            <div className='figure-wraper'>
              <Figure idFig={2} arr={"cl"}/>
              <Figure idFig={3} arr={"cl"}/>
            </div>
            <div className="parag-con">
              <p>Although the client's requirements were thorough, I encountered some challenges in the form of language barriers (the text in the documents was partially in Korean) and asynchronous communication through WhatsApp, which made it difficult to receive immediate answers from the client. To overcome these limitations, I conducted my own research and asked the client for confirmation of the information I found, all while progressing with the desk research.</p>
              <h5 id="desk-research">Desk Research</h5>
              <p>As I mentioned before, the desk research that I do is to understand the context of the requirements better. One of them is to search terminologies mentioned in the documents and read the documents again to confirm and grasp the overall information. These are the terminologies inside the documents :</p>
              <ul>
                <li><p><b>CGM</b> : Continous Glucose Monitor, a device to measure blood glucose simultanously</p></li>
                <li><p>DB : Database Connection</p></li>
                <li><p>TDD : Total daily dose of insulin taken by a patient</p></li>
                <li><p>Carbo : Carbohidrate</p></li>
                <li><p>BG : Blood Glucose</p></li>
                <li><p>Basal Rate : Insulin insertion rate number from Insulin Pump device</p></li>
                <li><p>Bolus insulin : Yhe quick-acting delivery that you often take before mealtimes.</p></li>
                <li><p>Basal insulin : Longer-acting and helps keep your glucose levels steady day and night.</p></li>
                <li><p>AGP : Ambulatory Glucose Profile, a single-page, standardized report for interpreting a patient's daily glucose and insulin patterns.</p></li>
              </ul>
              <p>Other than that, I also search for some references that might help me during the design process. Even though, I only find several reference shots it will definitely helpful to me better than nothing.</p>
            </div>
            <div className='figure-wraper'>
              <Figure idFig={4} arr={"cl"}/>
              <Figure idFig={5} arr={"cl"}/>
            </div>
            <div className="parag-con">
              <h5 id="architecture-mapping">Architecture Mapping</h5>
              <p>As the sitemap is also included in the document, the next thing that I can do is to map the detailed version of the sitemap to estimate the pages, actions, contents and other information that I should do and also to inform the development team with clear specifications of the app before the design finished. This will help the engineer team to make preparation before the design is finished so the implementation process will be seamless and faster(of course this detailed map will be sent to the team after it’s accepted by the clients and other stakeholders)</p>
            </div>
            <Figure idFig={6} arr={"cl"}/>
            <div className="parag-con">
              <h5 id="wireframes">Wireframes</h5>
              <p>Even though the lo-fi is also included in the document, I still do the the medium fidelity wireframes with proper layouting and contents except the visual components to get feedbacks before going into the high fidelity design.</p>
            </div>
            <Figure idFig={7} arr={"cl"}/>
            <div className="parag-con">
              <h5 id="design-guidelines">Design Guidelines</h5>
              <p>Before moving on to the high-fidelity design phase, I first established a set of basic style guidelines to provide a foundation for the visual elements of the app. These guidelines include typography, spacing, icons, and other visual resources. I also prepared some of the UI components to start with, while other components will be created along the way in the design process.</p>
              <p>The color accent for Cloudloop's visual design is Picton Blue, which was taken from the brand's color palette. The choice of blue was strategic as it is commonly associated with calmness and trust, which are important emotions for individuals with diabetes who need to monitor their health and take preventive measures. By incorporating blue into the design, we aim to create an app that users can use with less anxiety and more confidence in their health management.</p>
            </div>
            <Figure idFig={8} arr={"cl"}/>
            <div className="parag-con">
              <h5 id="hifi">High Fidelity Design</h5>
              <p>Once the base style guides is finished, the next process will be implementing visual aspects to the previous wireframes including colors, icons, UI components, etc. This process is fairly fast because the wireframes created before is already in figma and the layout is basically taken care of, not to mention the style guides I prepared beforehands also play a big role in the efficiency of this process.</p>
            </div>
            <Figure idFig={9} arr={"cl"}/>
            <div className="parag-con">
              <h4 id="learnings">Learnings</h4>
              <p>This project is the most challenging one from other projects that I did before. The very tight timeline, limited references, some technical constraints, new industry etc. Even so, it was a fun ride for me, having to experience new industry and the bonus I get afterwards that made me stay motivated in this rough roads. Nevertheless, I believe it was something that I need to improve as a better UI/UX Designer.</p>
            </div>
            <h6 className="paragraph-div">♢ ♢ ♢</h6>
          </div>
        </div>
        <div className="lr-column">
          <Relatedinfo infoKey={3}/>
        </div>
      </div>
    </>
  )
}

export default cloudloop