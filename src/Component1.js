import React from 'react';
import { hangman, hangmanImages } from './hangman';
import _ from "lodash";
import './styles/component1.scss'

export default function Component1() {
  let items = hangman();
  let images = hangmanImages();
  const [start, setStart] = React.useState('no')
  const [count, setCount] = React.useState(-1)
  const [item, setItem] = React.useState();
  const [char, setChar] = React.useState('');
  const [countSuccess, setCountSuccess] = React.useState(1);
  const StartGame = () => {
    setItem(items[Math.floor(Math.random() * items.length)]);
    console.log(items[Math.floor(Math.random() * items.length)]);
    let arr = document.getElementsByClassName('inputBox');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      arr[i].value = '';
    }
    setChar('');
    setCountSuccess(1)
    setCount(-1);
    setStart('yes');
  }
  const Loose = () => {
    setStart("no");
  }

  const Clicked = (character, e) => {
    e.target.disabled = true

    if (item.includes(character) === false) {
      if (count <= 7) {
        setCount(count + 1);
      }
    }
    else {
      let T = 0;
      for (let i = 0; i < item.length; i++) {
        if (item[i] === char) {
          T += 1;
        }
      }
      setCountSuccess(countSuccess + T);
      setChar(character);
    }
  }
  console.log('count=' + countSuccess);
  return (
    <>
      {start == "no" ? (
        <div className="start">
          <div id="div1">
            <img src="./images/hangman-logo.png" alt="" />
          </div>
          <div id="div2">
            <img src="./images/start.png" alt="" onClick={StartGame} />
          </div>
        </div>
      ) : (
        <>
          <div className="main">
            <div className="image">
              {count < 0 ? null : (
                <img
                  src={images[count]}
                  alt=""
                  style={{ height: "400px", width: "350px" }}
                />
              )}
            </div>
            <div className="inputs">
              <div id="div1">
                <h3>(UP City Names)</h3>
              </div>
              <div id="div2">
                {_.times(item.length, (i) => (
                  <>
                    {item[i] === char ? (
                      <>
                        <input
                          className="inputBox"
                          key={i}
                          type="text"
                          placeholder={item[i]}
                          maxLength="1"
                          value={char}
                          style={{
                            width: "2rem",
                            height: "2rem",
                            margin: "0.5rem",
                            fontSize: "1.6rem",
                          }}
                        />
                      </>
                    ) : (
                      <input
                        className="inputBox"
                        key={i}
                        type="text"
                        maxLength="1"
                        style={{
                          width: "2rem",
                          height: "2rem",
                          margin: "0.5rem",
                          fontSize: "1.6rem",
                        }}
                      />
                    )}
                  </>
                ))}
              </div>
              <br />
              <div className="buttons">
                {_.times(26, (i) => (
                  <button
                    onClick={(e) => {
                      Clicked((String.fromCharCode(97 + i)), e);
                    }}
                    style={{
                      fontSize: "2rem", padding: "5px 13px", borderRadius: "15px", backgroundColor: '#f3d611', border: "3px solid orangered", margin: "0.4rem",
                    }}
                  >
                    {String.fromCharCode(65 + i)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {countSuccess === item.length ? (
            <div className="win-loose">
              <h1>You won the game</h1>
              <h1
                onClick={Loose}
                style={{ color: "green", cursor: "pointer", fontSize: "50px" }}
              >
                Continue to Play
              </h1>
            </div>
          ) : null}
          {count === 8 ? (
            <div className="win-loose">
              <h1>Failed</h1>
              <h2 style={{ marginTop: "-1.5rem" }}>
                answer was... <span style={{ fontSize: '30px' }}>{item}</span>
              </h2>
              <h1
                onClick={Loose}
                style={{ color: "red", cursor: "pointer", fontSize: "50px" }}
              >
                Try again
              </h1>
            </div>
          ) : null}
        </>
      )}
    </>
  );
}