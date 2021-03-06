import React, { Component } from 'react';
import T from 'prop-types';

import Table from 'components/Table';

import { SORT_DIRECTION_PROPTYPES } from 'components/Table/propTypes';
import { COLLECTION_PROPTYPES } from './propTypes';

import { TABLE_CONFIG } from './meta';

import GrantsDetailsRow from './GrantsDetailsRow';

import Classes from './styles';


class Grants extends Component {
	static propTypes = {
		collection: COLLECTION_PROPTYPES.isRequired,
		loadData: T.func.isRequired,
		fireAnalyticsEvent: T.func.isRequired,
		sortTable: T.func.isRequired,
		toggleRow: T.func.isRequired,
		currentSort: T.string.isRequired,
		sortDirection: SORT_DIRECTION_PROPTYPES.isRequired
	};

	constructor(props) {
		super(props);

		this.handleTableSort = this.handleTableSort.bind(this);
		this.handleRowClick = this.handleRowClick.bind(this);
	}

	componentWillMount() {
		this.props.loadData();
	}

	handleTableSort(name, direction) {
		this.props.fireAnalyticsEvent({
			eventCategory: 'Table Sort',
			eventAction: 'sort',
			eventLabel: name
		});
		this.props.sortTable(name, direction);
	}

	handleRowClick(slug) {
		this.props.toggleRow(slug);
	}

	render() {
		const { currentSort, sortDirection, collection, fireAnalyticsEvent } = this.props;

		return (
			<Table
				className={ Classes.table }
				collection={ collection }
				config={ TABLE_CONFIG }
				currentSort={ currentSort }
				detailsRenderer={ GrantsDetailsRow }
				fireAnalyticsEvent={ fireAnalyticsEvent }
				onRowClick={ this.handleRowClick }
				onTableSort={ this.handleTableSort }
				sortDirection={ sortDirection }
			/>
		);
	}
}

export default Grants;
