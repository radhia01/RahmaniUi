import React from 'react'
import template1 from "../assets/templates/template1.png"
import template2 from "../assets/templates/template2.png"
import template3 from "../assets/templates/template3.png"
import template4 from "../assets/templates/template4.png"
import TemplateCard from '../cards/TemplateCard'
function Templates() {
  const templates=[
    {
        id:1,
        img:template1,
        title:"Pages d'authentification",
        url:"https://auth-templates-radhia-rahmani.netlify.app/",
        technologies:"React.js,Tailwind CSS"
    },
    {
        id:2,
        img:template2,
        title:"Site web de restauration",
        url:"https://bestfood-template-radhia-rahmani.netlify.app/",
        technologies:"React.js,Tailwind CSS"
    },
    {
      id:3,
      img:template3,
      title:"Dashboard de formation ",
      url:"https://training-dashboard-radhia-rahmani.vercel.app/",
      technologies:"React.js,Tailwind CSS"
  },
  {
    id:4,
    img:template4,
    title:"Site de portfolio ",
    url:"https://portfolio-template-radhia-rahmani.netlify.app/",
    technologies:"React.js,Tailwind CSS"
}];
  return (
    <section className=" w-full min-h-screen    py-56       " id="templates">
       <div className="grid grid-cols-1   gap-40  justify-center items-center ">
{templates.map(template=>{
  return <div className="flex  justify-center " key={template.id} ><TemplateCard template={template}/></div> 
})}

       </div>
    </section>
  )
}

export default Templates