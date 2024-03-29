import { useState } from 'react';
import { Button, StyledFooterButtons } from './styles/FooterBtns.styled';

export default function FooterButtons({ allActiveCompleted }) {
  const [value, setValue] = useState(0);
  const buttons = ['all', 'active', 'completed'];

  return (
    <StyledFooterButtons>
      {buttons.map((button, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              setValue(index);
              allActiveCompleted(button);
            }}
            className={`${index === value ? 'active' : ''}`}
          >
            {button}
          </Button>
        );
      })}
    </StyledFooterButtons>
  );
}
