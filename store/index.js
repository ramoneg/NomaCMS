export const state = () => ({
    languages: null
  })

export const mutations = {};

export const actions = {
    async nuxtServerInit({dispatch}) {
        await dispatch('fetchCmsData');
    },

    async fetchCmsData({dispatch}) {
        await dispatch('fetchLanguages');
    },

    async fetchLanguages({state}) {
        if (!state.languages) {
            let languages
        }
        // if (!sessionStorage.getItem("NomaCMS-language")) {
        //     sessionStorage.setItem("NomaCMS-language");
        // }
    },
};
