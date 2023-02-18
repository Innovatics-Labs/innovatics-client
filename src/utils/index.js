import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getAllAcademicPathsId = async () => {
  try {
    // Get reference
    const pathsRef = collection(db, "academic-paths");
    const docSnap = await getDocs(pathsRef);
    if (docSnap) {
      console.log("Document data:", docSnap.docs);
      const data = docSnap.docs.map((doc) => {
        return {
          params: {
            id: doc.id,
          },
        };
      });
      console.log(data);
      return data;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error);
  }
};
