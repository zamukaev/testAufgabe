import { FC, useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { instance } from "../../api/instance";
import { IInvoice } from "../../interfaces/interface";

const Invoice: FC = () => {
	const [invoice, setInvoice] = useState<IInvoice | null>(null);

	const { id } = useParams();

	useEffect(() => {
		fetchInvoiceById()
	}, [])
	const fetchInvoiceById = async () => {
		const { data } = await instance.get(`/invoices/${id}`);
		setInvoice(data.data);
	}
	console.log(invoice?.relationships.property_damage.data.id)
	return (
		<div>
			<h1>Invoices</h1>
			<p>Invoice date: <span> {invoice?.attributes.invoice_date}</span></p>
			<p>Invoice number: <span>{invoice?.attributes.invoice_number}</span></p>
			<p>Invoice amount: <span>{invoice?.attributes.invoice_amount}</span>$</p>
			<p>Reimbursed: <span>{invoice?.attributes.reimbursed ? 'Yes' : 'No'}</span></p>
		</div>
	);
}

export default Invoice;