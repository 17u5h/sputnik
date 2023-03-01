import React from 'react';
import UIButton from "../../UI/UIButton/UIButton";
import {displayEnum} from "../../../enum/displayEnum";
import * as S from './style'

type Props = {
	setDisplayStyle: (style: string) => void
}

const SwitchDisplayStyleControls = ({setDisplayStyle}: Props) => {

	return (
		<S.Container>
			<UIButton onClick={() => setDisplayStyle(displayEnum.cardStyle)}>Карточный вид</UIButton>
			<UIButton onClick={() => setDisplayStyle(displayEnum.tableStyle)}>Табличный вид</UIButton>
			<UIButton onClick={() => setDisplayStyle(displayEnum.paginationStyle)}>Пагинация</UIButton>
		</S.Container>
	);
};

export default SwitchDisplayStyleControls;