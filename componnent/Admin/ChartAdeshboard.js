import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import styles from "../../styles/Admin/ChartAdeshboard.module.css";



export default function ChartAdeshboard({ forChart }) {


    let jan = 0;
    let feb = 0;
    let mar = 0;
    let apr = 0;
    let may = 0;
    let jun = 0;
    let jul = 0;
    let aug = 0;
    let sep = 0;
    let oct = 0;
    let nov = 0;
    let dec = 0;




    // // update date
    // const filterYearData = forChart.filter((item) => {

    //     const date = new Date();
    //     const currentyear = date.getFullYear();
    //     const getyear = date.getFullYear(item.createdAt);
    //     const final = currentyear == getyear;
    //     return final;
    // })

    // const filterMonthData = filterYearData.filter((item) => {
    //     const date = new Date();
    //     const getmonth = date.getMonth(item.createdAt);

    //     if (getmonth == 0) {
    //         jan += Math.ceil(item.amount);
    //     } else if (getmonth == 1) {
    //         feb += Math.ceil(item.amount);
    //     } else if (getmonth == 2) {
    //         mar += Math.ceil(item.amount);
    //     } else if (getmonth == 3) {
    //         apr += Math.ceil(item.amount);
    //     } else if (getmonth == 4) {
    //         may += Math.ceil(item.amount);
    //     } else if (getmonth == 5) {
    //         jun += Math.ceil(item.amount);
    //     } else if (getmonth == 6) {
    //         jul += Math.ceil(item.amount);
    //     } else if (getmonth == 7) {
    //         aug += Math.ceil(item.amount);
    //     } else if (getmonth == 8) {
    //         sep += Math.ceil(item.amount);
    //     } else if (getmonth == 9) {
    //         oct += Math.ceil(item.amount);
    //     } else if (getmonth == 10) {
    //         nov += Math.ceil(item.amount);
    //     } else if (getmonth == 11) {
    //         dec += Math.ceil(item.amount);
    //     }
    // })







    const data = [
        { name: 'Janu', Er: jan, Ex: 10 },
        { name: 'Frb', Er: feb, Ex: 10 },
        { name: 'Mar', Er: mar, Ex: 10 },
        { name: 'Apr', Er: apr, Ex: 10 },
        { name: 'May', Er: may, Ex: 10 },
        { name: 'Jun', Er: jun, Ex: 10 },
        { name: 'Jul', Er: jul, Ex: 10 },
        { name: 'Aug', Er: aug, Ex: 10 },
        { name: 'Sep', Er: sep, Ex: 10 },
        { name: 'Oct', Er: oct, Ex: 10 },
        { name: 'Nov', Er: nov, Ex: 10 },
        { name: 'Dec', Er: dec, Ex: 10 },
    ];


    return (
        <div className={styles.chartWrp}>
            <div className={styles.chartTitle}>
                <div>Earning :  <div className={styles.tooltipexpenseb}></div> </div>
                <div>Expense : <div className={styles.tooltipred}> </div> </div>
            </div>
            <div className={styles.graphWrper}>
                <LineChart width={1100} height={300} data={data}>
                    <Line type="monotone" dataKey="Er" stroke="green" />
                    <Line type="monotone" dataKey="Ex" stroke="red" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    )
}
