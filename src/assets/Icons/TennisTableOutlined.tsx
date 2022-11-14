import styles from '../../components/DashboardRoom/DashboardRoom.module.scss';

const TennisTableOutlined = ({ title }: { title: string }) => (
  <span className={styles.featureCustomIcon} role="img" title={title}>
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 118.92 122.88"
      xmlSpace="preserve"
    >
      <g>
        <path d="M77.71,17.96C56.07,0.47,25.53,2.31,9.54,22.08C-6.46,41.87-1.86,72.1,19.79,89.62 c6.08,4.92,12.88,8.3,19.85,10.19l55.77-55.77C92.48,34.28,86.51,25.08,77.71,17.96L77.71,17.96z M104.22,0 C96.1,0,89.51,6.58,89.51,14.71c0,8.12,6.59,14.71,14.71,14.71c8.12,0,14.71-6.59,14.71-14.71C118.92,6.58,112.34,0,104.22,0 L104.22,0z M52,101.6c2.01,0.04,4.01-0.03,5.99-0.23c8.69-0.88,14.73-4.66,23.54-0.57c7.48,3.47,11.09,10.79,17.82,18.5 c3.26,3.74,3.79,4.36,8.7,2.72c6.47-2.17,9.37-6.62,9.99-12.51c0.54-5.11-1.34-5.41-5.32-8.31c-6.15-4.5-11.19-7.92-14.45-11.88 c-7.97-9.67-1.23-18.92-0.82-29.5c0.05-1.22,0.04-2.45-0.01-3.67L52,101.6L52,101.6L52,101.6z" />
      </g>
    </svg>
  </span>
);

export default TennisTableOutlined;
