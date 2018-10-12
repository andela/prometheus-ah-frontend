const articlesMockData = {
  paginationMeta: {
    currentPage: 1,
    pageSize: 10,
    totalCount: 22,
    resultCount: 10,
    pageCount: 3
  },
  articles: [
    {
      id: 11,
      slug: 'how-to-code-1',
      title: 'how to code',
      body: 'PHP is a cool framework for coding but not fast as node',
      userId: 1,
      description: 'coding',
      readingTime: '1 min read',
      createdAt: '2018-10-02T12:33:09.693Z',
      updatedAt: '2018-10-02T12:33:09.693Z',
      User: {
        id: 1,
        username: 'joeeasy',
        email: 'joeeasy@gmail.com',
        firstname: null,
        lastname: null,
        role: 'user',
        status: 'active',
        image: null
      },
      Tags: []
    },
    {
      id: 10,
      slug: 'how-to-code',
      title: 'how to code',
      body: 'PHP is a cool framework for coding but not fast as node',
      userId: 1,
      description: 'coding',
      readingTime: '1 min read',
      createdAt: '2018-10-02T12:33:08.563Z',
      updatedAt: '2018-10-02T12:33:08.563Z',
      User: {
        id: 1,
        username: 'joeeasy',
        email: 'joeeasy@gmail.com',
        firstname: null,
        lastname: null,
        role: 'user',
        status: 'active',
        image: null
      },
      Tags: []
    },
    {
      id: 21,
      slug: 'how-to-code94',
      title: 'how to code',
      body: 'PHP is a cool framework for coding but not fast as node',
      userId: 1,
      description: 'coding',
      readingTime: '1 min read',
      createdAt: '2018-10-02T12:33:08.563Z',
      updatedAt: '2018-10-02T12:33:08.563Z',
      User: {
        id: 1,
        username: 'joeeasy',
        email: 'joeeasy@gmail.com',
        firstname: null,
        lastname: null,
        role: 'user',
        status: 'active',
        image: null
      },
      Tags: []
    },
    {
      id: 16,
      slug: 'how-to-force-your-dragon-354',
      title: 'How to force your dragon',
      body: 'It takes a Zacobian',
      userId: 2,
      description: 'Ever wonder where?',
      readingTime: null,
      createdAt: '2016-09-18T03:22:56.637Z',
      updatedAt: '2016-09-18T03:48:35.824Z',
      User: {
        id: 2,
        username: 'faksam',
        email: 'fakunlesamuel@gmail.com',
        firstname: null,
        lastname: null,
        reset_password_hash: null,
        role: 'user',
        status: 'active',
        image: null
      },
      Tags: []
    },
  ]
};

export default articlesMockData;
