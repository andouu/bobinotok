import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { BiUser, BiSolidUser } from 'react-icons/bi';
import { BsInbox, BsInboxFill } from 'react-icons/bs';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Layout.css';

const tabs = [
  {
    name: 'Home',
    iconFilled: <AiFillHome />,
    iconOutlined: <AiOutlineHome />,
    href: '/',
  },
  {
    name: 'Inbox',
    iconFilled: <BsInbox />,
    iconOutlined: <BsInboxFill />,
    href: '/inbox',
  },
  {
    name: 'Profile',
    iconFilled: <BiUser />,
    iconOutlined: <BiSolidUser />,
    href: '/profile',
  },
]

const TabItem = (props) => {
  return (
    <div className="tab-item">
      <Link className="tab-icon" style={{ color: props.selected ? 'white' : undefined }} to={props.href}>
        {props.iconFilled}
        {props.name === 'Inbox' && (
          <div className="badge">99+</div>
        )}
      </Link>
      <div className="tab-name" style={{ color: props.selected ? 'white' : undefined }}>{props.name}</div>
    </div>
  );
};

export const Layout = () => {
  const location = useLocation();
  
  return (
    <div className="layout-container">
      <div className="content">
        <Outlet />
      </div>
      <div className="tabs">
        {tabs.map((tab, i) => (
          <TabItem
            key={i}
            selected={location.pathname === tab.href}
            name={tab.name}
            iconFilled={tab.iconFilled}
            iconOutlined={tab.iconOutlined}
            href={tab.href}
          />
        ))}
      </div>
    </div>
  );
};