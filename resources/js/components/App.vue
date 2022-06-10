<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar w/ text</a>
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

    <div class="carousel-inner py-4">
        <!-- Single item -->
        <div class="carousel-item active">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                                class="card-img-top"
                                alt="Waterfall"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 d-none d-lg-block">
                        <div class="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                                class="card-img-top"
                                alt="Sunset Over the Sea"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 d-none d-lg-block">
                        <div class="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                                class="card-img-top"
                                alt="Sunset over the Sea"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12">
                        <div class="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                                class="card-img-top"
                                alt="Fissure in Sandstone"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 d-none d-lg-block">
                        <div class="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp"
                                class="card-img-top"
                                alt="Storm Clouds"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 d-none d-lg-block">
                        <div class="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp"
                                class="card-img-top"
                                alt="Hot Air Balloons"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <div class="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                                class="card-img-top"
                                alt="Peaks Against the Starry Sky"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                        <div class="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                                class="card-img-top"
                                alt="Bridge Over Water"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                        <div class="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                                class="card-img-top"
                                alt="Purbeck Heritage Coast"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Inner -->
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>

</style>
