import React, { Component } from 'react'
import styles from './header.style.scss'
import { noEmptyInput } from '@commons/utils/inputValidation'
export default class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <h1>
                    Đây là header
                </h1>
                <h2>Demo style loader 1</h2>
            </div>
        )
    }
}
