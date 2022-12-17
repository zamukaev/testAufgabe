import { FC } from 'react';

import { IPropertyDamage } from '../../interfaces/interface';
import ListItem from '../ListItem/ListItem';
interface ListProps {
	data: IPropertyDamage[] | null;
}

const List: FC<ListProps> = ({ data }) => {

	return (
		<div >
			{data?.map(list => <ListItem key={list.id} list={list} />)}
		</div>
	);
}

export default List;