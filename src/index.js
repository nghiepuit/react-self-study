var React = require('react');
var ReactDOM = require('react-dom');
import moment from 'moment'

// thiết lập cho global
moment.locale('en')
import Header from '@components/header';

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);
