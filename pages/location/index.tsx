// Components
import Section from "../../components/layout/Section";

const Location = () => {
  return (
    <Section className="bg-white items-center" id="location">
      <h1 className="md:!text-6xl !text-5xl text-base !font-semibold mb-10">
        Локация
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.4692808523123!2d27.933015617443843!3d43.2206197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4543e0785316d%3A0x912d821bd9802f77!2sFitness%20Yellow!5e0!3m2!1sen!2sbg!4v1671728685328!5m2!1sen!2sbg"
        height="450"
        loading="lazy"
        className="border-none w-full grow"
      ></iframe>
    </Section>
  );
};

export default Location;
