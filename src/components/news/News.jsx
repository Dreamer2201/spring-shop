import React from 'react'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid';

import img1 from '../../images/house2/1.jpg'
import { WrapperNews, TitleNews, ListNews, ItemNews, NewContent, DotCard } from './StyledNews'

export default function News() {

    const idFirstNew = nanoid()
    const idSecondNew = nanoid()
    const idThriedNew = nanoid()
    const idForthNew = nanoid()

  return (
    <WrapperNews>
        <TitleNews>News</TitleNews>
        <ListNews>
            <ItemNews key={idFirstNew}>
                <h3>Title new 1</h3>
                <img src={img1} alt="" width="100" />
                <NewContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorum fugiat eveniet consectetur, nesciunt quaerat ipsum ad.
                </NewContent>
                <Link to={`/news/:${idFirstNew}`} >
                    <button type='button' >Read more</button>
                </Link>
                
            </ItemNews>
            <ItemNews key={idSecondNew}>
                <h3>Title new 2</h3>
                <img src={img1} alt="" width="100" />
                <NewContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorum fugiat eveniet consectetur, nesciunt quaerat ipsum ad.
                </NewContent>
                <Link to={`/news/:${idSecondNew}`} >
                    <button type='button' >Read more</button>
                </Link>
                
            </ItemNews>
            <ItemNews key={idThriedNew}>
                <h3>Title new 3</h3>
                <img src={img1} alt="" width="100" />
                <NewContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorum fugiat eveniet consectetur, nesciunt quaerat ipsum ad.
                </NewContent>
                <Link to={`/news/:${idThriedNew}`} >
                    <button type='button' >Read more</button>
                </Link>
                
            </ItemNews>
            <ItemNews key={idForthNew}>
                <h3>Title new 4</h3>
                <img src={img1} alt="" width="100" />
                <NewContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorum fugiat eveniet consectetur, nesciunt quaerat ipsum ad.
                </NewContent>
                <Link to={`/news/^${idForthNew}`} >
                    <button type='button' >Read more</button>
                </Link>
                
            </ItemNews>
        </ListNews>

    </WrapperNews>
  )
}
