import{a as e,i as t,o as n,r}from"./index-D23obv0y.js";var i=n(e(),1),a=t(),o=()=>{let{isDarkMode:e}=(0,i.useContext)(r);return(0,a.jsxs)(`section`,{className:`py-4 my-12 px-6 transition-colors ${e?`bg-slate-900 text-white`:`bg-gray-100 text-gray-900`}`,"aria-labelledby":`projects-heading`,id:`projects-section`,children:[(0,a.jsx)(`h2`,{id:`projects-heading`,className:`underline text-3xl md:text-4xl font-bold text-center`,children:`Key Projects & Product Highlights`}),(0,a.jsx)(`p`,{className:`text-center mt-2 text-sm md:text-base ${e?`text-gray-400`:`text-gray-600`}`,children:`A showcase of key projects, products, and technologies I have contributed to.`}),(0,a.jsx)(`div`,{className:`mt-10 space-y-7 max-w-4xl mx-auto`,role:`list`,children:[{id:1,title:`Prepaid Card Issuer Transaction Switch`,product:`Prepaid Card Issuer POS Switch`,description:`Did RuPay certification and implemented prepaid card authorization, reconciliation, settlement, and issuer integrations with secure rule-based processing.`,techStack:[`Java`,`Spring Boot`,`Microservices`,`Kafka`,`PostgreSQL`,`3DES/AES Encryption`,`Docker`,`Kubernetes`]},{id:2,title:`API Gateway Based Microservices Platform`,product:`Backend Modernization Platform`,description:`Developed microservices architecture with centralized authentication, routing, rate-limiting, and scalable backend design.`,techStack:[`Spring Cloud`,`Spring Security`,`JWT`,`API Gateway`,`ELK Stack`,`Docker`,`CI/CD`]},{id:3,title:`3DS ACS Server Processing`,product:`Secure Issuer Authentication Service`,description:`Implemented full 3DS 2.x flow including CReq/CRes processing, JWE encryption, risk evaluation, and session expiry management.`,techStack:[`Java`,`Spring Boot`,`JWE/JWS`,`3DS 2.x Protocol`,`Redis`,`Timers`,`Encryption`]}].map(t=>(0,a.jsxs)(`div`,{className:`
              p-6 
              rounded-xl 
              shadow-lg 
              border 
              hover:shadow-2xl
              transition
              focus-within:ring-2 focus-within:ring-blue-500
              ${e?`bg-slate-800 border-slate-700 hover:bg-slate-700`:`bg-white border-gray-200 hover:bg-gray-50`}
            `,role:`listitem`,"aria-label":`${t.title} project`,children:[(0,a.jsx)(`h3`,{className:`text-2xl font-semibold`,children:t.title}),(0,a.jsx)(`p`,{className:`text-[#20C4CB] font-medium mt-1`,children:t.product}),(0,a.jsx)(`p`,{className:`mt-4 leading-relaxed ${e?`text-gray-300`:`text-gray-700`}`,children:t.description}),(0,a.jsxs)(`div`,{className:`mt-4`,children:[(0,a.jsx)(`h4`,{className:`text-lg font-semibold text-[#20C4CB]`,children:`Technologies Used:`}),(0,a.jsx)(`div`,{className:`flex flex-wrap gap-2 mt-2`,role:`list`,"aria-label":`Technologies used in this project`,children:t.techStack.map((t,n)=>(0,a.jsx)(`span`,{className:`
                      px-3 
                      py-1 
                      rounded-full 
                      text-sm 
                      cursor-pointer 
                      transition
                      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500
                      ${e?`bg-gray-700 text-white hover:bg-[#20C4CB]`:`bg-gray-200 text-black hover:bg-[#20C4CB] hover:text-white`}
                    `,role:`listitem`,tabIndex:`0`,"aria-label":t,children:t},n))})]})]},t.id))})]})};export{o as default};