import React, { memo } from 'react';

const Comic = memo(({ title, description, image }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }}/>
      <img src={image} alt={description} />
      <hr/>
    </div>
  );
});

export default Comic;
