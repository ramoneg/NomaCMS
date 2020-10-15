import contentful from "@@/plugins/contentful";
const contentfulClient = contentful.createClient();

export const plugins = [contentful];

export const state = () => ({
    pages: [],
});

export const mutations = {
    setPages: (state, pages) => (state.pages = pages),
};

export const actions = {
    fetchPages({ commit }, config) {

        return Promise.all([
            contentfulClient.getEntries({
                content_type: config.env.CTF_PAGE_ID,
                locale: config.route.params.lang
            }),
        ])
            .then(pages => {
                commit("setPages", pages[0].items[0]);
            })
            .catch(console.error);
    },
};
