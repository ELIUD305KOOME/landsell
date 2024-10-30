import React, { useState } from 'react';

const WriteReview = () => {
    const [rating, setRating] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ rating, content }),
        });
        if (response.ok) {
            alert('Review submitted!');
            setRating('');
            setContent('');
        }
    };

    return (
        <div>
            <h2>Write a Review</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Rating (1-5)"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your review"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default WriteReview;
