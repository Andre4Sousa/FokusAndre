import { StyleSheet, Text } from 'react-native';

export function Tempo({ totalSeconds }) {
    const date = new Date(totalSeconds * 60000)
    const options = { minute: "2-digit", second: "2-digit" }

    return (
        <Text style={styles.tempo}>
            {date.toLocaleTimeString("pt-br", options)}
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