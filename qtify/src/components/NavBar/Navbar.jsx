// import React from "react";
// import { Link } from "react-router-dom";
// import Button from "../Button/Button";
// import Logo from "../Logo/Logo";
// import Search from "../Search/Search";
// import styles from "./Navbar.module.css";

// function Navbar({ searchData }) {
//   return (
//     <nav className={styles.navbar}>
//       <Link to="/">
//       <Logo />
//         <Search searchData={searchData} />
//         <Button children={"Give Feedback"} /> 
//         </Link>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
//import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
        <Search />
        <Button TextToShow={"Give Feedback"} />
    </nav>
  );
}

export default Navbar;
