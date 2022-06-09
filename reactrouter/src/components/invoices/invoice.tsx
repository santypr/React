import { useParams } from "react-router-dom";
import { getInvoice } from "../../data/invoices";
import { IInvoice } from "../../models/invoice";

export default function Invoice() {
  let params = useParams() as any;
  let invoice = getInvoice(parseInt(params.invoiceId, 10)) as IInvoice;

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}