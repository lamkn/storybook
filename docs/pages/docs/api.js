import React from 'react';

import Page, { generator } from '../../components/Page';

import { parser } from '../../lib/reactRenderer';

import TopNav from '../../components/TopNav';
import Content from '../../components/Content';

import markdown from '../../content/docs/api.md';

const content = parser(markdown);

export default generator('DocsApi', ({ path, query }) =>
  <Page>
    <TopNav {...{ path }} />
    <Content {...{ path, query }}>
      {content}
    </Content>
  </Page>
);
 