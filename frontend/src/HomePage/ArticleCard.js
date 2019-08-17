import React from 'react';
import CustomCard from './CustomCard'

export default function ArticleCard() {
    return(
        <div className='article-card'>
            <h3>Articles</h3>
            <CustomCard />
            <CustomCard />
            <CustomCard />
        </div>
    )
}