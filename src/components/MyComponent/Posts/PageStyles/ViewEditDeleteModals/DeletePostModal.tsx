import React, {useState} from 'react';
import CloseModalIcon from "../../../../UI/UIModal/CloseModalIcon";
import {CloseModal} from "../../../../../GlobalStyle";
import {Post} from "../../../../../types/types";
import * as S from './style'
import {API_URL} from "../../../../../constants/constants";
import axios from "axios";
import LoadingSpinner from "../../../../UI/LoadingSpinner/LoadingSpinner";
import {usePostsStore} from "../../../../../store/store";

type Props = {
	closeModal: () => void
	post: Post
}

const DeletePostModal = ({closeModal, post}: Props) => {
	const [loading, setLoading] = useState<boolean>(false)
	const {posts, dispatchSortedPosts, dispatchPosts} = usePostsStore(({posts, dispatchSortedPosts, dispatchPosts}) => ({posts, dispatchSortedPosts, dispatchPosts}))

	const deleteHandler = async () => {
		setLoading(true)
		try {
			await axios.delete(`${API_URL}/posts/${post.id}`)
			const editedPosts = posts.filter(el => el.id !== post.id)
			dispatchSortedPosts(editedPosts)
			dispatchPosts(editedPosts)
			closeModal()
		} catch (e) {
			console.error(e)
		} finally {
			setLoading(false)
		}
	}

	return (
		<S.ModalDeletePostContainer>
			<S.DeleteButton onClick={deleteHandler}>{loading ?
				<LoadingSpinner size={'40px'}/> : 'Удалить пост'}</S.DeleteButton>
			<S.CancelButton onClick={closeModal}>Отмена</S.CancelButton>
			<CloseModal onClick={closeModal}><CloseModalIcon/></CloseModal>
		</S.ModalDeletePostContainer>
	);
};

export default DeletePostModal;