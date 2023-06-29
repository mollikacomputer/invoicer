import React from "react";

const Header = ({handlePrint}) => {
  return (
    <>
      <header className="flex flex-col xl:flex-row xl:justify-between items-center justify-center mb-5">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
            Invoicer Ranjit
          </h1>
        </div>
        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li>
              <button className="btn btn-print" onClick={handlePrint}>
                Print
              </button>
            </li>
            <li>
              <button className="btn btn-download">Download</button>
            </li>
            <li>
              <button className="btn btn-send"> Send</button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
