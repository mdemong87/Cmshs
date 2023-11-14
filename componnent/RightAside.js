import styles from "../styles/RightAside.module.css";
import Profile from "../componnent/Profile";
import Payment from "../componnent/Payment";

export default function RightAside() {
  return (
    <div className={styles.rightAsidewrp}>
        <Profile />
        <Payment />
    </div>
)
}
