import React from 'react'
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

function BlogItem(props) {
    return (
        <div className='w-full sm:w-64 space-y-4'>
            <div className="w-full h-[200px] sm:h-[170px] overflow-hidden">
                <img className='h-full w-full object-cover hover:scale-[1.2] transition duration-500' src={props.img} alt="" />
            </div>
            <p className='py-1.5 bg-black text-white w-36 text-center'>10 Jan 2018</p>
            <p className='text-xl font-semibold hover:text-mainRed'>{props.title}</p>
            <p className='text-base text-dimWhite'>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
            <div className="flex items-center justify-between text-dimWhite">
                <div className="flex items-center gap-0.5 text-sm"><AiOutlineLike className='text-dimWhite' />15 Likes</div>
                <div className="flex items-center gap-1 text-sm"><FaRegComment className='text-dimWhite' />02 Comments</div>
            </div>
        </div>
    )
}

export default BlogItem
