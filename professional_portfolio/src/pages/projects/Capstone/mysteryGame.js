import React from "react";

const MysteryGame = () => {
    return (
        <header className="App-header">
        <div 
            style={{
            justifyContent: "centre",
            alignItems: "centre",
            paddingLeft: "10%",
            paddingRight: "10%",}}
        >
            <h1>mystery_game.py</h1>
            <div>
            <h3>Artifact</h3>
                <p>mystery_game.py is my first programming project with SNHU, created in 2021. It is a short game that has a traversable map and win conditions. It is a single file, and a classless program</p>
                <h3>Justification</h3>
                <p>
                    This item, not only a fun and solid piece of code, but also holds a special place for me. I used it to propose to my wife, and as I finish it, we just brought our first child home from the hospital. 
                    For the time, I feel I came up with a streamlined and effective approach to making this game, while also adding in aesthetic elements that enhanced the appeal to a potential player. I’ve improved it 
                    by converting it to a class-based Object-Oriented program in Python. While this adds many lines to the code, and a lot more files, it makes it far more modular and reusable. My approach is to make 
                    it a more dynamic and random gameplay loop, while also creating a program with pieces that could be be easily repurposed for a similar but different project.
                </p>
                <h3>Course Objectives</h3>
                <p>
                    The main objective with this artifact was “Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer
                    solutions that deliver value and accomplish industry-specific goals (software engineering/design/database).” I feel I hit this well, and the algorithm/data structure objective will be incorporated,
                    at least in part, at a later date. There’s still plenty of work for the final capstone project, but I feel this is a great start.
                </p>
                <h3>Reflection</h3>
                <p>
                    I, admittedly, am not as great as I could be at planning applications prior to development. It’s a skill I constantly work on, but will need more experience to hone. As such, there were some
                    tweaks to design as I progressed. In some ways, this was a boon, while in others it was a problem. Still, I worked it through. I’ve done rough tests on the code, but there are a few parts that can’t
                    be properly tested until the system is more fully developed. I think this was likely the biggest part of the project though, and I think development should progress more smoothly from here.
                </p>
                <p>
                    While originally I planned for a C++ conversion with a full stack interface, I opted to keep it in Python. It was partly due to time constraints, but also partly preference. I think I ended up
                    with a compelling final applicaiton.
                </p>
            </div>
            <div>
                <h3>Source Code</h3>
                <p>The original source code on GitHub:</p>
                <a href="https://github.com/NevinsN/NevinsN.github.io/blob/main/ArtifactFiles/mystery_game.py">mystery_game.py on GitHub</a> <br />
                <p>The finished directory on GitHub, too big and too many files to link to:</p>
                <a href="https://github.com/NevinsN/NevinsN.github.io/tree/main/GothicSwinePython">GothicSwine directory on GitHub</a> <br />
            </div>

        </div>
        </header>
    );
};

export default MysteryGame;