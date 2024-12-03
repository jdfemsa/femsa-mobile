import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';

// import { useUsers } from '../hooks/useUsers';
import { useUsersQuery } from '../hooks/useUsersQuery';

export default function HomeScreen() {
  const [query, setQuery] = useState('');

  // const {users, error} = useUsers(); //Este hook usa axios
  const {
    data: users,
    isError,
    isFetching,
    error,
  } = useUsersQuery({ queryString: query }); // Este hook usa react-query

  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    if (users) {
      setFilteredUsers(users);
    }
  }, [users]);

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <SearchBar onSearch={text => setQuery(text)} isLoading={isFetching} />
        <UserList users={filteredUsers ?? []} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#131313',
  },
  container: {
    flex: 1,
    backgroundColor: '#131313',
    gap: 10,
  },
  defaultText: {
    color: 'white',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});