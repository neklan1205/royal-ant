import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import ActionLink from './ActionLink';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer outer">
              <div className="inner">
                <div className="site-footer-inside">
                  <div className="site-info">
                    {_.get(this.props, 'data.config.footer.content', null) && (
                    <span className="copyright">{htmlToReact(_.get(this.props, 'data.config.footer.content', null))}</span>
                    )}
                    {_.map(_.get(this.props, 'data.config.footer.links', null), (action, action_idx) => (
                      <ActionLink key={action_idx} {...this.props} action={action} />
                    ))}
                  </div>
                  {_.get(this.props, 'data.config.footer.has_social', null) && (
                  <div className="social-links">
                    {_.map(_.get(this.props, 'data.config.footer.social_links', null), (action, action_idx) => (
                      <ActionLink key={action_idx} {...this.props} action={action} />
                    ))}
                    <a href="https://www.digitalocean.com/?refcode=b01f5b38562f&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg" alt="DigitalOcean Referral Badge" /></a>
                  </div>
                  )}
                </div>
              </div>
            </footer>
        );
    }
}
