"use client"
import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviews } from './redux/actions/reviewsactions';
import ReactStars from 'react-stars';

interface Review {
  rating: number;
  review: string;
  imageSrc: string;
  name: string;
}

function Reviews(): JSX.Element {
  // const dispatch = useDispatch();
  // const data = useSelector((state: any) => state.reviews.reviews); // Update any to the appropriate state type
  const userId: string | null = localStorage.getItem('userId'); 

  useEffect(() => {
    // dispatch(fetchReviews());
    console.log(userId);
  }, []);

  const filteredData: Review[] = [
  
      {
        "rating": 5,
        "review": "Excellent service and product quality!",
        "imageSrc": "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
        "name": "John Doe"
      },
      {
        "rating": 4,
        "review": "Excellent service and product quality!",
        "imageSrc": "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
        "name": "Jane Smith"
      },
      {
        "rating": 3,
        "review": "Excellent service and product quality!",
        "imageSrc": "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
        "name": "Alice Johnson"
      },
      {
        "rating": 5,
        "review": "Excellent service and product quality!",
        "imageSrc": "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
        "name": "John Doe"
      },
      {
        "rating": 4,
        "review": "Excellent service and product quality!",
        "imageSrc": "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
        "name": "Jane Smith"
      },
      {
        "rating": 3,
        "review": "Excellent service and product quality!",
        "imageSrc": "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
        "name": "Alice Johnson"
      },
    ]
  
  
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      {filteredData.map((item, index) => (
        <div key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={item.imageSrc} alt="Reviewer" style={{ width: '70px', height: '70px', borderRadius: '50%', marginRight: '20px', objectFit: 'cover' }} />
            <div>
              <h3 style={{ marginBottom: '5px', fontSize: '20px', color: '#333' }}>{item.name}</h3>
              <ReactStars count={item.rating} value={item.rating} size={24} color1="#CCCCCC" color2="#FFD700" edit={false} />
            </div>
          </div>
          <p style={{ fontSize: '16px', color: '#666' }}>{item.review}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
