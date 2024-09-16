import React from 'react'
import {useRef} from "react";
import homeCom from './Hero'
import resumeCom from './Resume'
import profile from './me.png'

const Navbar = () => {
    const home = useRef(null);
    const about = useRef(null);
    const resume = useRef(null);
    const scrollToSection = (elementRef) => {
        window.scrollTo ({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

  return (
    <div>
        <nav >
            <ul class="flex bg-violet-100 p-4">
                <li onClick = {() => scrollToSection(home)} class="link ml-6">
                    <a class="text-slate-500 hover:text-slate-400" href="#">Home</a>
                </li>
                <li onClick = {() => scrollToSection(about)} class="link ml-6">
                    <a class="text-slate-500 hover:text-slate-400" href="#">About</a>
                </li>
                <li onClick = {() => scrollToSection(resume)} class="link ml-6 text-slate-500 hover:text-slate-400">
                    Resume
                </li>
                
            </ul>
        </nav>
        
        <div ref ={home} className='bg-[url("https://cdn.pixabay.com/photo/2024/05/15/21/04/pink-clouds-8764532_1280.jpg")] mx-auto max-w-full h-96 w-full bg-center p-20 lg:bg-cover'>
            <div className='flex flex-col items-center justify-center bg-black/40 w-full pb-9'>
                <h1 className='text-slate-100 text-bold text-5xl mt-10'>
                    Vanshika Turkar
                </h1>
                <p className='mt-3 mb-3 text-slate-200 text-lg'>
                    Aspiring Software Engineer
                </p>
                <div>
                    
                </div>
            </div>
        </div>

        <div ref ={about} className='bg-red-100 p-20'>
            <div className='grid grid-col-2 gap-20'>
                <div className='ml-20 col-start-1'>
                        <img className='h-40 w-35 rounded-full' src={profile} alt="" />
                </div>
                <div className='col-start-2 flex'>
                <h2 className='resize-none text-lg text-center align-middle items-center'>Hello, my name is Vanshika Turkar and I am a computer science student at UCLA with interests in scientific computing, artifical inteligence, and software engineering. I value cross-discipline collaboration, community engagement, and creative problem-solving. As a founder, I know how critical communication and teamwork skills are to advance a project and emphasis collaboration in all my work. </h2>
                </div>
                    
            </div>
        </div>

        <div ref ={resume} className='grid grid-cols-3 gap-10 m-10 ml-15 mr-15'>
            <div className='flex flex-col bg-red-50 p-10'>
                <h1 className='text-center text-lg'>theCoderSchool Inc.</h1>
                <h2 className='text-center'>Code Coach, Substitute Coordinator</h2>
            </div>
                
            <div className='col-span-2'> 
            <ul className='list-disc'>
                <li>Conducted lessons for Java, Python, Object-Oriented Programming and AP Computer Science exam for 20 students, achieving high scores on standardized tests and classes</li>
                <li>Administered scheduling of classes and communicated with clients, ensuring smooth operations and optimization of profit</li>
                <li>Introduced new teaching strategies and resources and collaborated with team to improve curriculum and maintain a positive learning environment</li>
                </ul>
                <br/>
            </div>

            <div className='flex flex-col bg-red-50 p-10'>
                <h1 className='text-center text-lg'>WIFIRE Lab, UC San Diego Supercomputer Center   </h1>
                <h2 className='text-center'>Artificial Intelligence and Fire Research Intern</h2>
            </div>
                
            <div className='col-span-2'>
                <ul className='list-disc'>
                <li>Developed expertise in Cloud Compare for classifying vegetation data and processed raw data, contributing to the training of a deep learning model</li>
                <li>Engineered a workflow to visualize complex data on Unreal Engine, creating an immersive Virtual Reality interface</li>
                <li>Contributed to research paper on AI for fuel classification, which was accepted for presentation at the IEEE e-Science conference held from October 6 - 13, 2023</li>
                </ul>
                <br/>
            </div>

            <div className='flex flex-col bg-red-50 p-10'>
                <h1 className='text-center text-lg'>Yoga Bharati and Pragya Yog Alliance</h1>
                <h2 className='text-center'>Technology Intern, Yoga Researcher & Instructor</h2>
            </div>
                
            <div className='col-span-2'>
                <ul className='list-disc'>
                <li>Conceptualized AI-based computer vision, Kinect, and electromyography technology for yoga pose detection and authored a comprehensive literature review</li>
                <li>Programming website and utilizing React to create application that curates tailored yoga workout plans</li>
                <li>Acheived certification for 300 offical yoga teacher training</li>
                </ul>
                <br/>
            </div>

            
            <div className='flex flex-col bg-red-50 p-10'>
                <h1 className='text-center text-lg'>ArtStem Inc   </h1>
                <h2 className='text-center'> Founder and President</h2>
            </div>
                
            <div className='col-span-2'>
                <ul className='list-disc'>
                <li>Educated over 2,000 students from 15 different countries, fostering a global understanding of the integration between interdisciplinary approaches to humanities and STEM</li>
                <li>Initiated and directed 70+ workshops on STEM topics: programming, physics, engineering, and circuits</li>
                </ul>
                <br/>
            </div>

            
        <div className='flex flex-col bg-red-50 p-10'>
            <h1 className='text-center text-lg'>Girls Who Code </h1>
            <h2 className='text-center'>Vice President</h2>
        </div>
        <div className='col-span-2'>
            <ul className='list-disc'>
            <li>Facilitated coding workshops and mentored female and non-binary identifying participants to enhance their technical skills in web development, Python, and data science</li>
            <li>Designed an advisory webpage with HTML, CSS, and Javascript to advocate for ocean pollution</li>
            </ul>
            <br/>
        </div>
    </div>
    </div>
  )
}

export default Navbar