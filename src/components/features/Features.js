import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign} from "react-icons/si";
import {BiCartAlt} from 'react-icons/bi'
import {BsFillDiagram2Fill,BsExclamationCircleFill,BsXDiamondFill} from 'react-icons/bs'
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Developement"
          
        />
        <Card
          title="App Development"
          
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          
          icon={<SiProgress />}
        />
        <Card
          title="API Development"
          
          icon={<BsXDiamondFill />}
        />
        <Card
          title="UI Design"
          
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des=""
          icon={<FaGlobe />}
        />
        <Card
          title="API Integration"
          
          icon={<BsFillDiagram2Fill/>}
        />
        <Card
          title="E-Comm Web Developement"
          
          icon={<BiCartAlt />}
        />
        <Card
          title="Bug Fixing"
          
          icon={<BsExclamationCircleFill />}
        />
      </div>
    </section>
  );
}

export default Features