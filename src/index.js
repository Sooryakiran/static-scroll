
import React, { useEffect, useRef } from 'react'

const StaticScroll = ({ children, numPages = 3, updateScroll = () => 0, numSnaps = null }) => {
  ////////////////////////////////////////////////////////////////////////////////////////
  // 
  // this component wraps around the elements that appear in a page. 
  // each page has a height of 100vh.
  // numPages is the number of virtual pages the user must scroll to reach the end
  // of the component. num snaps lets you do scroll snapping if you have snapping enabled.
  // updateScroll will callback with a value from 0 to 1
  //
  //
  // author: soorkie
  // email: captain@soorkie.com
  //
  ////////////////////////////////////////////////////////////////////////////////////////



  // lets define some basic constants
  const ZERO = 0
  const ONE = 1
  const VIRTUAL_HEIGHT = (numPages * 100) + "vh"
  const FULL_HEIGHT = "100vh"
  const FULL_WIDTH = "100vw"

  // the component consists of two divs, one inside the other
  // the outer div is a relative full width one with height equal to numPages * 100vh.
  // the inner div is a sticky component that stays in the place. it has a height of 100vh.
  const OUTER_DIV_STYLE = {
    position: "relative",
    overflow: "clip",
    height: VIRTUAL_HEIGHT
  }

  const INNER_DIV_STYLE = {
    position: "sticky",
    top: ZERO,
    width: FULL_WIDTH,
    minHeight: FULL_HEIGHT
  }




  // we define the ref to parent and child to handle scroll updates
  const parentRef = useRef(null)
  const childRef = useRef(null)

  // setup hooks for handling scroll updates
  const updatePosition = () => {
    if (parentRef.current) {
      const rect = parentRef.current.getBoundingClientRect();
      const target = Math.min(Math.max(-rect.top, ZERO), window.innerHeight * (numPages - ONE))
      updateScroll(target / window.innerHeight / (numPages - ONE))
    }
  };

  // attach the call back hook to scroll or resize
  useEffect(() => {
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);
    updatePosition();
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  // if the user needs window snapping
  // this component will not work if the user has already enabled window snapping. 
  // so as a work around, we allow the user to specify snap points
  const snapAssist = numSnaps ? Array.from(Array(numSnaps - 1).keys())
    .map((each, key) => (
      <div key={key} style={
        {
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          position: "absolute",
          top: key * 100 * numPages / numSnaps + "vh",
          height: 100 * numPages / numSnaps + "vh",
          opacity: 0,
          zIndex: "-1"
        }}>
        DEBUG RELATIVE SCROLL
      </div>)) : ""

  return (
    <div ref={parentRef} style={OUTER_DIV_STYLE}>
      <div ref={childRef} style={INNER_DIV_STYLE}>
        {children}
      </div>
      {snapAssist}
    </div>
  )
}

export default StaticScroll;