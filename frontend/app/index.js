import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
      <View className="h-screen w-screen flex items-center justify-center">
        <Text>Share My Ride</Text>
        <Text className="text-red-500">Welcome</Text>
        <StatusBar style="auto" />

        <Link href="/introone" asChild>
          <Pressable className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Text>Next</Text>
          </Pressable>
        </Link>
      </View>
    );
}

