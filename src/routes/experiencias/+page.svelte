<script lang="ts">

	 export let data; 
    console.log(data);

    let page = data.page;
    let dataExperiencias = data.dataJSON;
    let dataSlug = dataExperiencias.map(item => item.slug);
    let dataParrafo = dataExperiencias.map(item => item.contenidos[0].parrafo);

    console.log(dataParrafo);
  
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
                id="w-node-_84fdf977-d11a-e789-e22d-d8dc4494fa72-50decead"
                class="type-box"
            >
                <div class="_40left">
                    <div class="typed-title-embed w-embed w-script">
                        <h1 class="h2-style no-margin typed-heading">
                            Experiencias
                        </h1>
                        <script>
                            var Webflow = Webflow || [];
                                                  Webflow.push(function () {
                                                      // DOMready has fired
                                                      // May now use jQuery and Webflow ap
                                                      var typed = new Typed(".typed-heading", {
                                                          strings: ["Newsroom"],
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
                <div class="overlay-blur-bcg-noblur">
                    <div class="backdrop-code w-embed">
                        <style>
                            .overlay-blur-bcg {
                                backdrop-filter: blur(10px);
                                -webkit-backdrop-filter: blur(10px);
                            }
                        </style>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="section-background hero-parallax-image"
            style="will-change: transform; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
        >
            <img
                src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/615b898f0b0fda86199f4ddb_news-header-2-1440x962px-13-09-2021-OC.jpg"
                loading="lazy"
                sizes="(max-width: 1439px) 100vw, 1438px"
                srcset="https://global-uploads.webflow.com/60866fa44e871fb63043a756/615b898f0b0fda86199f4ddb_news-header-2-1440x962px-13-09-2021-OC-p-1080.jpeg 1080w, https://global-uploads.webflow.com/60866fa44e871fb63043a756/615b898f0b0fda86199f4ddb_news-header-2-1440x962px-13-09-2021-OC.jpg 1440w"
                alt=""
                class="image"
            />
            <div class="gridoverlay" />
        </div>
    </div>
    <div class="section fullscreen-article-section hide">
        <div class="fullscreen-article-wrapper w-dyn-list">
            <div class="w-dyn-empty"><div>No items found.</div></div>
        </div>
    </div>
    <div class="section dark-section">
        <div class="container grid">

            <div
                id="w-node-a9b4d72a-0052-04ce-733e-fec12782c63c-50decead"
                class="small-articles-wrapper w-dyn-list"
            >
                <div role="list" class="small-articles-list w-dyn-items">
              
                    {#each dataExperiencias as {titulo, parrafos, slug, contenidos, image}, i}
                    
                    <div
                        id="w-node-a9b4d72a-0052-04ce-733e-fec12782c63e-50decead"
                        role="listitem"
                        class="small-articles-item w-dyn-item"
                    >
                        <a
                            data-w-id="a9b4d72a-0052-04ce-733e-fec12782c63f"
                            href={slug}
                            class="small-article-link w-inline-block"
                            style="transform: translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
                            ><div class="small-article-item-body">
                                <div class="small-article-thumbnail">
                                    <img
                                        src={image}
                                        loading="lazy"
                                        alt="SparkBeyond Helps Equinor Solve 30-Year Industry Puzzle"
                                        sizes="(max-width: 991px) 132.296875px, 100vw"
                                        srcset={image || "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw"}
                                        class="image"
                                    />
                                </div>
                                <div class="newsroom-text-wrapper">
                                    <h5 class="cards-heading">
                                        {titulo}
                                    </h5>
                                    
                                    <p class="s-article-p">
                                        {contenidos.map(item => item.parrafo)[0]}
                                    </p>
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
                                            data-w-id="a9b4d72a-0052-04ce-733e-fec12782c646"
                                            class="cms-card-button-text"
                                            style="opacity: 1;"
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
                            </div></a
                        >
                        <div class="hidden-filter-text w-dyn-bind-empty" />
                    </div>

                    {/each}
                    
                </div>
            </div>
        </div>
    </div>
    


