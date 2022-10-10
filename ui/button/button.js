import styled from 'styled-components'
import { lighten } from 'polished'

export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: 'center';
  border-radius: 0.4rem;
  padding: 1.6rem 5rem;
  transition: filter .25s ease;
  background: ${({ theme }) => `linear-gradient(to bottom, ${theme.colors.primary}, ${theme.colors.secondary})`};
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;

  &:focus,
  &:hover {
    filter: brightness(120%);
  }
`
