"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";
import { Card, CardAction, CardFooter, CardHeader, CardTitle } from "./card";

export const AnimatedTestimonials = ({ contents, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % contents.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + contents.length) % contents.length);
  };

  // eslint-disable-next-line no-unused-vars
  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="w-full  px-1  font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-1">
        <div className="flex flex-col py-4 gap-4 w-full">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h1 className="text-white text-2xl orbitron-font p-2">
              {contents[active].eventName}
            </h1>
            <div className="flex flex-col gap-4">
              {contents[active].students.map((student, index) => (
                <div key={index} className="flex flex-col gap-4 w-full">
                  <Card className="bg-zinc-900 text-white gap-2  shadow-lg w-full">
                    <CardHeader className="flex items-center  justify-between">
                      <div className="flex gap-4 items-center">
                        <p
                          className={`p-2 px-4 text-4xl orbitron-font ${student.rank === 1 ? "text-yellow-400" : student.rank === 2 ? "text-gray-200" : "text-amber-600"}`}
                        >
                          {student.rank}
                        </p>
                        <div className="flex flex-col">
                          <CardTitle className="text-2xl font-semibold">
                            {student.name}
                          </CardTitle>
                          <motion.p className=" text-md text-muted/90">
                            {student.department.split("").map((char, index) => (
                              <motion.span
                                key={index}
                                initial={{
                                  filter: "blur(10px)",
                                  opacity: 0,
                                  y: 5,
                                }}
                                animate={{
                                  filter: "blur(0px)",
                                  opacity: 1,
                                  y: 0,
                                }}
                                transition={{
                                  duration: 0.2,
                                  ease: "easeInOut",
                                  delay: 0.03 * index,
                                }}
                                className="inline-block"
                              >
                                {char === " " ? "\u00A0" : char}
                              </motion.span>
                            ))}
                          </motion.p>
                        </div>
                      </div>

                      <CardAction className="self-center text-2xl orbitron-font text-cyan-400">
                        {student.points}
                      </CardAction>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="flex justify-center mt-4 gap-4 pt-4 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
