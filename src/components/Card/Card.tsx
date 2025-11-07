import { sub } from "framer-motion/client";
import { CardInterface } from "../Types/types";
import { Text } from "../Text/Text";

export default function Card ({indicator, image, title, subtitle, body}: CardInterface) {
    return (
        <div className="flex items-center justify-center flex-col border-2 w-100 rounded-lg transform transition-transform duration-400 hover:-translate-y-1">
            <div className="text-4xl font-bold m-4">{title}</div>
            <div className="text 3x1 m-4">{subtitle}</div>
            <div className="">{body}</div>

        
        </div>
    );
}