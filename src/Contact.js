import styled from 'styled-components'

export const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>Contact Page</h2>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.5199072954541!2d87.87910842916101!3d23.240189231338814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f849bbd4fd8cf7%3A0x13e541ae119f39ba!2sSBI%20(CSP)!5e0!3m2!1sen!2sin!4v1674282087460!5m2!1sen!2sin'
        width='100%'
        height='450'
        style={{ border: 0 }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
      <div className='container'>
        <div className='contact-form'>
          <form
            action='https://formspree.io/f/xpzewklj'
            method='POST'
            className='contact-inputs'>
            <input
              required
              autoComplete='off'
              type='text'
              placeholder='username'
              name='username'
              autoCapitalize='off'
            />
            <input
              required
              autoComplete='off'
              type='email'
              placeholder='Email'
              name='Email'
              autoCapitalize='off'
            />

            <textarea
              name='Message'
              cols='30'
              rows='10'
              required
              autoComplete='off'
              placeholder='Enter your message'
            />

            <input type='submit' value='Send' />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type='submit'] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`
