import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import AnimatedLinearGradient from './shared/components/AnimatedLinearGradient';

export default function App() {
  return (
    <View style={styles.container}>
      <AnimatedLinearGradient style={{
        flex: 1,
        height: 150,
        width: "100%"
      }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
