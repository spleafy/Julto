// Components
import Section from "../../components/layout/Section";

const VirtualWalk = () => {
  return (
    <Section className="bg-white">
      <h1 className="!text-5xl md:!text-6xl text-base !font-semibold mb-10 self-center">
        Виртуална разходка
      </h1>
      <video
        src="/static/videos/virtual_walk.mp4"
        className="aspect-square h-[550px]"
        controls
      ></video>
    </Section>
  );
};

export default VirtualWalk;
