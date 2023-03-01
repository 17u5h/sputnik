import React from 'react';
import {Box, List} from "grommet";

type Props = {
	data: string[]
}

const PaginationStyle = ({data}: Props) => {
	return (
		<Box><List data={data}
							 step={10}
							 pad={{top: 'xsmall'}}
							 show={{page: 1}}
							 paginate={{numberItems: data.length, size: 'medium',}}
		/></Box>
	);
};

export default PaginationStyle;