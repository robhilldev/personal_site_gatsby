import * as React from "react";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <header className="flex justify-between">
    <Link to="/">{siteTitle} Home</Link>
    <Link to="#">Other Pages</Link>
  </header>
);

export default Header;
