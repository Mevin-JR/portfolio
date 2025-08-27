import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebaseConfig";
import toast from "react-hot-toast";

/*
 * Copy email to user clipboard
 */
export const copyEmailToClipboard = (email) => {
  navigator.clipboard
    .writeText(email)
    .then(() => {
      toast.success(`${email}\nCopied to clipboard`, {
        duration: 5000,
        style: {
          background: "rgba(255, 255, 255, 0.1)",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        },
      });
    })
    .catch((error) => {
      toast.error("Failed to copy to clipboard", {
        duration: 5000,
        style: {
          background: "rgba(255, 255, 255, 0.1)",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        },
      });
      console.error(`Failed to copy: ${error}`);
    });
};

/*
 * Logging unique user visit details to firestore
 */
export const logUniqueUserVisit = async (visitorId) => {
  try {
    const geoInfo = await fetchUserGeoInfo();
    const visitorRef = doc(
      db,
      "stats",
      "page_visitors",
      "visitors_data",
      visitorId
    );
    await setDoc(visitorRef, {
      visitorId,
      firstVisit: serverTimestamp(),
      lastVisit: serverTimestamp(),
      visitCount: 1,
      visits: [
        {
          localTimestamp: new Date().toISOString(),
          ip: geoInfo.ip,
          agent: navigator.userAgent,
          city: geoInfo.city,
          region: geoInfo.region,
          country: geoInfo.country,
          timezone: geoInfo.timezone,
          referrer: document.referrer,
          path: window.location.pathname,
        },
      ],
    });
  } catch (error) {
    console.error("Error logging unique user visit:", error);
  }
};

/*
 * Logging recurring user visit details to firestore
 */
export const logUserVisit = async (visitorId) => {
  try {
    const geoInfo = await fetchUserGeoInfo();
    const visitorRef = doc(
      db,
      "stats",
      "page_visitors",
      "visitors_data",
      visitorId
    );

    const visitData = {
      localTimestamp: new Date().toISOString(),
      ip: geoInfo.ip,
      agent: navigator.userAgent,
      city: geoInfo.city,
      region: geoInfo.region,
      country: geoInfo.country,
      timezone: geoInfo.timezone,
      referrer: document.referrer,
      path: window.location.pathname,
    };

    const data = (await getDoc(visitorRef)).data();

    await updateDoc(visitorRef, {
      lastVisit: serverTimestamp(),
      visits: arrayUnion(visitData),
      visitCount: data.visits.length,
    });
  } catch (error) {
    console.error("Error logging user visit:", error);
  }
};

/*
 * Fetch user geo info (approximatly without prompting)
 */
export const fetchUserGeoInfo = async () => {
  try {
    const userGeoInfo = await fetch("https://ipapi.co/json/");
    return await userGeoInfo.json();
  } catch (error) {
    console.error("Error fetching user geo info:", error);
  }
};

/*
 * Update page view counts
 */
export const updatePageViewCount = async () => {
  try {
    const viewCountRef = doc(db, "stats", "page_visitors");
    const visitorsDataSnap = await getDocs(
      collection(db, "stats", "page_visitors", "visitors_data")
    );

    let totalVisits = 0;
    visitorsDataSnap.forEach((doc) => {
      const data = doc.data();
      if (Array.isArray(data.visits)) totalVisits += data.visits.length;
    });

    await updateDoc(viewCountRef, {
      totalVisits,
      uniqueVisitors: visitorsDataSnap.size,
    });
  } catch (error) {
    console.error("Error updating page view count:", error);
  }
};

/*
 * Fetch page view count (realtime)
 */
export const fetchPageViewCount = async (callback) => {
  try {
    const viewCountRef = doc(db, "stats", "page_visitors");
    return onSnapshot(viewCountRef, (snap) => {
      const data = snap.data();
      if (snap.exists()) callback(data.totalVisits);
    });
  } catch (error) {
    console.error("Error fetching page view count realtime:", error);
  }
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
