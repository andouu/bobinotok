import { motion } from 'framer-motion';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaBookmark, FaCommentDots } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { PiShareFatFill } from 'react-icons/pi';
import { useEffect, useRef, useState } from 'react';
import './Home.css';
import { TIKTOKS } from '../data/tiktoks';
import { PFPS } from '../data/pfps';
import { formatNumber } from '../helpers/format';
import { randomComment, randomInt } from '../helpers/random';
import { FRIENDS } from '../data/users';

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

const ActionItem = ({ accessor, icon, text, tiktok, tiktokState, setTikTokStates, openComments, openShare }) => {
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

  const determineAction = () => {
    switch (accessor) {
      case 'likes':
        return handleLike;
      case 'comments':
        return openComments;
      case 'saves':
        return handleSave;
      case 'shares':
        return openShare;
      default:
        return undefined;
    }
  };

  const action = determineAction();
  
  return (
    <div className="action-item">
      <motion.div
        className="action-icon"
        animate={{ color }}
        transition={{ duration: 0.1, }}
        whileTap={{ scale: 0.8 }}
        onClick={action}
      >
        {icon}
      </motion.div>
      <div className="action-text">{text}</div>
    </div>
  );
};

const Actions = ({ tiktok, tiktokStates, setTikTokStates, openComments }) => {
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
          openComments={openComments}
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

const CommentItem = ({ comment }) => {
  const randomFriend = FRIENDS[randomInt(0, FRIENDS.length)];
  const randomDate = randomInt(1, 13) + '-' + randomInt(1, 30);
  const randomLikes = randomInt(1, 99999999);

  return (
    <div className="comment-item">
      <div className="comment-item-pfp-container">
        <img className="comment-item-pfp" src={PFPS[randomFriend]} alt={randomFriend} />
      </div>
      <div className="comment-item-middle">
        <div className="comment-item-username">{randomFriend}</div>
        <div className="comment-item-comment">{comment}</div>
        <div className="comment-item-date">{randomDate}</div>
      </div>
      <div className="comment-item-extras">
        <AiOutlineHeart
          size="1.3rem"
          color="gray"
          style={{ marginBottom: '0.25rem' }}
        />
        <div className="comment-item-likes">{formatNumber(randomLikes)}</div>
      </div>
    </div>
  );
};

const CommentsModal = ({ tiktok, commentsOpen, closeComments }) => {
  const currVariant = commentsOpen ? 'open' : 'closed';
  
  const modalVariants = {
    open: {
      bottom: '-6.5rem',
    },
    closed: {
      bottom: '-72rem',
    }
  };

  let randomComments = [];

  for (let i = 0; i < 99; i++) {
    randomComments.push(randomComment());
  }

  return (
    <motion.div
      className="comments-modal-container"
      variants={modalVariants}
      animate={currVariant}
    >
      <div className="comments-header">{tiktok.meta.comments} comments
        <IoCloseSharp className="comments-close-btn" size="2rem" onClick={closeComments} />
      </div>
      <div className="comments-container">
        {randomComments.map((comment, i) => (
          <CommentItem key={comment + i} comment={comment} />
        ))}
      </div>
    </motion.div>
  );
};

export const Home = () => {
  const [page, setPage] = useState('fyp');
  const [tiktokIndex, setTikTokIndex] = useState(0);
  const [tiktokStates, setTiktokStates] = useState({});
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [videoPaused, setVideoPaused] = useState(true);

  const videoRefs = useRef(new Array(TIKTOKS.length).fill(null));

  const handleDragEnd = (event, info) => {
    if (info.offset.y < -200 && tiktokIndex !== TIKTOKS.length - 1) {
      const nextIndex = tiktokIndex + 1;
      if (videoRefs.current[tiktokIndex] !== null) {
        videoRefs.current[tiktokIndex].pause();
        videoRefs.current[tiktokIndex].currentTime = 0;
      }
      if (videoRefs.current[nextIndex] !== null) {
        videoRefs.current[nextIndex].currentTime = 0;
        videoRefs.current[nextIndex].play();
      }
      setTikTokIndex(nextIndex);
    }
    if (info.offset.y > 200 && tiktokIndex !== 0) {
      const previousIndex = tiktokIndex - 1;
      if (videoRefs.current[tiktokIndex] !== null) {
        videoRefs.current[tiktokIndex].pause();
        videoRefs.current[tiktokIndex].currentTime = 0;
      }
      if (videoRefs.current[previousIndex] !== null) {
        videoRefs.current[previousIndex].currentTime = 0;
        videoRefs.current[previousIndex].play();
      }
      setTikTokIndex(previousIndex);
    }
  };

  const handlePause = (i) => {
    if (videoRefs.current[i] !== null) {
      setVideoPaused(true);
      videoRefs.current[i].pause();
    }
  };

  const handleUnpause = (i) => {
    if (videoRefs.current[i] !== null) {
      setVideoPaused(false);
      videoRefs.current[i].play();
    }
  };

  return (
    <div className="home-container">
      <div className="overlay">
        <Underline page={page} setPage={setPage} />
        <Actions
          tiktok={TIKTOKS[tiktokIndex]}
          tiktokStates={tiktokStates}
          setTikTokStates={setTiktokStates}
          openComments={() => setCommentsOpen(true)}
          openShare={() => alert('No')}
        />
        <Texts tiktok={TIKTOKS[tiktokIndex]} />
        <CommentsModal tiktok={TIKTOKS[tiktokIndex]} commentsOpen={commentsOpen} closeComments={() => setCommentsOpen(false)} />
      </div>
      <div className="content-container">
        <motion.div
          className="content"
          initial={{ top: 0 }}
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
              <div key={tiktok.user + i} className="tiktok-container" onClick={videoPaused ? () => handleUnpause(i) : () => handlePause(i)}>
                <video ref={(el) => videoRefs.current[i] = el} className="tiktok-video" src={tiktok.src} loop />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};