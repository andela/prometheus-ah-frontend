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
          plugins: [
            'textcolor',
            'lists',
            'powerpaste',
            'linkchecker',
            'contextmenu',
            'autolink'
          ],
          toolbar: 'undo redo | bold italic underline',
          valid_elements: 'strong,em,span[style],a[href]',
          powerpaste_word_import: 'clean',
          powerpaste_html_import: 'clean',
          valid_styles: {
            '*': 'font-size,font-family,color,text-decoration,text-align'
          },
          content_css: [
            '//fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i',
          ]
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
