import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/components/Home'
import { MonthStatistics } from './pages/MonthStatistics/components/MonthStatistics'
import { Header } from './shared/Header/Header'
import { Popup } from './shared/Popup/Popup'
import './styles/index.scss'

function App() {
	return (
		<div className='App'>
			{/* <Popup /> */}
			<div className='container'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='month-statistics' element={<MonthStatistics />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
