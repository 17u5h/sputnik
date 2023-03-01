import React, {useEffect, useState} from 'react';
import * as S from './style'
import {CloseModal} from "../../../GlobalStyle";
import UIButton from "../../UI/UIButton/UIButton";
import {InputType} from "../../../enum/inputEnum";
import {usePostsStore} from "../../../store/store";
import CloseModalIcon from "../../UI/UIModal/CloseModalIcon";
import {Post} from "../../../types/types";

type Props = {
	closeModal: () => void
}

const AdditionalFilters = ({closeModal}: Props) => {
	const [searchBody, setSearchBody] = useState<string>('')
	const [searchUserID, setSearchUserID] = useState<string>('')
	const [searchPostID, setSearchPostID] = useState<string>('')
	const [canCloseModal, setCanCloseModal] = useState<boolean>(false)
	const [presortedPosts, setPresortedPosts] = useState<Post[]>([])

	const {posts, dispatchSortedPosts} = usePostsStore(({posts, dispatchSortedPosts}) => ({posts, dispatchSortedPosts}))

	useEffect(() => {
		setPresortedPosts(posts)
	}, [posts])

	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		const name = event.target.name
		switch (name) {
			case InputType.body:
				setSearchBody(value)
				break
			case InputType.userID:
				setSearchUserID(value)
				break
			case InputType.postID:
				setSearchPostID(value)
				break
			default:
				throw new Error('не отработал не один кейс в инпутах')
		}
	}
	const sortPosts = () => {
		if (searchBody) setPresortedPosts(prevState => prevState.filter(el => el.body.toLowerCase().includes(searchBody.toLowerCase())))
		if (searchUserID) setPresortedPosts(prevState => prevState.filter(el => el.userId?.toString().includes(searchUserID.toLowerCase())))
		if (searchPostID) setPresortedPosts(prevState => prevState.filter(el => el.id.toString().includes(searchPostID.toLowerCase())))
		setCanCloseModal(true)
	}
	useEffect(() => {
		if (canCloseModal) {
			dispatchSortedPosts(presortedPosts)
			closeModal()
		}
	}, [presortedPosts, canCloseModal])

	const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') sortPosts()
	}

	return (
		<S.AdditionalFiltersContainer>
			<S.SmallInput value={searchBody} onChange={inputHandler} onKeyDown={onPressEnter} name={InputType.body} placeholder='сообщения'/>
			<S.SmallInput value={searchUserID} onChange={inputHandler} onKeyDown={onPressEnter} name={InputType.userID} placeholder='ID пользователя'/>
			<S.SmallInput value={searchPostID} onChange={inputHandler} onKeyDown={onPressEnter} name={InputType.postID} placeholder='ID поста'/>
			<UIButton onClick={sortPosts}>Найти</UIButton>
			<CloseModal onClick={closeModal}><CloseModalIcon/></CloseModal>
		</S.AdditionalFiltersContainer>
	);
};

export default AdditionalFilters;