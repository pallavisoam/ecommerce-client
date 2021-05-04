import React from 'react';
import StarRating from 'react-star-ratings';

export const showAverage =(p) =>{
    if(p && p.ratings){
        let ratingsArray = p && p.ratings;
        let total = []
        let length = ratingsArray.length;
        // console.log("LENGTH",length);

        ratingsArray.map((r)=>total.push(r.star))
        let totalReduced = total.reduce((p,n)=>p + n,0)
        // console.log("TOTAL REDUCED",totalReduced)
        let highest = length * 5;
        // console.log("HIGHEST",highest);
        let result = (totalReduced*5)/highest;
        // console.log("RESULT...." ,result);

        return (
            <div className ="text-center pt-1 pb-3"><StarRating 
            starDimension = "20px" 
            starSpacing ="2px" 
            starRatedColor ="Red" 
            rating={result} 
            editing ={false}/>
           ({p.ratings.length})
            </div>
        )
    }
}