import { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { Tempo } from "../components/Tempo";

const pomodoro = [
  {
    id: "iniciante",
    initialValue: 300, // 5 min
    image: require("./iniciante.png"),
    display: "iniciante",
  },
  {
    id: "intermediario",
    initialValue: 900, // 15 min
    image: require("./intermediario.png"),
    display: "intermediario",
  },
  {
    id: "profissional",
    initialValue: 1500, // 25 min
    image: require("./profissional.png"),
    display: "profissional",
  },
];

export default function Index() {
  const [timeType, setTimeType] = useState(pomodoro[0]);
  const [remainingTime, setRemainingTime] = useState(timeType.initialValue);
  const timerRef = useRef(null);

  // Atualiza o tempo ao trocar o tipo
  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setRemainingTime(timeType.initialValue);
  }, [timeType]);

  const togglerTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      return;
    }

    timerRef.current = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Image source={timeType.image} />

      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((p) => (
            <ActionButton
              key={p.id}
              active={timeType.id === p.id}
              onPress={() => setTimeType(p)}
              display={p.display}
            />
          ))}
        </View>

        <Tempo totalSeconds={remainingTime} />
        <FokusButton
          press={togglerTimer}
          title={timerRef.current ? "Parar" : "Iniciar"}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Aluno.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footer: {
    width: "80%",
  },
  footerText: {
    color: "#98A0A8",
    fontSize: 12.5,
    textAlign: "center",
  },
});
