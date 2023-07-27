import React from 'react';
import './button.scss';

interface Props {
    content: string
    link:string
}
function Button(props: Props) {
    return (
      <>
        <a href={props.link} className='btn-primary'>
          {props.content}
        </a>
      </>
    );
}

export default Button