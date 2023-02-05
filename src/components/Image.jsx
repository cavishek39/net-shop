import React, { useState } from 'react'
import styled from 'styled-components'

const Image = ({ imageUrl }) => {
  const [isShowLargeImage, setIsShowLargeImage] = useState(false)

  return (
    <Wrapper>
      {!isShowLargeImage ? (
        <div className='grid'>
          <img
            //   className='box-image--style'
            src={imageUrl}
            alt={imageUrl}
            onClick={() => setIsShowLargeImage((val) => !val)}
          />
        </div>
      ) : (
        <div className='full-screen-image'>
          <img
            src={imageUrl}
            alt={imageUrl}
            onClick={() => setIsShowLargeImage((val) => !val)}
          />
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */
    img {
      max-width: 80%;
      max-height: 80%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .full-screen-image {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
`

export default Image
