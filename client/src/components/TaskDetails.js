import React from "react";
import { HiArrowLeft, HiBell, HiCalendar, HiMail } from "react-icons/hi";
const TaskDetails = () => {
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white min-h-full py-20">
      <div className="container px-5 py-5  mx-auto">
        <div className="lg:w-3/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="flex gap-5">
              <h2 className="text-sm title-font text-white max-w-fit px-3 py-1 rounded-2xl mb-4  tracking-widest bg-gradient-to-r from-green-600 to-green-400">
                Completed
              </h2>
              <h2
                className="
                text-sm title-font text-white max-w-fit px-3 py-1 rounded-2xl mb-4  tracking-widest bg-gradient-to-r bg-slate-700"
              >
                Lab Practical
              </h2>
            </div>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Write the Lab Record Book
            </h1>
            <div className="flex mb-4">
              <span className="flex py-2 gap-2">
                <span className="flex space-x-1 items-center">
                  <button>
                    <HiCalendar className="w-5 h-5 text-gray-500" />
                  </button>
                </span>
                <span className="flex space-x-1 items-center">
                  <button>
                    <HiBell className="w-5 h-5 text-gray-500" />
                  </button>
                </span>
                <span className="flex space-x-1 items-center">
                  <button>
                    <HiMail className="w-5 h-5 text-gray-500" />
                  </button>
                </span>
              </span>
            </div>
            <p className="leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ipsam modi magnam consectetur laudantium quidem aut beatae
              mollitia laboriosam molestiae. Dolorem explicabo velit mollitia
              possimus dicta iusto nam fugiat repudiandae.
            </p>

            <div className="flex mt-6 items-center pt-6 border-t-2 border-gray-200 mb-5">
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded items-center gap-2">
                <HiArrowLeft /> Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskDetails;
