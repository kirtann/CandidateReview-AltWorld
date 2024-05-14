"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaHome as HomeIcon } from "react-icons/fa";
import { FaPlus as PlusIcon } from "react-icons/fa";
import { IoCube } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { VscFiles } from "react-icons/vsc";
import CandidateDisplay from "@/components/CandidateDisplay";

export default function Home() {
  const router = useRouter();
  const [candidates, setCandidates] = useState([]);
  const [activeCandidate, setActiveCandidate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://66431d353c01a059ea218f24.mockapi.io/api/v1/candidates"
        );
        const fetchedData = response.data.map((candidate: any) => {
          candidate.behavioural = parseInt(candidate.behavioural);
          candidate.communication = parseInt(candidate.communication);
          candidate.situational = parseInt(candidate.situational);
          let score =
            ((candidate.behavioural +
              candidate.communication +
              candidate.situational) /
              30) *
            100;
          score = Math.round(score);
          return {
            score: score,
            ...candidate,
          };
        });
        setCandidates(fetchedData);
        setActiveCandidate(fetchedData[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCandidateClick = (candidate: any) => {
    setActiveCandidate(candidate);
  };

  console.log(candidates);

  return (
    <>
      <div className="flex flex-row h-screen bg-slate-100">
        <div className="hidden lg:block basis-[17%]">
          <div className=" ms-8 mt-7 flex w-full">
            <img className="h-full" src="./logoimg.png" alt="logo" />
            <p className="ms-2 text-center font-sans font-semibold">
              Hi, AltWorld
            </p>
          </div>
          <hr className=" bg-black mx-6 mt-4" />
          <div className="mt-8 w-full">
            <div className="flex">
              <button className="bg-white ms-8 w-8 h-8 rounded-full items-center flex justify-center me-3">
                <HomeIcon color="cyan" />
              </button>
              <p className="font-sans font-semibold">Dashboard</p>
            </div>
            <div className="m-4 p-3 bg-cyan-400 rounded-2xl">
              <button className="bg-white mb-3 w-8 h-8 rounded-xl items-center flex justify-center me-3">
                <PlusIcon color="grey" />
              </button>
              <div className="flex flex-col gap-2">
                <p className=" text-[0.9] text-white font-semibold">
                  New Assignment?
                </p>
                <p className=" text-xs text-white">
                  Select from pre-defined questions to have a quick turnaround.
                </p>
                <button className="bg-white rounded-2xl p-2 text-xs font-semibold">
                  Create New Assignment
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-[83%] mt-4">
          <div className="ms-8">
            <p className="text-xs">
              <span className=" text-gray-400">Pages</span> / Assignment
            </p>
            <p className="font-bold ">Sales BDE</p>
          </div>
          <div className="m-4 w-[80vw] h-[85vh]">
            <div className="flex flex-row h-full w-full gap-4 ">
              <div className="basis-[33%] h-full bg-white rounded-xl">
                <div className="flex flex-col h-full">
                  <div className="basis-[35%] p-4">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <p className="font-bold text-lg">Sales BDE</p>
                        <div className="flex">
                          <p className="text-lg text-green-500 font-bold me-2">
                            Active
                          </p>
                          <button className="bg-white shadow-xl mb-3 w-6 h-6 rounded-lg items-center flex justify-center me-3">
                            <MdEdit color="grey" />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 mt-3">
                        <div className="flex justify-between">
                          <p className="font-semibold text-sm text-gray-500">
                            Assignment Link
                          </p>
                          <p className="font-semibold text-sm text-blue-500">
                            https://tiny.url/asknakdna/
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold text-sm text-gray-500">
                            Assignment Hour
                          </p>
                          <p className="font-semibold text-sm text-gray-500">
                            3 hours
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold text-sm text-gray-500">
                            Assignment Ends at
                          </p>
                          <p className="font-semibold text-sm text-gray-500">
                            11 March 2024
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-5 flex flex-row w-full h-1/2">
                      <button className="shadow-xl text-sm font-semibold mb-3 w-[35%] h-[40%] rounded-lg items-center flex justify-center me-3">
                        <IoCube />
                        <span className="ms-1">To Review</span>
                      </button>
                      <button className=" mb-3 text-sm font-semibold w-[35%] h-[40%] rounded-lg items-center flex justify-center">
                        <VscFiles fill="black" />
                        <span className="ms-1">Shortlisted</span>
                      </button>
                    </div>
                  </div>
                  <div className="basis-[65%] overflow-auto">
                    <div className="flex flex-col">
                      <div className="flex justify-between p-4">
                        <p className="font-semibold text-sm text-gray-500">
                          Candidate
                        </p>
                        <p className="font-semibold text-sm text-gray-500">
                          Score
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        {candidates.length === 0 ? (
                          <p className="text-center text-gray-500">
                            Wait till the data is fetched
                          </p>
                        ) : (
                          candidates.map((candidate: any) => {
                            return (
                              <div
                                key={candidate.id}
                                className="p-4 bg-white shadow-md rounded-md cursor-pointer flex flex-row justify-between"
                                onClick={() => handleCandidateClick(candidate)}
                              >
                                <div className="flex items-center">
                                  <img
                                    className=" w-7 h-7 me-2"
                                    src={candidate.avatar}
                                    alt=""
                                  />
                                  <div className="flex flex-col">
                                    <h2 className="text-sm font-semibold">
                                      {candidate.name}
                                    </h2>
                                    <p className=" text-[0.7rem] text-gray-500">
                                      {candidate.email}
                                    </p>
                                  </div>
                                </div>
                                <p
                                  className={`text-sm font-semibold ${
                                    candidate.score > 50
                                      ? "text-green-500"
                                      : "text-yellow-500"
                                  }`}
                                >
                                  {candidate.score} %
                                </p>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-[67%] h-full bg-white rounded-xl">
                {activeCandidate ? (
                  <CandidateDisplay candidate={activeCandidate} />
                ) : (
                  <div className="h-full w-full flex justify-center items-center">
                    <p>
                      No candidate selected or wait till the data is fetched
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
