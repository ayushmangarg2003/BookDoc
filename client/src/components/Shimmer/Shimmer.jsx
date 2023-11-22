import React from 'react'
import { ShimmerSimpleGallery } from "react-shimmer-effects-18";
const Shimmer = () => {
    return (
        <>
            <div style={{ margin: '4rem' }} className="shimmer-laptop">
                <ShimmerSimpleGallery row={1} fitOnFrame={false} col={4} card imageHeight={300} caption />
            </div>
            <div style={{margin:'4rem 1rem'}} className="shimmer-mobile">
                <ShimmerSimpleGallery row={4} fitOnFrame={false} col={1} card imageHeight={300} caption />
            </div>
        </>
    );
};


export default Shimmer