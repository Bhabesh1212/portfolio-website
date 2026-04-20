import{a as e,i as t,o as n,r}from"./index-DYBJ5b5M.js";var i=n(e(),1),a=t(),o=()=>{let{isDarkMode:e}=(0,i.useContext)(r);return(0,a.jsx)(`section`,{className:`my-12`,"aria-labelledby":`skills-heading`,id:`skills-section`,children:(0,a.jsxs)(`div`,{className:`
          mt-10 
          w-full 
          py-14 
          px-6 
          md:px-20 
          flex 
          flex-col 
          md:flex-row 
          items-center 
          justify-center 
          gap-12
          rounded-xl
          transition-colors
          ${e?`bg-slate-900 text-white`:`bg-gray-100 text-gray-900`}
        `,children:[(0,a.jsx)(`div`,{className:`w-full md:w-1/2 flex justify-center md:justify-start`,children:(0,a.jsxs)(`div`,{className:`w-full md:max-w-md text-center md:text-left space-y-5`,children:[(0,a.jsx)(`h2`,{id:`skills-heading`,className:`underline text-3xl md:text-4xl font-bold`,children:`Skills & Tools`}),(0,a.jsx)(`p`,{className:`text-base md:text-lg leading-relaxed ${e?`text-gray-300`:`text-gray-700`}`,children:`My focus is on leveraging technology to build efficient and scalable solutions. I am deeply passionate about technology and its continuous evolution...`}),(0,a.jsx)(`p`,{}),(0,a.jsx)(`a`,{href:`https://www.linkedin.com/in/bhabesh-%E2%80%8Branjan-barik-42699b127`,target:`_blank`,rel:`noopener noreferrer`,className:`\r
                px-6 py-2 font-semibold \r
                bg-[#20C4CB]\r
                rounded-full \r
                shadow-lg \r
                hover:bg-[#0ddde4]\r
                hover:text-white \r
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500\r
                transition\r
              `,"aria-label":`Connect on LinkedIn - Opens in new tab`,children:`Connect on LinkedIn`})]})}),(0,a.jsx)(`div`,{className:`w-full md:w-1/2 flex justify-center md:justify-start`,children:(0,a.jsx)(`div`,{className:`w-full md:max-w-lg space-y-6`,children:[{category:`Backend`,skills:[`Java`,`Spring Boot`,`Spring Security`,`REST APIs`,`Kafka`]},{category:`Architecture`,skills:[`Microservices`,`API Gateway`,`JWT`,`Load Balancing`]},{category:`Data`,skills:[`PostgreSQL`,`SQL`,`Redis`,`NoSQL`]},{category:`DevOps`,skills:[`Docker`,`Kubernetes`,`Jenkins`,`AWS`]},{category:`Frontend`,skills:[`React`,`Tailwind CSS`]}].map((t,n)=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h3`,{className:`text-sm font-semibold mb-3 uppercase tracking-wide ${e?`text-[#20C4CB]`:`text-blue-600`}`,children:t.category}),(0,a.jsx)(`div`,{className:`flex flex-wrap gap-2`,role:`list`,"aria-label":`${t.category} skills`,children:t.skills.map((t,n)=>(0,a.jsx)(`div`,{role:`listitem`,className:`
                        w-fit 
                        px-3 
                        py-1.5 
                        rounded-full 
                        hover:bg-[#20C4CB] 
                        hover:text-white 
                        cursor-pointer 
                        shadow
                        text-xs md:text-sm
                        transition
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500
                        ${e?`bg-gray-700 text-white hover:text-white`:`bg-gray-200 text-black`}
                      `,tabIndex:`0`,"aria-label":`Skill: ${t}`,children:t},n))})]},n))})})]})})};export{o as default};