import React from 'react'
import PropTypes from 'prop-types'
import styles from './fireAlarm.less'
import { routerRedux, Link} from 'dva/router'

function FireAlarm ({ name, content, title, avatar, barnNo }) {
  console.log('barnNo is:', barnNo)
  return (
    <div className={styles.quote}>
      <div className={styles.inner}>
        {content}
      </div>
      <div className={styles.footer}>
        <div className={styles.description}>
          <p>{name}</p>
          <h1><Link to='/fire_alarm'>{title}</Link></h1>
          {/*<h1><Link to={`/fire_alarm/${barnNo}`}>{title}</Link></h1>*/}
        </div>
        <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }} />
      </div>
    </div>
  )
}

FireAlarm.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string,
}

export default FireAlarm

