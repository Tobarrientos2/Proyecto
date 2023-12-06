  <script lang="ts">
	import { readableExperiencias, unsubscribeExperiencias } from './../../stores/ExperienciasStore.ts';
    export let data;
    
    let beneficios = data.dataJSON.beneficios.map(item => item);
    let colaboraciones = data.dataJSON.colaboraciones.map(item => item);


    let experiencias;


    readableExperiencias.subscribe((data) => {
        experiencias = data; 
    })

    unsubscribeExperiencias();

export function limitarPalabras(cadena, maxPalabras) {
  const palabras = cadena.split(' '); // Dividir la cadena en palabras
  if (palabras.length > maxPalabras) {
    return palabras.slice(0, maxPalabras).join(' ') + '...'; // Unir las primeras maxPalabras palabras y agregar "..."
  } else {
    return cadena; // La cadena ya contiene o es menor que maxPalabras palabras
  }
}



  </script>

    <div class="section-title dark mobile-hidden">
        <div class="section-labels-wrapper">
            <div class="section-label">→</div>
            <div class="section-label">{data.page.path}</div>
            <div class="nav-anchor menu-anchor no-borders"><div>menu</div></div>
        </div>
    </div>
    <div class="section fullscreen-hero">
        <div class="container grid">
            <div
                id="w-node-a465920d-788d-44e2-80a0-955807dd4a5e-060e4710"
                class="type-box"
            >
                <div class="_40left">
                    <div class="typed-title-embed w-embed w-script">
                        <h1 class="h2-style no-margin typed-heading">
                       
                        </h1>
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
                                        "Beneficios de nuestro grupo",
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
                <div class="overlay-blur-bcg-noblur" />
            </div>
        </div>
        <div
            class="section-background hero-parallax-image"
            style="will-change: transform; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
        >
            <img
                src=""
                loading="lazy"
                width="1440"
                sizes="(max-width: 1439px) 100vw, 1438px"
                alt=""
                srcset="https://media.discordapp.net/attachments/1171897462299033623/1174075031995826256/Captura_de_pantalla_2023-11-14_a_las_16.54.53.png?ex=65664594&is=6553d094&hm=ac4036419fda27b6a6f12d9f3fc6d6cdb46cfc2077a99ffc0b771c0ae1b3ede2&=&width=1408&height=1056"
                class="image climate-action"
            />
            <div class="gridoverlay hidden" />
        </div>
    </div>
    <div class="section dark-section">
        <div class="container grid">
            <div
                id="w-node-f24f8bd2-45a6-7070-b3bf-31a46150f8f4-060e4710"
                class="column"
            >
                <div class="label">{data.dataJSON.subtitulo}</div>
                <p class="climate-action-main-paragraph">
                    {data.dataJSON.descripcion}
                </p>
            </div>
        </div>
    </div>
    <div class="section dark-section">
        <div class="container product-page-container">
            {#each beneficios as {titulo, descripcion, image}}
            <div
                id="w-node-_71fb9216-05ea-1a15-78dd-816055d25fb3-060e4710"
                class="new-product-card carda"
            >
                <div class="product-image">
                    <img style="filter: invert(1);"
                        alt=""
                        loading="lazy"
                        width="120"
                        src={image || "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw"}
                        class="image-icon climate-action"
                    />
                </div>
                <div class="product-card-body">
                    <h5 class="margin-s center-mobile">
                        {titulo}
                    </h5>
                    <p class="center-mobile">
                        {descripcion}
                    </p>
                </div>
            </div>
            {/each}
        </div>
    </div>
    <div class="section bright-section climate-action">
        <div class="container">
            <div class="margin-m">
                <h2 class="climage-action-h2">Red de Experiencias</h2>
            </div>
            <div class="container grid">
                <div
                    id="w-node-_753a02b0-7c93-b08a-d4fa-3464ba3b439d-060e4710"
                    class="resource-title-wrapper"
                >
                    <h3 class="no-margin">Experiencias</h3>
                    <a
                        href="/experiencias"
                        class="resource-all-link button-link-dark">Ver Todas</a
                    >
                </div>
                
                <div
                    id="w-node-fdb63778-0855-5f8b-2fde-89fadcbf78db-060e4710"
                    class="small-articles-wrapper w-dyn-list"
                >
                    <div
                        role="list"
                        class="small-articles-list limit-to-3 w-dyn-items"
                    >
                    {#each experiencias as { titulo, contenidos, image, slug}  }
                    
                        <div
                            id="w-node-fdb63778-0855-5f8b-2fde-89fadcbf78dd-060e4710"
                            role="listitem"
                            class="small-articles-item w-dyn-item"
                        >
                            <a
                                data-w-id="fdb63778-0855-5f8b-2fde-89fadcbf78de"
                                href={slug}
                                class="small-article-link w-inline-block"
                                style="transform: translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
                                ><div class="small-article-item-body">
                                    <div class="small-article-thumbnail">
                                        <img 
                                            src={image}
                                            loading="lazy"
                                            alt="Circularity: Repurposing Excess Chemicals for Global Manufacturer"
                                            sizes="(max-width: 991px) 159.7109375px, 100vw"
                                            srcset={image || "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw"}
                                            class="image"
                                        />
                                    </div>
                                    <div class="resource-textwrapper">
                                        <div class="climate-action-card-lable">
                                            {limitarPalabras(titulo,7)}
                                        </div>
                                        
                                        <h5
                                            class="cards-heading climate-action"
                                        >
                                        {limitarPalabras(contenidos.map(item => item.parrafo)[0], 8)}
                                        </h5>
                                      
                                        <div class="w-embed">
                                            <style>
                                                .s-article-p {
                                                    overflow: hidden;
                                                    text-overflow: ellipsis;
                                                    display: -webkit-box;
                                                    line-height: 22px; /* fallback */
                                                    max-height: 72px; /* fallback */
                                                    -webkit-line-clamp: 3; /* number of lines to show */
                                                    -webkit-box-orient: vertical;
                                                }
                                            </style>
                                        </div>
                                        <div
                                            class="cms-card-button outline-white"
                                            style="width: 40px;"
                                        >
                                            <div
                                                style="opacity: 1;"
                                                class="cms-card-button-text"
                                            >
                                                Leer Más
                                            </div>
                                            <div class="cms-card-arrow">
                                                <img
                                                    src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/608696cc0243311086991783_Button%20Arrow.svg"
                                                    loading="lazy"
                                                    alt="Arrow"
                                                    class="image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="resource-bg-blur">
                                        <img
                                            src={image}
                                            loading="lazy"
                                            alt=""
                                            sizes="(max-width: 991px) 223.59375px, 100vw"
                                            srcset={image || "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw"}
                                            class="image blurredimage"
                                        />
                                        <div class="dark-image-overlay" />
                                    </div>
                                </div></a
                            >
                        </div>
                    {/each}    
                    </div>
                </div>
               
            </div>
        </div>
        <div class="gridoverlay climate-action" />
    </div>
 
   
   

