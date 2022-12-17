import { FC } from "react";
import { Link } from "react-router-dom";
import { IPropertyDamage } from "../../interfaces/interface";

import styles from "./ListItem.module.scss";

interface ListItemProps {
	list: IPropertyDamage;
}

const ListItem: FC<ListItemProps> = ({ list }) => {
	const id: string = list.relationships.residential_building.data.id;
	console.log(list)
	return (
		<ol type="1" className={styles.list}>
			<li>Damage date: {list.attributes.damage_date}</li>
			<li>Identification number: {list.attributes.identification_number}</li>
			<li>Report date:{list.attributes.report_date}</li>
			{/* <li>{list.relationships.invoices.}</li> */}
			<li><Link to={`/residentialbuilding/${id}`}>{list.relationships.residential_building.data.type}</Link></li>
		</ol>
	);
}

export default ListItem;