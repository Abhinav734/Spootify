import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DiscoverItem from './DiscoverItem';
import '../styles/_discover-block.scss';

function scrollContainer(id, { isNegative } = {}) {
  return () => {
    const scrollableContainer = document.getElementById(id);
    const amount = isNegative ? -scrollableContainer.offsetWidth : scrollableContainer.offsetWidth;

    scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
  };
}

export default function DiscoverBlock({ text, id, data, imagesKey = 'images' }) {

  useEffect(() => {
    fetch('https://api.spotify.com/v1/browse/new-releases', {headers: new Headers(
      {
        'Content-type': 'application/json',
        'Authorization': `Bearer BQBeWN4c9GB_0i_HA7m84g1z720lSC1UjwO6hpJ--yPbC97q4SWF1FsLodFcQQctulhbN6EARoJtSbzZJflYi_Se8C0XJ_U8NDPH7g_e7DJPmYiMd6Nsikf8k5t0D8FJu40VxNTNX6KqThnm-x12xzttl1Ay9r6SgTrXuurevr6SztIzoZMmsaJLRUQt__k`
  })})
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);
  return (
    <div className="discover-block">
      <div className="discover-block__header">
        <h2>{text}</h2>
        <span />
      
        {
          data.length ? (
            <div className="animate__animated animate__fadeIn">
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={scrollContainer(id, { isNegative: true })}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={scrollContainer(id)}
              />
            </div>
          ) : null
        }
      </div>
      <div className="discover-block__row" id={id}>
      <div>Hello</div>
        {data.map(({ [imagesKey]: images, name }) => (
          <DiscoverItem key={name} images={images} name={name} />
        ))}
      </div>
    </div>
  );
}
