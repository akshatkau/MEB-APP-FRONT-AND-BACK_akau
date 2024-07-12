import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from './firebase';

function PhoneSignIn() {
  const [confirm, setConfirm] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function onAuthStateChanged(user) {
    if (user) {
      setConfirm(null);
      setLoading(false);
      alert('Successfully logged in');
    }
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function signInWithPhoneNumber() {
    setLoading(true);
    setError(null);
    try {
      const confirmation = await firebase.auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Failed to send SMS. Please try again.');
    }
  }

  async function confirmCode() {
    setLoading(true);
    setError(null);
    try {
      await confirm.confirm(code);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Invalid code. Please try again.');
    }
  }

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!confirm) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />
        <Button title="Phone Number Sign In" onPress={signInWithPhoneNumber} />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Verification Code"
        value={code}
        onChangeText={text => setCode(text)}
        keyboardType="numeric"
      />
      <Button title="Confirm Code" onPress={confirmCode} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginTop: 8,
  },
});

export default PhoneSignIn;

