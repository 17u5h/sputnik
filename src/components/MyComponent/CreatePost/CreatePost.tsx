import React, {useState} from 'react';
import UIButton from "../../UI/UIButton/UIButton";
import {API_URL} from "../../../constants/constants";
import axios from "axios";
import * as S from './styles'
import {CloseModal, Modal} from "../../../GlobalStyle";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import {usePostsStore} from "../../../store/store";
import {Post} from "../../../types/types";
import {InputType} from "../../../enum/inputEnum";
import CloseModalIcon from "../../UI/UIModal/CloseModalIcon";

type Props = {
	closeModal: () => void
}

const CreatePost = ({closeModal}: Props) => {
	const [loading, setLoading] = useState<boolean>(false)
	const [title, setTitle] = useState<string>('')
	const [body, setBody] = useState<string>('')
	const {posts, dispatchPosts} = usePostsStore(({posts, dispatchPosts}) => ({posts, dispatchPosts}))

	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		const name = event.target.name
		switch (name) {
			case InputType.title:
				setTitle(value)
				break
			case InputType.body:
				setBody(value)
				break
			default:
				throw new Error('не отработал не один кейс в инпутах')
		}
	}

	const createPost = async (event: React.MouseEvent) => {
		event.preventDefault()
		setLoading(true)
		const fetchData = {
			title,
			body
		}
		try {
			const {data} = await axios.post<Post>(`${API_URL}/posts`, fetchData)
			const updatedPosts = [data, ...posts]
			dispatchPosts(updatedPosts)
			closeModal()
		} catch (e) {
			console.error(e)
		} finally {
			setLoading(false)
		}
	}

	return (
		<Modal>
			<S.Input value={title} onChange={inputHandler} name={InputType.title} placeholder='Заголовок'/>
			<S.Input value={body} onChange={inputHandler} name={InputType.body} placeholder='Текст'/>
			<UIButton onClick={createPost}>{loading ? <LoadingSpinner size='40px'/> : 'Создать'}</UIButton>
			<CloseModal onClick={closeModal}><CloseModalIcon/></CloseModal>
		</Modal>
	);
};

export default CreatePost;