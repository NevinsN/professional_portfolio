import React from "react";

const AnimalShelter = () => {
    return (
        <header className="App-header">
        <div 
            style={{
            justifyContent: "centre",
            alignItems: "centre",
            paddingLeft: "10%",
            paddingRight: "10%",}}
        >
            <h1>AnimalShelter.py</h1>
            <div>
            <p>The original artifact is a file called AnimalShelter.py. It was created in December of 2023 for CS 340, Client Server Relations. It provided a CRUD shell for a MongoDB database. As I more closely 
            considered database implementation, considered doing MEAN stack approach, and build and maintain the database through mongoose. Therefore, the full stack development travlr is more likely to be the 
            artifact I would use. As I experimented with that, I decided the game was best served sticking with Python, and I reverted to this artifact. In fact, it could be used with very little modification.
            It was a robust little piece of code.</p>
            <h3>Justification</h3>
            <p>
                MongoDB and pyMongo is quick, easy, and efficient. It served me very well, and made it easy to implement a funcitoning online databse to keep the game assets updatable. This code here was almost 
                exactly what I needed to build a database shell. Once the MongoDB database was in place, I popped this in, changed the system defaults and made them a bit more modular, and away I went. I call to
                the database a good deal in the initialization stages, and this code helped temendously.
            </p>
            <h3>Course Objectives</h3>
            <p>
                I feel like I did achieve my coverage plans, even though I went back and forth on how I would approach database integration. MEAN stack certainly still has potential, and maybe one day I'll build a
                version on it, but for now this worked beautifully. This ticked the box for Algorithms and Data Structures as well as Databases.
            </p>
            <h3>Reflection</h3>
            <p>
                I certainly couldn't make my mind up here. Still, I ended up with the right call for this application. I am much more familiar with working with MongoDB, and I really think that will be a humongous 
                benefit to my career going forward.
            </p>
        </div>
        <div>
            <h3>Source Code</h3>
            <p>The original source code on GitHub:</p>
            <a href="https://github.com/NevinsN/NevinsN.github.io/blob/main/ArtifactFiles/AnimalShelter.py">AnimalShelter.py on GitHub</a> <br />
            <p>The finished directory on GitHub, too big and too many files to link to:</p>
            <a href="https://github.com/NevinsN/NevinsN.github.io/blob/main/GothicSwinePython/Database/DBAccess.py">DBAccess.py on GitHub</a> <br />
        </div>

        </div>
        </header>
    );
};

export default AnimalShelter;