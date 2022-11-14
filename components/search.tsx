import React from "react"
import { Input } from "./input"
import styles from './Search.module.css'

export const Search = (props: {onSubmit}) => {
    const { onSubmit } = props
    return (
        <form onSubmit={onSubmit} className={styles.search}>
            <Input />
        </form>
        
        
    )
}