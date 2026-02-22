import React from 'react';

const Ratings = ({value}) => {
    return (
        <div className="rating">
            {[1,2,3,4,5].map((star) => (
                <span key={star}>
                    {value >= star ? "⭐" : "☆"}
                </span>
            ))}
        </div>
    );
}

export default Ratings;
