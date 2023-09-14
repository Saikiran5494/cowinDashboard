// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {ageData} = props
  console.log(ageData)
  return (
    <div className="vaccination-age">
      <h3 className="profile">Vaccination by age</h3>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="60%"
          data={ageData}
          innerRadius="0%"
          outerRadius="80%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64C2A6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto', paddingTop: 30}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
