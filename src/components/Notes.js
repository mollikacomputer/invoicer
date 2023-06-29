import React from "react";

const Notes = ({notes}) => {
  return (
    <>
      <section className="mb-5">
        {/* TextArea  */}
        <p> {notes} </p>
        {/*End of textArea  */}
      </section>
    </>
  );
};

export default Notes;
