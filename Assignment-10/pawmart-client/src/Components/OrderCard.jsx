import React  from "react";
import { Download, SquarePen, Trash } from 'lucide-react';
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";


const OrderCard = ({ list }) => {
  
const handleDownload = () => {
  const doc = new jsPDF({
    unit: "pt", // use points for better spacing control
    format: "a4",
  });

  // ===== HEADER =====
  doc.setFillColor(240, 240, 240);
  doc.rect(0, 0, 595, 70, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("PawMart", 40, 45);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text("Order Invoice", 460, 25);
  doc.text(`Order ID: ${list?._id || "12345"}`, 460, 40);
  doc.text(`Date: ${list?.date || "Today"}`, 460, 55);

  // ===== CUSTOMER DETAILS =====
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Customer Details", 40, 110);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  doc.text(`Name: ${list?.buyerName}`, 40, 135);
  doc.text(`Phone: ${list?.phone}`, 40, 155);
  doc.text(`Address: ${list?.address}`, 40, 175);

  // ===== ORDER SUMMARY TABLE =====
  autoTable(doc, {
    startY: 210,
    margin: { left: 40, right: 40 }, // ← more padding
    head: [["Product", "Price", "Qty", "Total"]],
    body: [
      [
        list?.productName,
        `${list?.price} TK`,
        list?.quantity,
        `${list?.price } TK`,
      ],
    ],
    styles: {
      fontSize: 12,
      cellPadding: 8, // ← extra padding inside table
    },
    headStyles: {
         fillColor: [78, 45, 105],
      textColor: 255,
      halign: "center",
    },
  });

  // ===== TOTALS =====
  const total = list?.price ;
  const finalY = doc.lastAutoTable.finalY + 20;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Payment Summary", 40, finalY);

  autoTable(doc, {
    startY: finalY + 10,
    margin: { left: 40, right: 40 },
    head: [["Label", "Amount"]],
    body: [
      ["Subtotal", `${total} TK`],
      ["Shipping", "60 TK"],
      ["Grand Total", `${total + 60} TK`],
    ],
    styles: {
      fontSize: 12,
      cellPadding: 8,
    },
    headStyles: {
         fillColor: [78, 45, 105],
      textColor: 255,
    },
    columnStyles: { 1: { halign: "right" } },
  });

  // ===== FOOTER =====
  const height = doc.internal.pageSize.height;

  doc.setFont("helvetica", "italic");
  doc.setFontSize(11);
  doc.text(
    "Thank you for shopping with PawMart!",
    40,
    height - 40
  );

  doc.setFont("helvetica", "normal");
  doc.text("PawMart.com • support@pawmart.com", 40, height - 25);

  // ===== OPEN PDF IN NEW TAB =====
  const pdfURL = doc.output("bloburl");
  window.open(pdfURL, "_blank");
};




  return (
    <tr>
    
      <td>{list?.productName}</td>
      <td >{list?.buyerName}</td>
      <td>{list?.price}</td>
      <td>{list?.quantity}</td>
      <td>{list?.address}</td>
      <td>{list?.date}</td>
      <td>{list?.phone}</td>
      <th className="flex gap-5 justify-center text-primary">

        <button onClick={handleDownload} className="cursor-pointer"><Download></Download></button>
      </th>
    </tr>
  );
};

export default OrderCard;
