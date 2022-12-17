import { FC } from "react";
import { Link } from "react-router-dom";
import { IPropertyDamage } from "../../../interfaces/interface";
import Invoice from "../InvoiceItem/InvoiceItem";

import styles from "./ListItem.module.scss";

interface ListItemProps {
	list: IPropertyDamage;
}

const ListItem: FC<ListItemProps> = ({ list }) => {
	const id: string = list.relationships.residential_building.data.id;
	console.log(list)
	return (
		<div className={styles.list}>
			<p>Damage date: {list.attributes.damage_date}</p>
			<p>Identification number: {list.attributes.identification_number}</p>
			<p>Report date:{list.attributes.report_date}</p>
			{list.relationships.invoices.data.map(invoice => <ul><Invoice invoice={invoice} /></ul>)}
			<p><Link to={`/residentialbuilding/${id}`}>{list.relationships.residential_building.data.type}</Link></p>
		</div >
	);
}

export default ListItem;