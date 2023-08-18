import { PFPS } from '../data/pfps';
import { AUSTIN, FRIENDS } from '../data/users';
import { randomInt } from '../helpers/random';
import './Inbox.css';

const FriendBarItem = ({ name, pfp }) => {
  return (
    <div className="friend-bar-item">
      <img className="friend-bar-item-pfp" src={pfp} />
      <div className="friend-bar-item-name">{name}</div>
    </div>
  );
};

const FriendMessageItem = ({ name, pfp }) => {
  let randomTime;
  const hour = randomInt(1, 13);
  const randomMinute = randomInt(1, 60);
  const am = Math.random() <= 0.5;
  if (randomMinute < 10) {
    randomTime = `${hour}:0${randomMinute} ${am ? 'AM' : 'PM'}`;
  }
  else {
    randomTime = `${hour}:${randomMinute} ${am ? 'AM' : 'PM'}`;
  }

  return (
    <div className="friend-message-item">
      <div className="friend-message-item-pfp-container">
        <img className="friend-message-item-pfp" src={pfp} />
      </div>
      <div className="friend-message-middle">
        <div className="friend-message-item-name">{name}</div>
        <div className="friend-message-item-description">shared a video</div>
      </div>
      <div className="friend-message-item-extras-container">
        <div className="friend-message-item-time">{randomTime}</div>
        <div className="friend-message-item-badge">{randomInt(3, 75)}</div>
      </div>
    </div>
  );
};

export const Inbox = () => {
  return (
    <div className="inbox-container">
      <div className="inbox-header">
        <div>Inbox</div>
      </div>
      <div className="friends-bar">
        <div className="friend-bar-item" style={{ position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <img className="friend-bar-item-pfp" src={PFPS[AUSTIN]} />
            <div className="create-container">
              <div>+</div>
            </div>
          </div>
          <div className="friend-bar-item-name">Create</div>
        </div>
        {FRIENDS.map((name) => (
          <FriendBarItem name={name} pfp={PFPS[name]} />
        ))}
      </div>
      <div className="messages-container">
        {FRIENDS.map((name) => (
          <FriendMessageItem name={name} pfp={PFPS[name]} />
        ))}
      </div>
    </div>
  );
};