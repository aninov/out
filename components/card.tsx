import React from "react"
import styles from './Card.module.css'


export const Card = (props: {
    name: string,
    imageUrl: string
}) => {

    const {
        name,
        imageUrl
    } = props

    return (
        <div className={styles.card}>
            <img src={imageUrl} />
            <h2>{name}</h2>
        </div>
    )
}