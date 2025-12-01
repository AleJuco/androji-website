import { CardInterface } from "../Types/types";
import Image from "next/image";

export default function Card({ indicator, image, title, subtitle, body, rotation, imagePosition = "top", link, bgColor }: CardInterface) {
    const isHorizontal = imagePosition === "left" || imagePosition === "right";

    const cardContent = (
        <div className={` ${bgColor} flex m-5 w-full rounded-lg transform transition-transform duration-400 hover:-translate-y-1 ${isHorizontal ? "flex-row items-center gap-5" : "flex-col items-center gap-5"}`} style={{ transform: `rotate(${rotation ?? 0}deg)` }}>
            
            {/* IMAGE */}
            {image && (
                <div
                    className={`px-4 pt-4 ${isHorizontal ? "w-1/2" : "w-full" + (imagePosition === "bottom" ? "2" : "1")}`}
                >
                    <Image
                        src={image}
                        alt={title ?? "Card Image"}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            )}

            {/* TEXT CONTENT */}
            <div
                className={`flex flex-col py-3 px-3 items-center text-center 
                ${isHorizontal ? "w-1/2" : "w-full"}
                ${imagePosition === "bottom" ? "order-1" : "order-2"}`}
            >
                {title && <div className="text-2xl font-bold">{title}</div>}
                {subtitle && <div className="text-1xl italic">{subtitle}</div>}
                {body && <div className="text-0.5xl">{body}</div>}
            </div>
        </div>
    );

    // If link exists, wrap in anchor tag
    if (link) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full no-underline cursor-pointer"
            >
                {cardContent}
            </a>
        );
    }

    // Otherwise return plain card
    return cardContent;
}
