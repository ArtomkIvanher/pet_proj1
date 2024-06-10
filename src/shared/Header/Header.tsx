import Select from 'react-select'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import s from './Header.module.scss'
import { useState } from 'react'

type Props = {}

export const Header = (props: Props) => {
	const options = [
		{ value: 'Kyiv', label: 'Київ' },
		{ value: 'Lviv', label: 'Львів' },
		{ value: 'Vinnytsia', label: 'Вінниця' },
	]

	const colorStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor: 0 ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
			width: '194px',
			height: '37px',
			border: 'none',
			borderRadius: '10px',
			zIndex: 100,
		}),
		singleValue: (styles: any) => ({
			...styles,
			color: 0 ? '#fff' : '#000',
		}),
	}

	const [theme, setTheme] = useState("light")

	function changeTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light')

		console.log(theme)
		
		const root = document.querySelector(':root') as HTMLElement
		root.style.setProperty(
			'--body-background-default', 
			`var(body-background-${theme})`
		)
		console.log(root)
	}

	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<div className={s.logo}>
					<GlobalSvgSelector id='header-logo' />
				</div>
				<div className={s.title}>React weather</div>
			</div>
			<div className={s.wrapper}>
				<div className={s.change_theme} onClick={changeTheme}>
					<GlobalSvgSelector id='change-theme'/>
				</div>
				<Select
					defaultValue={options[0]}
					styles={colorStyles}
					options={options}
				/>
			</div>
		</header>
	)
}
