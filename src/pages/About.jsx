import { useState, useEffect } from 'react';
import template1 from "../assets/templates/template1.png";
import template2 from "../assets/templates/template2.png";
import template3 from "../assets/templates/template3.png";
import template4 from "../assets/templates/template4.png";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMaterialdesignicons } from "react-icons/si";

function About() {
  const [currentImageId, setCurrentImageId] = useState(0);
  const templates = [template1, template2, template3, template4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageId((prev) => (prev + 1) % templates.length);
    }, 3000); // Image change every 3 seconds

    return () => clearInterval(interval);
  }, [templates.length]);

  return (
    <div className="relative min-h-screen w-full bg-gray-200 py-40 dark:bg-black" id="about">
      <div className="flex flex-col py-4 px-40">
        <h1 className="text-2xl mb-6 flex justify-center dark:text-white">
          <span className="text-4xl font-bold mr-4 ">RahmaniUi</span> est une bibliothèque de composants UI modernes et réactifs.
        </h1>
        <p className="text-lg text-gray-700">Testez dès maintenant les composants pour une intégration simple et rapide dans vos projets React.</p>
      </div>

      <div className="grid grid-cols-2 py-20 px-10">
        <div className=" shadow transition-transform duration-500 ease-in-out transform hover:scale-105">
          <img className="w-full h-full object-cover rounded-lg" src={templates[currentImageId]} alt="Template preview" />
        </div>

        <div className="flex justify-center items-center px-32 dark:text-white">
          <p className="text-2xl">La documentation complète de RahmaniUi sera bientôt disponible pour vous aider à intégrer facilement les composants dans vos projets.</p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <a href="#" className="bg-yellow-500 text-white py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-600">
          Découvrez la documentation
        </a>
      </div>

      <div className="flex space-x-6 py-10 justify-center">
        <div className="flex items-center space-x-2">
          <FaReact className="text-3xl text-blue-500 " />
          <span  className="dark:text-white">Compatible avec React</span>
        </div>
        <div className="flex items-center space-x-2">
          <RiTailwindCssFill className="text-3xl text-teal-500 " />
          <span className="dark:text-white">Basé sur Tailwind CSS</span>
        </div>
        <div className="flex items-center space-x-2">
          <SiMaterialdesignicons className="text-3xl text-indigo-500 " />
          <span  className="dark:text-white">Design moderne</span>
        </div>
      </div>
    </div>
  );
}

export default About;