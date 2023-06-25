'use client';
import TimeAgo from 'react-timeago';

interface TimeStampProps {
  time: string;
}
const TimeStamp = ({ time }: TimeStampProps) => {
  return <TimeAgo date={time} />;
};
export default TimeStamp;
