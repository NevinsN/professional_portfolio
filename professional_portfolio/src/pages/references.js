import React from "react";

const References = ({ theme }) => {
    return (
        <header className={`App-header ${theme}`}>
        <div className="App-header_titleSubpage">
            <h1 style={{lineHeight: "0em"}}>
                References
            </h1>
            <p style={{
              fontSize: "17px",
              width: "50%",
          }}>
              Rodd Rapp - Ecclesiastical Leader
              <ul>
                <li>2085899437</li>
                <li>RappR@d93.k12.id.us</li>
              </ul>
          </p>
          <p style={{
              fontSize: "17px",
              width: "50%",
          }}>
              Allycia Heath - Assistant Manger
              <ul>
                <li>2087570704</li>
                <li>allycia.heath@gmail.com</li>
              </ul>
          </p>
          <p style={{
              fontSize: "17px",
              width: "50%",
          }}>
              Michael Berg - Manger
              <ul>
                <li>2085108486</li>
                <li>mrberg84@gmail.com</li>
              </ul>
          </p>
        </div>
        </header>
    );
};

export default References;