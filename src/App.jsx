import { useState, useCallback } from 'react'
import { getDays } from '~/utils/core'
import { day } from '~/utils/day'
import { Button, Dropdown } from 'antd'
import DateRangePicker from '~/components/DatePicker'
import Chart from '~/components/Chart'
import SvgIcon from '~/components/SvgIcon'
import HealthHabit from '~/components/HealthHabit'
import './App.css'
import DropDownMenu from './components/DropDownMenu'
// import routing and page components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HealthAnalysisPage from './pages/HealthAnalysisPage';
import DiaryEntriesPage from './pages/DiaryEntriesPage';
import HealthHabitTrackerPage from './pages/HealthHabitTrackerPage';
import ClinicianCommunicationPage from './pages/ClinicianCommunicationPage';
import HomePage from './pages/HomePage'

function App() {
  const DISABLED_RANGE = 31
  const defaultDateRange = [day().subtract(DISABLED_RANGE, 'days'), day()]
  const [currentDate, setCurrentDate] = useState(defaultDateRange)
  const handleDateChange = useCallback((dateRange) => {
    setCurrentDate(dateRange)
  })

  // generate random data for testing
  const generateRandomDat = (function () {
    let uId = 0
    const colors = ['#5ec9db', '#f5b97a', '#f57a7a', '#d5d97a']
    return () => {
      uId++
      return {
        title: `title${uId}`,
        id: uId,
        color: colors[uId % 4],
        list: new Array(3).fill(0).map((_, idx) => ({
          title: `innerTitle${idx + 1}`,
          desc: `innerDesc${idx + 1}`,
          percent: Math.random().toFixed(2)
        }))
      }
    }
  })()
  const [data, setData] = useState(
    Array.from({ length: 4 }) //set the # of cards
      .fill(0)
      .map(() => generateRandomDat())
  )
  // close the cards
  const handleCloseCard = useCallback(
    (id) => {
      setData([...data.filter((item) => item.id !== id)])
    },
    [data]
  )
 
  
 
    
  return (
    <div className="mt-20 py-4 px-8">
      <section className="flex justify-between items-center">
        <Router>
          <div>
            <DropDownMenu />
            <Routes>
              <Route path ="/" element={<HomePage/>} />
              <Route path="/healthAnalysis" element={<HealthAnalysisPage />} />
              <Route path="/diary" element={<DiaryEntriesPage />} />
              <Route path="/healthTracker" element={<HealthHabitTrackerPage />} />
              <Route path="/clinicianComm" element={<ClinicianCommunicationPage />} />
            </Routes>
          </div>

        </Router>
    

        <div className="flex gap-4">
          <Button>
            <div className="flex gap-2">
              <span>Download</span>
              <SvgIcon iconName="download" size={14} />
            </div>
          </Button>
          <Button>
            <div className="flex gap-2">
              <span>Save</span>
              <SvgIcon iconName="save" size={14} />
            </div>
          </Button>
        </div>
      </section>

      <section className="mt-8 flex justify-end items-center">
        <DateRangePicker
          defaultDates={defaultDateRange}
          disabledRange={DISABLED_RANGE}
          onChange={handleDateChange}
        />
      </section>

      <section className="mt-4 p-4 bg-white rounded-lg">
        <Chart dateRange={getDays(currentDate[0], currentDate[1])} />
      </section>
    </div>
  )
}

export default App
