import cloud from '../../../../assets/images/cloud.png'
import s from './ThisDayInfo.module.scss'
import { ThisDayItem } from './ThisDayItem'

type Props = {}

export interface Item {
	icon_id: string;
	name: string;
	value: string;
}

export const ThisDayInfo = (props: Props) => {
	const items = [
		{
			icon_id: 'temp',
			name: 'Температура',
			value: '20° - ощущается как 17°',
		},
		{
			icon_id: 'pressure',
			name: 'Тиск',
			value: '765 мм ртутного столба - нормальное',
		},
		{
			icon_id: 'precipitation',
			name: 'Опади',
			value: 'Без осадков',
		},
		{
			icon_id: 'wind',
			name: 'Вітер',
			value: '3 м/с юго-запад - легкий ветер',
		},
	]
	return (
		<div className={s.this_day_info}>
			<div className={s.this_day_info_items}>
				{items.map((item: Item) => (
					<ThisDayItem key={item.icon_id} item={item} />
				))}
			</div>
			<img className={s.cloud_img} src={cloud} alt='cloud' />
		</div>
	)
}
