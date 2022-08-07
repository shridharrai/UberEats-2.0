import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import RootNavigator from "./src/navigation";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import AuthContextProvider from "./src/contexts/AuthContext";
import BasketContextProvider from "./src/contexts/BasketContext";

Amplify.configure({ ...config, Analytics: { disabled: true } });

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <BasketContextProvider>
          <RootNavigator />
        </BasketContextProvider>
      </AuthContextProvider>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default withAuthenticator(App);
