import React from "react";

import Button from "../button";

const FlierCTA = ({ children, path, href }) => (
	<Button className="flier__cta" path={path} href={href}>
		{children}
	</Button>
);

export default FlierCTA;
