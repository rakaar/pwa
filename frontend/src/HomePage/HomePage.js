import React, { useState, useEffect } from 'react';
import CustomCarousel from './CustomCarousel';
import FeaturedArticle from './FeaturedArticles';
import MonthlyIssue from './MonthlyIssue';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

import '../Styles/HomePage.scss';

const getMonth = () => {
  var month = new Array();
  month[0] = 'January';
  month[1] = 'February';
  month[2] = 'March';
  month[3] = 'April';
  month[4] = 'May';
  month[5] = 'June';
  month[6] = 'July';
  month[7] = 'August';
  month[8] = 'September';
  month[9] = 'October';
  month[10] = 'November';
  month[11] = 'December';

  let d = new Date();
  let n = month[d.getMonth()];
  return n;
};

const getYear = () => {
  let d = new Date();
  let n = d.getFullYear();
  return n;
};

export default function HomePage() {
  const [carouselArts, SetCarouselArts] = useState([]);
  const [featuredArts, SetFeaturedArts] = useState([]);

  const [currentIssue, SetCurrentIssue] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let articleRes, issueRes, currentMonth, currentMonthIssue;
      articleRes = await connectBackend.getData(
        config.endpoints.article.getAll,
        {
          num: 6
        }
      );
      articleRes = articleRes.data;
      SetCarouselArts(articleRes.slice(0, 3));
      SetFeaturedArts(articleRes.slice(3, 6));
      issueRes = await connectBackend.getData(
        config.endpoints.issue.getAll,
        {}
      );
      //  Cannot use this currently
      // currentMonth = await getMonth();
      // currentMonthIssue = issueRes.filter(item => {
      //   return item.month === currentMonth.toLowerCase().split(0, 3);
      // });
      // SetCurrentIssue(currentMonthIssue);

      // hardcoded since we are not in acc to time
      currentMonthIssue = issueRes.data.resource.filter(item => {
        return item.issue_tag === 'jun19';
      });
      SetCurrentIssue(currentMonthIssue);
    };
    fetchData();
  }, []);

  return (
    <div>
      <CustomCarousel carouselArts={carouselArts} />
      <div className='grid-v'>
        <div className='left-gw'>
          <span className='section-title'>Popular Posts ✨</span>
          {featuredArts.map(item => {
            return (
              <FeaturedArticle
                tags={item.tags}
                title={item.title}
                author={item.author}
                post_time={item.post_time}
                post_id={item.post_id}
                imgLinks={item.imgLinks}
              />
            );
          })}
          {/* <FeaturedArticle />
          <FeaturedArticle />
          <FeaturedArticle /> */}
        </div>
        <div className='right-gw'>
          <MonthlyIssue
            month={getMonth()}
            year={getYear()}
            cover={currentIssue.cover_link}
            link={currentIssue.link}
            description={currentIssue.description}
            id={currentIssue.id}
          />
        </div>
      </div>
    </div>
  );
}
