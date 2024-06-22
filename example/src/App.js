import React, { useEffect, useRef, useState } from 'react'

import StaticScroll from 'static-scroll'

const App = () => {
  const [slide1, setSlide1] = useState(0)
  const [slide2, setSlide2] = useState(0)
  const [slide3, setSlide3] = useState(0)

  const [slide4, setSlide4] = useState(0)
  const [slide5, setSlide5] = useState(0)
  const [slide6, setSlide6] = useState(0)

  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const duration = video.duration;
      const time = duration * slide6 || 0
      console.log(time, duration)

      video.currentTime = time
    }
  }, [slide6])

  return (
    <>
      <StaticScroll updateScroll={(x) => setSlide1(x)}>
        <div className='h-100 w-100 red d-flex center'>
          <div className='white-text'>
            <h1 style={{ transform: "scale(" + (1 + slide1 * 5) + ")" }}>
              Scroll down to start
            </h1>
          </div>
          <div className='codeblock'>
            <pre>
              <code>
                {`<StaticScroll updateScroll={(x) => setSlide(x)}>
  <div className='h-100 w-100 red d-flex center'>
    <div className='white-text'>
      <h1 style={{transform: "scale(" + (1 + slide * 5) + ")"}}>
        Scroll down to start
      </h1>
    </div>
  </div>
</StaticScroll>`}
              </code>
            </pre>
          </div>
        </div>
      </StaticScroll>
      <StaticScroll updateScroll={(x) => setSlide2(x)}>
        <div className='h-100 w-100 d-flex center blue relative'>
          <div style={{
            top: "50%",
            left: (100 * slide2) + "%"
          }} className='abs-ball'>
          </div>
          <div className='white-text'>
            <h1>AAAAAnimate anything.
            </h1>
          </div>
          <div className='codeblock'>
            <pre>
              <code>
                {`<StaticScroll updateScroll={(x) => setSlide(x)}>
  <div className='h-100 w-100 d-flex center blue relative'>
    <div style={{
      top: "50%",
      left: (100 * slide) + "%"
    }} className='abs-ball'>
    </div>
    <div className='white-text'>
      <h1>AAAAAnimate anything.
      </h1>
    </div>
  </div>
</StaticScroll>`}
              </code>
            </pre>
          </div>
        </div>
      </StaticScroll>

      <StaticScroll numPages={6} updateScroll={(x) => setSlide3(x)}>
        <div className='h-100 w-100 d-flex center gray relative'>
          <div style={{
            top: "50%",
            left: (100 * slide3) + "%"
          }} className='abs-ball'>
          </div>
          <div className='white-text'>
            <h1>slower?
            </h1>
          </div>
          <div className='codeblock'>
            <pre>
              <code>
                {`<StaticScroll numPages={6} updateScroll={(x) => setSlide(x)}>
  <div className='h-100 w-100 d-flex center gray relative'>
    <div style={{
      top: "50%",
      left: (100 * slide) + "%"
    }} className='abs-ball'>
    </div>
    <div className='white-text'>
      <h1>slower?
      </h1>
    </div>
  </div>
</StaticScroll>`}
              </code>
            </pre>
          </div>
        </div>
      </StaticScroll>

      <StaticScroll numPages={1.4} updateScroll={(x) => setSlide4(x)}>
        <div className='h-100 w-100 d-flex center purple relative'>
          <div style={{
            top: "50%",
            left: (100 * slide4) + "%"
          }} className='abs-ball'>
          </div>
          <div className='white-text'>
            <h1>faster?
            </h1>
          </div>
          <div className='codeblock'>
            <pre>
              <code>
                {`<StaticScroll numPages={1.4} updateScroll={(x) => setSlide(x)}>
  <div className='h-100 w-100 d-flex center purple relative'>
    <div style={{
      top: "50%",
      left: (100 * slide) + "%"
    }} className='abs-ball'>
    </div>
    <div className='white-text'>
      <h1>slower?
      </h1>
    </div>
  </div>
</StaticScroll>`}
              </code>
            </pre>
          </div>
        </div>
      </StaticScroll>

      <StaticScroll updateScroll={(x) => setSlide5(Math.round(x * 2))}>
        <div className='h-100 w-100 d-flex center'>
          <div className='signalparent'>
            <div style={{ opacity: (slide5 == 0) ? "1" : "0.3" }} className='redsignal'></div>
            <div style={{ opacity: (slide5 == 1) ? "1" : "0.3" }} className='yellowsignal'></div>
            <div style={{ opacity: (slide5 == 2) ? "1" : "0.3" }} className='greensignal'></div>
          </div>
          <div>
            <center>
              <h1>
                ready, set, scrolllllll
              </h1>
              <p>
                discretize
              </p>
            </center>
          </div>
          <div className='codeblock'>
            <pre>
              <code>
                {`
      <StaticScroll updateScroll={(x) => setSlide(Math.round(x * 2))}>
        <div className='h-100 w-100 d-flex center'>
          <div className='signalparent'>
            <div style={{ opacity: (slide == 0) ? "1" : "0.3" }} className='redsignal'></div>
            <div style={{ opacity: (slide == 1) ? "1" : "0.3" }} className='yellowsignal'></div>
            <div style={{ opacity: (slide == 2) ? "1" : "0.3" }} className='greensignal'></div>
          </div>
          <div>
            <center>
              <h1>
                ready, set, scrolllllll
              </h1>
              <p>
                discretize
              </p>
            </center>
          </div>
        </div>
      </StaticScroll>`}
              </code>
            </pre>
          </div>
        </div>
      </StaticScroll>

      <StaticScroll numPages={6.25} updateScroll={(x) => setSlide6(x)}>
        <div className='h-100 w-100 black d-flex center relative'>
          <video ref={videoRef} width="100%" height="100%">
            <source src="/thee.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='white-text abs-cent'>
            <h1 style={{transform: "scale(" + (1 + 5 * slide6) + ")"}}>or show video frames</h1>
          </div>
        </div>
      </StaticScroll>


    </>
  )
}

export default App
