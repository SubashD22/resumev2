import Head from "next/head";
import Contact from "@/components/firstPage/Contact";
import SkillSection from "@/components/firstPage/SkillSection";
import Profile from "@/components/firstPage/Profile";
import Education from "@/components/firstPage/Education";
import TechnicalSkills from "@/components/secondPage/TechnicalSkills";
import Awards from "@/components/secondPage/Awards";
import Certifications from "@/components/secondPage/Certifications";
import WorkExperience from "@/components/secondPage/WorkExperience";
import Languages from "@/components/thirdPage/Languages";
import Internships from "@/components/thirdPage/Internships";
import PersonalInterest from "@/components/thirdPage/PersonalInterest";
import Projects from "@/components/thirdPage/Projects";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
// import * as html2pdf from "html2pdf.js";
import { PDFExport } from "@progress/kendo-react-pdf";

export default function Home() {
  const pdfref = useRef(null);
  const downloadPdf = () => {
    pdfref.current.save();
  };
  //   const downloadPdf = () => {
  //     const pdf = document.getElementById("ResumePrint");
  //     const opt = {
  //       filename: "Resume.pdf",
  //       image: { type: "jpeg", quality: 1 },
  //       html2canvas: { scale: 3 },
  //       jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  //     };
  //     html2pdf(pdf, opt);
  //   };
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name="description" content="Resume Created using React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Nerko+One&family=Ubuntu:wght@500&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/girl_image.png" />
      </Head>
      <main>
        <PDFExport ref={pdfref} fileName="Resume">
          <div className="container" id="ResumePrint">
            <div className="grid">
              <div className="left">
                <img src="/shape1.png" id="top-image" />
                <div>
                  <img src="/girl_image.png" className="girl-image" />
                </div>
                <Contact />
                <SkillSection />
                <TechnicalSkills />
                <Awards />
                <Certifications />
                <Languages />
                <Internships />
                <PersonalInterest />
              </div>
              <div className="right">
                <Profile />
                <Education />
                <WorkExperience />
                <Projects />
              </div>
            </div>
          </div>
        </PDFExport>

        {/* <div className="container pg2">
            <div className="grid">
                <div className="left">
                <img src="/shape1.png" id="top-image2" />
                    <div className="technical-skills-section">
                        <div className="technical">
                            <TechnicalSkills />
                            <Awards />
                            <Certifications />
                            <img src="/shap2.png" id="image-shap22" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <WorkExperience />
                </div>
            </div>
            <img src="/shape3.png" id="bottom-image2" />
        </div> */}
        {/* <div className="container pg3">
            <div className="grid">
                <div className="left">
                <img src="/shape1.png" id="top-image2" /> 
                  <div className="technical-skills-section">
                        <div className="technical">
                            <Languages />
                            <Internships />
                            <PersonalInterest />
                            <img src="/shap2.png" id="image-shap22" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <Projects/>
                </div>
            </div>
            <img src="/shape3.png" id="bottom-image2" />
        </div> */}
        <button onClick={downloadPdf}>Download</button>
      </main>
    </>
  );
}
