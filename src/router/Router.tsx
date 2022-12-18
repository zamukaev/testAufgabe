import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../components/Header/Header";
import Layout from "../components/ui/Layout/Layout";
import Home from "../pages/Home/Home";
import Invoice from "../pages/Invoice/Invoice";
import Propertydamages from "../pages/Propertydamages/Propertydamages";
import ResidentialBuilding from "../pages/ResidentialBuilding/ResidentialBuilding";

const Router: FC = () => {
	return (
		<Layout>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/residentialbuilding/:id" element={<ResidentialBuilding />} />
				<Route path="/invoice/:id" element={<Invoice />} />
				<Route path="/propertydamages/:id" element={<Propertydamages />} />
			</Routes>

		</Layout>
	);
}

export default Router;