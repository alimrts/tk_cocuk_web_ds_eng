import create from "zustand";

import { devtools, persist } from "zustand/middleware";

import strings from "./components/Register/strings.json";

const zustandStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
  },

  /////for language
  // language: 'default',
  // setLanguage: (selectedLanguage) => set({ language: selectedLanguage }),

  /////////////

  language: "eng",
  setLanguage: (selectedLanguage) => set({ language: selectedLanguage }),
  languageData: {
    default: strings,
    eng: strings,
    // ger: stringsGer,
    // french: stringsFrench,
    // spanish: stringsSpanish,
    // Add more languages here
  },

  // User information
  userInfo: null,
  setUserInfo: (userData) => {
    set({ userInfo: userData });
  },

  /////gates

  isBilgiIcTriggered: true,
  setIsBilgiIcTriggered: (value) => set({ isBilgiIcTriggered: value }),
  toggleBilgiIcTrigger: () => {
    set((state) => {
      const toggledState = !state.isBilgiIcTriggered;
      console.log(`Toggling isBilgiIcTriggered to: ${toggledState}`);
      return { isBilgiIcTriggered: toggledState };
    });
  },
  onCleanup: () => {
    set({ isBilgiIcTriggered: false });
  },

  isBilgiGateTriggered: false,
  setIsBilgiGateTriggered: (value) => set({ isBilgiGateTriggered: value }),
  toggleBilgiGateTrigger: () => {
    set((state) => {
      const toggledState = !state.isBilgiGateTriggered;
      console.log(`Toggling isBilgiGateTriggered to: ${toggledState}`);
      return { isBilgiGateTriggered: toggledState };
    });
  },
  onCleanup: () => {
    set({ isBilgiGateTriggered: false });
  },

  isGunesGateTriggered: false,
  setIsGunesGateTriggered: (value) => set({ isGunesGateTriggered: value }),
  toggleGunesGateTrigger: () =>
    set((state) => ({ isGunesGateTriggered: !state.isGunesGateTriggered })),
  onCleanup: () => {
    set({ isGunesGateTriggered: false });
  },

  isTuikGateTriggered: false,
  setIsTuikGateTriggered: (value) => set({ isTuikGateTriggered: value }),
  toggleTuikGateTrigger: () =>
    set((state) => ({ isTuikGateTriggered: !state.isTuikGateTriggered })),
  onCleanup: () => {
    set({ isTuikGateTriggered: false });
  },

  isGeriClickedInSolarSystem: false,
  setIsGeriClickedInSolarSystem: (value) =>
    set({ isGeriClickedInSolarSystem: value }),
  toggleGeriClickedInSolarSystem: () =>
    set((state) => ({
      isGeriClickedInSolarSystem: !state.isGeriClickedInSolarSystem,
    })),
  onCleanup: () => {
    set({ isGeriClickedInSolarSystem: false });
  },

  isGeriClickedInTuik: false,
  setIsGeriClickedInTuik: (value) => set({ isGeriClickedInTuik: value }),
  toggleGeriClickedInTuik: () =>
    set((state) => ({
      isGeriClickedInTuik: !state.isGeriClickedInTuik,
    })),
  onCleanup: () => {
    set({ isGeriClickedInTuik: false });
  },

  isDaire1Triggered: false,
  setIsDaire1Triggered: (value) => set({ isDaire1Triggered: value }),

  onCleanup: () => {
    set({ isDaire1Triggered: false });
  },

  isDaire2Triggered: false,
  setIsDaire2Triggered: (value) => set({ isDaire2Triggered: value }),

  onCleanup: () => {
    set({ isDaire2Triggered: false });
  },

  isDaire3Triggered: false,
  setIsDaire3Triggered: (value) => set({ isDaire3Triggered: value }),

  onCleanup: () => {
    set({ isDaire3Triggered: false });
  },

  isDaire4Triggered: false,
  setIsDaire4Triggered: (value) => set({ isDaire4Triggered: value }),
  onCleanup: () => {
    set({ isDaire4Triggered: false });
  },

  isDaire5Triggered: false,
  setIsDaire5Triggered: (value) => set({ isDaire5Triggered: value }),
  onCleanup: () => {
    set({ isDaire5Triggered: false });
  },

  playerPosition: [0, 0, 0],
  setPlayerPosition: (position) => set({ playerPosition: position }),

  isAnyGameOpened: false,
  setIsAnyGameOpened: (value) => set({ isAnyGameOpened: value }),

  showInfoAfisDergi: false,
  setShowInfoAfisDergi: (value) => set({ showInfoAfisDergi: value }),
  onCleanup: () => {
    set({ showInfoAfisDergi: false });
  },

  showInfoAfisKurulus: false,
  setShowInfoAfisKurulus: (value) => set({ showInfoAfisKurulus: value }),
  onCleanup: () => {
    set({ showInfoAfisKurulus: false });
  },

  showDergi: false,
  setShowDergi: (value) => set({ showDergi: value }),
  onCleanup: () => {
    set({ showDergi: false });
  },

  ////
  isGameCenterButton: false,
  setIsGameCenterButton: (value) => set({ isGameCenterButton: value }),
  onCleanup: () => {
    set({ isGameCenterButton: false });
  },
  ////

  isApiLoaded: false,
  setIsApiLoaded: (value) => set({ isApiLoaded: value }),
  onCleanup: () => {
    set({ isApiLoaded: false });
  },

  // Dashboard data
  dashboardData: {
    adi: null,
    yilYas: null,
    ayYas: null,
    gunYas: null,
    il: null,
    ayniIsimdeIlSayi: null,
    ayniIsimdeTurkiyeSayi: null,
    ayniTarihDoganIlSayi: null,
    ayniTarihDoganTurkiyeSayi: null,
    boyOrtancaDeger: null,
    kiloOrtancaDeger: null,
  },
  setDashboardData: (data) =>
    set((state) => ({
      dashboardData: {
        ...state.dashboardData,
        ...data,
      },
    })),
  onCleanup: () => {
    set((state) => ({
      dashboardData: {
        adi: null,
        yilYas: null,
        ayYas: null,
        gunYas: null,
        il: null,
        ayniIsimdeIlSayi: null,
        ayniIsimdeTurkiyeSayi: null,
        ayniTarihDoganIlSayi: null,
        ayniTarihDoganTurkiyeSayi: null,
        boyOrtancaDeger: null,
        kiloOrtancaDeger: null,
      },
    }));
  },
});

const useZustandStore = create(
  devtools(
    persist(zustandStore, {
      name: "tkceng-zus",
      getStorage: () => sessionStorage,
    })
  )
);

export default useZustandStore;
