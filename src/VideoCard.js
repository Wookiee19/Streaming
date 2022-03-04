import React, { forwardRef } from 'react';
import PlayIcon from '@material-ui/icons/PlayArrow';
import StarIcon from '@material-ui/icons/StarRate';
import './VideoCard.css';
import { useEffect } from 'react';
import { useState } from 'react';

import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';






const yurl ="https://www.youtube.com/embed/";
const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movieList, id }, ref) => {
    // console.log("m1",movieList)
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
  
    const handleClickOpen = (scrollType) => () => {
      setOpen(true);
      setScroll(scrollType);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   
    const [data, setData] = useState([]);

    const [YTkey, setYTkey] = useState("");
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
  
    const openModal = () => {
      setModal(!modal);
    };
  
    const spinner = () => {
      setVideoLoading(!videoLoading);
    };
    const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=f4a9808382694381e00f172432bffd45`)
        .then(res => res.json())
        .then(data => {
                setData(data);
            })
            
    },[id])
    const playTrailer = () => {
        [data].map(el => 
            setYTkey(el.results[0].key)
        )
        console.log("aa",YTkey)
    }
    
 


    return (
        <div ref={ref} className="videoCard">
            <img src={`${base_url}${movieList.backdrop_path || movieList.poster_path}`=== "https://image.tmdb.org/t/p/original/null" ? "https://png.pngtree.com/thumb_back/fw800/back_our/20190617/ourmid/pngtree-colorful-film-shooting-poster-background-material-image_130221.jpg" : `${base_url}${movieList.backdrop_path || movieList.poster_path}`} alt="videocard"/>
            <div className="movie__info">
               
                <div className="App">
                <a> <PlayIcon onClick={handleClickOpen('paper')}/></a>
                
      
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{movieList.title || movieList.original_title || movieList.name || movieList.original_name}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <p >{movieList.overview}</p>
            <p >Type: {movieList.media_type}</p>
            <p >Language: {movieList.original_language}</p>
            {/* <p >Adult: {movieList.adult}</p> */}
            <p >Genre: {movieList.genre_ids}</p>
            <p >OTT:</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/120px-Amazon_Prime_Logo.svg.pngS" width="36" height="36" alt="Now Streaming on Amazon Prime Video"/>
            
            
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="550"
                    height="400"
                    src={`https://www.youtube.com/embed/mqqft2x_Aa4`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    
                  ></iframe>
                
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>close</Button> */}
          
        </DialogActions>
      </Dialog>
      
    </div>
            
			
            
           
			
		
        
               { console.log("111",movieList)}
                <div className="movie__details">
                    <h2>{movieList.title || movieList.original_title || movieList.name || movieList.original_name}</h2>
                    <p className="movie__summary">{movieList.overview}</p>
                    <p>Release Date {movieList.release_date}</p>
                    <p>Popularity {movieList.popularity}</p>
                    <p><StarIcon style={{color: "orange"}}/> {movieList.vote_average}</p>
                    
                </div>
            </div>
        </div>
    )
});

export default VideoCard
