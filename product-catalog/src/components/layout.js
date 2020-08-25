import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { useStaticQuery, Link, graphql } from "gatsby"

import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/globalStyle';

import HeaderMain from './Headers/HeaderMain';
import HeaderMinor from './Headers/HeaderMinor';


const PageWrapper = styled.div`
  margin: auto;
  width: 100%;

`

const MainSection = styled.main`
  margin: 10px 0 0 20px;
  width: 90%;
  item-align: center;
`

const FooterStyled = styled.footer`
  width: 100%;
  padding: 20px;
  text-align: right;

  @media (max-width: 600px) {
    text-align: center;
  }
`
const ExternalLink = styled.a`
  color: #c59fc5;
`


function Layout({ location, children }) {

  // componentDidMount() {
  //   if (window.Snipcart) {
  //     window.Snipcart.api.configure('show_continue_shopping', true);
  //   }
  // }


  
    const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
    const rootPath = `${__PATH_PREFIX__}/`
    const siteName =  data.site.siteMetadata.title
    let header

    if (location.pathname === rootPath) {
      header = (
        <HeaderMain shopName={siteName}>
        </HeaderMain>
      )
    } else {
      header = (
        <HeaderMinor shopName={siteName}>
        </HeaderMinor>
      )
    }

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <PageWrapper>
            {header}
            <MainSection>{children}</MainSection>
            <FooterStyled>
              {/* <strong>Gatsby Snipcart Starter
           - Made by <ExternalLink href="https://www.issydennis.com/" target="_blank" rel="noopener noreferrer">Issy Dennis</ExternalLink>
              </strong> */}
            </FooterStyled>
          </PageWrapper>
        </>
      </ThemeProvider>
    )
}

export default Layout
