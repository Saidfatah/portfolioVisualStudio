import React from "react";
import CodeBar from "../CodeBar";
import "../../css/Projects.css";
import ImageSlider from "../images slider/ImageSlider"

//https://gyazo.com/9675bebd442ae2b62aaf387370560403
const Projects = () => {

  const SMARDIS_React_Native_App=()=>{
    const content=[
      {
        img:"https://i.imgur.com/QQhGK3B.png",
        title:"Login screen",
      },
      {
        img:"https://i.imgur.com/ezzpguB.png",
        title:"Register screen",
      },
      {
        img:"https://i.imgur.com/JCziXPN.png",
        title:"Admin dashboard screen",
      },
      {
        img:"https://i.imgur.com/RmQDmxE.png",
        title:"Admin drawwer screen",
      },
      {
        img:"https://i.imgur.com/3RQBIRX.png",
        title:"Admin Category page screen ",
      },
      {
        img:"https://i.imgur.com/GkXTMJ8.png",
        title:"Admin List of commands screen ",
      },
      {
        img:"https://i.imgur.com/Ue2EJ57.png",
        title:"Admin List of validated commands screen",
      },
      {
        img:"https://i.imgur.com/naTeFZU.png",
        title:"Admin Client profile screen ",
      },

      //dstrubutors screens 
      {
        img:"https://i.imgur.com/c9PQHGp.png",
        title:"Distrubutor todays missions screen",
      },
      {
        img:"https://i.imgur.com/JzpB4cC.png",
        title:"Distrubutor products panel ",
      },
      {
        img:"https://i.imgur.com/QEiITs6.png",
        title:"Distrubutor products panel swipeAbale haf way through",
      },
      {
        img:"https://i.imgur.com/UXDa57C.png",
        title:"Distrubutor products panel swipeAbale full ",
      },
      {
        img:"https://i.imgur.com/bpRowFJ.png",
        title:"Distrubutor products panel cancel client order",
      },
      {
        img:"https://i.imgur.com/3v7GLqk.png",
        title:"Distrubutor cart screen",
      },
    ]

   return  <div className="project">
      <h2>SMARDS reaact native app</h2>
      <div className="image-container">
        <ImageSlider content={content} />
    
      </div>
      <h3>Overview</h3>
      <hr />
      <p>
         this  a tracking app ,, it manages stocks and also has a feature where managers
         create schedules for dlivery missions , each delivery mssion is assgned to a certain distrubutor
         truck driver whch they have their own panel in the application they gt notifications when their is
         a new mission for them their panel has a screen where they show clients products 
         they can add products to carts and  
         the app is not in the google play store nor is it appstore the company littermy wanted it just for their
         50+ employees   
         has a cahcing layer to optimise firebase reads 
         has excel visualiztion and  exportation 
      </p>
   
      <h3>Technologies</h3>
      <hr />
      <p>  React, React Native, Firebase, Rematch (Redux abstraction layer)</p>
    </div>
  }
  const Origami_React_Native_App=()=>{
    const content=[
      {
        img:"https://i.imgur.com/SYtYADZ.png",
        title:"Login screen",
      },
      {
        img:"https://i.imgur.com/SNI9g8T.png",
        title:"Register chose user type screen",
      },
      {
        img:"https://i.imgur.com/uxCIJxv.png",
        title:"Register Instructor type screen",
      },

      {
        img:"https://i.imgur.com/cgzk8VW.png",
        title:"Student dashboard screen ",
      },
      {
        img:"https://i.imgur.com/e0iHYQ2.png",
        title:"Book session choose type step ",
      },
      {
        img:"https://i.imgur.com/FmTCJXa.png",
        title:"Book session choose subject step",
      },
      {
        img:"https://i.imgur.com/c9Y6rD2.png",
        title:"Book session payment options step ",
      },

      {
        img:"https://i.imgur.com/8zVYuvf.png",
        title:"Student profile screen",
      } 
    ]

        return  <div className="project">
        <h2>Origgami  reaact native app</h2>
        <div className="image-container">
           <ImageSlider content={content} />
        </div>
        <h3>Overview</h3>
        <hr />
        <p>
          ths is an app for extra hours booking wth teahcers , 
          thas a chat system imagestorage and a calender system.
        </p>

        <h3>Technologies</h3>
        <hr />
        <p>
          React, React Native, Firebase, Context Api
        </p>
        <div className="links">
          <a
            href="https://github.com/Saidfatah/Oriigami-react-native-app-"
            target="__blank"
          >
            GitHub
          </a>
        </div>
      </div>
  }
  const Movies_React_Native_App=()=>{
    const content=[
      {
        img:"https://i.imgur.com/rcJ6bva.png",
        title:"Home screen",
      },
      {
        img:"https://i.imgur.com/lQZEyFT.png",
        title:"Actor screen ",
      },
      {
        img:"https://i.imgur.com/kbYNEGM.png",
        title:"Movie screen ",
      },
      {
        img:"https://i.imgur.com/qLSE9Xr.png",
        title:"Movie screen ",
      },
      {
        img:"https://i.imgur.com/QQhGK3B.png",
        title:"Login screen",
      },
      {
        img:"https://i.imgur.com/ezzpguB.png",
        title:"Register screen invalid fields",
      },
      {
        img:"https://i.imgur.com/oRg6Frj.png",
        title:"Register screen valid fields",
      },
      {
        img:"https://i.imgur.com/fNpwWSU.png",
        title:"Login screen  ",
      },
      {
        img:"https://i.imgur.com/CGNORNX.png",
        title:"profile  screen  ",
      }
    ]

        return  <div className="project">
        <h2>Movies app </h2>
        <div className="image-container">
           <ImageSlider content={content} />
        </div>
        <h3>Overview</h3>
        <hr />
        <p>
          built his app in 4 days it consumes themoviedb API 
        </p>

        <h3>Technologies</h3>
        <hr />
        <p>
          React, React Native, Firebase, Redux , themoviedb API
        </p>
        <div className="links">
          <a
            href="https://github.com/Saidfatah/Movies-app/tree/main"
            target="__blank"
          >
            GitHub
          </a>
        </div>
      </div>
  }


  const Aafiya_Mafya_Merch_Store=()=>{
     return <div className="project">
     <h2>Afiya mafiya merch store</h2>
     <div className="image-container">
       <img
         src={"https://i.imgur.com/R87YpsN.png"}
         alt="afyaMafyaScreenShoot"
       />
     </div>
     <h3>Overview</h3>
     <hr />
     <p>
       Afya mafiya  is a full stack merch store  app built in 4 days,
       with a well oiled mobile design, I have integrated Stripe payments
       as well as order history.
     </p>

     <h3>Technologies</h3>
     <hr />
     <p>  React, Context api  , Mongodb, Express, Node, Emotion, CSS, Stripe</p>
     <div className="links">
       <a
         href="https://github.com/Saidfatah/l-3afya-mafya-merch-store-react-js-"
         target="__blank"
       >
         GitHub
       </a>
       <a href="https://morning-dawn-84175.herokuapp.com" target="__blank">
         Live Demo
       </a>
     </div>
   </div>
  }
  const Tweeter=()=>{
     return  <div className="project">
     <h2>Tweeter</h2>
     <div className="image-container">
       <img
         src="https://i.imgur.com/tXkNw0Y.png"
         alt="Tweeter"
       />
     </div>
     <h3>Overview</h3>
     <hr />
     <p>
       Tweeter is a clone of the popular app Twitter. I tried to make it a
       clone as well as my own. I added a statistic feature as well as
       posts, retweets, profiles and more.
     </p>

     <h3>Technologies</h3>
     <hr />
     <p>React, Styled Components, Node, MongoDB, ANTD, Cloudinary</p>
     <div className="links">
       <a
         href="https://github.com/NateTheDev1/tweeter-app"
         target="__blank"
       >
         GitHub
       </a>
       <a href="https://tweeeeter.netlify.app" target="__blank">
         Live Demo
       </a>
     </div>
   </div>
  }
  
  
  return (
    <div className="pj-root">
      <CodeBar rowAmount={210} />
      <div className="pg-content">
        <h1>Professional Work</h1>
        <SMARDIS_React_Native_App />
        
        <h1>Projects</h1>
        <Origami_React_Native_App />
        <Movies_React_Native_App />
        <Tweeter />
        <Aafiya_Mafya_Merch_Store />
      </div>
    </div>
  );
};

export default Projects;
