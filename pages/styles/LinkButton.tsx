import React, { forwardRef } from "react";
import Button from "@material-ui/core/Button";

const LinkButtons = forwardRef<
	HTMLButtonElement,
	React.HTMLProps<HTMLButtonElement>
>((props, ref) => {
	return (
		<a onClick={() => props.onClick} href={props.href} ref={() => ref}>
			<Button>{props.children}</Button>
		</a>
	);
});

export default LinkButtons;
