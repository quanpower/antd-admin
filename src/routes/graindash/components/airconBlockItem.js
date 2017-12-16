import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux, Link } from 'dva/router'

import styles from './airconBlockItem.less'

function AirconBlockItem ({ name, content, link, title, avatar }) {

  return (
    <div className={styles.airconBlockItem}>
      <div className={styles.inner}>
        {content}
      </div>
      <div className={styles.footer}>
        <div className={styles.description}>
          <p>{name}</p>
          <h1><Link to={`${link}`}> {title} </Link></h1>
        </div>
        <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }} />
      </div>
    </div>
  )

}

AirconBlockItem.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string,
}

export default AirconBlockItem
