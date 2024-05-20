import { Candidate } from "@/app/page";
import Carousel from "./Carousel";

export default function CandidateDisplay({
  candidate,
}: {
  candidate: Candidate;
}) {
  const handleShortlist = () => {
    candidate.shortlisted = true;
  };
  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      <div className=" lg:basis-1/2 flex flex-col h-full">
        <div className="flex flex-col h-full p-5">
          <div className="basis-[14%] flex justify-between items-center">
            <div className="flex items-center">
              <img
                className=" w-12 h-12 rounded-lg me-2"
                src={candidate.avatar}
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="text-sm font-semibold">{candidate.name}</h2>
                <p className=" text-[0.7rem] text-gray-500">
                  {candidate.email}
                </p>
              </div>
            </div>
            <p
              className={`text-2xl font-semibold ${
                candidate.score > 50 ? "text-green-500" : "text-yellow-500"
              }`}
            >
              {candidate.score} %
            </p>
          </div>
          <div className="basis-[20%] flex flex-col justify-evenly">
            <div className="flex justify-between">
              <p className="font-semibold text-sm text-gray-500">Behavioural</p>
              <div>
                <progress value={candidate.behavioural / 10}></progress>
              </div>
              <span
                className={` text-sm font-bold ${
                  candidate.behavioural > 5
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                {candidate.behavioural} / 10
              </span>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold text-sm text-gray-500">
                Communication
              </p>
              <div>
                <progress value={candidate.communication / 10}></progress>
              </div>
              <span
                className={` text-sm font-bold ${
                  candidate.communication > 5
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                {candidate.communication} / 10
              </span>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold text-sm text-gray-500">
                Situation handling
              </p>
              <div>
                <progress value={candidate.situational / 10}></progress>
              </div>
              <span
                className={` font-bold text-sm ${
                  candidate.situational > 5
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                {candidate.situational} / 10
              </span>
            </div>
          </div>
          <div className="basis-[66%] flex flex-col justify-evenly">
            <div>
              <h1 className=" text-lg font-bold">About</h1>
              <p className="text-sm text-gray-500">{candidate.about}</p>
            </div>
            <div>
              <h1 className=" text-lg font-bold">Experience</h1>
              <p className="text-sm text-gray-500">{candidate.experience}</p>
            </div>
            <div>
              <h1 className=" text-lg font-bold">Hobbies</h1>
              <p className="text-sm text-gray-500"> {candidate.hobbies}</p>
            </div>
            <div>
              <h1 className="text-lg font-bold">Introduction</h1>
              <p className="text-sm text-gray-500">{candidate.introduction}</p>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={handleShortlist}
                className=" text-xl font-bold bg-cyan-400 text-white w-[80%] rounded-lg h-full"
              >
                Shortlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex md:hidden lg:block lg:basis-1/2 p-2 justify-center">
        <Carousel
          images={[
            "/carouselimg.png",
            "/carouselimg.png",
            "/carouselimg.png",
            "/carouselimg.png",
          ]}
        />
      </div>
    </div>
  );
}
