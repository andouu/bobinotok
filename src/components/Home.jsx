import { motion } from 'framer-motion';
import { AiFillHeart } from 'react-icons/ai';
import { FaBookmark, FaCommentDots } from 'react-icons/fa';
import { PiShareFatFill } from 'react-icons/pi';
import { useState } from 'react';
import './Home.css';
import { TIKTOKS } from '../data/tiktoks';
import { PFPS } from '../data/pfps';
import { formatNumber } from '../helpers/format';

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
    key: 'likes',
    icon: <AiFillHeart style={{ fontSize: '3.5rem' }} />,
  },
  {
    key: 'comments',
    icon: <FaCommentDots />,
  },
  {
    key: 'saves',
    icon: <FaBookmark />,
  },
  {
    key: 'shares',
    icon: <PiShareFatFill />,
  },
];

const ActionItem = ({ accessor, icon, text, tiktok, tiktokState, setTikTokStates }) => {
  const liked = tiktokState ? tiktokState.liked : false;
  const saved = tiktokState ? tiktokState.saved : false;

  const handleLike = () => {
    setTikTokStates((prev) => ({
      ...prev,
      [tiktok.id]: {
        ...prev[tiktok.id],
        liked: !liked,
      }
    }));
  };

  const handleSave = () => {
    setTikTokStates((prev) => ({
      ...prev,
      [tiktok.id]: {
        ...prev[tiktok.id],
        saved: !saved,
      }
    }));
  };

  const determineColor = () => {
    switch (accessor) {
      case 'likes':
        return liked ? 'var(--red)' : undefined;
      case 'saves':
        return saved ? 'var(--yellow)' : undefined;
      default:
        return undefined;
    }
  };

  const color = determineColor();
  
  return (
    <div className="action-item">
      <motion.div
        className="action-icon"
        animate={{ color }}
        transition={{
          duration: 0.1,
        }}
        onClick={accessor === 'likes' ? handleLike : accessor === 'saves' ? handleSave : undefined}
      >
        {icon}
      </motion.div>
      <div className="action-text">{text}</div>
    </div>
  );
};

const Actions = ({ tiktok, tiktokStates, setTikTokStates }) => {
  return (
    <div className="actions-container">
      <div className="profile-container">
        <div className="profile">
          <img className="profile-img" src={PFPS[tiktok.user]} alt={tiktok.user} />
        </div>
      </div>
      {ACTIONS.map((actionInfo) => (
        <ActionItem
          key={actionInfo.key}
          accessor={actionInfo.key}
          icon={actionInfo.icon}
          text={formatNumber(tiktok.meta[actionInfo.key])}
          tiktok={tiktok} 
          tiktokState={tiktokStates[tiktok.id]}
          setTikTokStates={setTikTokStates}
          onClick={() => {}}
        />
      ))}
      <div className="record">
        <img className="record-img" src={PFPS[tiktok.user]} alt={tiktok.user} />
      </div>
    </div>
  );
};

const Texts = ({ tiktok }) => {
  return (
    <div className="texts-container">
      <div className="texts-username">
        {tiktok.user}
      </div>
      <div className="texts-caption">
        {tiktok.caption} {tiktok.tags.map((tag, i) => <div key={i} className="texts-tag">{tag + ' '}</div>)}
      </div>
    </div>
  );
};

export const Home = () => {
  const [page, setPage] = useState('fyp');
  const [tiktokIndex, setTikTokIndex] = useState(0);
  const [tiktokStates, setTiktokStates] = useState({});

  const handleDragEnd = (event, info) => {
    if (info.offset.y < -200 && tiktokIndex !== TIKTOKS.length - 1) {
      setTikTokIndex(tiktokIndex + 1);
    }
    if (info.offset.y > 200 && tiktokIndex !== 0) {
      setTikTokIndex(tiktokIndex - 1);
    }
  };

  return (
    <div className="home-container">
      <div className="overlay">
        <Underline page={page} setPage={setPage} />
        <Actions tiktok={TIKTOKS[tiktokIndex]} tiktokStates={tiktokStates} setTikTokStates={setTiktokStates} />
        <Texts tiktok={TIKTOKS[tiktokIndex]} />
      </div>
      <div className="content-container">
        <motion.div
          className="content"
          animate={{ top: `${-tiktokIndex * 100}%` }}
          transition={{ ease: 'easeOut', duration: 0.25 }}
          drag="y"
          dragConstraints={{
            top: 0,
            bottom: 0,
          }}
          dragElastic={0.5}
          onDragEnd={handleDragEnd}
        >
          {TIKTOKS.map((tiktok, i) => {
            return (
              <div className="tiktok" key={tiktok.user + i} style={{ backgroundColor: i % 2 === 0 ? 'red' : 'blue'}}>

              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};