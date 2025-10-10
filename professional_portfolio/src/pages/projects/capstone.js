import React from "react";
import { Link } from "react-router-dom";

const Capstone = ({ theme }) => {
    return (
        <header className={`App-header ${theme}`}>
        <div 
            style={{
                justifyContent: "centre",
                alignItems: "centre",
                paddingLeft: "10%",
                paddingRight: "10%",}}
        >
            <h1>Capstone Project</h1>

            <h3>Artifacts and Code Review</h3>
            <div>
                <h4>Artifacts:</h4>

                <ul>
                    <li><Link to="MysteryGame">mystery_game.py</Link></li>
                    <li><Link to="AnimalShelter">AnimalShelter.py</Link></li>
                    <li><Link to="BinarySearchTree">BinarySearchTree.cpp</Link></li>
                </ul>
            </div>
            <div>
                <h4>Original Game Walkthrough</h4>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vbl_jmGceUQ?si=J8fpLPr48kf2Lq2u"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Code Review</h4>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5n3qKuL4pRI?si=drEryvd2VVZu__i0"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Finished Game Walkthrough</h4>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vQQe0R13zzo?si=_RqOO738fWj-nMQm" 
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>


            <h3>Professional Self-Assessment</h3>
            <p>I have been pleasantly surprised with the coursework during my time at SNHU. It's an interesting experience to see how much I can learn, almost without realizing it. 
               When I think about trying to tackle this project back when I made the original, I don't even know where I would begin. Now, while there were certainly struggles and hiccups, 
               I progressed through undaunted and finished with a product I am proud of. I think, perhaps, that is one of my greatest strengths, the ability to approach problems and solve 
               them in creative and efficient manners. Finding resources in order to inform my decision making has been a strength throughout my coursework.</p>
            <p>For instance, creating the map in the Gothic Swine application was a challenge. It took me many iterations and rough ideas in order to narrow it down to a grid map stored 
               in a pandas dataframe. Getting to work more with pandas is always a delight, so I'm glad I ended up with that. This versatility does not overshadow my ability to approach 
               software design in a structured, effective manner. I love object-oriented programming, and I welcome any chance to hone my design skills.</p>
            <p>I have seen my skills grow, and it lends a certain confidence in approaching a job hunt in the computer science field. Even my electives, gaming courses all, offered me a 
               unique chance to collaborate on a project with others, showcasing my ability to not only work on a team, but take the lead when needed. I enjoyed the courses on Agile and SCRUM. 
               While the ability to work with stakeholders and the like is limited in a school environment, I strongly believe in the principles and tried to approach each project's requirements 
               as I might a stakeholder and design applications to those requirements. Data structures and algorithms are not as solid in my toolbox, if I'm to be honest, but I have a solid grip 
               on the foundations and look forward to forward honing my ability to utilize them in a more technical way. Still, in the Gothic Swine project, I feel I was able to utilize 
               algorithms to accomplish my goals.</p>
    <p>
        Included beyond this page are three artifacts as follows:
        <ul>
            <li>
                mystery_game.py: The foundational code for my project, it's a game that deals with solving a murder in a gothic mansion. I used it to propose to my wife, and it holds a dear
                place in my heart. Furthermore, it was begging for a revamp, and this is a rock solid first attempt at that. Now, as I tie the bow on this application, I've welcomed home our first child.
                It's a very cool narrative, and I don't know if I could have picked another project. It highlighted my software development skills, as I converted it form a single file into a multi-faceted
                object-oriented program, and from a command line program to a bundled PyQt application.
            </li>
            <li>
                AnimalShelter.py: This was a short and simple wrapper for a MongoDB database. I almost discarded it and moved to a MEAN stack application with mongoose, but once I decided to stick with
                a Python application, it was a given to keep it. I was able to utilize it almost as is, with minor edits to the access variables and some tweaks to allow for more modular calls to database
                collections. The database I built and hosted on MongoDB Atlas and the MongoDB desktop application, so it was a pretty easy process.
            </li>
            <li>
                BinarySearchTree.cpp: I retained this artifact, even though it didn't really see use. It was meant to highlight my skills with algorithms and data structures, but I opted instead to
                utilize pandas and their powerful dataframes. Still, I can recognize some of the ideas that inspired my eventual adoption of pandas. The pandas dataframes served for aiding in database
                loading and creation, as well as storing information for the game map.
            </li>
        </ul>
    </p>

        </div>
        </header>
    );
};

export default Capstone;