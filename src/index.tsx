import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store'
import { Provider } from 'react-redux'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { IntlProvider } from 'react-intl'
import english from './languages/english.json'
import french from './languages/french.json'
import { BrowserRouter } from 'react-router-dom'

const local = navigator.language;
let lang;

if (local === 'fr-FR') {
    lang = french;
} else {
    lang = english;
}

const rootNode: HTMLElement | null = document.getElementById('root')
if (rootNode) {
    const root = ReactDOM.createRoot(rootNode)
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <IntlProvider locale={local} messages={lang} >
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </IntlProvider>
            </Provider>
        </React.StrictMode>
    )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
