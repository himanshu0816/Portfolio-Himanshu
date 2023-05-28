import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Node JS Developer"
            subTitle="Elite Mindz Pvt Ltd.- (May-15-2023 - PRESENT)"
            result="New Delhi"
            des="Here I working as a Node JS Backend Developer and here I used to make RESTFull API using NodeJS using SQL and NO-SQL DataBases Working on DQS Project"
          />
        <ResumeCard
            title="Node JS Developer"
            subTitle="MONET NETWORKS Pvt. Ltd.- (MARCH-14-2023 - APRIL-31-2023)"
            result="Gurugram"
            des="Here I worked as a Node JS Developer and here I used to make RESTFull API using NodeJS using SQL and NO-SQL DataBases Worked on EEMO Project "
          />
          <ResumeCard
            title="Freelencing"
            subTitle="Freelencer.- (DEC-2021 - OCT-2022)"
            result="WFH"
            des="worked as a MERN Full Stack Web developer where is used to make UI using ReactJS and RESTFull API using NodeJS using SQL and NO-SQL DataBases"
          />
          <ResumeCard
            title="Associate Web Developer"
            subTitle="AAPNA INFOTECH Pvt. Ltd.- (DEC-2021 - OCT-2022)"
            result="New Delhi"
            des="Here I worked as a MERN Full Stack Web developer where is used to make UI using ReactJS and RESTFull API using NodeJS using SQL and NO-SQL DataBases"
          />
          <ResumeCard
            title="MERN Stack INTERNSHIP"
            subTitle="E-School (3 Months)"
            result="Bareilly"
            des="Here I learn basic concept of JavaScript on top of that I learn differrent frameworks and Libraries of javascript like ReactJS and NodeJS . ON top of these Back-end and Front Framework I made 5-5 projects of back-end(NODEJS) and front-end(REACTJS)"
          />
          <ResumeCard
            title="Web-Developer-Intern"
            subTitle="SSDN Technologies ,Gurugram - (2 Months)"
            result="Gurugram"
            des="Here I Learn making UI using HTML5 ,CSS3 ,JavaScript,BootStrap4"
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
