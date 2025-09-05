import '../index.css'

function AboutMe() {

    const bday = new Date('June 10, 2003');
    const now = new Date();

    return (
        <div className="flex flex-col gap-10 px-30 py-10 text-white max-w-350">
            <h1 className="text-center text-6xl">About Me</h1>
            <div className="flex flex-row gap-20">
                <img
                    src="../../src/assets/ML6A5141.jpg"
                    alt="Gage Witcig in front of Memorial Stadium at University of Nebraska-Lincoln"
                    className="h-180 w-120 object-cover"
                >
                </img>
                <div className="flex flex-col gap-13 text-lg px-5 max-h-180 overflow-y-auto">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl text-center">Background</h2>
                        <p>
                            Hey there! The name's Gage. I'm currently {Math.abs(bday.getFullYear() - now.getFullYear())} years old,
                            and I was born and raised in Lincoln, Nebraska.
                        </p>
                        <p>
                            I pride myself on being a creative mind that values the well-being of my peers above all else.
                            With each day, I work to become a better artist, a better developer, and a better person. That way,
                            the inevitable grief of this world can be countered with undying resolve.
                        </p>
                        <p>
                            Additionally, I am a proud alumni of the University of Nebraska-Lincoln, where I earned my Bachelor of Science in Computer Science
                            on May 17th, 2025. I am also honored to have been a Teaching Assistant for the University's Computer Science I (CSCE 155E) course,
                            where I helped students learn to embrace the hardships of Computer Science rather than be despaired by them.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl text-center">Why I Code</h2>
                        <p>
                            For me, it all started with video games. I truly believe that they are the best demonstrations of passion, practicality, and creativity
                            you can possibly ask for. Perhaps I'm a bit biased in saying that, since they have been a big part of my life since childhood.
                            But when story-rich, artistic masterpieces like OMORI and Red Dead Redemption 2 exist, it's hard not to be inspired by the impact
                            these video games had on me and millions of others out there. I hope to turn this inspiration of mine into a reality one day by
                            founding my own indie game development studio. That way, I can fully commit to creating an iconic, story-rich video game alongside
                            my closest friends.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-center text-3xl">Post-Graduation</h2>
                        <p>
                            Since graduating, I've been on a mission to develop software that exemplifies passion, practicality, and creativity.
                            To prove this, I have been developing a Japanese Practice Website that leverages AI in order to give users a
                            customizable, efficient, and rewarding resource that is tailored to keep your Japanese reading and listening comprehension sharp.
                            It will be free of charge, and is built for folks who best learn Japanese via independent practice.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-center text-3xl">Hobbies</h1>
                        <p>
                            Outside of software development, I love playing video games, listening to music, driving, and watching sports with family
                            and friends. My favorite musicians are Danny Brown, JPEGMAFIA, and hundreds of others (believe me). And my favorite sports teams
                            are the Los Angeles Rams for the NFL and, of course, the Nebraska Cornhuskers for all college sports.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe