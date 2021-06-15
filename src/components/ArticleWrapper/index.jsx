import React from 'react';
import PropTypes from 'prop-types';

function ArticleWrapper ({ title, children }) {
  return (
    <article>
      <h2>{title}</h2>
      <div>{children}</div>
    </article>
  );
}

ArticleWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ArticleWrapper;
