import Summary from "@/components/Summary";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import AcademicProject from "@/components/AcademicProject";
import References from "@/components/References";

export default function Home() {
  return (
    <div className="resume-container">
      <Summary />
      <Education />
      <Experience />
      <AcademicProject />
      <References />
    </div>
  );
}
