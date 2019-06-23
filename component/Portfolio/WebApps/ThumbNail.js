import React from 'react';
import Link from 'next/link';

const ThumbNail = ({ title, summary, appLink, imgFilePath, githubRepo }) => (
  <div className="ThumbNail">
    <div className="ThumbNail-left">
      <h2>{title}</h2>
      <p>{summary}</p>
      <Link href={appLink}>
        <a>Go to the app</a>
      </Link>
    </div>

    <div className="ThumbNail-right">
      <img src={imgFilePath} />

      <Link href={githubRepo}>
        <a>Github Repo</a>
      </Link>
    </div>
  </div>
);

export default ThumbNail;