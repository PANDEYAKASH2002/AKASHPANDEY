import React, { useState } from 'react'
import { useGSAP } from "@gsap/react";
// import designerImg from "./logo.png"
import gsap from 'gsap';
import "./Hero.css";
import { FaInstagram, FaFacebook, FaXTwitter, FaWhatsapp, FaLinkedin, FaPhone  } from 'react-icons/fa6';

function Hero() {
   const [show ,setShow]=useState(false);
  useGSAP( () =>{
    const tl=gsap.timeline();
     tl.to(".vi-mask-group",{
        rotate:10,
        duration:2,
        ease:"Power4.easeInOut",
        transformOrigin:"50% 50%",
     })
    .to(".vi-mask-group",{
        scale:10,
        duration:2,
        delay:-1.8,
        ease:"Expo.easeInOut",
          transformOrigin:"50% 50%",
          opacity:"0",
          onUpdate:function(){
            if(this.progress()>= .9){
                document.querySelector(".svg").remove();
                setShow(true);
                this.kill();
            }
          }
    })
  })
   //HANDLE Scroll for page 
   const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  //ABOUT SECTION
  const projects = [
  {
    title: "E-commerce Website",
    description: "A full-stack e-commerce web application featuring product listings, cart functionality, and user authentication. Built with HTML, CSS, JavaScript, React, and integrated with backend APIs.",
    link: "https://github.com/PANDEYAKASH2002/E-Commerce",
  },
  {
    title: "To-Do List App",
    description: "A simple yet efficient to-do list application allowing users to add, edit, and delete tasks. Built with ReactJS, offering a clean UI and smooth user experience.",
    link: "https://github.com/PANDEYAKASH2002/TO-DO-LIST",
  },
  {
    title: "Bubble Game",
    description: "An interactive browser-based game where players pop bubbles against a timer. Developed using JavaScript, enhanced with fun animations and score tracking.",
    link: "https://github.com/PANDEYAKASH2002/BUBBLE-GAME",
  },
  {
    title: "Calculator",
    description: "A simple yet functional Calculator web app built with HTML, CSS, and JavaScript. It performs basic arithmetic operations with clean UI, efficient event handling, and dynamic display updates. This project showcases my foundational skills in frontend development and interactive web design.",
    link: "https://github.com/PANDEYAKASH2002/CALCULATOR",
  },
];
//SKILL SECTION
const Skilled = [
    {
      title: "Web Development",
      description:"Experienced in creating fully functional websites ranging from single-page applications to e-commerce platforms, with an emphasis on mobile-first design, accessibility, and seamless user experience.",
      
    },
    {
      title: "UI/UX Design",
      description: "Focus on building intuitive and user-friendly interfaces, applying fundamental UI/UX principles to enhance user satisfaction and engagement.",
    
    },
    {
      title: "HTML/CSS",
      description: "Skilled in writing clean, semantic, and accessible HTML5 markup to build strong foundations for modern web applications.Proficient in crafting responsive layouts, animations, and visually appealing designs using CSS3, with a solid grasp of Flexbox, Grid, and modern styling practices.",
   
    },
    {
      title: "JavaScript",
      description: "Strong understanding of JavaScript fundamentals, including DOM manipulation, event handling, API integration, and working with modern ES6+ features like arrow functions, promises, async/await.",
     
    },
    {
        title: "TailWind CSS/BootStrap CSS",
        description: "Expertise in rapidly designing modern, responsive user interfaces using Tailwind CSS/BoootStrap CSS, following utility-first principles to build highly maintainable codebases.",
      
      },
      {
        title: "React-Js",
        description: "Experienced in building dynamic and reusable components with React.js, managing state effectively using Hooks, and implementing routing with React Router.",
       
      },
  ];
//contact section
const socialLinks = [
  {
    icon: <FaInstagram size={40} color="#E1306C" />,
    url: 'https://www.instagram.com/__aakash.0007/',
    name: 'Instagram',
  },
  {
    icon: <FaFacebook size={40} color="#1877F2" />,
    url: 'https://www.facebook.com/your_username/',
    name: 'Facebook',
  },
  {
    icon: <FaXTwitter size={40} color="#000000" />,
    url: 'https://twitter.com/your_username/',
    name: 'Twitter',
  },
  {
    icon: <FaWhatsapp size={40} color="#25D366" />,
    url: 'https://wa.me/+918957447491',
    name: 'WhatsApp',
  },
  {
    icon: <FaLinkedin size={40} color="#0A66C2" />,
    url: 'https://www.linkedin.com/in/akash-pandey-6960842b1/',
    name: 'LinkedIn',
  },
  {
    icon: <FaPhone size={36} color="#0A66C2" />,
    url: 'tel:+918957447491',
    name: 'Phone',
  },
];
  return (
    <>    <div className='svg flex justify-center text-center h-screen w-full fixe overflow-hidden z-[100] bg-[rgb(0,0,0)]'>
        <svg viewBox='0 0 800 600 ' preserveAspectRatio='xMidYMid slice'>
                <defs>
                    <mask id="vimask">
                       <rect className='width-100vw height-100vh fill-black'> </rect>
                       <g className='vi-mask-group'>
                        <text
                        x="50%"
                        y="50%"
                        fontSize="250"
                        textAnchor='middle'
                        fill='white'
                        dominantBaseline="middle"
                        fontFamily='Arial Black'
                        >
                       AP
                        </text>
                       </g>
                    </mask>
                </defs>

                    <image
                        width="100%"
                        height="100%"
                        href="./akash-cartoon-img.png"   
                        preserveAspectRatio='xMidyMid slice'
                        mask='url(#vimask)'

                        />
        </svg>
    </div>
     <div className='navbar  w-full bg-transparent'>
          

<nav class="  fixed top-0 w-full bg-transparent text-white z-50 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/logo2.jpg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-yellow-500">AKASH PANDEY</span>
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
         <button onClick={() => handleScroll("mainpage")} className="hover:underline text-yellow-500 text-xl px-1">Home</button>
        </li>
        <li>
            <button onClick={() => handleScroll("about")} className="hover:underline text-yellow-500 text-xl px-1">About</button>
        </li>
        <li>
            <button onClick={() => handleScroll("projects")} className="hover:underline text-yellow-500 text-xl px-1">Projects</button>
               {/* <a href="#" class="block py-2 px-3 md:p-0  rounded-sm md:bg-transparent text-yellow-500 md:dark:bg-transparent" aria-current="page">Home</a> */}
        </li>
        <li>
           <button onClick={() => handleScroll("contact")} className="hover:underline text-yellow-500 text-xl px-1">Contact</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
        {/* HOME SECTION */}
        <section id="mainpage" className="py-20 px-6 md:px-20 bg-black" data-aos="fade-up">
     <div className='relative main-div flex justify-center items-center  w-full h-screen ' style={{ backgroundColor: "rgb(59, 57, 57)"}}>
       
            
  
        
           <div className="absolute w-[150px] h-[150px] bg-yellow-500 rotate-45 top-1/3 left-[18%] transform -translate-y-1/2 z-0"></div> 
           <div className="absolute w-[150px] h-[150px] bg-yellow-500 rotate-45 top-1/3 right-[18%] transform -translate-y-1/2 z-0"></div>
      <div className="absolute w-[120px] h-[120px] bg-yellow-500 bottom-10 left-[10%] z-10"></div>
      <div className="absolute w-[120px] h-[120px] bg-yellow-500 bottom-10 right-[10%] z-10"></div>
       <img src="/akash2.png" className='absolute h-screen bottom-o left-50%' alt="" />
          <div className="absolute text-black text-[5vw] font-extrabold uppercase z-10 leading-none text-center sm:text-left">
          
        <h1 className="tracking-tight">I’M A FRONT-END </h1>
        <h1 className="mt-4 tracking-tight">
          DE<span className="text-transparent stroke-text">VELOP</span>ER
        </h1>
         <div className='text-[1vw] flex justify-center m-4'>
           <a href="/AkashPandey_frontenddeveloper_resume.pdf" download="AkashPandey_frontenddeveloper_resume.pdf">
          <button className="px-8 py-3 border-2 border-yellow-500 text-white rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300" >
            Download CV
          </button>
          </a>
          
         </div>
       
      </div>
         
        
        </div>
     </section>
     {/* ABOUT SECTION */}
       <section id="about" className="py-2 px-6 md:px-20 bg-black text-black" data-aos="fade-up">
            <div className="min-h-screen  " >
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-black-800 flex justify-center">My Services</h1>
      <p className="text-lg text-yellow-500 mb-10">
      “Proficient in front-end technologies such as React.js, TailwindCSS, and JavaScript, with a strong emphasis on building scalable, responsive user interfaces.”
      </p>

      <div className="grid gap-6 md:grid-cols-2 border-black hover:border-amber-300">
        {Skilled.map((skill, index) => (
          <div key={index} className="project-div  bg-gray-400 p-6 rounded-2xl shadow-md hover:shadow-lg  transition duration-300">
            <h3 className="text-2xl font-bold mb-2 ">{skill.title}</h3>
            <p className=" mb-4">{skill.description}</p>
           
          </div>
        ))}
      </div>
    </div>
  </div>
      </section>

      {/* PROJECT SECTION  */}
       <section id="projects" className="py-2 px-6 md:px-20 bg-black" data-aos="fade-up">
          <div className="min-h-screen p-2 " >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-black-800 flex justify-center">About Me</h1>
        <p className="text-lg text-white mb-10">
          Hello! I'm  a passionate Frontend Web Developer with skills in 
          <span className="font-semibold text-yellow-500"> HTML, CSS, JavaScript, ReactJS, and TailwindCSS</span>.
          I love building interactive, responsive web applications and always eager to learn more and grow in the tech industry.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-black-800 flex justify-center">Projects I've Built</h2>
        <div className="grid gap-6 md:grid-cols-2 border-black hover:border-amber-300">
          {projects.map((project, index) => (
            <div key={index} className="project-div  bg-gray-400 p-6 rounded-2xl shadow-md hover:shadow-lg  transition duration-300">
              <h3 className="text-2xl font-bold mb-2 ">{project.title}</h3>
              <p className=" mb-4">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-indigo-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
      </section>

      {/* CONTACT SECTION */}
       <section id="contact" className="py-20 px-6 md:px-20 bg-black" data-aos="fade-up">
       <div className="contact-container " >
        
           <div className=" ">

             <h1 className="contact-title flex justify-center text-amber-400">Connect with Me</h1>
               <div className="icon-wrapper">
     
                   {socialLinks.map((social, index) => (
                     <a
                      key={index}
                 href={social.url}
                     target="_blank"
                   rel="noopener noreferrer"
                   className="social-icon"
                     style={{ animationDelay: `${index * 0.2}s` }}
                  title={social.name}
                        > 
                     {social.icon}
          
                  </a>
                    ))}
                  </div> 
              </div>
    </div>
    </section>
  </>

  )
}

export default Hero
