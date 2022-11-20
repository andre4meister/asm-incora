import styles from '../../components/DashboardRoom/DashboardRoom.module.scss';

const WhiteboardOutlined = ({ title }: { title: string }) => (
  <span className={styles.featureCustomIcon} role="img" title={title}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 107.78">
      <path d="M59.22 2.1a2.1 2.1 0 114.2 0v6.14h57.12a2.1 2.1 0 110 4.2h-12.67v64.62h12.9a2.1 2.1 0 110 4.2H63.75v9.6c.1.07.2.14.29.23l13.12 12.48c.84.8.87 2.12.07 2.96-.8.84-2.12.87-2.96.07l-10.52-10v9.08a2.1 2.1 0 11-4.2 0V96.2L48.6 106.61c-.84.8-2.17.76-2.96-.07-.8-.84-.77-2.17.07-2.96L58.84 91.1c.21-.2.46-.35.71-.45v-9.39H2.1a2.1 2.1 0 110-4.2H15V12.44H2.1a2.1 2.1 0 110-4.2h57.12V2.1z" />
    </svg>
  </span>
);

export default WhiteboardOutlined;
