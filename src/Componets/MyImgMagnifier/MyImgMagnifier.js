import React from 'react';
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
} from "react-image-magnifiers";

const value = {
    alwaysInPlace: false,
    overlayOpacity: 0.6,
    switchSides: false,
    fillAvailableSpace: false,
    fillAlignTop: false,
    fillGapLeft: 0,
    fillGapRight: 10,
    fillGapTop: 10,
    fillGapBottom: 10
};

const MyImgMagnifier = () => {
    const {
        alwaysInPlace,
        overlayOpacity,
        switchSides,
        fillAvailableSpace,
        fillAlignTop,
        fillGapLeft,
        fillGapRight,
        fillGapTop,
        fillGapBottom
    } = value;
    return (
        <div style={{ width: "500px", hight: "600px" }}>
            <SideBySideMagnifier
                imageSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80"
                imageAlt="Example"
                alwaysInPlace={true}
                fillAvailableSpace={false}
            />
        </div>
    );
};

export default MyImgMagnifier;