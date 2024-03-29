import React from 'react';

interface RectButtonProps {
  className?: string,
  onClick: Function,
  onMouseOver?: Function,
  onMouseLeave?: Function,
  isActive?: boolean,
  text: string,
  width?: string,
  height?: string,
  isGlowing?: boolean
}

export const RectButton: React.FC<RectButtonProps> = props => {

  const buttonIsActive = props.isActive === undefined ? true : props.isActive;

  const handleClick = () => {
    if (!buttonIsActive) {
      return;
    }
    props.onClick()
  };

  const onMouseOver = () => {
    if (props.onMouseOver !== undefined) {
      props.onMouseOver();
    }
  }

  const onMouseLeave = () => {
    if (props.onMouseLeave !== undefined) {
      props.onMouseLeave();
    }
  }

  return (
    <div className={`RectButton ${props.className}`}
         onClick={handleClick}
         onMouseOver={onMouseOver}
         onMouseLeave={onMouseLeave}>
      <div className={`button border-button ${buttonIsActive ? 'enabled' : 'disabled'} ${props.isGlowing ? 'glow' : ''}`}>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
