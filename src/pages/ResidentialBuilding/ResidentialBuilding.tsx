import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { instance } from "../../api/instance";

import { IResidentialBuilding } from "../../interfaces/interface";

import styles from "./ResidentialBuilding.module.scss";


const ResidentialBuilding: FC = () => {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [isError, setIsError] = useState<string | boolean>(false);
	const [data, setData] = useState<IResidentialBuilding | null>(null);
	const { id } = useParams();

	useEffect(() => {
		fetchDataById();

	}, [])

	const fetchDataById = async () => {
		try {
			setIsLoaded(true);
			const { data } = await instance.get(`/residentialbuildings/${id}`);
			setIsLoaded(false);
			setData(data.data);
		} catch (error: any) {
			setIsError(error.message);
		}
	}
	if (isError) {
		return <div className={styles.content}>error</div>
	}

	if (isLoaded) {
		return <div className={styles.content}>loading...</div>
	}

	console.log(data)
	return (
		<div className={styles.content}>
			<h1>Residential building</h1>
			<p>Full adsress: <span>{data?.attributes.address_full}</span> </p>
			<p>Country: <span>{data?.attributes.country}</span></p>
			<p>City: <span>{data?.attributes.city}</span></p>
			<p>Street name: <span>{data?.attributes.street_name}</span></p>
			<p>Building number: <span>{data?.attributes.building_number}</span></p>
			<p>Postcode: <span>{data?.attributes.postcode}</span></p>
			<p>sqm: <span>{data?.attributes.sqm}</span></p>
		</div>
	);
}

export default ResidentialBuilding;