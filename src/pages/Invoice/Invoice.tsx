import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { instance } from "../../api/instance";
import { IInvoice } from "../../interfaces/interface";

import styles from "./Invoice.module.scss";

const Invoice: FC = () => {
	const [isLoading, setIsLoadig] = useState<boolean>(false);
	const [isError, setIsError] = useState<string | boolean>(false);
	const [invoice, setInvoice] = useState<IInvoice | null>(null);

	const { id } = useParams();

	useEffect(() => {
		fetchInvoiceById();
	}, []);

	const fetchInvoiceById = async () => {
		try {
			setIsLoadig(true);
			const { data } = await instance.get(`/invoices/${id}`);
			setIsLoadig(false);
			setInvoice(data.data);
		} catch (error: any) {
			setIsError(error.message);
		}
	}

	if (isError) {
		return <div className={styles.content}>error</div>
	}

	if (isLoading) {
		return <div className={styles.content}>loading...</div>
	}

	return (
		<div className={styles.content}>
			<div>
				<Link to={`/propertydamages/${invoice?.relationships.property_damage.data.id}`}>back to property damage</Link>
			</div>
			<h1>Invoice</h1>
			<p>Invoice date: <span> {invoice?.attributes.invoice_date}</span></p>
			<p>Invoice number: <span>{invoice?.attributes.invoice_number}</span></p>
			<p>Invoice amount: <span>{invoice?.attributes.invoice_amount}</span>$</p>
			<p>Reimbursed: <span>{invoice?.attributes.reimbursed ? 'Yes' : 'No'}</span></p>
		</div>
	);
}

export default Invoice;