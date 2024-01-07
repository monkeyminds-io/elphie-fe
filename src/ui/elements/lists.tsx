// =============================================================================
// File Name: ui/elements/lists.tsx
// File Description:
// This file contains the code of the React Lists Components
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Image from "next/image"
import { Paragraph } from "./paragraphs"

// =============================================================================
// Components Props
// =============================================================================
type ListProps = {
    listItems: ListItemProps[],
}

export type ListItemProps = {
    icon: any,
    text: string,
    color?: string,
}

// =============================================================================
// React Components
// =============================================================================
export const List = ({listItems}: ListProps) => {
    return (
        <ul role="list" className="space-y-2 sm:space-y-4">
            {listItems.map((item, index) => {
                return <ListItem icon={item.icon} text={item.text} color={item.color} key={index}/>
            })}
        </ul>
    )
}

export const ListItem = ({icon, text, color = 'bg-indigo-400'}: ListItemProps) => {
    return (
        <li className="flex space-x-3">
            {/* List Item Bullet */}
            <span className={`mt-0.5 h-5 w-5 flex justify-center items-center rounded-full ${color}`}>
                <Image className="h-4 w-4" src={icon} alt={"List icon"}/>
            </span>

            {/* List Item Text */}
            <Paragraph>{text}</Paragraph>
        </li>
    )
}