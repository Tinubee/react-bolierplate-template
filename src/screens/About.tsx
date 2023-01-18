import Fireworks from "../components/effects/fireworks/Fireworks";
import SchoolPride from "../components/effects/schoolPride/SchoolPride";
import Snow from "../components/effects/snow/Snow";

function About() {
  return (
    <>
      <div>SchoolPride</div>
      <SchoolPride />
      <hr />
      <div>Fireworks</div>
      <Fireworks />
      <hr />
      <div>Snow</div>
      <Snow />
    </>
  );
}

export default About;
