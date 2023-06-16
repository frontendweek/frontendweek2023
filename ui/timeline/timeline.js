import styled from 'styled-components'
import t from 'prop-types'

import { Card, media } from 'ui'

export const Timeline = ({ events }) => (
  
  <Wrapper>
    {events.map((item, index) => (
      <Item key={index}>
        {item.eventDate &&  (item.eventDate==="17/01" || item.eventDate==="18/01" || item.eventDate==="19/01" || item.eventDate==="21/01") &&   <div className='oldevent'>Old Event</div> }
        {item.eventCoupon && <div className="hascoupon"> {item.eventCoupon} </div>}
        <EventDate>{item.eventDate}</EventDate>
        <CardWrapper>
          <Card {...item} />
        </CardWrapper>
      </Item>
    ))}
  </Wrapper>
)

export const EventProps = t.shape({
  backgroundId: t.number.isRequired,
  eventName: t.string.isRequired,
  eventDate: t.string.isRequired,
  eventHour: t.string.isRequired,
  eventCoupon: t.string,
  eventLinks: t.arrayOf(t.shape({
    name: t.string,
    url: t.string,
  })),
})

Timeline.propTypes = {
  events: t.arrayOf(EventProps),
}

const Wrapper = styled.div``

const EventDate = styled.p`
  display: none;
  padding-right: 5.5rem;
  margin: 1.7rem 0 0;
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  ${media.greaterThan('md')`
    display: block;
  `}
`

const Item = styled.div`
  display: flex;
  position: relative;

  &:last-child {
    > div {
      border-left-color: transparent;
    }
  }
  .oldevent {
    z-index: 9;
    height: 100%;
    background: #121212;
    display: flex;
    width: 100%;
    position: absolute;
    overflow: hidden;
    opacity: 0.9;
    text-indent: -999999px;
  }
  .hascoupon {
    position: absolute;
    top: 0;
    right: 0;
    background: ${({ theme }) => `linear-gradient(140deg, ${theme.colors.primary}, ${theme.colors.secondary})`};
    padding: 10px;
    z-index: 1;
    font-size: 1.2rem;
    border-radius: 0.2rem;

    &:before {
      content: "Cupom";
      width: 100px;
      height: 50px;
      display: block;
      position: absolute;
      top: -15px;
      left: 0;
    }
  }
`

const CardWrapper = styled.div`
  flex: 1;
  padding-bottom: 12.4rem;
  position: relative;

  ${media.greaterThan('md')`
    border-left: 0.4rem solid ${({ theme }) => theme.colors.secondary};
    padding-left: 6.6rem;

    &:after {
      content: url('./ic-calendar.svg');
      display: flex;
      justify-content: center;
      align-items: center;
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      background: ${({ theme }) => `linear-gradient(140deg, ${theme.colors.primary}, ${theme.colors.secondary})`};
      border: 0.4rem solid ${({ theme }) => theme.colors.secondary};
      position: absolute;
      left: -3.2rem;
      top: 0;
    }
  `}
`
