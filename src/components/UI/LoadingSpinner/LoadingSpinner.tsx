import React from 'react';
import * as S from './styles'

type Props = {
	size: string
}

const LoadingSpinner = ({size}: Props) => {
	return (
		<S.LoadingSpinner style={{width: size, height: size}}/>
	);
};

export default LoadingSpinner;