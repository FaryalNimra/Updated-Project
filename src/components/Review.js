import './Review.css'; 
import React from 'react';
import contentImage from './Content.png';
import backgroundImage from './Rectangle 38.png';
import backgroundImage1 from './Rectangle 38 (1).png';
import backgroundImage2 from './Rectangle 38 (2).png';
import backgroundImage3 from './Rectangle 38 (3).png';
import backgroundImage4 from './Rectangle 38 (4).png';
import backgroundImage5 from './Rectangle 38 (5).png';
import backgroundImage6 from './Rectangle 38 (6).png';
import backgroundImage7 from './Rectangle 38 (7).png';
import backgroundImage8 from './Rectangle 38 (8).png';
import { useNavigate } from 'react-router-dom'; 


const Review = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleReadMoreClick = () => {
        navigate('/Singleblogpost'); // Navigate to Singleblogpost component
    };

    return (
        <section className="review" id="review">
            <div className="image-container">
                <img src={contentImage} alt="Content" className="content-image" />
    
                <div className="overlay1">
                <h1 className="content-heading"> Technology <br></br>The Impact of Technology on the Workplace:<br></br>How Technology is Changing <br></br>August 20, 2022</h1> 
                   </div>
            </div>
            <div className="white-background">
            <div className="centered-content">
                <br></br>
                <h1>Our latest blog posts</h1>
            </div>
            <div className="rownew">
                <div className="columnnew">
                    <bbr></bbr>
                    <img src={backgroundImage} className="new-section-image" alt="Right About Image" />
                    <button className="button-right">Technology</button>
                    <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
                    
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.....</p>
                    <div className="buttons">
                     
                        <button className="button-right" onClick={handleReadMoreClick}>Read More</button>
                    </div>
                </div>
                <div className="columnnew">
                    <img src={backgroundImage1} className="new-section-image" alt="Right About Image" />
                    <button className="button-right">Technology</button>
                    <h1>The Impact of Technology on the Workplace: How Technology is Changing
                    </h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.....</p>
                    <div className="buttons">
                   

                        <button className="button-right" onClick={handleReadMoreClick}>Read More</button>
                     
                    </div>
                </div>
                <div className="columnnew">
                    <img src={backgroundImage2} className="new-section-image" alt="Right About Image" />
                    <button className="button-right">Technology</button>
                    <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                    <div className="buttons">
                   
                      
                        <button className="button-right" onClick={handleReadMoreClick}>Read More</button>
                      
                    </div>
                </div>
            </div>
        </div>
        <div className="white-background">
            <div className="rownew">
                <div className="columnnew">
                    <img src={backgroundImage3} className="new-section-image" alt="Right About Image" />
                    <button className="button-right">Technology</button>
                    <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
                    
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.....</p>
                    <div className="buttons">
                   
                        
                        <button className="button-right" onClick={handleReadMoreClick}>Read More</button>
                       
                    </div>
                </div>
                <div className="columnnew">
                    <img src={backgroundImage4} className="new-section-image" alt="Right About Image" />
                    <button className="button-right">Technology</button>
                    <h1>The Impact of Technology on the Workplace: How Technology is Changing
                    </h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.....</p>
                    <div className="buttons">
                    
                        <button className="button-right" onClick={handleReadMoreClick}>Read More</button>
                       
                    </div>
                </div>
                <div className="columnnew">
                    <img src={backgroundImage5} className="new-section-image" alt="Right About Image" />
                    <button className="button-right">Technology</button>
                    <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                    <div className="buttons">
                    
                        
                        <button className="button-right" onClick={handleReadMoreClick}>Read More</button>
                       
                    </div>
                </div>
            </div>
        </div>
        <div className="white-background">
            <div className="rownew">
                <div className="columnnew">
                    <img src={backgroundImage6} className="new-section-image" alt="Right About Image" />
                    <button className="button-right">Technology</button>
                    <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.....</p>
                    <div className="buttons">
                 
                        <button className="button-right" onClick={handleReadMoreClick}>Read More</button>
                        
                    </div>
                </div>
                <div className="columnnew">
                    <img src={backgroundImage7} className="new-section-image" alt="Right About Image" />
                    <button className="button-right">Technology</button>
                    
                    <h1>The Impact of Technology on the Workplace: How Technology is Changing
                    </h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.....</p>
                    <div className="buttons">
                   
                        <button className="button-right" onClick={handleReadMoreClick}>Read More</button>
                       
                    </div>
                </div>
                <div className="columnnew">
                    <img src={backgroundImage8} className="new-section-image" alt="Right About Image" />
                    <button className="button-right">Technology</button>
                    <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                    <div className="buttons">
                    
                        <button className="button-right" onClick={handleReadMoreClick}>Read More</button>
                    </div>
                </div>
            </div>
            <div className="buttons" style={{paddingLeft:90}}>
                <br></br>
                    <button className="button">Subscribe</button>
                </div>
        </div>
      
        </section>
    );
}

export default Review;
