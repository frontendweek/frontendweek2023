import styled from 'styled-components'
import { media } from 'ui'

export const GradientText = styled.span`
  font-size: 3rem;
  background: ${({ theme }) => `linear-gradient(to bottom, ${theme.colors.primary}, ${theme.colors.secondary})`};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: filter .25s ease;

  &:focus,
  &:hover {
    filter: brightness(120%);
  }
`

export const GradientLogo = styled.span`
  font-size: 4rem;
  background: ${({ theme }) => `linear-gradient(to bottom, ${theme.colors.primary}, ${theme.colors.secondary})`};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  ${media.greaterThan('md')`
    font-size: 9rem;
  `}

`
