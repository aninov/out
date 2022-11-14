import React from "react"
import { searchResultItem } from "../utils/data/types"
import { Card } from "./card"
import styles from './List.module.css'

export const List = (props: {
    items: searchResultItem[]
}) => {
    const { items } = props
    return (
        <div className={styles.list}>
            {items && items.map((item, i) => (
                <Card
                    name={item.name}
                    imageUrl={item.imageUrl}
                    key={item.id + i}/>
            ))}
        </div>
    )
}