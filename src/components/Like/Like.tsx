import React, { useState } from 'react'
import { BsHeartFill, BsHeart } from 'react-icons/bs'

interface Props {
    onClick: ()=>void
}

export default function Like({ onClick }: Props) {
    const [isLike, setIsLike] = useState(false);

    function toggle() {
        setIsLike(!isLike);
        onClick();
    }
    return (
            <div onClick={()=>{toggle()}}>
            {isLike ? <BsHeartFill color='red' size={40}/> : <BsHeart color='red' size={40}/>}
            </div>
           )
}
