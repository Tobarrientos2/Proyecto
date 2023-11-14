<script lang="ts">
    export let data;
    let miembrosData = data.dataJSON;
</script>

<div class="section-title dark mobile-hidden">
    <div class="section-labels-wrapper">
        <div class="section-label">Nuestro Equipo</div>
        <div class="nav-anchor menu-anchor no-borders">
            <div>Menu</div>
        </div>
    </div>
</div>
<div class="section fullscreen-hero">
    <div
        class="section-background hero-parallax-image"
        style="will-change: transform; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
    >
        <img
            src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/6088257a21cb95b15ea6f161_Company%20Hero.jpg"
            loading="lazy"
            sizes="(max-width: 1439px) 100vw, 1438px"
            srcset="https://media.discordapp.net/attachments/1171897462299033623/1174063518883004586/Captura_de_pantalla_2023-11-14_a_las_16.09.09.png?ex=65663adb&is=6553c5db&hm=b68b217cd4891edb92825e41fc0bb41cbc68add8b3984bad00b8baff81d839f1&=&width=1584&height=1056"
            alt="View of Earth from space"
            class="image"
        />
        <div class="dark-image-overlay" />
    </div>
    <div class="container grid">
        <div
            id="w-node-a7602057-2710-e1d3-a89b-7e5dc4cf480c-a5dece3e"
            class="column"
            style="transform: translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
        >
            <h1 class="h2-style no-margin hide-stuff">
                Guarda tu innovación, protege tu creatividad: Tu patente es
                tuya.
            </h1>
            <div class="typed-title-embed w-embed w-script">
                <h1 class="h2-style no-margin typed-heading" />
                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.min.js"
                ></script>
                <script>
                    var Webflow = Webflow || [];
                    Webflow.push(function () {
                        // DOMready has fired
                        // May now use jQuery and Webflow ap
                        var typed = new Typed(".typed-heading", {
                            strings: [
                                "Guarda tu innovación, protege tu creatividad: Tu patente es tuya.",
                            ],
                            typeSpeed: 35,
                            backSpeed: 50,
                            backDelay: 2000,
                            startDelay: 0,
                            loop: false,
                            showCursor: false,
                            attr: null,
                        });
                    });
                </script>

                <style>
                    /* add custom cursor */
                    .typed-heading::after {
                        content: "|";
                        display: inline;
                        animation: blink 1s infinite;
                    }

                    /* custom cursor animation */
                    @keyframes blink {
                        0% {
                            opacity: 1;
                        }
                        50% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 1;
                        }
                    }
                </style>
            </div>
        </div>
    </div>
</div>
<div class="section dark-section">
    <div class="container grid">
        <h2
            id="w-node-_8970dda4-0068-d10a-6c9c-1c9447150f96-a5dece3e"
            class="sticky-heading no-margin"
        >
            Por qué estamos aquí
        </h2>
        <p 
            id="w-node-_8bf60a71-9c72-5f42-b0c0-d9b4aa73b8cc-a5dece3e"
            class="paragraph-large no-margin"
        >
            Creemos en el poder de la innovación y la creatividad. En un mundo
            donde las ideas valiosas pueden transformar industrias y mejorar
            vidas, nos dedicamos a proteger tu ingenio.
            <br /><br />            Nuestra misión es proporcionar un espacio seguro y confiable para que
            los innovadores como tú resguarden sus creaciones mediante patentes.
            Estamos comprometidos con la preservación de la originalidad y el fomento
            de un entorno donde la inventiva florezca.
            <br /><br />
            En última instancia, estamos aquí para asegurarnos de que tu patente
            sea tuya, preservando y respetando el esfuerzo único que has dedicado
            a dar vida a tus ideas.
        </p>
    </div>
</div>
<div class="section dark-section featured-article-2">
    <div class="link-section-image">
        <img 
            src="https://media.discordapp.net/attachments/1171897462299033623/1174074367446098081/Captura_de_pantalla_2023-11-14_a_las_16.52.14.png?ex=656644f6&is=6553cff6&hm=4dbe9678816b8cf7568518be9b5f8082c1e8a0cf591d32de13f3484eba4582c9&=&width=1416&height=1056"
            loading="lazy"
            class=""
        />
    </div>
</div>
<div class="section dark-section">
    <div class="container grid">
        <h2
            id="w-node-_08a0b78c-0321-1190-2da0-27d2a0928410-a5dece3e"
            class="margin-l leadership"
        >
            Miembros
        </h2>
        <div
            id="w-node-_29ff1378-e41d-4a1a-20a5-375a61848741-a5dece3e"
            class="leaders-collection-wrapper w-dyn-list"
        >
            <div role="list" class="leader-collection-list w-dyn-items">
                {#each miembrosData as { nombre, puesto, descripcion, image }}
                    <div
                        id="w-node-_29ff1378-e41d-4a1a-20a5-375a61848743-a5dece3e"
                        data-w-id="29ff1378-e41d-4a1a-20a5-375a61848743"
                        style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;"
                        role="listitem"
                        class="leader-item w-dyn-item"
                    >
                        <div
                            data-w-id="d298a80a-1d67-2f7b-9549-5709d2dd53e9"
                            class="leader-card"
                        >
                            <div class="leader-image">
                                <img
                                style="background-color: white;"
                                    src={image}
                                    loading="lazy"
                                    alt={nombre}
                                    sizes="(max-width: 479px) 134.8828125px, (max-width: 767px) 83.984375px, 139.96875px"
                                    srcset={image ||
                                        "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw"}
                                    class="image leader-cms"
                                />
                            </div>
                            <h4 class="leader-name">{nombre}</h4>
                            <div class="leader-title">{puesto}</div>
                            <div
                                data-w-id="88d6deb7-91e3-e5c2-91f0-c8f16626cb77"
                                class="leader-bio"
                                style="background-color: rgba(1, 19, 35, 0); display: none;"
                            >
                                <div
                                    data-w-id="df70d8b8-ca0b-192d-f656-590cfb97a542"
                                    class="leader-bio-text w-richtext"
                                    style="opacity: 0;"
                                >
                                    <p>
                                        {descripcion}
                                    </p>
                                </div>
                                <div class="leader-bio-footer">
                                    <div class="leader-socials">
                                        <a
                                            data-w-id="fcf4f3b8-dd49-95ae-adf2-ca7bb2b7acc1"
                                            href="https://linkedin.com"
                                            target="_blank"
                                            class="social-link leader-link left-link w-inline-block"
                                            style="opacity: 0; transform: translate3d(-10px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                                            ><img
                                                src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/6086913d45b2406517df390f_LinkedIn%20Logo.svg"
                                                loading="lazy"
                                                alt="Linked In Logo"
                                                class="social-icon"
                                            />
                                            <div
                                                class="social-icon-bg"
                                                style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                                            /></a
                                        ><a
                                            data-w-id="ec4ed251-3231-1f75-447a-120f9db7b8d0"
                                            href="https://twitter.com/"
                                            target="_blank"
                                            class="social-link leader-link right-link w-inline-block"
                                            style="opacity: 0; transform: translate3d(-10px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                                            ><img
                                                src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/6086913d8528525910eab81f_Twitter%20Logo.svg"
                                                loading="lazy"
                                                alt="Twitter Logo"
                                                class="social-icon"
                                            />
                                            <div
                                                class="social-icon-bg"
                                                style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                                            /></a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
