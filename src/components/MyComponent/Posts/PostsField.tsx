import React, {useEffect, useState} from 'react';
import {usePostsStore} from "../../../store/store";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import {fetchAllPosts} from "../../../lib/fetchAllPosts";
import PaginationStyle from "./PageStyles/PaginationStyle";
import TableStyle from "./PageStyles/TableStyle";
import CardStyle from "./PageStyles/CardStyle";
import {displayEnum} from "../../../enum/displayEnum";

type Props = {
	displayStyle: string
}

const PostsField = ({displayStyle}: Props) => {
	const [loading, setLoading] = useState<boolean>(false)
	const {sortedPosts, dispatchPosts} = usePostsStore(({sortedPosts, dispatchPosts}) => ({sortedPosts, dispatchPosts}))

	const data = sortedPosts.map(el => el.title)

	useEffect(() => {
		fetchAllPosts(setLoading, dispatchPosts)
	}, [])

	return (
		<div>
			{loading ? <LoadingSpinner size='100px'/> :
				displayStyle === displayEnum.cardStyle && <CardStyle posts={sortedPosts}/> ||
				displayStyle === displayEnum.tableStyle && <TableStyle posts={sortedPosts}/> ||
				displayStyle === displayEnum.paginationStyle && <PaginationStyle data={data}/> ||
				'Список постов пуст'
			}
		</div>
	);
};

export default PostsField;

