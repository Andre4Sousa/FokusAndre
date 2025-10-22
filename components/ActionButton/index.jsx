import { Pressable, StyleSheet, Text  } from 'react-native';

export function ActionButton( { active, onPress, display } ) {
    return (
      
        <Pressable
            style={ active ? styles.contextButtonActive : null}
            onPress={onPress}
        >
            <Text style={styles.contextButtonText}>
                {display}
            </Text>
        </Pressable>
    );
 

}

const styles = StyleSheet.create(
  {
    contextButtonActive: {
      backgroundColor: '#144480',
      borderRadius: 8,
    },
    contextButtonText: {
      fontSize: 12.5,
      color: '#FFF',
      padding: 8,
    },
  }
);

// key={p.id} => Retirado, pois o componente ActionButton não tem map().
// timeType.id === p.id => Quem precisa enviar essa condição lógica é o pai(app/index.jsx).
// () => setTimeType(p) => Quem precisa enviar essa função é o pai(app/index.jsx) .
// p.display -> Quem precisa enviar essas informações é o pai(app/index.jsx) .