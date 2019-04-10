import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './styles.styl'

const cx = classNames.bind(styles)

export default class Splash extends React.PureComponent {

  render() {
    return (
      <div className={cx('splash')}>
        <div className={cx('content')}>
          <a href='/movies/1291572' className={cx('button')}>查看详情</a>
        </div>
      </div>
    )
  }
}