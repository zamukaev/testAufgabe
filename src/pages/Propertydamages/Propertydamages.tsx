import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { instance } from "../../api/instance";
import InvoiceItem from "../../components/List/InvoiceItem/InvoiceItem";
import { IPropertyDamage } from "../../interfaces/interface";

import styles from "./Propertydamages.module.scss";

const Propertydamages: FC = () => {
	const [data, setData] = useState<IPropertyDamage | null>(null);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [isError, setIsError] = useState<string | boolean>(false);

	const { id } = useParams();
	const residenId = data?.relationships.residential_building.data.id
	useEffect(() => {
		fetchDamagesById();
	}, []);

	const fetchDamagesById = async () => {
		try {
			setIsLoaded(true);
			const { data } = await instance.get(`/propertydamages/${id}`);
			setIsLoaded(false)
			setData(data.data);
		} catch (error: any) {
			setIsError(error.message)
		}
	}
	console.log(data?.relationships.invoices.data)
	if (isError) {
		return <div className={styles.propertydamages}>Error</div>
	}
	if (isLoaded) {
		return <div className={styles.propertydamages}>loading...</div>
	}
	return (
		<div className={styles.propertydamages}>
			<div>
				<Link to="/">back...</Link>
			</div>
			<p>Damage date: <span>{data?.attributes.damage_date}</span></p>
			<p>Identification number:  <span>{data?.attributes.identification_number}</span></p>
			<p>Report date: <span>{data?.attributes.report_date}</span></p>
			{data?.relationships.invoices.data.map(invoice => <ul key={invoice.id} className={styles.list}><InvoiceItem invoice={invoice} /></ul>)}
			<p><Link className={styles.link} to={`/residentialbuilding/${residenId}`}>{data?.relationships.residential_building.data.type}</Link></p>
		</div>
	);
}

export default Propertydamages;