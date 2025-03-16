import * as Updates from "expo-updates";

export async function checkForUpdates() {
  try {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync(); // Restart the app to apply the update
    }
  } catch (error) {
    console.error("Error checking for updates:", error);
  }
}
