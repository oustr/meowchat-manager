import Unfold from '@/components/Unfold';
import type { ProColumns } from '@ant-design/pro-components';
import { Tag } from 'antd';
import { USER } from '../../commonSettings';

const MAX_ORDER = 10;

export const TITLE: ProColumns = {
  title: '标题',
  dataIndex: 'title',
  width: 120,
};

export const IS_OFFICIAL: ProColumns = {
  title: '发布方',
  dataIndex: 'isOfficial',
  hideInSearch: true,
  width: 120,
  render: (_: any) => <>{_ ? <Tag color="red">官方</Tag> : <Tag color="default">非官方</Tag>}</>,
};

export const TEXT: ProColumns = {
  title: '发布内容',
  dataIndex: 'text',
  hideInSearch: true,
  width: 400,
  render: (_: any) => <Unfold text={_} limit={50}></Unfold>,
};

export const POSTS_COLUMNS = [
  {
    order: MAX_ORDER + 10,
    ...USER,
  },
  {
    order: MAX_ORDER + 8,
    ...TITLE,
  },
  {
    order: MAX_ORDER + 6,
    ...IS_OFFICIAL,
  },
  {
    order: MAX_ORDER + 4,
    ...TEXT,
  },
];
