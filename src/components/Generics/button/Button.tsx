import React from 'react';
import './button.scss';

interface Props {
    content: string
}
function Button(props: Props) {
    return (
      <>
        <a href="/" className='btn-primary'>
          {props.content}
        </a>
      </>
    );
}

export default Button