import React, {useState} from 'react';
import Search from "./Search";
import UIButton from "../../UI/UIButton/UIButton";
import UIModal from "../../UI/UIModal/UIModal";
import AdditionalFilters from "./AdditionalFilters";
import * as S from './style'
import {usePostsStore} from "../../../store/store";

const Filters = () => {
	const [showAdditionalFilters, setShowAdditionalFilters] = useState<boolean>(false)
	const {posts, dispatchSortedPosts} = usePostsStore(({posts, dispatchSortedPosts}) => ({posts, dispatchSortedPosts}))

	const showAdditionalFiltersHandler = () => {
		setShowAdditionalFilters(prevState => !prevState)
	}
	const cancelFiltering = () => {
		dispatchSortedPosts(posts)
	}

	return (
		<S.FiltersContainer>
			<Search/>
			<S.SearchContainer>
				<UIButton onClick={showAdditionalFiltersHandler}>Другие фильтры</UIButton>
				<UIButton onClick={cancelFiltering}>Сбросить фильтрацию</UIButton>
			</S.SearchContainer>
			{showAdditionalFilters && <UIModal>
				<AdditionalFilters closeModal={showAdditionalFiltersHandler}/>
			</UIModal>}
		</S.FiltersContainer>
	);
};

export default Filters;