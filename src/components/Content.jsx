import { motion } from 'framer-motion';
import { AiFillHeart } from 'react-icons/ai';
import { FaBookmark, FaCommentDots } from 'react-icons/fa';
import { PiShareFatFill } from 'react-icons/pi';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './Content.css';

const Underline = ({ page, setPage }) => {
  return (
    <div className="overlay page-select">
      <motion.div className="select" style={{ opacity: page === 'following' ? 1 : 0.5 }} onClick={() => setPage('following')}>
        Following
        {page === 'following' && (
          <motion.div className="underline" layoutId="underline" />
        )}
      </motion.div>
      <motion.div className="select" animate={{ opacity: page === 'fyp' ? 1 : 0.5 }} onClick={() => setPage('fyp')}>
        For You
        {page === 'fyp' && (
          <motion.div className="underline" layoutId="underline" />
        )}
      </motion.div>
    </div>
  );
};

const ACTIONS = [
  {
    icon: <AiFillHeart style={{ fontSize: '4rem' }} />,
    text: 9999,
  },
  {
    icon: <FaCommentDots />,
    text: 9999,
  },
  {
    icon: <FaBookmark />,
    text: 9999,
  },
  {
    icon: <PiShareFatFill />,
    text: 9999,
  },
];

const ActionItem = ({ icon, text, onClick }) => {
  return (
    <div className="action-item">
      <div className="action-icon">{icon}</div>
      <div className="action-text">{text}</div>
    </div>
  );
};

const Actions = (props) => {
  return (
    <div className="actions-container">
      <div className="profile-container">
        <div className="profile"></div>
      </div>
      {ACTIONS.map((actionInfo, i) => <ActionItem key={i} icon={actionInfo.icon} text={actionInfo.text} onClick={() => {}} />)}
      <div className="record">
        
      </div>
    </div>
  );
};

export const Content = () => {
  const [page, setPage] = useState('fyp');

  return (
    <div className="content-container">
      <div>
        <Underline page={page} setPage={setPage} />
        <Actions />
      </div>
    </div>
  );
};