import React from 'react';
import './Footer.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Footer() {
    const scrollToEnd = () => {
        var elmnt = document.querySelector(".nav");
        elmnt.scrollLeft += 200;
      }
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
    }
    return (
        <div className="footer">
            <ArrowForwardIosIcon onClick={scrollToEnd}/>
            <ArrowForwardIosIcon className="to__top" onClick={scrollTop}/>
            Made with love by <a href="https://stefan-golban.netlify.app">Golban Stefan</a>
        </div>
    )
}

export default Footer
