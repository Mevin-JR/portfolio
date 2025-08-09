import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

/*
 * Logging user visit details to firestore
 */
export const logUniqueUserVisit = async (visitorId) => {
  const geoInfo = await fetchUserGeoInfo();
  const visitorRef = collection(db, "stats", "page_visitors", "visitors_data");
  await addDoc(visitorRef, {
    visitorId,
    firstVisit: new Date().toISOString(),
    lastVisit: new Date().toISOString(),
  });
};

/*
 * Fetch user geo info (approximatly without prompting)
 */
export const fetchUserGeoInfo = async () => {
  const userGeoInfo = await fetch("https://ipapi.co/json/");
  return await userGeoInfo.json();
};

/*
 * Fetch social links from firestore (on-time)
 */
export const fetchLinks = async () => {
  const linksRef = doc(db, "links_and_resume", "links");
  const snap = await getDoc(linksRef);
  if (snap.exists()) return snap.data();
};

/*
 * Fetch social links from firestore (realtime)
 */
export const fetchLinksRealtime = (callback) => {
  const linksRef = doc(db, "links_and_resume", "links");
  return onSnapshot(linksRef, (snap) => {
    if (snap.exists()) callback(snap.data());
  });
};

/*
 * Fetch latest resume from firestore (realtime)
 */
export const fetchLatestResume = (callback) => {
  const resumeLinkRef = doc(db, "links_and_resume", "resume");
  return onSnapshot(resumeLinkRef, (snap) => {
    if (snap.exists()) callback(snap.data().latest);
  });
};

/*
 * Fetch experience containers from firestore (realtime)
 */
export const fetchExperienceContainers = (callback) => {
  const experienceContainersRef = collection(db, "experience");
  return onSnapshot(experienceContainersRef, (snap) => {
    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(data);
  });
};
