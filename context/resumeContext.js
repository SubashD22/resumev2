import { useContext,createContext } from "react";

const Context = createContext();
export const ResumeContext = ({children})=>{
    const profile = {
        name: "Devon Lane",
        role: "Graphic Designer",
        summary: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
    const education = [
        {
            time: "Jun 2019 - Jun 2020",
            degree: "Masters in Graphic Design",
            university: "University of Chicago | City | Country",
            note: ["Lorem ipsum sitdolor sit ipsum amet, consectetur adipiscing elit."]
        },
        {
            time: "Jun 2018 - Jun 2019",
            degree: "BA in Graphic Design",
            university: "University of Chicago | City | Country",
            note: ["Lorem ipsum sitdolor sit ipsum amet, consectetur adipiscing elit."]
        }
    ]
    const achievements = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquea commodo consequat veniam, quis",
    "Ut enim ad minim veniam, quis nostrud."
]
    const awards = [
        {title:"Awards 1",
         time:"Jan 2019",
         company:"Company 1",
         url:"www.example1.com",
         note:"Lorem mpsum dolor smt amet sed doadmpmscmng."
        },
    ]
    const certifications = [
        {title:"Azure Fundamentals",
         time:"Jan 2019",
         company:"Udemy",
         url:"www.example1.com",
         note:"Lorem mpsum dolor smt amet sed doadmpmscmng."
        },
        {title:"Awards 2",
         time:"Dec 2018",
         company:"Udemy",
         url:"www.example1.com",
         note:"Lorem mpsum dolor smt amet sed doadmpmscmng."
        }
    ]
    const workExperience = [
        {title:"Senior Graphic Designer",
         time:"Jan 2022 - Present",
         company:"Invision Company | City | Country",
         note:"Lorem mpsum dolor smt amet, consectetur admpmscmng elmt, sed do emusmod tempor mncmdmdunt ut labore et dolore magna almqua. Ut enmm ad mmnmm venmam, qums nostrud exercmtatmon ullamco laborms nmsm ut almqump ex ea commodo.Lorem mpsudolor smt amet, consectetur admpmscmng elmt, sed do emusmod tempor mncmdmdunt ut labore et dolore magna almqua. "
        },
        {title:"Junior Graphic Designer",
         time:"Jan 2020 - Jan 2021",
         company:"Invision Company | City | Country",
         note:"Lorem mpsum dolor smt amet, consectetur admpmscmng elmt, sed do emusmod tempor mncmdmdunt ut labore et dolore magna almqua. Ut enmm ad mmnmm venmam, qums nostrud exercmtatmon ullamco laborms nmsm ut almqump ex ea commodo.Lorem mpsudolor smt amet, consectetur admpmscmng elmt, sed do emusmod tempor mncmdmdunt ut labore et dolore magna almqua. "
        },
        {title:"Graphic Designer",
         time:"Jan 2018- Jan 2020",
         company:"Invision Company | City | Country",
         note:"Lorem mpsum dolor smt amet, consectetur admpmscmng elmt, sed do emusmod tempor mncmdmdunt ut labore et dolore magna almqua. Ut enmm ad mmnmm venmam, qums nostrud exercmtatmon ullamco laborms nmsm ut almqump ex ea commodo.Lorem mpsudolor smt amet, consectetur admpmscmng elmt, sed do emusmod tempor mncmdmdunt ut labore et dolore magna almqua. "
        }
    ]
    const internships = [
        {title:"Internship 1",
         time:"Jan 2019 - Jun 2019",
         company:"Company 1 | City | Country",
         url:"www.example1.com",
         note:["Lorem mpsum dolor smt amet sed doadmpmscmng.",
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
            ]
        },
    ]
    const personalIntrest = Array(6).fill("Excepteur sjnt ecatpjdatat.");
    const projects = [
        {title:"Project Title",
         time:"Jan 2022 - Present",
         company:"Client name",
         note:"Lorem mpsum dolor smt amet, consectetur admpmscmng elmt, sed do emusmod tempor mncmdmdunt ut labore et dolore magna almqua. Ut enmm ad mmnmm venmam, qums nostrud exercmtatmon ullamco laborms nmsm ut almqump ex ea commodo.Lorem mpsudolor smt amet, consectetur admpmscmng elmt, sed do emusmod tempor mncmdmdunt ut labore et dolore magna almqua."
        },
        {title:"Project Title",
         time:"Jan 2020 - Jan 2021",
         company:"Client name",
         note:"Lorem mpsum dolor smt amet, consectetur admpmscmng elmt, sed do emusmod tempor mncmdmdunt ut labore et dolore magna almqua. Ut enmm ad mmnmm venmam, qums nostrud exercmtatmon ullamco laborms nmsm ut almqump ex ea commodo.Lorem mpsudolor smt amet, consectetur admpmscmng elmt, sed do emusmod tempor mncmdmdunt ut labore et dolore magna almqua."
        }
    ]
    const training = [
        {title:"Traning Title",
         time:"Jan 2018 - Jun 2018",
         company:"Institution",
         note:"Lorem mpsum dolor smt amet, consectetur admpmscmng elmt, sed do emusmod tempor mncmdmdunt ut labore et dolore magna almqua. Ut enmm ad mmnmm venmam, qums nostrud exercmtatmon ullamco laborms nmsm ut almqump ex ea commodo.Lorem mpsudolor smt amet."
        }
    ]
    return(
        <Context.Provider value={{
            profile,awards,certifications,workExperience,internships,personalIntrest,projects,training,education,achievements
        }}>
            {children}
        </Context.Provider>
    )
}
export const useResumeContext = ()=> useContext(Context)