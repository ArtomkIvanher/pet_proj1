import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo'
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem'
import s from './Popup.module.scss'

type Props = {}

export const Popup = ({}: Props) => {
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
		<>
			<div className={s.blur}>
				<div className={s.popup}>
					<div className={s.wrapper}>
						<div className={s.day}>
							<div className={s.day_temp}>20°</div>
							<div className={s.day_name}>Середа</div>
							<div className={s.day_img}>
								<GlobalSvgSelector id='sun' />
							</div>
							<div className={s.day_time}>
								Час: <span>21:54</span>
							</div>
							<div className={s.day_city}>
								Місто: <span>Kyiv</span>
							</div>
						</div>
						<div className={s.this_day_info_items}>
							{items.map((item: Item) => (
								<ThisDayItem key={item.icon_id} item={item} />
							))}
						</div>
					</div>
					<div className={s.close}>
						<GlobalSvgSelector id='close' />
					</div>
				</div>
			</div>
		</>
	)
}
