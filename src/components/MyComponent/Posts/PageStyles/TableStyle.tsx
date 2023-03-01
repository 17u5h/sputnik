import React from 'react';
import {Table, TableBody, TableCell, TableHeader, TableRow} from "grommet";
import {Post} from "../../../../types/types";

type Props = {
	posts: Post[]
}

const TableStyle = ({posts}: Props) => {
	const headers = ['Title', 'Post', 'Post ID', 'User ID']
	return (
		<Table>
			<TableHeader>
				{headers.map(el => (<TableCell scope="col" border="bottom">{el}</TableCell>))}
			</TableHeader>
			<TableBody>
				{posts.map(el => (<TableRow><TableCell scope='row'><strong>{el.title}</strong></TableCell>
					<TableCell>{el.body}</TableCell>
					<TableCell>{el.id}</TableCell>
					<TableCell>{el.userId}</TableCell></TableRow>))}
			</TableBody>
		</Table>
	);
};

export default TableStyle;