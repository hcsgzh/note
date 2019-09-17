import React from "react";
import "./App.css";
import SplitPane from "react-split-pane";
import Editor from './editor';
import ReactMarkdown from 'react-markdown';

class App extends React.Component {

  constructor(props) {
    super();
  }

  state = {
    markdownSrc: "# Hello World",
  }

  onMarkdownChange = (md) =>{
    this.setState({markdownSrc: md});
  }

  render() {
    return (
      <div className="App">
        <SplitPane split="vertical" defaultSize="50%">
          <div className="editor-pane">
            <Editor className='editor' value={this.state.markdownSrc} onChange={this.onMarkdownChange}/>
          </div> 
          <div className="view-pane">
            <ReactMarkdown className="result" source={this.state.markdownSrc} />
          </div>
        </SplitPane>
      </div>
    );
  }
}

export default App;
