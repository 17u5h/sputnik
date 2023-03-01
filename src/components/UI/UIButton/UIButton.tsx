import React from 'react';
import * as S from './styles'

type Props = {
	children: string | JSX.Element
	onClick: ((event: React.MouseEvent) => Promise<void>) | (() => void)
}

const UiButton = ({children, onClick}: Props) => {

	return (
		<S.Button onClick={onClick}>{children}</S.Button>
	);
};

export default UiButton;