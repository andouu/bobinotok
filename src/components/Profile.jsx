import { motion } from 'framer-motion';
import { AiOutlineLock, AiOutlineHeart } from 'react-icons/ai';
import { FaRegBookmark } from 'react-icons/fa';
import { LuStretchVertical } from 'react-icons/lu';
import { IoMdArrowDropdown } from 'react-icons/io';
import { PFPS } from '../data/pfps';
import { AUSTIN } from '../data/users';
import './Profile.css';
import { useState } from 'react';

const Drafts = () => {
  return (
    <div>
      <h1 className="profile-content-title">Your drafts</h1>
      <p className="profile-content-description">
        Your drafts will appear here.
      </p>
    </div>
  );
};

const PrivateVids = () => {
  return (
    <div>
      <h1 className="profile-content-title">Your private videos</h1>
      <p className="profile-content-description">
        To make your videos only visible to you, set them to "Private" in settings.
      </p>
    </div>
  );
};

const CATEGORIES = [
  'Posts', 'Collections', 'Sounds',
  'Effects', 'Products', 'Places',
  'Movies and TV', 'Books', 'Comments',
  'Add Yours', 'Hashtags'
];

const SavedVids = () => {
  const [selectedCategory, setSelectedCategory] = useState('Posts');
  const formattedName = selectedCategory[0].toLocaleLowerCase() + selectedCategory.substring(1);
  return (
    <div className="saved-vids-container">
      <div className="segment">
        {CATEGORIES.map((category) => (
          <div key={category} className="segment-item" onClick={() => setSelectedCategory(category)}>
            <div className="segment-item-content" style={{ color: selectedCategory === category ? 'var(--off-white)' : undefined}}>
              {category} 0
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="profile-content-title">Favorite {formattedName}</h1>
        <p className="profile-content-description">
          Your favorite {formattedName} will appear here.
        </p>
      </div>
    </div>
  );
};

const LikedVids = () => {
  return (
    <div>
      <h1 className="profile-content-title">Your liked videos</h1>
      <p className="profile-content-description">
        Your liked videos will appear here.
      </p>
    </div>
  );
};

const tabToComponent = {
  'drafts': <Drafts />,
  'privateVids': <PrivateVids />,
  'savedVids': <SavedVids />,
  'likedVids': <LikedVids />,
};

export const Profile = () => {
  const [selectedTab, setSelectedTab] = useState('drafts');

  return (
    <div className="profile-page-container">
      <div className="profile-header">
        <div>bobinobong</div>
      </div>
      <div className="profile-details-container">
        <div className="pfp-container">
          <img className="pfp" src={PFPS[AUSTIN]} alt="bobinobong" />
        </div>
        <div className="profile-tag">@bobinobong</div>
        <div className="profile-basic-details">
          <div className="profile-basic-detail-item">
            <div className="profile-basic-detail-main">30</div>
            <div className="profile-basic-detail-sub">Following</div>
          </div>
          <div className="profile-basic-detail-item">
            <div className="profile-basic-detail-main">15</div>
            <div className="profile-basic-detail-sub">Followers</div>
          </div>
          <div className="profile-basic-detail-item">
            <div className="profile-basic-detail-main">0</div>
            <div className="profile-basic-detail-sub">Likes</div>
          </div>
        </div>
        <div className="profile-details-buttons">
          <button className="profile-detail-button" onClick={() => alert('Denied')}>
            Edit profile
          </button>
          <button className="profile-detail-button" onClick={() => alert('No can do buckaroo')}>
            Add friends
          </button>
        </div>
        <p className="profile-bio">
          bobino bust bust bust bust bust bust bust bust bust
        </p>
        <div className="profile-select-btn-bar">
          <motion.div
            className="profile-select-btn"
            style={{ color: selectedTab === 'drafts' ? 'var(--regular-text-color)' : undefined }}
            onClick={() => setSelectedTab('drafts')}
          >
            <LuStretchVertical />
            <IoMdArrowDropdown />
            {selectedTab === 'drafts' && (
              <motion.div className="profile-select-underline" layoutId="profile-underline" />
            )}
          </motion.div>
          <motion.div
            className="profile-select-btn"
            style={{ color: selectedTab === 'privateVids' ? 'var(--regular-text-color)' : undefined }}
            onClick={() => setSelectedTab('privateVids')}
          >
            <AiOutlineLock size="1.85rem" />
            {selectedTab === 'privateVids' && (
              <motion.div className="profile-select-underline" layoutId="profile-underline" />
            )}
          </motion.div>
          <motion.div
            className="profile-select-btn"
            style={{ color: selectedTab === 'savedVids' ? 'var(--regular-text-color)' : undefined }}
            onClick={() => setSelectedTab('savedVids')}
          >
            <FaRegBookmark />
            {selectedTab === 'savedVids' && (
              <motion.div className="profile-select-underline" layoutId="profile-underline" />
            )}
          </motion.div>
          <motion.div
            className="profile-select-btn"
            style={{ color: selectedTab === 'likedVids' ? 'var(--regular-text-color)' : undefined }}
            onClick={() => setSelectedTab('likedVids')}
          >
            <AiOutlineHeart size="1.85rem" />
            {selectedTab === 'likedVids' && (
              <motion.div className="profile-select-underline" layoutId="profile-underline" />
            )}
          </motion.div>
        </div>
      </div>
      <div className="profile-tab-content">
        {tabToComponent[selectedTab]}
      </div>
    </div>
  );
};