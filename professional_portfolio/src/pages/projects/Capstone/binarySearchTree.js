import React from "react";

const BinarySearchTree = () => {
    return (
        <header className="App-header">
        <div 
            style={{
            justifyContent: "centre",
            alignItems: "centre",
            paddingLeft: "10%",
            paddingRight: "10%",}}
        >
            <h1>BinarySearchTree.cpp</h1>
            <div>
            <h3>Artifact</h3>
            <p>The artifact is a file called BinarySearchTree.cpp. It was created in April of 2023 for CS 300. It’s a file to handle and showcase a binary search tree in action. These principles were later 
            integrated in the final project.</p>
            <h3>Justification</h3>
            <p>
                A binary search tree, or rather multiple trees, will be good for the item database. I will have a long list of various types of items, colors, and designs and will create various permutations 
                on these combinations that can be stored and accessed in BSTs. These can then be easily accessed via an index to pull random items to give to randomly generated characters. <br />
                This artifact was a cluttered file that included struct and class definitions with the main() function, as well as other supporting functions. This week I have cleaned up, simplified, and built 
                a proper BST class following better practices and standards.  Algorithms are used to traverse the tree, and the data structure uses structs in order to organize the tree structure.
            </p>
            <h3>Course Objectives</h3>
            <p>
                I met part of my planned objectives. I wasn’t able to completely build a test shell, and in conjunction with this part of the project, I wanted to finish the CSV/database parsing to feed in
                dynamic item files and create ever-changeable item combinations. This will be finished soon, and this artifact properly implemented. As for my overall plans, I feel they are generally unchanged.
                I originally looked at a vector sorting algorithm, which may still have a place in the program, but decided on a BST instead for this part. Obviously I adapted my original assessment. Still, ideas
                from this document inspired a bit of my thinking later on down the line. It helped in considering how to showcase Algorithms and Data Structures.
            </p>
            <h3>Reflection</h3>
            <p>
                One of the more interesting things I noted was that I was able to read and discern the functioning of the artifact much better now than I was able to last year during the course. Much of the code 
                and structure was supplied, and I was less able to really follow how some of the aspects worked. I can now follow the logic and code quite well. It’s a good thing to see. <br />
                That said, there was a challenge trying to adapt code to a style that is more my own. I didn’t want to just copy and paste, so I’m trying to streamline and modify to better fit my ideas of modularity 
                and style without breaking the code. It’s a fun challenge to be sure.
            </p>
            <p>
                Fun though it was, I found in the end it was not for my application. Pandas DataFrames served me much better in handling the date orginization that I needed.
            </p>
        </div>
        <div>
            <h3>Source Code</h3>
            <p>The original source code on GitHub:</p>
            <a href="https://github.com/NevinsN/NevinsN.github.io/blob/main/ArtifactFiles/BinarySearchTree.cpp">BinarySearchTree.cpp</a> <br />
            <p>The finished directory on GitHub, too big and too many files to link to:</p>
            <a href="https://github.com/NevinsN/NevinsN.github.io/tree/main/GothicSwinePython">GothicSwine directory on GitHub</a> <br />
        </div>
        </div>
        </header>
    );
};

export default BinarySearchTree;