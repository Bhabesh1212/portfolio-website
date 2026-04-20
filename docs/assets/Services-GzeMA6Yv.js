import{a as e,i as t,o as n,r}from"./index-CrIcQ41c.js";var i=n(e(),1),a=t(),o=()=>{let{isDarkMode:e}=(0,i.useContext)(r),[t]=(0,i.useState)([{id:`1`,imagelink:`text-5xl fa-brands fa-aws`,title:`Web Development`,description:`I have a strong enthusiasm for modern web development and the rapid progress shaping the digital landscape. Each new tool or framework inspires me to craft more intuitive, efficient, and high-performing applications.`,actionButton:{title:`Check here`,link:`/check-here`}},{id:`2`,imagelink:`text-5xl fa-solid fa-server`,title:`Backend Development`,description:`I am committed to backend engineering and modern system design. I focus on building scalable, reliable, secure, and high-performing backend services using best development practices.`,actionButton:{title:`Check here`,link:`/check-here`}}]);return(0,a.jsxs)(`section`,{className:`py-14 transition-colors ${e?`bg-slate-900 text-white`:`bg-gray-100 text-gray-900`}`,"aria-labelledby":`services-heading`,id:`services-section`,children:[(0,a.jsx)(`h2`,{id:`services-heading`,className:`underline text-3xl md:text-4xl text-center font-bold`,children:`My Services`}),(0,a.jsx)(`div`,{className:`\r
          mt-10 \r
          grid \r
          grid-cols-1 \r
          md:grid-cols-2 \r
          gap-8 \r
          max-w-5xl \r
          mx-auto \r
          px-6\r
        `,role:`list`,children:t.map(t=>(0,a.jsxs)(`div`,{className:`
                rounded-xl 
                shadow-lg 
                p-6 
                text-center 
                transition
                focus-within:ring-2 focus-within:ring-blue-500
                ${e?`bg-slate-800 hover:bg-slate-700`:`bg-white hover:bg-gray-50`}
              `,role:`listitem`,"aria-label":t.title,children:[(0,a.jsx)(`i`,{className:`${t.imagelink} mb-4 ${e?`text-[#20C4CB]`:`text-blue-500`}`,"aria-hidden":`true`}),(0,a.jsx)(`h3`,{className:`text-2xl md:text-3xl font-semibold mb-2`,children:t.title}),(0,a.jsx)(`p`,{className:`text-sm md:text-base leading-relaxed ${e?`text-gray-300`:`text-gray-700`}`,children:t.description})]},t.id))})]})};export{o as default};