import React from 'react';
import '../Styles/MonthlyIssue.scss';
import '../Styles/CustomCard.scss';

/*eslint-disable*/
export default function CustomCard(props) {
  const getArticlesOfIssue = () => {
    let issueTag = props.month.toLowerCase().slice(6, 11) + props.year.slice(2);
    sessionStorage.setItem('taglist', JSON.stringify({ tags: [issueTag] }));
    props.history.push('/abt');
  };

  return (
    <div className='monthly-box'>
      {/* <h2>Issue #18</h2> */}
      <h2>
        {' '}
        {props.month}, {props.year}{' '}
      </h2>
      <a onClick={getArticlesOfIssue}> View All </a> <br />
      <span className='issue-des'>{props.description}</span>
      <div className='img-cont'>
        <img
          alt='monthly magazine cover'
          src='https://cdn.iit-techambit.in/cover/jun19.jpg'
        />
      </div>
      <a href={props.link} className='view-issue-btn'>
        Download Issue ➡
      </a>
    </div>
  );
}
