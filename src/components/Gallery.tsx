"use client";

import React from "react";
import GalleryDesktop from "./GalleryDesktop";
import GalleryMobile from "./GalleryMobile";

const Gallery = () => {
    return (
        <>
            <div className="hidden md:block">
                <GalleryDesktop />
            </div>
            <div className="block md:hidden">
                <GalleryMobile />
            </div>
        </>
    );
};

export default Gallery;
