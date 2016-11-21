import _ from 'lodash';
import React from 'react';
import Icon from '../Icon';
import { lucidClassNames } from '../../../util/style-helpers';
import { createClass, omitProps } from '../../../util/component-types';

const cx = lucidClassNames.bind('&-TableGearIcon');

/**
 *
 * {"categories": ["visual design", "icons"], "extend": "Icon", "madeFrom": ["Icon"]}
 *
 * A table configuration Icon.
 */

const TableGearIcon = createClass({
	displayName: 'TableGearIcon',
	propTypes: {
		...Icon.propTypes,
	},

	render() {
		const {
			className,
			...passThroughs
		} = this.props;

		return (
			<Icon
				{...omitProps(passThroughs, TableGearIcon)}
				{..._.pick(passThroughs, _.keys(Icon.propTypes))}
				className={cx('&', className)}
			>
				<g opacity='0.25'>
					<rect x='3' y='4' width='1' height='8'/>
					<rect x='6' y='4' width='1' height='8'/>
					<rect x='9' y='4' width='1' height='5.5'/>
					<rect x='12' y='4' width='1' height='3.847'/>
				</g>

				<path d='M15.79,9.298L14.6,9.079c-0.115-0.022-0.156-0.117-0.09-0.215l0.684-1.013 c0.064-0.098,0.053-0.246-0.03-0.329l-0.656-0.654c-0.083-0.085-0.229-0.099-0.329-0.031L13.164,7.52 c-0.098,0.065-0.193,0.025-0.216-0.091l-0.22-1.191c-0.021-0.114-0.138-0.21-0.252-0.21H11.55c-0.116,0-0.231,0.096-0.252,0.21 l-0.219,1.191c-0.022,0.116-0.119,0.156-0.216,0.091L9.852,6.837C9.753,6.77,9.605,6.783,9.521,6.868L8.866,7.522 c-0.083,0.083-0.095,0.232-0.031,0.33l0.683,1.013C9.584,8.963,9.545,9.057,9.43,9.08L8.237,9.298 C8.121,9.32,8.027,9.436,8.027,9.55v0.929c0,0.116,0.094,0.23,0.21,0.252l1.191,0.222c0.116,0.021,0.156,0.116,0.09,0.214 L8.834,12.18c-0.062,0.098-0.052,0.243,0.031,0.326l0.656,0.656c0.082,0.083,0.229,0.097,0.328,0.031l1.012-0.685 c0.098-0.065,0.193-0.026,0.217,0.093l0.219,1.188c0.021,0.116,0.137,0.21,0.253,0.21h0.929c0.114,0,0.23-0.094,0.252-0.21 l0.22-1.188c0.021-0.119,0.118-0.158,0.216-0.093l1.012,0.685c0.1,0.063,0.246,0.052,0.329-0.031l0.656-0.655 c0.083-0.084,0.097-0.229,0.03-0.327l-0.684-1.015c-0.066-0.097-0.027-0.192,0.09-0.214l1.19-0.221 c0.116-0.021,0.21-0.137,0.21-0.252V9.55C16,9.436,15.906,9.32,15.79,9.298z M12.014,11.814c-0.992,0-1.799-0.806-1.799-1.799 c0-0.992,0.807-1.798,1.799-1.798s1.799,0.806,1.799,1.798C13.812,11.011,13.006,11.814,12.014,11.814z'/>
				<path d='M8,12H1.25C1.112,12,1,11.889,1,11.75v-7.5C1,4.112,1.112,4,1.25,4h12.5C13.889,4,14,4.112,14,4.25V6h1V3.25 C15,2.56,14.439,2,13.75,2H1.25C0.56,2,0,2.56,0,3.25v8.5C0,12.439,0.56,13,1.25,13H8V12z'/>
			</Icon>
		);
	},
});

export default TableGearIcon;
