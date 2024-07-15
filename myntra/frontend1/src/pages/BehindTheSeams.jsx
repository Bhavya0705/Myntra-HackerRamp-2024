import React, { useState, useEffect, useRef } from 'react';
import './BehindTheSeams.css';
import Header from '../components/Header';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';


 const videos = [video3, video1, video2, video4];

const BehindTheSeams = () => {
     const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
     const [isPlaying, setIsPlaying] = useState(true);
     const [progress, setProgress] = useState(0);
     const videoRef = useRef(null);

     const handleVideoEnd = () => {
         setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
     };

     useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(err => console.error('Failed to play:', err)); // Added error handling
            videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, [currentVideoIndex]);

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(currentProgress);
        }
    };

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(err => console.error('Failed to play:', err)); // Added error handling
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

     const handleNext = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsPlaying(true);
    };

    const handlePrevious = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
        setIsPlaying(true);
    };

    

    return (
        <div className="behind-the-seams">
            <Header />
            <h1>Behind the Seams</h1>
            <div className="video-container">
                <video 
                    ref={videoRef}
                    src={videos[currentVideoIndex]}
                    onEnded={handleVideoEnd}
                    controls={false}
                    autoPlay
                />
                <div className="video-controls">
                <button onClick={handlePrevious}>Back</button>
                    <button onClick={togglePlayPause}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                    <button onClick={handleNext}>Next</button>
                </div>
                <div className="progress-bar">
                    <div 
                        className="progress"
                        style={{
                             width: `${progress}%`
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BehindTheSeams;