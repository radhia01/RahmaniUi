import React, { useState } from 'react';

function TemplateCard({ template }) {
  const [seeLivePreview, setseeLivePreview] = useState(null);

  return (
    <div
      className={`shadow rounded-lg py-3 px-2 relative w-[60%] gap-2  dark:border-gray-400 ${seeLivePreview && "bg-black bg-opacity-50 z-70"}`}
      onMouseEnter={() => setseeLivePreview(template.id)}
      onMouseLeave={() => setseeLivePreview(null)}
    >
   
        
        {/* Image avec superposition */}
        <div className="relative h-80   ">
          <img
            className="h-full w-full object-cover"
            src={template.img}
            alt={template.title}
          />
          
          {/* Superposition visible seulement en hover */}
          {seeLivePreview === template.id && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center z-10">
              <a
                href={template.url}
                target="_blank"
                className="text-white text-xl font-bold"
              >
                Voir live demo
              </a>
            </div>
          )}
        </div>
        
        {/* Titre et technologies */}
        <div className={`py-3  transition-opacity  dark:text-white  dark:border duration-300 ${seeLivePreview ? "opacity-20" : "opacity-100"}`}>
          <h1 className="font-bold">{template.title}</h1>
          <h1>{template.technologies}</h1>
        </div>
     
    </div>
  );
}

export default TemplateCard;
