import React, {useState} from 'react';
import CloseModalIcon from "../../../../UI/UIModal/CloseModalIcon";
import {CloseModal} from "../../../../../GlobalStyle";
import {Post} from "../../../../../types/types";
import * as S from './style'
import UIButton from "../../../../UI/UIButton/UIButton";
import axios from "axios";
import {API_URL} from "../../../../../constants/constants";
import LoadingSpinner from "../../../../UI/LoadingSpinner/LoadingSpinner";
import {usePostsStore} from "../../../../../store/store";

type Props = {
	closeModal: () => void
	post: Post
}

const EditPostModal = ({closeModal, post}: Props) => {
	const [title, setTitle] = useState<string>(post.title)
	const [body, setBody] = useState<string>(post.body)
	const [loading, setLoading] = useState<boolean>(false)
	const {posts, dispatchSortedPosts} = usePostsStore(({posts, dispatchSortedPosts}) => ({posts, dispatchSortedPosts}))

	const submitHandler = async () => {
		setLoading(true)
		const fetchData = {title, body}
		try {
			const {data} = await axios.put(`${API_URL}/posts/${post.id}`, fetchData)
			const indexToEdit = posts.findIndex(el => el.id === data.id)
			const editedPost = {title: data.title, body: data.body, userId: data?.userId, id: data.id}
			posts.splice(indexToEdit, 1, editedPost)
			dispatchSortedPosts(posts)
			closeModal()
		} catch (e) {
			console.error(e)
		} finally {
			setLoading(false)
		}
	}

	return (
		<S.ModalContainer>
			<S.EditTitle value={title} onChange={e => setTitle(e.target.value)}/>
			<S.EditBody value={body} onChange={e => setBody(e.target.value)}/>
			<UIButton onClick={submitHandler}>{loading ? <LoadingSpinner size={'40px'}/> : 'Сохранить изменения'}</UIButton>
			<CloseModal onClick={closeModal}><CloseModalIcon/></CloseModal>
		</S.ModalContainer>
	);
};

export default EditPostModal;