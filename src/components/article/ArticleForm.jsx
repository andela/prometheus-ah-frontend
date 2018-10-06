import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import sanitizeHtml from 'sanitize-html';
import TagsInput from 'react-tagsinput';
import BodyEditor from './BodyEditor';
import TitleEditor from './TitleEditor';
import DescriptionEditor from './DescriptionEditor';
import 'react-tagsinput/react-tagsinput.css';
import Article from '../../actions/articleActions';

/**
 * class Article Form
 * @returns {*} jsx
 *
 */
export class ArticleForm extends Component {
    state = {
      title: 'Title',
      body: 'Write your story...',
      description: 'Write a short description of your story',
      tag: '',
      tagList: [],
    };

    componentDidMount = () => {
      const { match, fetchSingleArticle } = this.props;
      if (match && match.params.slug) {
        fetchSingleArticle(match.params.slug).then((res) => {
          const tags = res.data.article.Tags.map(tag => tag.name);
          this.setState({
            title: res.data.article.title,
            body: res.data.article.body,
            description: res.data.article.description,
            tagList: tags
          });
        });
      }
    }

    /**
     *
     * @param {event} event
     * @returns {object} jsx
     */
    onSubmit = (event) => {
      event.preventDefault();
      const {
        body, description, tagList
      } = this.state;
      let { title } = this.state;
      title = sanitizeHtml(title, {
        allowedTags: [],
        allowedAttributes: []
      });
      const { onSubmit } = this.props;
      onSubmit({
        title, body, description, tagList
      });
    }

    /**
     * @param {Array} tagList - taglist
     * @returns {*} Array
     */
    handleTagChange = (tagList) => {
      this.setState({ tagList });
    }

    /**
     * @param {string} tag - tags
     * @returns {*} string
     */
    handleChangeInput = (tag) => {
      this.setState({ tag });
    }

    /**
     * Handles onchange event on body of article
     * @param {*} body - Article body
     * @returns {*} string
     */
    handleEditorBodyChange = (body) => {
      this.setState({
        body,
      });
    }

    /**
     * Handles onchange event on the title of article
     * @param {*} title - Article title
     * @returns {*} string
     */
    handleTitleChange = (title) => {
      this.setState({
        title
      });
    }

    /**
     * Handles onchange event on description of article
     * @param {*} description - Article description
     * @returns {*} string
     */
    handleDescriptionChange = (description) => {
      this.setState({
        description
      });
    }

    /**
     * Handles onfocus event in the body field
     * @returns {*} string
     */
    handleBodyPlaceholderFocusIn = () => {
      const { body } = this.state;
      if (body.trim() === 'Write your story...' || body.trim() === '<p>Write your story...</p>') {
        this.setState({ body: '' });
      }
    }

    handleBodyPlaceholderFocusOut = () => {
      const { body } = this.state;
      if (body.trim() === '') {
        this.setState({ body: 'Write your story...' });
      }
    }

    handleTitlePlaceholderFocusIn = () => {
      const { title } = this.state;
      if (title.trim() === 'Title' || title.trim() === '<p>Title</p>') {
        return this.setState({ title: '' });
      }
    }

    handleTitlePlaceholderFocusOut = () => {
      const { title } = this.state;
      if (title.trim() === '') {
        return this.setState({ title: 'Title' });
      }
    }

    handleDescriptionPlaceholderFocusIn = () => {
      const { description } = this.state;
      if (description.trim() === 'Write a short description of your story'
      || description.trim() === '<p>Write a short description of your story</p>') {
        return this.setState({ description: '' });
      }
    }

    handleDescriptionPlaceholderFocusOut = () => {
      const { description } = this.state;
      if (description.trim() === '') {
        this.setState({ description: 'Write a short description of your story' });
      }
    }

    /**
     * render jsx
     * @returns {object} jsx
     */
    render() {
      const {
        title, body, description, tagList, tag
      } = this.state;

      return (
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-7 align-self-start">
              <TagsInput
                className="tag-box"
                value={tagList}
                onChange={this.handleTagChange}
                maxTags={5}
                addOnPaste
                inputValue={tag}
                onChangeInput={this.handleChangeInput}
              />
            </div>
            <div
              className="col-sm-5
              col-md-5 submit d-flex justify-content-sm-end justify-content-md-end"
            >
              <input
                disabled={
                          title === 'Title'
                          || title === '<p>Title</p>'
                          || title === ''
                          || body === 'Write your story...'
                          || body === ''
                          || body === '<p>Write your story...</p>'
                          || description === 'Write a short description of your story'
                          || description === '<p>Write a short description of your story</p>'
                          || description === ''
                          }
                type="submit"
                value="Publish"
                id="publish"
                className="btn btn-sm btn-primary btn-primary-outline btn-update"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card" id="format-title">
                <div className="card-title">
                  <h2>
                    <TitleEditor
                      handleChange={this.handleTitleChange}
                      value={title}
                      handleTitleFocusIn={this.handleTitlePlaceholderFocusIn}
                      handleTitleFocusOut={this.handleTitlePlaceholderFocusOut}
                    />
                  </h2>
                </div>
              </div>
              <div className="description">
                <DescriptionEditor
                  handleChange={this.handleDescriptionChange}
                  value={description}
                  handleTitleFocusIn={this.handleDescriptionPlaceholderFocusIn}
                  handleTitleFocusOut={this.handleDescriptionPlaceholderFocusOut}
                />
              </div>
            </div>
            <div className="card editor-body">
              <div className="card-body">
                <BodyEditor
                  handleChange={this.handleEditorBodyChange}
                  value={body}
                  handleBodyFocusIn={this.handleBodyPlaceholderFocusIn}
                  handleBodyFocusOut={this.handleBodyPlaceholderFocusOut}
                />
              </div>
            </div>
          </div>
        </form>

      );
    }
}
ArticleForm.propTypes = {
  onSubmit: PropTypes.func, // eslint-disable-line
  match: PropTypes.shape({}),
  fetchSingleArticle: PropTypes.func.isRequired,
};
const matchDispatchToProps = dispatch => bindActionCreators({
  fetchSingleArticle: Article.fetchSingleArticle,
}, dispatch);

export default connect(null, matchDispatchToProps)(ArticleForm);
