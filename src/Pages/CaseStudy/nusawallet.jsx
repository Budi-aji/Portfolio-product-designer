import React from 'react'
import Figure from './Components/Figure'
import Nscover from '../../Assets/nw-cover.png'
import Relatedinfo from './Components/Relatedinfo'
import Listcontent from './Components/Listcontent'
import Contactfooter from '../../Components/Footer/Contactfooter'

const nusawallet = () => {
  return (
    <>
      <img src={Nscover} alt="" className="cover" />
      <div className="content-wrapperd">
        <div className="lr-column">
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
              <h2>NusaWallet, Hybrid Crypto Wallet Mobile</h2>
            </div>
            <div className="parag-con">
              <h4 id="project-overview">Project Overview</h4>
              <p>As technology continues to advance at a rapid pace, the use of cryptocurrency has become more widespread. While cryptocurrency storage applications or crypto wallets have become more popular, they are still not fully equipped to meet the needs of everyday transactions in the real world.</p>
              <p>To address this issue, PT Gerbang Asset Nusantara intends to create a hybrid digital wallet that combines the storage of both cryptocurrency and fiat money. This innovative solution will allows users to easily make everyday transactions using their crypto wallet, making it a more practical and convenient tool for daily use.</p>
            </div>
            <Figure idFig={1} arr={"ns"}/>
            <h6 className="paragraph-div">✦ ✦ ✦</h6>
            <div className="parag-con">
              <h4 id="goals">Goals</h4>
              <p>The purpose of this study is to identify user requirements and validate current presumptions as part of the product development process. To achieve this, I will be using a Design Thinking approach as the design process and conducting Usability Testing at the end of the study to measure the usability of the product. The results of this research will provide valuable insights and inform the product development process.</p>
            </div>
            <h6 className="paragraph-div">✦ ✦ ✦</h6>
            <div className="parag-con">
              <h4 id="scope">Scope</h4>
              <p>To minimize costs, the research for this project will be limited to the Indonesia region and will include a sample of user research participants selected from local areas. These participants will be selected for in-person interviews, which will provide more valuable insights and in-depth observation data.</p>
              <p>To avoid bias, the research will be scaled globally as the development process continues. This will ensure that the product meets the needs of a diverse user base.</p>
            </div>
            <h6 className="paragraph-div">✦ ✦ ✦</h6>
            <div className="parag-con">
              <h4 id="presumptions">Presumptions</h4>
              <p>To begin this study, I first gather the expectations and presumptions of my team and use this information as a starting point for the validation process. The research process will involve challenging these presumptions and gathering additional information to validate them. These are the presumptions I have gathered :</p>
              <ul>
                <li><p>There is only a few crypto wallet apps that allows user to make everyday payments.</p></li>
                <li><p>The crypto debit card is not widely used in the world.</p></li>
                <li><p>Lack of hybrid platform for small transactions.</p></li>
              </ul>
            </div>
            <h6 className="paragraph-div">✦ ✦ ✦</h6>
            <div className="parag-con">
              <h4 id="process">The Process</h4>
              <h6>Requirements Gathering</h6>
              <p>To approach this problem, I decided to use Design Thinking method. Compared to other design process method, this method is perfect for this case because it’s nature to support innovation based design as the steps progressing.</p>
            </div>
            <Figure idFig={2} arr={"ns"}/>
            <div className="parag-con">
              <h5 className='sub-title' id="emphatize">Empathize</h5>
              <h6>Desk Research</h6>
              <p>The first thing to do before going to deep into the research process is to gather existing information in the internet. The goal of this secondary research is to increase my knowledge of crypto currency and also gathering information about the potential competitors.</p>
              <p>In this stage I try to get as many information as I can and indulge myself into crypto articles and papers. The information I seek is limited to basic terminologies, relevant topics with this study and also several potential competitors app.</p>
            </div>
            <Figure idFig={3} arr={"ns"}/>
            <div className="parag-con">
              <p>The competitor analysis was conducted using a modified S.W.O.T. template that focuses on user experience in order to examine the UI and flow patterns of competitors and understand their approaches to problem-solving. This information will allow the team to understand the strengths and weaknesses of the competition and identify areas where they can differentiate themselves and improve the user experience of the product.</p>
            </div>
            <div className="parag-con">
              <h6>User Research</h6>
              <p>This research involves conducting interviews with a group of users who actively use crypto wallets. The goal of the interviews is to gather insights that will be used in the next phase of the research process. A total of 3 individuals with significant experience in the crypto industry were interviewed for this study.</p>
            </div>
            <div className='figure-wraper'>
              <Figure idFig={4} arr={"ns"}/>
              <Figure idFig={5} arr={"ns"}/>
              <Figure idFig={6} arr={"ns"}/>
            </div>
            <div className="parag-con">
              <h5 className='sub-title' id="define">Define</h5>
              <h6>Empathy Map</h6>
              <p>The result of the interviews then analyzed and synthetized with empathy map. This empathy map will help me produce the insight from extracted pain points.</p>
            </div>
            <Figure idFig={7} arr={"ns"}/>
            <div className="parag-con">
              <h6>Persona</h6>
              <p>In order to better understand the needs and characteristics of the target audience, I have created a persona to represent the potential user of our product. This persona will be used to guide the development process and to filter survey participants in order to ensure that we are gathering data from individuals who closely match the characteristics of our target audience.</p>
            </div>
            <Figure idFig={8} arr={"ns"}/>
            <div className="parag-con">
              <h5 className='sub-title' id="ideate">Ideate</h5>
              <p>The research results were then presented to the team and a discussion was held afterwards to refine the product specifications. The final result of this discussion was a list of features for the MVP. This sitemap served as a guide for the development process and helped the team to understand the structure of the MVP.</p>
            </div>
            <Figure idFig={9} arr={"ns"}/>
            <div className="parag-con">
              <h6>Wireframe</h6>
              <p>The next step is creating the wireframe to conceptualizing the idea into simple design. In this process, I not only include the team to give their feedbacks but also include the user to give their perspective and says about the designs. This wireframe was revised 3 times before the final design is approved.</p>
            </div>
            <Figure idFig={10} arr={"ns"}/>
            <div className="parag-con">
              <h5 className='sub-title' id="prototype">Prototype</h5>
              <h6>High Fidelity Prototype</h6>
              <p>The final wireframe designs then improved into the high fidelity design by adding the colors, icons, images and the other visual components.</p>
            </div>
            <Figure idFig={11} arr={"ns"}/>
            <div className="parag-con">
              <div className="text-wraper">
                <p>At the same time, I also preparing the <a href="https://www.figma.com/file/p4U1HtcYGsZd4iG4i0gfc4/Web-Portofolio?node-id=398%3A14602&t=5HbSL5CstLY3lTUv-4">Interactive Prototype</a> in figma for conducting the Usability Testing later.</p>
              </div>
            </div>
            <div className="parag-con">
              <h5 className='sub-title' id="ut">Usability testing</h5>
              <p>The Usability Testing was conducted using UEQ to a public audience and the questionnaire was distributed through various social media platforms such as Facebook, Instagram, and WhatsApp. The UEQ has 26 questions that has been standardized to be used as reliable evaluations. A total of 54 responses were received and after applying filtering criteria using the persona and the final number of reliable and relevant responses was 37.</p>
            </div>
            <Figure idFig={12} arr={"ns"}/>
            <div className="parag-con">
              <h6 id="ueq">UEQ Results</h6>
              <p>The questionnaire then calculated with UEQ template that automatically measure the 6 scale that is Attractiveness, Perspicuity, Efficiency, Dependability & Stimulation. After the response got inputed the result are :</p>
            </div>
            <Figure idFig={13} arr={"ns"}/>
            <div className="parag-con">
              <p>In addition, a benchmark chart was created to show how the usability of the product compares to other evaluations.</p>
            </div>
            <Figure idFig={14} arr={"ns"}/>
            <h6 className="paragraph-div">✦ ✦ ✦</h6>
            <div className="parag-con">
              <h4 id="learning">Learnings</h4>
              <p>Based on the results of the usability testing, the final design was ready to be handed off to the engineering team. Through this design process, I gained a deeper understanding of user requirements and discovered several key insights that helped us improve our team’s knowledge of the product. Although this iteration went smoothly, there were some aspects that could be improved in future iterations, such as the use of simpler test method like SUS or the inclusion of additional deliverables like user flows or customer journey maps to provide more information throughout the development process.</p>
            </div>
            <h6 className="paragraph-div">✦ ✦ ✦</h6>
          </div>
        </div>
        <div className="lr-column">
            <Relatedinfo infoKey={1}/>
        </div>
      </div>
      <Contactfooter/>
    </>
  )
}

export default nusawallet