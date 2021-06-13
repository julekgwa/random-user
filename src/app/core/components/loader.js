import React from 'react';

import Skeleton from 'react-loading-skeleton';

export function Loader() {

  return (
    <div className='loader'>
      <Skeleton duration={2} circle={true} height={100} width={100} />
      <br />
      <Skeleton style={{
        marginTop: 30,
      }} duration={2} height={25} width={'70%'} />
      <Skeleton duration={2} height={20} />

      <Skeleton style={{
        marginTop: 30,
      }} duration={2} height={20} width={'80%'} />
      <Skeleton duration={3} height={25} width={'70%'} />
      <Skeleton duration={1.2} height={20} />
    </div>
  );

}
