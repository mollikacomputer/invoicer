
function App() {
  const handlePrint = () =>{
    window.print();
  }
  return (
    <>
    <main>
      {/* header */}
      <header>
        <div>
            <h2>Invoicer</h2>
        </div>
        <div>
          <ul>
            <li> <button onClick={handlePrint} >Print </button> </li>
            <li>Download</li>
            <li> Send </li>
          </ul>
        </div>
      </header>
      {/* End of Header  */}
      {/* Your Details  */}
      <section>
        <h2>Ranjit Kumar Mandal</h2>
        <p>Your Address</p>

      </section>
      {/* End of Your Deails  */}

      {/* Client Details  */}
      <section>
      <h1> Client Name </h1>
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
    </main>
    </>
  );
}

export default App;
