import { FC } from "react";

import { Link } from "react-router-dom";

import { IPropertyDamage_invoices_data } from "../../../interfaces/interface";

interface InvoiceProps {
	invoice: IPropertyDamage_invoices_data;
}

const InvoiceItem: FC<InvoiceProps> = ({ invoice }) => {

	return (
		<li><Link to={`/invoice/${invoice.id}`}>{invoice.type}</Link></li>
	);
}

export default InvoiceItem;