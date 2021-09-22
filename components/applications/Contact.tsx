import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineSend } from "react-icons/ai";

import Typical from "react-typical";

const getMailBody = ({ name, who }: { name: string; who: string }) => {
  if (who === "recruiter")
    return `Hello ${name},\n\nI'm happily not looking for a job. :)\n\nHope you've enjoyed my portfolio,\n\nRegards\nBaptiste Tiers`;
  if (who === "mother")
    return `Hello mom 🥰,\n\nI'm doing great, how is everybody going back home ?\n\nXXX\nYour favorite son`;
  if (who === "developer")
    return `Hello ${name} 💻,\n\n{{ Insert here a kind response }}\n\nBest,\nBaptiste Tiers`;
  return "";
};

type ContactProps = {};

const Contact: React.FC<ContactProps> = ({}) => {
  const [step, setStep] = useState(0);

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [who, setWho] = useState("");
  const [stack, setStack] = useState([false, false, false, false, false, false, false, false]);

  return (
    <div className="relative flex flex-grow px-16 py-8 space-x-16 rounded-b-md">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <p className="text-4xl font-bold text-gray-100">
            Say <span className="font-black text-purple-500">Hi !</span>
          </p>
          <p className="font-semibold text-gray-300 text-md">
            Fill up the form and let&apos;s get in touch
          </p>
        </div>
        <div className="flex flex-col flex-grow space-y-8">
          <div className="relative flex w-full h-3 border rounded-lg bg-gradient-to-r from-blue-300 to-purple-500">
            <div
              className="absolute right-0 flex h-[calc(0.75rem-2px)] bg-gray-900 rounded-r-lg transition-all"
              style={{ width: `${Math.max(95 - step * 33, 0)}%` }}
            />
          </div>
          {step === 0 && (
            <div className="flex flex-col space-y-6">
              <label className="flex flex-col space-y-2">
                <span className="text-sm text-gray-100">Your email address :</span>
                <input
                  className="px-2 py-2 text-sm rounded appearance-none"
                  type="email"
                  onBlur={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="flex flex-col space-y-2">
                <span className="text-sm text-gray-100">Why are you reaching :</span>
                <input
                  className="px-2 py-2 text-sm rounded appearance-none"
                  onBlur={(e) => setSubject(e.target.value)}
                />
              </label>
              <label className="flex flex-col space-y-2">
                <span className="text-sm text-gray-100">Your name :</span>
                <input
                  className="px-2 py-2 text-sm rounded appearance-none"
                  onBlur={(e) => setName(e.target.value)}
                />
              </label>
              <div className="flex items-end justify-center flex-grow mx-6 ">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center px-24 py-2 mt-6 space-x-2 font-bold text-white bg-purple-500 rounded"
                >
                  <span>Next</span>
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          )}
          {step === 1 && (
            <div className="flex flex-col space-y-6">
              <fieldset className="flex flex-col flex-grow space-y-2">
                <span className="text-sm text-gray-100">Your are :</span>
                <label className="flex items-center space-x-2">
                  <input
                    className="text-sm text-purple-600 appearance-none"
                    type="radio"
                    name="whoareyou"
                    value={"recruiter"}
                    onChange={(e) => {
                      if (e.target.checked) setWho("recruiter");
                    }}
                  />
                  <span className="mb-0.5 text-sm font-semibold text-white">a recruiter</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="text-sm text-purple-600 appearance-none"
                    type="radio"
                    name="whoareyou"
                    value={"developer"}
                    onChange={(e) => {
                      if (e.target.checked) setWho("developer");
                    }}
                  />
                  <span className="mb-0.5 text-sm font-semibold text-white">a developer</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="text-sm text-purple-600 appearance-none"
                    type="radio"
                    name="whoareyou"
                    value={"mother"}
                    onChange={(e) => {
                      if (e.target.checked) setWho("mother");
                    }}
                  />
                  <span className="mb-0.5 text-sm font-semibold text-white">my mother</span>
                </label>
              </fieldset>

              <div className="flex items-end justify-center flex-grow mx-6 ">
                <button
                  onClick={() => setStep(who === "recruiter" ? 2 : 3)}
                  className="flex items-center px-24 py-2 mt-6 space-x-2 font-bold text-white bg-purple-500 rounded"
                >
                  <span>Next</span>
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          )}
          {step === 2 && who === "recruiter" && (
            <div className="flex flex-col space-y-6">
              <fieldset className="flex flex-col flex-grow space-y-2">
                <span className="text-sm text-gray-100">
                  Which technologies make up your stack ?
                </span>
                <label className="flex items-center space-x-2">
                  <input
                    className="text-purple-600 rounded appearance-none"
                    type="checkbox"
                    onChange={(e) => setStack((stack) => [e.target.checked, ...stack.slice(1)])}
                  />
                  <span className="mb-0.5 text-xs font-semibold text-white">Rust</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="text-purple-600 rounded appearance-none"
                    type="checkbox"
                    onChange={(e) =>
                      setStack((stack) => [stack[0], e.target.checked, ...stack.slice(2)])
                    }
                  />
                  <span className="mb-0.5 text-xs font-semibold text-white">Typescript</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="text-purple-600 rounded appearance-none"
                    type="checkbox"
                    onChange={(e) =>
                      setStack((stack) => [
                        ...stack.slice(0, 2),
                        e.target.checked,
                        ...stack.slice(3),
                      ])
                    }
                  />
                  <span className="mb-0.5 text-xs font-semibold text-white">PHP</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="text-purple-600 rounded appearance-none"
                    type="checkbox"
                    onChange={(e) =>
                      setStack((stack) => [
                        ...stack.slice(0, 3),
                        e.target.checked,
                        ...stack.slice(4),
                      ])
                    }
                  />
                  <span className="mb-0.5 text-xs font-semibold text-white">Ruby</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="text-purple-600 rounded appearance-none"
                    type="checkbox"
                    onChange={(e) =>
                      setStack((stack) => [
                        ...stack.slice(0, 4),
                        e.target.checked,
                        ...stack.slice(5),
                      ])
                    }
                  />
                  <span className="mb-0.5 text-xs font-semibold text-white">Go</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="text-purple-600 rounded appearance-none"
                    type="checkbox"
                    onChange={(e) =>
                      setStack((stack) => [
                        ...stack.slice(0, 5),
                        e.target.checked,
                        ...stack.slice(6),
                      ])
                    }
                  />
                  <span className="mb-0.5 text-xs font-semibold text-white">Node</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="text-purple-600 rounded appearance-none"
                    type="checkbox"
                    onChange={(e) =>
                      setStack((stack) => [
                        ...stack.slice(0, 6),
                        e.target.checked,
                        ...stack.slice(7),
                      ])
                    }
                  />
                  <span className="mb-0.5 text-xs font-semibold text-white">React</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="text-purple-600 rounded appearance-none"
                    type="checkbox"
                    onChange={(e) =>
                      setStack((stack) => [
                        ...stack.slice(0, 7),
                        e.target.checked,
                        ...stack.slice(8),
                      ])
                    }
                  />
                  <span className="mb-0.5 text-xs font-semibold text-white">CSS</span>
                </label>
              </fieldset>

              <div className="flex items-end justify-center flex-grow mx-6 ">
                <button
                  onClick={() => setStep(3)}
                  className="flex items-center px-24 py-2 mt-6 space-x-2 font-bold text-white bg-purple-500 rounded"
                >
                  <span>Next</span>
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col flex-grow space-y-2">
                <span className="text-sm text-gray-100">Leave your message here !</span>
                <label className="flex items-center space-x-2">
                  <textarea rows={12} className="w-full text-sm rounded appearance-none resize-none" />
                  <span className="sr-only">Your message</span>
                </label>
              </div>

              <div className="flex items-end justify-center flex-grow mx-6 ">
                <button
                  onClick={() => setStep(3)}
                  className="flex items-center px-24 py-2 space-x-2 font-bold text-white bg-purple-500 rounded"
                >
                  <span>Send</span>
                  <AiOutlineSend />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col flex-grow space-y-2 bg-gray-100 rounded-lg shadow-lg">
        <div className="px-3 py-2 text-sm font-semibold bg-gray-800 border rounded-t-lg text-gray-50">
          Estimation of my answer
        </div>
        <div className="flex py-2 mx-3 text-xs font-medium text-gray-900 border-b border-gray-200">
          <span className="pr-1 font-semibold">To:</span>
          <Typical className="after:!content-none" steps={[email]} wrapper="p" />
        </div>
        <div className="flex py-2 mx-3 text-xs font-medium text-gray-900 border-b border-gray-200">
          <span className="pr-1 font-semibold">Subject:</span>
          <Typical
            className="after:!content-none"
            steps={[subject ? `Re: ${subject}` : ""]}
            wrapper="p"
          />
        </div>
        <div
          className={`py-2 mx-3 mt-12 flex-grow text-xs font-medium relative text-gray-900 ${
            stack[6] === true || stack[2] === true ? "" : "prose prose-purple"
          }`}
        >
          {stack[2] === true && (
            <div className="absolute flex items-center prose justify-center flex-col -ml-3 w-[calc(100%+1.5rem)] h-[calc(100%+6rem)]  mt-[-6.15rem] bg-gray-900">
              <span className="text-8xl">🚧</span>
              <pre className="px-3 py-10 font-semibold text-gray-100 whitespace-pre-wrap">{`<?php\n\tdie("Error: This form is incorrect.")\n?>`}</pre>
            </div>
          )}
          <Typical
            className={`after:!content-none whitespace-pre-wrap ${
              stack[6] === true
                ? "bg-purple-600 rounded-md transform animate-bounce transition-all delay-500 text-white font-extrabold text-xl mt-14 px-4 py-4"
                : ""
            }`}
            steps={[getMailBody({ name, who })]}
            wrapper="p"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Contact);
