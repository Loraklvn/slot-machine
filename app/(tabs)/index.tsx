import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import SlotMachine from "../../components/SlotMachine";
import { useEffect, useRef, useState } from "react";

export default function TabOneScreen() {
  const [slotSettings, setSlotSettings] = useState({
    duration: 4000,
    slot1: "1234",
    slot2: "hello",
    slot3: "2351",
  });
  const slotRef = useRef({ spinTo: (val: string) => "" });
  useEffect(() => {
    setTimeout(
      () =>
        setSlotSettings({
          duration: 1000,
          slot1: "4321",
          slot2: "world",
          slot3: "1234",
        }),
      5000
    );
    setTimeout(
      () =>
        setSlotSettings({
          duration: 4000,
          slot1: "1234",
          slot2: "hello",
          slot3: "2351",
        }),
      7000
    );
    setTimeout(() => slotRef.current && slotRef.current.spinTo("prize"), 12000);
  }, []);

  const symbols = ["🍏", "🍎", "🍐", "🍊", "🍋", "🍌"]; // can't use emojies in SlotMachine because some of them are comprised of 2 chars
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          height: 200,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SlotMachine
          text={slotSettings.slot1}
          duration={slotSettings.duration}
        />
        <SlotMachine
          text={slotSettings.slot2}
          range="abcdefghijklmnopqrstuvwxyz"
          width={45}
          duration={slotSettings.duration}
          ref={slotRef as unknown as undefined}
        />
        <SlotMachine
          text={slotSettings.slot3}
          range="012345"
          renderContent={(c: any) => (
            <Text style={{ fontSize: 25 }}>{symbols[c]}</Text>
          )}
          duration={slotSettings.duration}
        />
      </View>
    </View>
  );
}
