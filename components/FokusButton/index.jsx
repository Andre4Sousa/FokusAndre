import {  Pressable, StyleSheet, Text,  } from "react-native";

export const FokusButton = ( { press, title } ) => {
    return (
        <Pressable style={styles.button} onPress={press}>

            <Text style={styles.buttonText}>
                {title}
            </Text>
        </Pressable>
    )

}

const styles = StyleSheet.create(
  {
    button: {
      backgroundColor: '#B872FF',
      borderRadius: 32,
      padding: 8,
    },
    buttonText: {
      fontSize: 18,
      color: '#021123',
      textAlign: "center",
      fontWeight: 'bold',
    },
  }
);


