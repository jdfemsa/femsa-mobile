import { FlatList, View, StyleSheet } from 'react-native';
import React from 'react';
import { UserModel } from '../types/response.types';
import UserItem from './UserItem';

function UserList({ users }: { users: UserModel[] }) {
  return (
    <FlatList
      data={users}
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item, index }) => {
        return (
          <View key={index}>
            <UserItem user={item} />
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  defaultText: {
    color: 'white',
  },
});

export default UserList;
