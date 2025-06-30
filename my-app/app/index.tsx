import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'red'
      }}
    >
      <Text style={{color:'white', fontWeight:'800'}}> This is Home Page</Text>
     <Link href="/about">  <Text>About Page</Text></Link>
    </View>
  );
}
