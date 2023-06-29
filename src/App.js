
function App() {
  const handlePrint = () =>{
    window.print();
  }
  return (
    <>
    <main className="p-5 m-5 lg:max-w-xl lg:mx-auto bg-white rounded shadow">
      {/* header */}
      <header className="flex flex-col items-center justify-center mb-5">
        <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoicer Ranjit</h1>
        </div>
        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li> <button className="btn btn-print" onClick={handlePrint} >Print </button> </li>
            <li> <button className="btn btn-download">Download</button> </li>
            <li> <button className="btn btn-send" > Send</button>  </li>
          </ul>
        </div>
      </header>
      {/* End of Header  */}

      {/* Your Details  */}
      <section className="flex flex-col items-end justify-end " >
        <h2 className="text-3xl uppercase">Ranjit Kumar Mandal</h2>
        <p>Your Address</p>

      </section>
      {/* End of Your Deails  */}

      {/* Client Details  */}
      <section>
      <h1 className="text-3xl uppercase"> Client Name </h1>
      <p>Client's address</p>
      </section>  
      {/*End of  client details  */}

      {/* Dates  */}
      <article>
        <ul>
          <li>Invoice Number : </li>
          <li> Invoice Date :</li>
          <li>Due Date : </li>
        </ul>
      </article>
      {/* End of Dates  */}

      {/* Table  */}

      {/* End of table  */}

      {/* Notes  */}
  <section>
    {/* TextArea  */}
    <p>Notes to client......</p>
    {/*End of textArea  */}
  </section>
      {/* End of notes  */}

      {/* Footer  */}
<footer>
  <ul>
    <li>Your Name</li>
    <li>Your Email</li>
    <li> Phone Nuber</li>
    <li>Bank</li>
    <li>Acount Holer</li>
    <li>Bank About Number</li>
  </ul>
</footer>
      {/* End of footer  */}
    </main>
    </>
  );
}

export default App;
