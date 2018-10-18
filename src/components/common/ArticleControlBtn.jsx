import React from 'react';
import { Link } from 'react-router-dom';

const ArticleControlBtn = (props) => {
  const {
    link, slug, handleDelete // eslint-disable-line
  } = props;
  return (
    <div>
      <Link
        to={link}
        className="dropdown-item"
      >
  Edit
      </Link>
      <a
        className="dropdown-item"
        onClick={() => handleDelete(slug)}
        href="#"
      >
  Delete
      </a>
    </div>
  );
};

const ReportBtn = (props) => {
  const { showReportModal } = props; // eslint-disable-line
  return (
    <a
      className="dropdown-item"
      onClick={showReportModal}
      href="#"
    >
  Report
    </a>
  );
};

export { ArticleControlBtn, ReportBtn };
