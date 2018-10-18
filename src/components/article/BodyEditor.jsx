import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PropTypes from 'prop-types';

/**
 * @class BodyEditor
 */
class BodyEditor extends Component {
  /**
   *@returns {*} jsx
   */
  render() {
    const {
      handleChange, value, handleBodyFocusIn, handleBodyFocusOut
    } = this.props;
    return (
      <Editor
        apiKey="zre5x72iyosuc7o3z1vg6lfbkxwdw4b5lr9yrwpgjsnfsca7"
        onEditorChange={handleChange}
        value={value}
        onFocusIn={handleBodyFocusIn}
        onFocusOut={handleBodyFocusOut}
        init={{
          menubar: false,
          inline: true,
          plugins: [
            'link',
            'textcolor',
            'lists',
            'powerpaste',
            'linkchecker',
            'contextmenu',
            'autolink',
            'tinymcespellchecker'
          ],
          toolbar: [
            'undo redo | bold italic underline | fontselect fontsizeselect',
            `forecolor backcolor | alignleft aligncenter alignjustify
            alignright alignfull| numlist bullist outdent indent`
          ],
          valid_elements: 'p[style],strong,em,span[style],a[href],ul,ol,li',
          valid_styles: {
            '*': 'font-size,font-family,color,text-decoration,text-align'
          },
          powerpaste_word_import: 'clean',
          powerpaste_html_import: 'clean',
          content_css: [
            '//fonts.googleapis.com/css?family=Frank+Ruhl+Libre:300,400,500,700',
          ]
        }}
      />
    );
  }
}
BodyEditor.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  handleBodyFocusIn: PropTypes.func,
  handleBodyFocusOut: PropTypes.func,

};

export default BodyEditor;
