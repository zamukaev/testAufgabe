import { FC, useEffect, useState } from "react";

import { instance } from "../../api/instance";
import { IPropertyDamage } from "../../interfaces/interface";

import List from "../../components/List/List";

import styles from "./Home.module.scss";

const Home: FC = () => {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [isError, setIsError] = useState<string | boolean>(false);
	const [data, setData] = useState<IPropertyDamage[] | null>(null);

	useEffect(() => {
		fetchData();
	}, [])

	const fetchData = async () => {
		try {
			setIsLoaded(true);
			const { data } = await instance.get("/propertydamages");
			setIsLoaded(false);
			setData(data.data);
		} catch (error: any) {
			setIsError(error.message);
		}
	}

	if (isError) {
		return <div className={styles.content}> error</div>
	}

	if (isLoaded) {
		return <div className={styles.content}>loading...</div>
	}

	return (
		<div className={styles.content}>
			<h1 className={styles.title}>Property damage</h1>
			<List data={data} />
		</div>
	);
}

export default Home;