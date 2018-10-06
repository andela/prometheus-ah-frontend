import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PropTypes from 'prop-types';


/**
 * @class BodyEditor
 */
class TitleEditor extends Component {
  /**
   *@returns {*} jsx
   */
  render() {
    const {
      handleChange, value, handleTitleFocusIn, handleTitleFocusOut,
    } = this.props;
    return (
      <Editor
        apiKey="zre5x72iyosuc7o3z1vg6lfbkxwdw4b5lr9yrwpgjsnfsca7"
        onEditorChange={handleChange}
        value={value}
        onFocusIn={handleTitleFocusIn}
        onFocusOut={handleTitleFocusOut}
        name="title-editor"
        tagName="h1"
        init={{
          menubar: false,
          inline: true,
          theme: 'inlite',
          insert_toolbar: 'undo redo',
          selection_toolbar: 'italic underline',
        }}
      />
    );
  }
}

TitleEditor.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  handleTitleFocusIn: PropTypes.func,
  handleTitleFocusOut: PropTypes.func,
};
export default TitleEditor;
