import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../api/instance";
import { IResidentialBuilding } from "../../interfaces/interface";


const ResidentialBuilding: FC = () => {
	const [data, setData] = useState<IResidentialBuilding | null>(null);
	const { id } = useParams();
	useEffect(() => {
		fetchDataById();
	}, [])

	const fetchDataById = async () => {
		const { data } = await instance.get(`/residentialbuildings/${id}`);
		setData(data.data);
	}
	console.log(data?.attributes.address_full)
	return (
		<div>

		</div>
	);
}

export default ResidentialBuilding;