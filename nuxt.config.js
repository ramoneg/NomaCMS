const config = require("./.contentful.json");

export default {
    modules: [
        "@nuxtjs/axios",
        [
            "nuxt-fontawesome",
            {
                imports: [
                    {
                        set: "@fortawesome/free-solid-svg-icons",
                        icons: [],
                    },
                    {
                        set: "@fortawesome/free-brands-svg-icons",
                        icons: [],
                    },
                ],
            },
        ],
    ],
    env: {
        CTF_SPACE_ID: config.CTF_SPACE_ID,
        CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
        CTF_PAGE_ID: config.CTF_PAGE_ID,
        DEFAULT_HOME: "home",
        DEFAULT_LANGUAGE: "de",
    },
    axios: {
        //
    },
};
