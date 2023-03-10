import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import {chatting,Ecomm,Insta,Extention,Recipe,Youtube} from '../../assets/index'
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        
        <Title
          title="VISIT MY GITHUB REPO"
          link='https://github.com/himanshu0816?tab=repositories'
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="INSTA BACKEND "
          des="Build Instgram backend using node JS  REST API with MongoDB Database including full authentication and autherization " 
          src={Insta}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Build E-commerce platform using MVC Frame work in which backend API is made on NodeJS with MongoDB Database and UI on React JS"
          src={Ecomm}
        />
        <ProjectsCard
          title="Chatting App"
          des="Build Real-Time-Chat Application on top of React JS using Material UI and Socket.io library to implement that"
          src={chatting}
        />
        <ProjectsCard
          title="Youtube Clone"
          des=" Build Real-Youtube clone having functionality of like vidoe,comment,search bar and UI like Youtube. "
          src={Youtube}
        />
        <ProjectsCard
          title="RECIPE APP"
          des="Build Recipe app using React JS on the bases of search bar text data is fetched according to the entered text"
          src={Recipe}
        />
        <ProjectsCard
          title="Chrome Extention"
          des="Build a chrome extension of color picker.An extention which can pick any color from any website"
          src={Extention}
        />
      </div>
    </section>
  );
}

export default Projects