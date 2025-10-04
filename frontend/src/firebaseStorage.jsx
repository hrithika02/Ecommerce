// src/firebaseStorage.js
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./config";

export const uploadImage = async (file, folder = "products") => {
  try {
    const storageRef = ref(storage, `${folder}/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    console.log("Image URL:", url);
    return url;
  } catch (error) {
    console.error("Upload failed:", error);
  }
};
