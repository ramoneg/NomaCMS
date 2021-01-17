<template>
    <nav class="navigation">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <svg height="50" width="50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M65.1,-20.8C68.9,-9.2,46.1,11.5,24.5,25.2C2.8,39,-17.8,45.9,-27.2,38.7C-36.7,31.5,-35,10.4,-28.6,-4.7C-22.2,-19.8,-11.1,-28.7,9.7,-31.9C30.6,-35,61.2,-32.4,65.1,-20.8Z" transform="translate(100 100)" />
                        </svg>
                        <nuxt-link class="nav-link brand font-weight-bold p-0" :to="'/'">NomaCMS</nuxt-link>
                    </div>
                    <div class="d-none d-md-flex">
                        <nuxt-link class="nav-link" :to="'#'">Home</nuxt-link>
                        <nuxt-link class="nav-link" :to="'#'">Github</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {}
</script>