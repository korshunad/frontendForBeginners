import React from 'react';
import PropTypes from 'prop-types';

import {
  FacebookShareButton,
  TwitterShareButton
} from 'react-share';

const Share = ({ socialConfig, tags }) => (
  <div className="post-social flex flex-row">
    <FacebookShareButton url={socialConfig.config.url} className="dim pointer button">
      <span className="icon">
        <img src="/facebook-noframe.svg" alt="Share on Facebook"/>
      </span>
    </FacebookShareButton>
    <TwitterShareButton url={socialConfig.config.url} className="dim pointer button" title={socialConfig.config.title} via={socialConfig.twitterHandle.split('@').join('')} hashtags={tags}>
      <span className="icon">
        <img src="/twitter-noframe.svg" alt="Share on Twitter"/>
      </span>
    </TwitterShareButton>
  </div>
);

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterHandle: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};
Share.defaultProps = {
  tags: []
};

export default Share;
