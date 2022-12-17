import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { instance } from "../../api/instance";

import { IInvoice, IResidentialBuilding } from "../../interfaces/interface";

import styles from "./ResidentialBuilding.module.scss";


const ResidentialBuilding: FC = () => {
	const [data, setData] = useState<IResidentialBuilding | null>(null);
	const [invoice, setInvoice] = useState<IInvoice | null>(null);
	const { id } = useParams();
	useEffect(() => {
		fetchDataById();
		// fetchInvoiceById()
	}, [])

	const fetchDataById = async () => {
		const { data } = await instance.get(`/residentialbuildings/${id}`);
		setData(data.data);
	}

	console.log(data)

	return (
		<div className={styles.content}>

		</div>
	);
}

export default ResidentialBuilding;