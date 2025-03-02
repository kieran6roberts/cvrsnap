import { Link } from 'react-router';

import classes from './styles/Footer.module.css';
import { Logo } from '~/shared/components/Logo';
import { GridBackground } from '~/shared/components/GridBackground';
import { GITHUB_URL, SITE_NAME, CREATE_ROUTE, SITE_CASE_STUDY_URL } from '~/config/consts';

export function Footer() {
  return (
    <footer className={classes['footer']}>
      <GridBackground />
      <div className={classes['footer-content']}>
        <div className={classes['footer-content--links']}>
          <ul className={classes['footer-content--links-list']}>
            <span className={classes['footer-content--links-header']}>{SITE_NAME}</span>
            <li className={classes['footer-content--links-item']}>
              <Link className={classes['footer-content--links-link']} to={CREATE_ROUTE}>
                Editor
              </Link>
            </li>
            <li className={classes['footer-content--links-item']}>
              <Link className={classes['footer-content--links-link']} to={GITHUB_URL} target="_blank" rel="noreferrer">
                GitHub
              </Link>
            </li>
          </ul>
          <ul className={classes['footer-content--links-list']}>
            <span className={classes['footer-content--links-header']}>Blog</span>
            <li className={classes['footer-content--links-item']}>
              <Link
                className={classes['footer-content--links-link']}
                to={SITE_CASE_STUDY_URL}
                target="_blank"
                rel="noreferrer"
              >
                Making of CvrSnap
              </Link>
            </li>
          </ul>
        </div>

        <Logo />
      </div>
    </footer>
  );
}
