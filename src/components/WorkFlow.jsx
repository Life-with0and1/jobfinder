import Process from "../assets/Process.png";
function WorkFlow() {
  return (
    <div className="hidden mt-32 md:mx-32 mx-10 md:flex flex-col gap-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-10">
        How jobpilot work
      </h2>

      <div>
        <img src={Process} alt="Process" />
      </div>
    </div>
  );
}

export default WorkFlow;
