import { useState, useRef } from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";
import ReactToPrint from 'react-to-print';

function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  

  const componentRef = useRef();
  const handlePrint = () => {
    window.print();
  };

    
  return (
    <>
      <main className="p-5 m-5 md:max-w-xl md:mx-auto lg:max-w-2xl lg:mx-auto xl:max-w-4xl xl:mx-auto bg-white rounded shadow">

        {showInvoice ? (
          <>
          <ReactToPrint 
          trigger={()=> 
          <button
          className="bg-blue-500 mb-10 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          > Download / Print</button>
          } 
          content={()=> componentRef.current} 
          />
          <div ref={componentRef} className="m-10" >
            <Header handlePrint={handlePrint} />

            <MainDetails name={name} address={address} />

            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />

            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />

            <Notes notes={notes} />

            <Table 
              description={description}
              setDescription={setDescription}
              quantity={quantity}
              setQuantity = {setQuantity}
              price={price}
              setPrice= {setPrice}
              amount={amount}
              setAmount = {setAmount}
              list={list}
              total={total}
              setTotal={setTotal}
              
              />

            <Footer
              name={name}
              address={address}
              email={email}
              phone={phone}
              website={website}
              bankName={bankName}
              bankAccount={bankAccount}
            />
            
          </div>
          <button
              onClick={() => setShowInvoice(false)}
              className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Edit Information
            </button>
          </>
          
        ) : (
          <>
            {/* name, address, email, phone, bank name, bank account number, website, client name
          client address, invoice number, invoice date, due date, notes */}
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                <label htmlFor="name">Enter Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                  
                <label htmlFor="address">Your Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your address"
                  autoComplete="off"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                </div>
              </article>
              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                <label htmlFor="email">Enter Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
                </div>
                <div className="flex flex-col">
                <label htmlFor="website">Enter Your Website </label>
              <input
                type="text"
                name="website"
                id="website"
                placeholder="Bank Account Number"
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
                </div>
              <div className="flex flex-col">
                
              <label htmlFor="phone">Enter Your Phone</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Your phone"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              </div>
              </article>
              
              <article className="md:grid grid-cols-2 gap-10 md:mb-16">
                <div className="flex flex-col">
                  
              <label htmlFor="bankname">Enter Your Bank Name</label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Your bankname"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
                </div>
                <div className="flex flex-col">
                  
              <label htmlFor="bankAccount">Enter Your Bank Account </label>
              <input
                type="text"
                name="bankAccount"
                id="bankAccount"
                placeholder="Bank Account Number"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />
                </div>
              </article>
              
              <article className="md:grid grid-cols-2 gap-10">
                
              <div className="flex flex-col">
              <label htmlFor="clientName">Client Name </label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Bank Client Name"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
              </div>
              <div className="flex flex-col">
              <label htmlFor="clientAddress">Client Address </label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Bank Client Address"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />
              </div>
              </article>
              <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
              <label htmlFor="invoiceNumber">Invoice number </label>
              <input
                type="number"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="invoice number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
              </div>
              <div className="flex flex-col">

              <label htmlFor="invoiceDate"> Invoice date </label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="invoice Date"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
              </div>
              <div className="flex flex-col">
              <label htmlFor="dueDate"> Due date </label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Due Date"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              </div>
              </article>
              
              <TableForm 
              description={description}
              setDescription={setDescription}
              quantity={quantity}
              setQuantity={setQuantity}
              price={price}
              setPrice={setPrice}
              amount={amount}
              setAmount={setAmount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
              />

              <label htmlFor="notes"> Notes </label>
              
              <textarea
                className="resize-y rounded-md mb-5 "
                cols="30"
                rows="10"
                type="text"
                name="notes"
                id="notes"
                placeholder="Notes"
                autoComplete="off"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />

              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
