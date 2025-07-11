  
  
import Mybutton from "@/components/Mybutton";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function Index() {


  const router = useRouter()
  const ClickToMove = ()=>{
    
    router.navigate('./login')
  }
  return (
    <View  style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      
      <Mybutton title={"Mybtn"} onPress={ClickToMove} />
    </View>
  );
}
