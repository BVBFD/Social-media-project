import React from 'react';
import ChatOnline from '../../components/chatOnline/ChatOnline';
import Conversation from '../../components/conversations/Conversation';
import Message from '../../components/message/Message';
import Topbar from '../../components/topbar/Topbar';
import styles from './Messenger.module.css';

const Messenger = (props) => {
  return (
    <>
      <Topbar />
      <div className={styles.messenger}>
        <div className={styles.chatMenu}>
          <div className={styles.chatMenuWrapper}>
            <input
              placeholder='Search for friends'
              className={styles.chatMenuInput}
            />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className={styles.chatBox}>
          <div className={styles.chatBoxWrapper}>
            <div className={styles.chatBoxTop}>
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message own={true} />
            </div>
            <div className={styles.chatBoxBottom}>
              <textarea
                className={styles.chatMessageInput}
                placeholder='write something...'
              ></textarea>
              <button className={styles.chatSubmitButton}>Send</button>
            </div>
          </div>
        </div>
        <div className={styles.chatOnline}>
          <div className={styles.chatOnlineWrapper}>
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
