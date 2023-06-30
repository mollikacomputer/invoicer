import React from "react";

const Notes = ({notes}) => {
  return (
    <>
      <section className="mb-5">
        {/* TextArea  */}
        <p className="lg:w-1/2 text-justify"> {notes} </p>
        {/*End of textArea  */}
      </section>
    </>
  );
};

export default Notes;
