import { StyleSheet, Text } from 'react-native';

export function Tempo({ totalSeconds }) {
    const date = new Date(totalSeconds * 1000)
    const options = { minute: "2-digit", second: "2-digit" }
    const timeString = date.toLocaleTimeString("pt-br", options)
    
    return (
        <Text style={styles.tempo}>
            {timeString}
        </Text>

        
    );

    
}

const styles = StyleSheet.create(
  {
    tempo: {
      fontSize: 54,
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: "center",
    },

})