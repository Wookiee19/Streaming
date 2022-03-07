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
  
    const handleClickOpen = (scrollType,mediatype) => () => {
      if(mediatype=="movie")
      {
      playTrailer();
      setOpen(true);
      setScroll(scrollType);
      }
      else{
        setOpen(true);
      setScroll(scrollType);
      }
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
                console.log("YTkey111",data)
            })
            
    },[id])
    const playTrailer = () => {
        [data].map(el => 
          
            setYTkey(el.results[0].key)
        )
        console.log("YTkey1",YTkey)
    }
    
 


    return (
        <div ref={ref} className="videoCard">
            <img src={`${base_url}${movieList.backdrop_path || movieList.poster_path}`=== "https://image.tmdb.org/t/p/original/null" ? "https://png.pngtree.com/thumb_back/fw800/back_our/20190617/ourmid/pngtree-colorful-film-shooting-poster-background-material-image_130221.jpg" : `${base_url}${movieList.backdrop_path || movieList.poster_path}`} alt="videocard"/>
            <div className="movie__info">
               
                <div className="App">
                
                <a> <PlayIcon onClick={handleClickOpen('paper',movieList.media_type)}/></a>
                
      
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
         PaperProps={{
    style: {
      backgroundImage: `linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)`,
     
    },
  }}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
       <h1 className='title'> {movieList.title || movieList.original_title || movieList.name || movieList.original_name}</h1>
        <DialogContent dividers={scroll === 'paper'} style={{ overflow: "hidden" }}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <p className="name1">{movieList.overview}</p>
            <p className="name1"> <b>Type: </b> {movieList.media_type}</p>
            {/* <p className="name1">Language: {movieList.original_language}</p> */}
            <p className="name1"> <b>Rating: </b> {movieList.vote_average}<StarIcon style={{color: "orange"}}/></p>
            
            {/* <p >Adult: {movieList.adult}</p> */}
            {/* <p className="name1">Genre: {movieList.genre_ids}</p> */}
            <p className="name1"> <b>OTT Platform: </b></p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/120px-Amazon_Prime_Logo.svg.png" width="36" height="36" alt="Now Streaming on Amazon Prime Video"/>
           <img src=" https://seeklogo.com/images/H/hotstar-logo-6A3E165CC3-seeklogo.com.png"  width="36" height="36" alt="Now Streaming on Amazon Prime Video"/>
           <br/> <img src="https://cdn.freelogovectors.net/wp-content/uploads/2021/12/sonyliv-logo-freelogovectors.net_.png" width="36" height="36" alt="Now Streaming on Amazon Prime Video"/>
            <img src="https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" width="36" height="36" alt="Now Streaming on Amazon Prime Video"/>
            <p className="name1"> <b>Movie Tickets: </b> </p>
            <img src="https://pbs.twimg.com/profile_images/1084718695836987392/pT8dY4C-_400x400.jpg" width="36" height="36" alt="Now Streaming on Amazon Prime Video"/>
            <p className="name1"> <b>Offers: </b> </p>
            <img src="https://officechai.com/wp-content/uploads/2015/06/Screen-Shot-2015-06-25-at-6.51.25-PM.png" width="56" height="36" alt="Now Streaming on Amazon Prime Video"/>
              
                
                
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="550"
                    height="400"
                    src={`https://www.youtube.com/embed/${YTkey}`}
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
