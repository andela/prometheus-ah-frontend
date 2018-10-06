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
          theme: 'inlite',
          inline: true,
          mobile: {
            theme: 'mobile',
            plugins: ['autosave', 'lists', 'autolink']
          },
          plugins: [
            'autolink',
            'codesample',
            'link',
            'linkchecker',
            'lists',
            'mediaembed',
            'textcolor',
            'image',
            'emoticons',
          ],
          selection_toolbar:
            `bold italic underline strikethrough|
            h2 h3 | blockquote quicklink | alignleft aligncenter alignright alignjustify |
            forecolor fontsize underlinr`,
          images_reuse_filename: true,
          toolbar: 'emoticons'
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
