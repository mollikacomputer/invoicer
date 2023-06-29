
function App() {
  const handlePrint = () =>{
    window.print();
  }
  return (
    <>
    <main className="p-5 m-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
      {/* header */}
      <header className="flex flex-col xl:flex-row xl:justify-between items-center justify-center mb-5">
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
        <h2 className="text-xl uppercase">Ranjit Kumar Mandal</h2>
        <p>Your Address</p>

      </section>
      {/* End of Your Deails  */}

      {/* Client Details  */}
      <section className="m6-5">
      <h1 className="text-xl uppercase"> Client Name </h1>
      <p>Client's address</p>
      </section>  
      {/*End of  client details  */}

      {/* Dates  */}
      <article className="my-5 flex items-end justify-end">
        <ul>
          <li> <span className="font-bold">Invoice Number :</span> 13241 </li>
          <li><span className="font-bold">Invoice Date :</span> 12/12/12 </li>
          <li> <span className="font-bold">Due Date :</span> 14/14/14 </li>
        </ul>
      </article>
      {/* End of Dates  */}

      {/* Table  */}
      <div className="my-5">This is table</div>
      {/* End of table  */}

      {/* Notes  */}
  <section className="mb-5">
    {/* TextArea  */}
    <p>Notes to client......</p>
    {/*End of textArea  */}
  </section>
      {/* End of notes  */}

      {/* Footer  */}
<footer>
  <ul className="flex flex-wrap items-center justify-center">
    <li><span className="font-bold ml-1">Your Name :</span> Ranjit Kumar Mandal </li>
    <li><span className="font-bold ml-1">Your Email :</span> ranji2t@gmail.com</li>
    <li> <span className="font-bold ml-1">Phone Nuber :</span> +8801300-241001 </li>
    <li> <span className="font-bold ml-1">Bank Name:</span> AB </li>
    <li> <span className="font-bold ml-1">Acount Holer :</span> Ranjit </li>
    <li> <span className="font-bold ml-1">Bank About Number :</span> 923 332 9104 </li>
    <li> <span className="font-bold ml-1">Website :</span> http://ranjitdev.com</li>
  </ul>
</footer>
      {/* End of footer  */}
    </main>
    </>
  );
}

export default App;
