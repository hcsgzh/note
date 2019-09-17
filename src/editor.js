import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/python/python');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/theme/monokai.css');

class Editor extends Component {
    constructor(props) {
        super(props);
    }

    updateCode= (e) =>{
        this.props.onChange(e);
    }

    render() {    
        let options = {
            mode: 'markdown',
            theme: 'monokai',
            height: '100%'
        };
        return (<CodeMirror value={this.props.value} onChange={this.updateCode}  options={options}/>);  
    }
}

export default Editor;