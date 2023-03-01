import React, {useState} from 'react';
import * as S from './style'
import {Post} from "../../../../types/types";
import {Card, CardBody, CardFooter, CardHeader} from "grommet";
import EditIcon from "../../../UI/Icons/EditIcon";
import ViewIcon from "../../../UI/Icons/ViewIcon";
import {IconsBlock} from "./style";
import UIModal from "../../../UI/UIModal/UIModal";
import ViewPostModal from "./ViewEditDeleteModals/ViewPostModal";
import EditPostModal from "./ViewEditDeleteModals/EditPostModal";
import DeletePostModal from "./ViewEditDeleteModals/DeletePostModal";
import CloseIcon from "../../../UI/Icons/CloseIcon";

type Props = {
	posts: Post[]
}

const CardStyle = ({posts}: Props) => {
	const emptyPost = {title: '', body: '', userId: 0, id: 0}
	const [showViewPostModal, setShowViewPostModal] = useState<boolean>(false)
	const [showEditPostModal, setShowEditPostModal] = useState<boolean>(false)
	const [showDeletePostModal, setShowDeletePostModal] = useState<boolean>(false)
	const [post, setPost] = useState<Post>(emptyPost)

	const showViewPostModalHandler = () => {
		setShowViewPostModal(prev => !prev)
	}
	const showEditPostModalHandler = () => {
		setShowEditPostModal(prev => !prev)
	}
	const showDeletePostModalHandler = () => {
		setShowDeletePostModal(prev => !prev)
	}

	const viewHandler = (post: Post) => {
		setPost(post)
		showViewPostModalHandler()
	}
	const EditHandler = (post: Post) => {
		setPost(post)
		showEditPostModalHandler()
	}
	const DeleteHandler = (post: Post) => {
		setPost(post)
		showDeletePostModalHandler()
	}

	return (
		<S.CardContainer>
			{posts.map(el => (<Card height='small' width='medium' background='light-1' key={el.id}>
				<CardHeader pad="small"><strong style={{maxWidth: '70%'}}>{el.title}</strong>
					<IconsBlock>
						<ViewIcon onClick={() => viewHandler(el)}/>
						<EditIcon onClick={() => EditHandler(el)}/>
						<CloseIcon onClick={() => DeleteHandler(el)}/>
					</IconsBlock>
				</CardHeader>
				<CardBody pad="medium">{el.body}</CardBody>
				<CardFooter pad={{horizontal: 'small'}} background='light-2'>
					<div>Post ID: {el.id}</div>
					<div>User ID: {el.userId}</div>
				</CardFooter>
			</Card>))}
			{showViewPostModal && <UIModal><ViewPostModal closeModal={showViewPostModalHandler} post={post}/></UIModal>}
			{showEditPostModal && <UIModal><EditPostModal closeModal={showEditPostModalHandler} post={post}/></UIModal>}
			{showDeletePostModal && <UIModal><DeletePostModal closeModal={showDeletePostModalHandler} post={post}/></UIModal>}
		</S.CardContainer>
	);
};

export default CardStyle;