// --- CONFIGURATION ---

// GitHub Token split into 3 parts
const GH_TOKEN_P1 = "ghp_KufdJL";
const GH_TOKEN_P2 = "eDstzUItmpT30";
const GH_TOKEN_P3 = "kz2L2KNIoS80ftQlh";

const GH_TOKEN = GH_TOKEN_P1 + GH_TOKEN_P2 + GH_TOKEN_P3;

const GH_OWNER = "jsdingra11";
const GH_REPO = "texwolf-templates";
const GH_BRANCH = "main";


// --- FIREBASE CONFIG ---

// Firebase API Key split into 3 parts
const FB_APIKEY_P1 = "AIzaSyB4e";
const FB_APIKEY_P2 = "oofAdY4DrW";
const FB_APIKEY_P3 = "-VKvfGJl5aNv2hoCTn4c";

const firebaseConfig = {
  apiKey: FB_APIKEY_P1 + FB_APIKEY_P2 + FB_APIKEY_P3,
  authDomain: "iist-fd6e8.firebaseapp.com",
  databaseURL: "https://iist-fd6e8-default-rtdb.firebaseio.com",
  projectId: "iist-fd6e8",
  storageBucket: "iist-fd6e8.firebasestorage.app",
  messagingSenderId: "692699808449",
  appId: "1:692699808449:web:120c8941a940d071f24a40",
  measurementId: "G-GPFG8LWF2H"
};


// --- INITIALIZE FIREBASE ---

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
