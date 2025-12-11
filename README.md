# static scroll
Live [demo](https://static-scroll.oss.javascript.soorkie.com) 
> Capture scroll and turn into beautiful animations. Create animations based on percentage of scroll. Keyframe by scroll percentage.

[![NPM](https://img.shields.io/npm/v/static-scroll.svg)](https://www.npmjs.com/package/static-scroll) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save static-scroll
```


## Demo Usage
Visit [homepage](https://static-scroll.oss.javascript.soorkie.com) to see demo usage
Visit [mirror](https://static-scroll-demo.pages.dev) if the former site is not available.

## Usage

```jsx
import React, { Component } from 'react'

import StaticScroll from 'static-scroll'
import 'static-scroll/dist/index.css'

const ExampleComponent = {
  const [slide, setSlide] = useState(0)
    
  return (
    <StaticScroll updateScroll={(x) => setSlide(x)}>
      <div className='h-100 w-100 red d-flex center'>
        <div className='white-text'>
          <h1 style={{transform: "scale(" + (1 + slide * 5) + ")"}}>
            Scroll down to start
          </h1>
        </div>
      </div>
    </StaticScroll>)

}
```

## Arguments

| Argument | Type | Explaination |
| ---| --- | ---|
|`numPages`| `int` | defines the number of virtual pages a user have to scroll. defaults to `3` |
| `updateScroll` | `(int)=>Unit` | call back to handle the scroll percentage value from 0 to 1 | 
| `numSnaps` | `int` or `null` | if your page has window snapping, you will not be able to scroll down unless you explicilty define the number of snapping points within the virual scroll space. Defaults to `null`.


## License

MIT © [Sooryakiran](https://github.com/Sooryakiran)
# static-scroll
