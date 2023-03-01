import React from 'react';
import {Post} from "../../../../../types/types";
import {CloseModal} from "../../../../../GlobalStyle";
import CloseModalIcon from "../../../../UI/UIModal/CloseModalIcon";
import * as S from './style'

type Props = {
	closeModal: () => void
	post: Post
}

const ViewPostModal = ({closeModal, post}: Props) => {
	return (
		<S.ModalContainer>
			<S.ViewTitle>{post.title}</S.ViewTitle>
			<S.ViewBody>{post.body}</S.ViewBody>
			<CloseModal onClick={closeModal}><CloseModalIcon/></CloseModal>
		</S.ModalContainer>
	);
};

export default ViewPostModal;