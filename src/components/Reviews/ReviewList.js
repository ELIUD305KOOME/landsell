import React, { useEffect, useState } from 'react';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch('/reviews');
            const data = await response.json();
            setReviews(data);
        };
        fetchReviews();
    }, []);

    return (
        <div>
            <h2>Review List</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>{review.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewList;
