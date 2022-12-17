import { FC, useEffect, useState } from "react";
import { instance } from "../../api/instance";
import List from "../../components/List/List";
import { IPropertyDamage } from "../../interfaces/interface";

import styles from "./Home.module.scss";

const Home: FC = () => {

	const [data, setData] = useState<IPropertyDamage[] | null>(null);

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const { data } = await instance.get("/propertydamages");
		setData(data.data);
	}
	return (
		<div className={styles.content}>
			<h1>Property damage</h1>
			<List data={data} />
		</div>
	);
}

export default Home;