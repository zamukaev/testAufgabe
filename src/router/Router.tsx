import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/ui/Layout/Layout";
import Home from "../pages/Home/Home";
import ResidentialBuilding from "../pages/ResidentialBuilding/ResidentialBuilding";

interface RoutesProps {

}
const Router: FC<RoutesProps> = () => {
	return (
		<Layout>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/residentialbuilding/:id" element={<ResidentialBuilding />} />
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</Layout>
	);
}

export default Router;