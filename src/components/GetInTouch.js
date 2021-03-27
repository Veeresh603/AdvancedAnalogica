import React from "react"
import styled from "styled-components"

function GetInTouch() {
  return (
    <Wrapper>
      <div className="getintouch">
        <div className="left_section">
          <h2>get in touch</h2>
          <h4>
            Consequat pharetra pretium non odio eu fermentum, sagittis. Tortor
            sit lorem tortor mattis quam quam in amet, dignissim. Mauris,
            vulputate quisqu
          </h4>
        </div>
        <div className="right_section">
          <form
            className="form"
            action="https://formspree.io/f/xwkaeakp"
            method="POST"
          >
            <div className="form-group">
              <input type="text" placeholder="name" className="form-control" />
              <input
                type="email"
                placeholder="email"
                className="form-control"
                name="_replyto"
              />
              <input
                type="phone"
                placeholder="+91-1234567890"
                className="form-control"
              />
              <input type="hidden" name="_next" value="https://analogica3.netlify.app/whatwedo" />
              <input type="hidden" name="_subject" value="get in touch contact" />
            </div>
            <div className="form-group1">
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default GetInTouch

const Wrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  height: auto;
  background-color: #dfdddd;
  .getintouch {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 500px;
    grid-column-gap: 5px;
    padding: 35px;
  }
  .left_section {
    grid-area: 1/2/2/6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      font-size: 25px;
      font-weight: 600;
    }
    h4 {
      font-weight: 300;
      font-family: "Montserrat", sans-serif !important;
    }
  }
  .right_section {
    grid-area: 1/6/2/11;
    display: flex;
    place-items: center;
    background-color: var(--primaryColor);
    margin-left: 50px;
  }
  .form-group {
    flex-direction: column;
  }
  .form {
    width: 90%;
    height: 440px;
    border-radius: 8px;

    margin: calc(50vh - 220px) auto;
    padding: 20px 30px;
    max-width: calc(100vw - 40px);
    background-color: transparent;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    position: relative;
  }
  input,
  textarea {
    width: 100%;
    padding: 25px;
    box-sizing: border-box;
    background: none;
    outline: none;
    resize: none;
    border: 0;
    font-family: "Montserrat", sans-serif;
    transition: all 0.3s;
    border-bottom: 2px solid #bebed2;
    color: #fff;
  }
  input:focus {
    border-bottom: 2px solid #78788c;
  }

  p:before {
    content: attr(type);
    display: block;
    margin: 28px 0 0;
    font-size: 14px;
    color: #5a5a5a;
  }
  button {
    float: right;
    padding: 8px 12px;
    margin: 8px 0 0;
    font-family: "Montserrat", sans-serif;
    border: 2px solid #fff;
    background: 0;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s;
  }
  button:hover {
    background: #ffffff;
    color: #000000;
  }
`
