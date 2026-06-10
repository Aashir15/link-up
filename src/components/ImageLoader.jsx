import { useState } from "react";

export default function ImageLoader({ src, alt, className }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative flex items-center justify-center">

            {/* Skeleton */}
            {!loaded && (
                <div className="absolute w-full h-full bg-gray-300 rounded-xl animate-pulse" />
            )}

            {/* Image */}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}