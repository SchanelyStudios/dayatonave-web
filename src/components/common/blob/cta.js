import React from "react";

const BlobCTA = ({ children, path, href }) => (
	<div class="blob__cta">
		<Button path={path} href={href}>
			{children}
		</Button>
	</div>
);

export default BlobCTA;
