import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import GuestsSelect from 'components/UI/GuestsSelect/GuestsSelect';
import moment from 'moment';
import { FC } from 'react';
import { CommonMeetingType } from '../../types/CommonTypes';
import styles from './DashboardRoom.module.scss';

interface FullRoomInfoProps {
  booking: CommonMeetingType;
}

const FullRoomInfo: FC<FullRoomInfoProps> = ({ booking }) => {
  const editedCreatedAt: string = moment(booking.createdAt).fromNow();
  const timeFromTo = `${booking.startTime.substring(
    0,
    5,
  )}-${booking.endTime.substring(0, 5)}`;

  return (
    <div className={styles.bookingContainer}>
      <div className={styles.firstLine}>
        <div>
          <div className={styles.id}>{booking.title}</div>
        </div>
        <div className={styles.createdAt}>{editedCreatedAt}</div>
      </div>
      <div className={styles.infoBookingBlock}>
        <CalendarOutlined className={styles.fullInfoIcon} />
        {`${moment.weekdays(booking.meetingDate).toString()}, ${moment(
          booking.meetingDate,
        )
          .startOf('month')
          .format('MMM')} ${moment(booking.meetingDate).get('date')}`}
      </div>
      <div className={styles.infoBookingBlock}>
        <ClockCircleOutlined className={styles.fullInfoIcon} />
        {timeFromTo}
      </div>
      <div>
        <GuestsSelect guests={booking.guests} />
      </div>
    </div>
  );
};

export default FullRoomInfo;
