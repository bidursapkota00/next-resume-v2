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
      <Experience />
      <Skills />
      <Project />
      <AcademicProject />
      <Education />
      <Honors />
      {/* <Trainings /> */}
      <References />
    </div>
  );
}
