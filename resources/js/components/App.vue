<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">SmartMarket</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-item nav-link active" :to='{name: "home"}'>Inicio</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-item nav-link active" :to='{name: "contact"}'>Contacto</router-link>
                </li>
            </ul>
            <span class="navbar-text">
      Navbar text with an inline element
    </span>
        </div>
    </nav>
    <router-view></router-view>
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>

</style>
