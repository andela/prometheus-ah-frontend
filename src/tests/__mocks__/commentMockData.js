const commentMockData = {
  paginationMeta: {
    currentPage: 1,
    pageSize: 10,
    totalCount: 13,
    resultCount: 10,
    pageCount: 2
  },
  comments: {
    paginationMeta: {
      currentPage: 1,
      pageSize: 10,
      totalCount: 13,
      resultCount: 10,
      pageCount: 2
    },
    comments: [
      {
        id: 1,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        body: 'This article is hot',
        User: {
          username: 'joeeasy',
          email: 'joeeasy@gmail.com',
          bio: 'tomorrow is a better day',
          id: 1,
          isVerified: true,
          role: 'user'
        }
      },
      {
        id: 3,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        body: 'This article is hot',
        User: {
          username: 'joeeasy',
          email: 'joeeasy@gmail.com',
          bio: 'tomorrow is a better day',
          id: 1,
          isVerified: true,
          role: 'user'
        }
      },
      {
        id: 4,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        body: 'This article is hot',
        User: {
          username: 'joeeasy',
          email: 'joeeasy@gmail.com',
          bio: 'tomorrow is a better day',
          id: 1,
          isVerified: true,
          role: 'user'
        }
      },
    ],
  },
  auth: true,
  error: {},
  username: 'faksam',
  commentReplies: [
    {
      replies: [{
        id: 2,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        body: 'This article is hot',
        User: {
          username: 'joeeasy',
          email: 'joeeasy@gmail.com',
          bio: 'tomorrow is a better day',
          id: 1,
          isVerified: true,
          role: 'user'
        }
      },
      {
        id: 3,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        body: 'This article is hot',
        User: {
          username: 'joeeasy',
          email: 'joeeasy@gmail.com',
          bio: 'tomorrow is a better day',
          id: 1,
          isVerified: true,
          role: 'user'
        }
      },
      {
        id: 4,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        body: 'This article is hot',
        User: {
          username: 'joeeasy',
          email: 'joeeasy@gmail.com',
          bio: 'tomorrow is a better day',
          id: 1,
          isVerified: true,
          role: 'user'
        }
      }],
      commentId: 1
    }, {
      replies: [{
        id: 2,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        body: 'This article is hot',
        User: {
          username: 'joeeasy',
          email: 'joeeasy@gmail.com',
          bio: 'tomorrow is a better day',
          id: 1,
          isVerified: true,
          role: 'user'
        }
      },
      {
        id: 3,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        body: 'This article is hot',
        User: {
          username: 'joeeasy',
          email: 'joeeasy@gmail.com',
          bio: 'tomorrow is a better day',
          id: 1,
          isVerified: true,
          role: 'user'
        }
      },
      {
        id: 4,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        body: 'This article is hot',
        User: {
          username: 'joeeasy',
          email: 'joeeasy@gmail.com',
          bio: 'tomorrow is a better day',
          id: 1,
          isVerified: true,
          role: 'user'
        }
      }],
      commentId: 2
    }],
  event: {
    preventDefault: () => {},
    target: {
      name: 'body',
      value: 'come',
      textContent: 'nothing',
      valueAsDate: {
        toDateString: () => 'October 12, 2010',
      },
      files: ['.png', 'jpeg'],
      matches: () => true,
    },
  },
  articles: [
    {
      id: 11,
      slug: 'how-to-train-your-dragon',
      title: 'how to code',
      body: 'PHP is a cool framework for coding but not fast as node',
      userId: 1,
      description: 'coding',
      readingTime: '1 min read',
      createdAt: '2018-10-17T11:50:20.538Z',
      updatedAt: '2018-10-17T11:50:20.538Z',
      User: {
        id: 1,
        username: 'joeeasy',
        email: 'joeeasy@gmail.com',
        firstname: null,
        lastname: null,
        bio: 'tomorrow is a better day',
        role: 'user',
        status: 'active',
        image: null
      },
      Tags: []
    },
    {
      id: 11,
      slug: 'how-to-code-1',
      title: 'how to code',
      body: 'PHP is a cool framework for coding but not fast as node',
      userId: 1,
      description: 'coding',
      readingTime: '1 min read',
      createdAt: '2018-10-17T11:50:20.538Z',
      updatedAt: '2018-10-17T11:50:20.538Z',
      User: {
        id: 1,
        username: 'joeeasy',
        email: 'joeeasy@gmail.com',
        firstname: null,
        lastname: null,
        bio: 'tomorrow is a better day',
        role: 'user',
        status: 'active',
        image: null
      },
      Tags: []
    },
  ],
  commentRepliesResponse: {
    commentId: undefined,
    commentReply: {
      User: {
        bio: 'tomorrow is a better day',
        email: 'joeeasy@gmail.com',
        id: 1,
        isVerified: true,
        role: 'user',
        username: 'joeeasy'
      },
      body: 'This article is hot',
      createdAt: '2016-02-18T03:22:56.637Z',
      id: 2,
      updatedAt: '2016-02-18T03:48:35.824Z'
    },
    reply: {
      User: {
        bio: 'tomorrow is a better day',
        email: 'joeeasy@gmail.com',
        id: 1,
        isVerified: true,
        role: 'user',
        username: 'joeeasy'
      },
      body: 'This article is hot',
      createdAt: '2016-02-18T03:22:56.637Z',
      id: 2,
      updatedAt: '2016-02-18T03:48:35.824Z'
    },
    type: 'CREATE_COMMENT_REPLY_SUCCESSFUL'
  }
};

export default commentMockData;
