import s from './Days.module.scss'

type Props = {}

export const Tabs = (props: Props) => {
	const tabs = [
		{
			value: 'На неделю',
		},
		{
			value: 'На 10 дней',
		},
		{
			value: 'На месяц',
		},
	]
	return (
		<div className={s.tabs}>
			<div className={s.tabs_wrapper}>
				{tabs.map(tab => (
					<button className={s.tab} key={tab.value}>
						{tab.value}
					</button>
				))}
			</div>
            <button className={s.cancel}>Скасувати</button>
		</div>
	)
}
