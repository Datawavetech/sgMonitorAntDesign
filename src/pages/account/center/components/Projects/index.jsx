import { Card, List } from 'antd';
import React from 'react';
import { connect } from 'umi';
import moment from 'moment';
import AvatarList from '../AvatarList';
import styles from './index.less';

const Projects = props => {
  const { list } = props;
  return (
    <List
      className={styles.coverCardList}
      rowKey="id"
      grid={{
        gutter: 24,
        xxl: 3,
        xl: 2,
        lg: 2,
        md: 2,
        sm: 2,
        xs: 1,
      }}
      dataSource={list}
      renderItem={item => (
        <List.Item>
          <Card className={styles.card} hoverable cover={<img alt={item.title} src={item.cover} />}>
            <Card.Meta title={<a>{item.title}</a>} description={item.subDescription} />
            <div className={styles.cardItemContent}>
              <span>{moment(item.updatedAt).fromNow()}</span>
              <div className={styles.avatarList}>
                <AvatarList size="small">
                  {item.members.map(member => (
                    <AvatarList.Item
                      key={`${item.id}-avatar-${member.id}`}
                      src={member.avatar}
                      tips={member.name}
                    />
                  ))}
                </AvatarList>
              </div>
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default connect(({ accountAndcenter }) => ({
  list: accountAndcenter.list,
}))(Projects);
