import React from "react";
import { FaLaptopCode, FaServer, FaDatabase, FaCogs } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-4xl text-blue-500" />,
    title: "Web Development",
    description: "Build modern, responsive, and fast web applications.",
  },
  {
    icon: <FaServer className="text-4xl text-pink-500" />,
    title: "Spring Boot",
    description: "Create backend applications that are scalable and efficient.",
  },
  {
    icon: <FaDatabase className="text-4xl text-green-500" />,
    title: "Database Management",
    description: "Efficient data storage and management solutions.",
  },
  {
    icon: <FaCogs className="text-4xl text-yellow-500" />,
    title: "DSA",
    description: "Master Data Structures and Algorithms for problem-solving.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="group perspective w-full h-56"
          >
            <div className="relative w-full h-full transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center flex flex-col justify-center items-center backface-hidden">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              {/* Back Side - Empty */}
              <div className="absolute inset-0 p-6 bg-blue-500 dark:bg-blue-700 rounded-lg shadow-lg text-center flex justify-center items-center rotate-y-180 backface-hidden">
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
