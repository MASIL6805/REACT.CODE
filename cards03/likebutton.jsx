import { useState } from "react";

export default function LikeButton() {

    let [isliked, setIsLiked] = useState(false);

    let [count, setCount] = useState(0);

    let togglelike = () => {
        setIsLiked(!isliked);
        setCount(count + 1);
    }
    
let likestyle = {color: "red"}

    return (
        <div>
            <p>click={count}</p>
            <p onClick={togglelike}>
                {isliked ? (
                     <i className="fa-solid fa-heart" style={likestyle}></i>
                 ) : (
                <i className="fa-regular fa-heart"></i>
                 )}
            </p>
        </div>
    );
}
