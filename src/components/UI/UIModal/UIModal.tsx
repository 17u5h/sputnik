import {createPortal} from 'react-dom'
import React, {useEffect} from 'react'
import style from './style.module.css'

type Props = {
	children: React.ReactNode
}

const UIModal = ({children}: Props) => {
	const mount = document.getElementById('modal')
	if (mount === null) throw new Error('нет ноды modal')
	mount.classList.add(style.wrapper)

	const element = document.createElement('div')
	element.classList.add(style.content)

	useEffect(() => {
		mount.appendChild(element)
		return () => {
			mount.removeChild(element)
		}
	}, [mount, element])

	return createPortal(children, element)
}

export default UIModal