import React from 'react';
import createClass from 'create-react-class';
import { ChatIcon } from '../../../../index';

export default createClass({
	render() {
		return (
			<div>
				<ChatIcon isDisabled />
				<ChatIcon isDisabled isBadge />
			</div>
		);
	},
});
