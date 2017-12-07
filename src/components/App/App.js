import React, { Component } from 'react'
import styles from './App.style.scss'
import { noEmptyInput } from '@commons/utils/inputValidation'
export default class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <h1>
                    AppComponent
                </h1>
                <h2>Demo style loader 1</h2>
            </div>
        )
    }
}
