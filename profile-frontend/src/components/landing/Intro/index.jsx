
import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import heroImage from 'assets/illustrations/Header.png';
import { greeting, greetingDescription, linkedinUrl, githubUrl, mediumUrl, devUrl, cvLink } from 'data/config';
import linkedinLogo from 'assets/illustrations/linkedin_logo.png';
import githubLogo from 'assets/illustrations/github_logo.png';
import linkedinLogoWhite from 'assets/illustrations/linkedin_white.png';
import githubLogoWhite from 'assets/illustrations/github_white.png';
import mediumLogo from 'assets/illustrations/medium_logo.png';
import mediumLogoWhite from 'assets/illustrations/medium_logo_white.png';
import devLogo from 'assets/illustrations/dev_logo.png';
import devLogoWhite from 'assets/illustrations/dev_logo_white.png';

import { IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>{greeting} <img width="65" src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" alt="hey"/>
          </h1>
          <h4>{greetingDescription}</h4>
          <div>
            <Button as={AnchorLink} href="#contact" className="hire-me">
              Hire me
            </Button>{' '}
            <a href={cvLink} target="_blank" rel="noreferrer">
              <Button className="view-cv">View CV</Button>
            </a>
          </div>
          <div className="social">
            {' '}
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              <img width="45" src={theme === 'light' ? linkedinLogo : linkedinLogoWhite} alt="Linkedin" />
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <img width="45" src={theme === 'light' ? githubLogo : githubLogoWhite} alt="GitHub" />
            </a>
            <a href={mediumUrl} target="_blank" rel="noreferrer">
              <img width="45" src={theme === 'light' ? mediumLogoWhite : mediumLogo} alt="Medium" />
            </a>
            <a href={devUrl} target="_blank" rel="noreferrer">
              <img width="45" src={theme === 'light' ? devLogoWhite : devLogo} alt="Dev" />
            </a>
          </div>
        </Details>
        <Thumbnail>
          <img src={heroImage} alt="Crio.Do" />
        </Thumbnail>
      </IntroWrapper>
    </div>
  );
};
