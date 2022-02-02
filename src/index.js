import React from 'react'
import { render } from 'react-dom'
import AppService from './modules/app.service'
import { config } from './modules/config'
import App from './App'
import './css/index.css'
import './less/index.less'


console.log(config.key)

const service = new AppService('hello')
service.log()

render(<App />, document.getElementById('app'))