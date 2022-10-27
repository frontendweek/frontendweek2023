import styled from 'styled-components'
import t from 'prop-types'
import { lighten } from 'polished'

export const Tag = ({ name, url }) => (
  <Wrapper href={url}>
    <Label>{name}</Label>
  </Wrapper>
)

Tag.propTypes = {
  name: t.string,
  url: t.string,
}

const Wrapper = styled.a`
  text-decoration: none;
  display: inline-block;
  border-radius: 0.4rem;
  padding: 0.4rem 1.6rem;
  transition: filter .25s ease;
  background: ${({ theme }) => `linear-gradient(140deg, ${theme.colors.primary}, ${theme.colors.secondary})`};

  &:hover,
  &:focus {
    filter: brightness(120%);
  }
`

const Label = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text};
`
