import React, {useEffect, useState} from 'react';
import {usePostsStore} from "../../../store/store";
import * as S from './style'
import UIButton from "../../UI/UIButton/UIButton";
import Logo from "../../UI/Logo/Logo";

const Search = () => {
	const [searchQuery, setSearchQuery] = useState<string>('')
	const {posts, dispatchSortedPosts} = usePostsStore(({posts, dispatchSortedPosts}) => ({posts, dispatchSortedPosts}))

	const sortPosts = () => {
		if (!searchQuery) {
			dispatchSortedPosts(posts)
		} else {
			dispatchSortedPosts([...posts].filter(el => el.title.toLowerCase().includes(searchQuery.toLowerCase())))
		}
	}

	const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') sortPosts()
	}

	useEffect(() => {
		sortPosts()
	}, [posts])

	return (
		<S.SearchContainer>
			<Logo/>
			<S.Input value={searchQuery} placeholder='Поиск по заголовку...' onChange={e => setSearchQuery(e.target.value)} onKeyDown={onPressEnter}/>
			<UIButton onClick={sortPosts}>Найти</UIButton>
		</S.SearchContainer>
	);
};

export default Search;