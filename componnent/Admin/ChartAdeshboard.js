import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import styles from "../../styles/Admin/ChartAdeshboard.module.css";



export default function ChartAdeshboard() {

    const data = [{ name: 'jan', uv: 6000, pv: 3000 }, { name: 'Feb', uv: 1600, pv: 2400 }, { name: 'Mar', uv: 3330, pv: 4340 }, { name: 'Apr', uv: 0, pv: 0 }, { name: 'May', uv: 0, pv: 0 }, { name: 'Jun', uv: 0, pv: 0 }, { name: 'Jul', uv: 0, pv: 0 }, { name: 'Agu', uv: 0, pv: 0 }, { name: 'Sep', uv: 0, pv: 0 }, { name: 'Oct', uv: 0, pv: 0 }, { name: 'Nov', uv: 0, pv: 0 }, { name: 'Dec', uv: 0, pv: 0 }];


    return (
        <div className={styles.chartWrp}>
            <div className={styles.chartTitle}>
                <div>Earning :  <div className={styles.tooltipexpenseb}></div> </div>
                <div>Expense : <div className={styles.tooltipred}> </div> </div>
            </div>
            <div className={styles.graphWrper}>
                <LineChart width={1100} height={300} data={data}>
                    <Line type="monotone" dataKey="pv" stroke="green" />
                    <Line type="monotone" dataKey="uv" stroke="red" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    )
}
