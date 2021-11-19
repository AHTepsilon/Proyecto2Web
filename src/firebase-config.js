const firebaseConfig = {
    apiKey: "AIzaSyBmmbS0_Xv5QXxLs0VnBh9EMFmlMDH9zg0",
    authDomain: "freshfind-12680.firebaseapp.com",
    databaseURL: "https://freshfind-12680-default-rtdb.firebaseio.com",
    projectId: "freshfind-12680",
    storageBucket: "freshfind-12680.appspot.com",
    messagingSenderId: "402197020448",
    appId: "1:402197020448:web:69e1e3c0b98afc9073a145",
    measurementId: "G-VHFSLN1HS2"
  };

export function getFirebaseConfig()
{
    if(!firebaseConfig || !firebaseConfig.apiKey)
    {
        throw new Error("Firebase config error");
    }
    else
    {
        return firebaseConfig;
    }
}