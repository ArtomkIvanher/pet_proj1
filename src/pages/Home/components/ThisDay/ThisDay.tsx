import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import s from './ThisDay.module.scss'

type Props = {}

export const ThisDay = (props: Props) => {
	return (
		<div className={s.this_day}>
			<div className={s.top_block}>
				<div className={s.top_wrapper}>
					<div className={s.this_temp}>20°</div>
					<div className={s.this_day_name}>Сьогодені</div>
				</div>
				<GlobalSvgSelector id='sun' />
			</div>
			<div className={s.button_block}>
				<div className={s.this_time}>
					Час: <span>21:54</span>
				</div>
				<div className={s.this_city}>
					Місто: <span>Kyiv</span>
				</div>
			</div>
		</div>
	)
}
