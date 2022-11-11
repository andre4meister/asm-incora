import styles from '../../components/DashboardRoom/DashboardRoom.module.scss';

const BigScreenOutlined = ({ title }: { title: string }) => (
  <span className={styles.featureCustomIcon} role="img" title={title}>
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 101.9"
    >
      <path
        className="cls-1"
        d="M3.34,0h116.2a3.35,3.35,0,0,1,3.34,3.34v77a3.35,3.35,0,0,1-3.34,3.34H3.34A3.35,3.35,0,0,1,0,80.32v-77A3.35,3.35,0,0,1,3.34,0Zm58.1,15.82A21.93,21.93,0,1,1,39.51,37.75,21.93,21.93,0,0,1,61.44,15.82Zm7.8,23.29c1.12-.72,1.12-1.53,0-2.17L57.71,30.31c-.91-.57-1.86-.23-1.84,1l0,13.4c.08,1.28.81,1.64,1.9,1l11.43-6.6Zm-7.8-18.83A17.47,17.47,0,1,1,44,37.75,17.47,17.47,0,0,1,61.44,20.28Zm-15.15,68h30.3c.08,5.24,2.24,9.94,8.09,13.63H38.2c4.68-3.39,8.11-7.51,8.09-13.63Zm-39-83.5H115.56a3,3,0,0,1,3,3V68a3,3,0,0,1-3,3H7.33a3,3,0,0,1-2.95-3V7.72a3,3,0,0,1,3-2.95Z"
      />
    </svg>
  </span>
);

export default BigScreenOutlined;
