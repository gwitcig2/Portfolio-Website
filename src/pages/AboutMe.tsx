import '../index.css'



function AboutMe() {

    const bday = new Date('June 10, 2003');
    const now = new Date();

    return (
        <div>
            <h1>About Me</h1>
            <p>
                Hey there! The name's Gage. I'm currently {Math.abs(bday.getFullYear() - now.getFullYear())} years old, and I was born and raised in Lincoln, Nebraska.

                I received my Bachelor of Science in Computer Science from the University of Nebraska-Lincoln in May of 2025. And since then, I've been on a mission to develop software that exemplifies passion, practicality, and creativity.

                To me, video games are the best demonstrations of those three traits you can possibly ask for. They have been a big part of my life ever since my childhood, so
                perhaps I'm a bit biased in saying that. But when story-rich, artistic masterpieces like OMORI and Red Dead Redemption 2 exist, it's hard not to be inspired by the impact
                these video games had on me and millions of others out there. I hope to turn this inspiration of mine into a reality one day by founding my own indie game development studio. That way, I can fully commit
                to creating an iconic, story-rich video game alongside my closest friends.

                In the meantime, I've been building up my web development skills by creating an AI-powered Japanese Practice Website. I loved learning Japanese in college, and I wanted to continue learning about it outside of the classroom.
                But after trying Duolingo and not being very satisfied with it, I figured now was a great time to leverage my coding skills, along with the teaching skills I earned as a Teaching Assistant, to build a website that's better tailored
                to help me memorize new vocabulary and kanji. I hope to have this Japanese Practice Website completed and deployed to Vercel by the end of September.

                And outside of software development, my favorite hobbies are playing video games (of course), learning Japanese, listening to music, watching sports, and driving! My favorite musicians are Danny Brown, JPEGMAFIA, Tyler The Creator, and hundreds of others.
                As for my favorite sports teams, the Los Angeles Rams are my NFL team, and of course, the Nebraska Cornhuskers are my college sports team all the way.

                Thank you for reading this far! Unless you skimmed to the very bottom, I guess. But either way, if you'd like to connect, message me on LinkedIn or shoot me an email! :D
            </p>
        </div>
    );
}

export default AboutMe