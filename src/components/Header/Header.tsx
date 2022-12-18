import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

const Header: FC = () => {
	return (
		<Link to="/" className={styles.header}>
			Logo
		</Link>
	);
}
export default Header;