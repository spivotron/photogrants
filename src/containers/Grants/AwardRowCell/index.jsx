import React, { PureComponent } from 'react';
import T from 'prop-types';

import Classes from './styles';


class AwardRowCell extends PureComponent {
	static propTypes = {
		amount: T.string,
		mentorship: T.bool,
		show: T.bool,
		residency: T.bool
	};

	static defaultProps = {
		amount: '',
		mentorship: null,
		show: null,
		residency: null
	};

	render() {
		const { amount, mentorship, show, residency } = this.props;

		return (
			<div className={ Classes.root }>
				{ amount }
				{ show ? (<div title="Show" className={ Classes.showSymbol } />) : null }
				{ mentorship ? (<div title="Mentorship" className={ Classes.mentorshipSymbol } />) : null }
				{ residency ? (<div title="Residency" className={ Classes.residencySymbol } />) : null }
			</div>
		);
	}
}

export default AwardRowCell;
