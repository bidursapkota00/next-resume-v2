import Summary from "@/components/Summary";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import AcademicProject from "@/components/AcademicProject";
import References from "@/components/References";
import Skills from "@/components/Skills";
import Honors from "@/components/Honors";
import Trainings from "@/components/Trainings";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="resume-container">
      <Summary />
      <Education />
      <p style={{ padding: "40px" }}></p>
      <Experience />
      <p style={{ padding: "80px" }}></p>
      <Skills />
      <Project />
      <Honors />
      {/* <Trainings /> */}
      <AcademicProject />
      <References />
    </div>
  );
}
