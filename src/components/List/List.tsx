import { FC } from "react";

import { IPropertyDamage } from "../../interfaces/interface";
import ListItem from "./ListItem/ListItem";

import styles from "./List.module.scss";

interface ListProps {
	data: IPropertyDamage[] | null;
}

const List: FC<ListProps> = ({ data }) => {

	return (
		<div className={styles.list}>
			{data?.map(list => <ListItem key={list.id} list={list} />)}
		</div>
	);
}

export default List;