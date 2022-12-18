import { FC } from "react";
import { Link } from "react-router-dom";
import { IPropertyDamage } from "../../../interfaces/interface";
import Invoice from "../InvoiceItem/InvoiceItem";

import styles from "./ListItem.module.scss";

interface ListItemProps {
	list: IPropertyDamage;
}

const ListItem: FC<ListItemProps> = ({ list }) => {
	return (
		<div className={styles.list}>
			<p>Damage date:  <span>{list.attributes.damage_date}</span></p>
			<p>Identification number: <span>{list.attributes.identification_number}</span></p>
			<p>Report date: <span>{list.attributes.report_date}</span></p>
			<Link to={`/propertydamages/${list.id}`}>more...</Link>
		</div>
	);
}

export default ListItem;