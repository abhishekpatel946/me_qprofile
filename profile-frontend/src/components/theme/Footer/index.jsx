import React, { useContext } from 'react';
import { Container } from 'components/common';
import { name } from 'data/config';
import { ThemeContext } from 'providers/ThemeProvider';
// import linkedinLogo from 'assets/illustrations/linkedin_logo.png';
// import githubLogo from 'assets/illustrations/github_logo.png';
// import mediumLogo from 'assets/illustrations/medium_logo.png';
// import mediumLogoWhite from 'assets/illustrations/medium_logo_white.png';
// import devLogo from 'assets/illustrations/dev_logo.png';
// import devLogoWhite from 'assets/illustrations/dev_logo_white.png';

import { Wrapper, Flex, Details } from './styles';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper>
      <Flex>
        <Details className={` ${theme === 'light' ? 'footer-light' : 'footer-dark'}`}>
          <Container>
            <div className="root-container">
              <div>
                <h2>{name}</h2>
                <span>© All rights are reserved | {new Date().getFullYear()} </span>

                {/* <div className="powered">
                  <p>Powered By</p>
                  <a href="https://www.crio.do" target="_blank" rel="noreferrer">
                    {' '}
                    <img width="120" src={crio} alt="Crio" />
                  </a>
                </div> */}
                
              </div>{' '}
              {/* <div>
                {' '}
                <a href={linkedinUrl} target="_blank" rel="noreferrer">
                  <img width="45" src={linkedinLogo} alt="Linkedin" />
                </a>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <img width="45" src={githubLogo} alt="GitHub" />
                </a>
                <a href={mediumUrl} target="_blank" rel="noreferrer">
                  <img width="45" src={theme === 'light' ? mediumLogoWhite : mediumLogo} alt="Medium" />
                </a>
                <a href={devUrl} target="_blank" rel="noreferrer">
                  <img width="45" src={theme === 'light' ? devLogoWhite : devLogo} alt="Dev" />
                </a>
              </div> */}
              
            </div>
          </Container>
        </Details>{' '}
      </Flex>
    </Wrapper>
  );
};
