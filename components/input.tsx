import React from "react"
import styles from './Input.module.css'

export const Input = () => {
    return (
        <input className={styles.input} type="text" id="search" name="search" />
    )
}