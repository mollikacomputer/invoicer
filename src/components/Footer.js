import React from "react";

const Footer = ({name,email,phone,bankName, bankAccount, website}) => {
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold ml-1">Your Name :</span> {name}
          </li>
          <li>
            <span className="font-bold ml-1">Your Email :</span>
            {email}
          </li>
          <li>
            
            <span className="font-bold ml-1">Phone Nuber :</span>
            {phone}
          </li>
          <li>
            
            <span className="font-bold ml-1">Bank Name:</span> {bankName}
          </li>
          <li>
            
            <span className="font-bold ml-1">Acount Holer :</span> {name}
          </li>
          <li>
            
            <span className="font-bold ml-1">Bank About Number :</span> {bankAccount}
          </li>
          <li>
            
            <span className="font-bold ml-1">Website :</span>
            {website}
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
