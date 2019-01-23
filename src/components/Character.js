import React, { memo } from 'react';
import { Link } from '@reach/router';

const Character = memo(({ id, name, description, image }) => {
  return (
    <div>
      <Link to={`/comics/${id}`}><h3>{name}</h3></Link>
      <p dangerouslySetInnerHTML={{ __html: description }}/>
      <img src={image} alt={description} />
      <hr/>
    </div>
  );
});

export default Character;
