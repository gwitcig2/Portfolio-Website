import '../index.css'
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function LandingPage() {
    return (
        <div className="flex flex-col gap-10 border-1 px-30 py-10 mx-10 my-10 [@media(min-width:930px)]:mx-10">
            <h1 className="text-center text-4xl font-[TASA Orbiter]">Gage Witcig's Portfolio</h1>
            <div className="flex flex-col [@media(min-width:930px)]:flex-row gap-20">
                <img
                    src="../../src/assets/ML6A4928.jpg"
                    alt="Picture of Gage Witcig at the University of Nebraska-Lincoln's Love Library"
                    className="h-180 w-120 object-contain order-2 [@media(min-width:930px)]:order-1"
                ></img>
                <div className="flex flex-col gap-20 order-2 justify-center items-center">
                    <div className="flex flex-col text-3xl gap-15 justify-center items-center">
                        <Link to="/about">
                            About Me
                        </Link>
                        <Link to="/projects">
                            My Projects
                        </Link>
                        <Link to="/resume">
                            My Resume
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-center text-xl font-[TASA Orbiter]">Socials:</p>
                        <div className="flex flex-row gap-10 justify-center items-center">
                            <a href="https://www.linkedin.com/in/gage-witcig-a96722373/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin className="w-15 h-15 hover:scale-110 transition-transform"/>
                            </a>
                            <a href="https://github.com/gwitcig2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub className="w-15 h-15 hover:scale-110 transition-transform"/>
                            </a>
                            <a href="mailto:gagewitcig@gmail.com" aria-label="Email">
                                <FaEnvelope className="w-15 h-15 hover:scale-110 transition-transform"/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LandingPage