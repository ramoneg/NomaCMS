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
        CTF_ENVIRONMENT: config.CTF_ENVIRONMENT
    },
    buildModules: ["@nuxtjs/tailwindcss"],
    build: {
        postcss: {
            plugins: {
                "postcss-import": {},
                autoprefixer: {},
                tailwindcss: {},
            },
        },
    },
    axios: {
        baseURL: `https://cdn.contentful.com/spaces/${config.CTF_SPACE_ID}/environments/${config.CTF_ENVIRONMENT}/`,
    },
};
