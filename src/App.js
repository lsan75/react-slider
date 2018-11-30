import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper'
import 'swiper/dist/css/swiper.css'
import './App.css'

import image1 from './monimage1.jpg'
import image2 from './monimage2.jpg'

const myChildren = () => {
  const parentNodes = [1, 2, 3]
  const childNodes = [0, 1]
  const images = [ image1, image2 ]

  return parentNodes.map(item => (
    <div className="swiper-slide" key={item}>
      <a href="http://google.fr">
        <div className="child swiper-container">
          <div className="swiper-wrapper">
            {childNodes.map(sub => <article className="swiper-slide" key={sub}>
              <img src={images[sub]} className="swiper-lazy" />
            </article>)}
          </div>
          <aside className="swiper-button-prev" />
          <aside className="swiper-button-next" />
        </div>
      </a>
    </div>
  ))
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      parent: null,
      child: null
    }
  }

  componentDidMount() {
    this.setState({
      parent: new Swiper('.parent', {
        loop: false,
        allowTouchMove: false
      }),
      child: new Swiper('.child', {
        loop: true,
        initialSlide: 0,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        lazy: {
          loadPrevNext: true,
        },
      })
    })
  }

  prev() {
    this.state.parent.slidePrev()
  }
  next() {
    this.state.parent.slideNext()
  }

  render() {
    return (
      <React.Fragment>
        <div className="parent swiper-container">
          <div className="swiper-wrapper">
            {myChildren()}
          </div>
        </div>
        <div onClick={() => this.next()}>next</div>
        <div onClick={() => this.prev()}>prev</div>
      </React.Fragment>
    )
  }
}

export default App;
