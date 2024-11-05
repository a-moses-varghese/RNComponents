import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Avatar from "./widgets/Avatar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { hp } from "@/helpers/common";
import StyledText from "./misc/StyledText";
import Spacer from "./misc/Spacer";

const Header = ({
  title = "",
  showBackButton = false,
  showProfile = false,
  showSearch = false,
  showSettings = false,
  showMoreOptions = false,
  showBottomBorder = false,
  showPlusButton = false,
  searchAction = () => console.log("search action used"),
  settingsAction = () => console.log("settings action used"),
  moreOptionsAction = () => console.log("more options action used"),
  plusAction = () => console.log("plus action used"),
  mt = 0,
}) => {
  const router = useRouter();
  const headerBorderColor = Colors["light"].outlineLight;

  return (
    <View>
      <SafeAreaView style={{}}>
        <Spacer />
        <View style={[styles.container, { marginTop: mt }]}>
          <View style={styles.leftIcons}>
            {showBackButton && (
              <IconButton name="chevron-back" onPress={() => router.back()} />
            )}
            {showProfile && (
              <View>
                <Avatar uri="" />
              </View>
            )}
          </View>
          <StyledText content={title} />
          <View style={styles.rightIcons}>
            {showSearch && <IconButton name="search" onPress={searchAction} />}
            {showSettings && (
              <IconButton name="settings-sharp" onPress={settingsAction} />
            )}
            {showMoreOptions && (
              <IconButton
                name="ellipsis-vertical"
                onPress={moreOptionsAction}
              />
            )}
            {showPlusButton && <IconButton name="add" onPress={plusAction} />}
          </View>
        </View>
      </SafeAreaView>
      {showBottomBorder && (
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: headerBorderColor }}
        />
      )}
    </View>
  );
};

interface IconButtonProps {
  name: string;
  onPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ name, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Ionicons name={name as any} color={Colors["light"].tint} size={hp(3)} />
  </TouchableOpacity>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  leftIcons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    gap: 10,
    left: 0,
  },
  rightIcons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    gap: 10,
    right: 0,
  },
});
