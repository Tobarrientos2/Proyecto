<script lang="ts">
export let data;

let modeloSlug = data.modeloEncontrado;
let modelosSliders = data.modelosAleatorios;

</script>

 <div class="section article-hero">
        <div class="container grid article-grid">
            <div
                id="w-node-f55b6096-cfe1-ac2c-4036-1d2dc680ad4e-bddece41"
                class="article-post-grid"
            />
            <div
                id="w-node-_52852b77-e5ea-361a-f1e4-5975fae48c47-bddece41"
                class="article-post-grid bottom-side"
            />
            <div
                id="w-node-be964f8b-8f9c-8778-e1c7-98349da74a6b-bddece41"
                class="column article-hero-column"
                style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;"
            >
            <h1 class="article-post-h1">
            {modeloSlug.titulo}
              </h1>
                <div class="article-post-info hide">
                    <div class="author-text">By</div>
                    <div class="author-text w-dyn-bind-empty" />
                    <div class="author-text">September 15, 2021</div>
                </div>
            </div>
        </div>
        <div class="article-hero-image">
            <img
                src={modeloSlug.image}
                loading="lazy"
                alt=""
                sizes="(max-width: 991px) 100vw, (max-width: 1439px) 60vw, 862.796875px"
                srcset={modeloSlug.image || "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw"}
                class="image"
            />
        </div>
        <div
            data-w-id="177bde9b-aa7c-4ca5-b117-c44eb4593767"
            class="home-bg-wrapper"
        >
            <div class="section-background in-home-hero">
                <div
                    class="home-blob-1"
                    style="will-change: transform; transform: translate3d(70.682px, 35.341px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(5.2092deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                >
                    <img 
                        src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60ad23b95f979c784e57f426_Vector-11.svg"
                        loading="lazy"
                        alt=""
                        class="image blob-contain"
                    />
                </div>
                <div
                    class="home-blob-2"
                    style="transform: translate3d(-12.5021px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-20deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;"
                >
                    <img style="filter:hue-rotate(-28deg);"
                        src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60ad23b8b4d48936ebd2b028_Vector-5.svg"
                        loading="lazy"
                        alt=""
                        class="image blob-contain"
                    />
                </div>
                <div
                    class="home-blob-3"
                    style="will-change: transform; transform: translate3d(57.2524px, -142.778px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(60.4267deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                >
                    <img
                        src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60acf87b222a365f83f89133_blob%20(2).svg"
                        loading="lazy"
                        alt=""
                        class="image blob-contain"
                    />
                </div>
            </div>
        </div>
    </div>
    
    <div
        id="Image-1"
        class="section article-post-image-1 w-condition-invisible"
    >
        <img src="" loading="lazy" alt="" class="image w-dyn-bind-empty" />
    </div>
    <div id="Text-1" class="section bright-section">
        <div class="container grid">
            <h2
                id="w-node-d7f81f6d-2b17-57c6-9863-30fa20e9e25c-bddece41"
                class="sticky-article-heading"
            >
                ¿En qué consiste?
            </h2>
            <div
                id="w-node-_380bd10b-b071-fd82-decb-27d930481b0d-bddece41"
                class="article-rich-text w-richtext"
            >
                <p>{modeloSlug.descripcion}
                </p>
            </div>
        </div>
    </div>
    <div id="Quote" class="section bright-section w-condition-invisible">
        <div class="container grid">
            <div
                id="w-node-_7c33199e-e6a1-f33d-f6b9-68024ecd718b-bddece41"
                class="column"
            >
                <p class="h2-style w-dyn-bind-empty" />
                <div class="quote-author-info">
                    <div class="quote-author w-dyn-bind-empty" />
                    <div class="w-dyn-bind-empty" />
                    <div class="w-dyn-bind-empty" />
                </div>
            </div>
        </div>
    </div>
    <div
        id="Image-2"
        class="section with-large-cms-image w-condition-invisible"
    >
        <div class="container grid padding-60">
            <p
                id="w-node-_49c1fb49-fbb5-6a12-9e00-c961499b7541-bddece41"
                class="w-dyn-bind-empty"
            />
        </div>
        <div class="article-post-image-2">
            <img src="" loading="lazy" alt="" class="image w-dyn-bind-empty" />
        </div>
    </div>
    <div id="Text-2" class="section bright-section w-condition-invisible">
        <div class="container grid">
            <h2
                id="w-node-d8e080d8-cf40-aec5-0328-32d8d2036720-bddece41"
                class="sticky-article-heading w-dyn-bind-empty"
            />
            <div
                id="w-node-_826a3c1f-2d5e-0a1e-71e5-a8b3e15bf424-bddece41"
                class="article-rich-text w-dyn-bind-empty w-richtext"
            />
        </div>
    </div>
    <div
        id="Image-3"
        class="section with-large-cms-image w-condition-invisible"
    >
        <div class="container grid padding-60">
            <p
                id="w-node-a4a21168-dbed-769d-0995-9098cafeceeb-bddece41"
                class="w-dyn-bind-empty"
            />
        </div>
        <div class="article-post-image-2">
            <img src="" loading="lazy" alt="" class="image w-dyn-bind-empty" />
        </div>
    </div>
    <div id="Text-3" class="section bright-section w-condition-invisible">
        <div class="container grid">
            <h2
                id="w-node-_8c139244-9d6d-1987-0fb3-80ae0bddc62e-bddece41"
                class="sticky-article-heading w-dyn-bind-empty"
            />
            <div
                id="w-node-d47184c8-bbd8-2100-47c5-14a1db4b8fcf-bddece41"
                class="article-rich-text w-dyn-bind-empty w-richtext"
            />
        </div>
    </div>
    <div
        id="Image-4"
        class="section with-large-cms-image w-condition-invisible"
    >
        <div class="container grid padding-60">
            <p
                id="w-node-_2500f316-76e4-d23c-addc-0efd0c7eace7-bddece41"
                class="w-dyn-bind-empty"
            />
        </div>
        <div class="article-post-image-2">
            <img src="" loading="lazy" alt="" class="image w-dyn-bind-empty" />
        </div>
    </div>
    <div id="Text-4" class="section bright-section w-condition-invisible">
        <div class="container grid">
            <h2
                id="w-node-_16dc4ed3-8bda-7313-9fe3-12852904df8f-bddece41"
                class="sticky-article-heading w-dyn-bind-empty"
            />
            <div
                id="w-node-_16dc4ed3-8bda-7313-9fe3-12852904df90-bddece41"
                class="article-rich-text w-dyn-bind-empty w-richtext"
            />
        </div>
    </div>
    <div
        id="Image-5"
        class="section with-large-cms-image w-condition-invisible"
    >
        <div class="container grid padding-60">
            <p
                id="w-node-_5c736e7f-dbec-0bf3-03df-ef1af7d4bfdc-bddece41"
                class="w-dyn-bind-empty"
            />
        </div>
        <div class="article-post-image-2">
            <img src="" loading="lazy" alt="" class="image w-dyn-bind-empty" />
        </div>
    </div>
    <div id="Text-5" class="section bright-section w-condition-invisible">
        <div class="container grid">
            <h2
                id="w-node-_5dcbdd9f-6163-715e-39a5-93e6881b3e68-bddece41"
                class="sticky-article-heading w-dyn-bind-empty"
            />
            <div
                id="w-node-_5dcbdd9f-6163-715e-39a5-93e6881b3e69-bddece41"
                class="article-rich-text w-dyn-bind-empty w-richtext"
            />
        </div>
    </div>
    <div
        id="Statistics"
        class="section bright-section stats-section w-condition-invisible"
    >
        <div class="container grid full-width-mobile">
            <div
                id="w-node-_27dec4f5-c23c-2029-72fd-b5ee9fd88f0a-bddece41"
                class="article-stats"
            >
                <h3 class="article-statistics-title w-dyn-bind-empty" />
                <p class="w-dyn-bind-empty" />
            </div>
            <div
                id="w-node-_428848cf-f6b5-198f-4f5d-6a5d89adbe10-bddece41"
                class="article-stats"
            >
                <h3 class="article-statistics-title w-dyn-bind-empty" />
                <p class="w-dyn-bind-empty" />
            </div>
            <div
                id="w-node-f307cf8a-29f0-58ff-3ca3-98d93e6a6207-bddece41"
                class="article-stats"
            >
                <h3 class="article-statistics-title w-dyn-bind-empty" />
                <p class="w-dyn-bind-empty" />
            </div>
            <div
                id="w-node-_20b18485-56d3-448b-3543-b09356fe9fd8-bddece41"
                class="article-statistics-image-wrapper"
            >
                <p class="article-statis-image-credit w-dyn-bind-empty" />
                <div class="article-statistics-image">
                    <img
                        src=""
                        loading="lazy"
                        alt=""
                        class="image w-dyn-bind-empty"
                    />
                </div>
            </div>
        </div>
    </div>
    <div
        id="Features"
        class="section dark-section article-60 hide w-condition-invisible"
    >
        <div class="container features-container">
            <div class="features-sticky-wrapper">
                <h2 class="no-margin sticky-features-title">Features</h2>
                <div class="features-list-wrapper w-dyn-list">
                    <div class="empty-state w-dyn-empty">
                        <div>No items found.</div>
                    </div>
                </div>
                <div class="features-gradient" />
                <div class="features-gradient lower-end" />
            </div>
        </div>
        <div class="container w-condition-invisible">
            <div class="all-features-wrapper w-dyn-list">
                <div class="w-dyn-empty"><div>No items found.</div></div>
            </div>
        </div>
    </div>
    <div
        id="Image-6"
        class="section with-large-cms-image darker-bg w-condition-invisible"
    >
        <div class="container grid padding-60">
            <p
                id="w-node-aaa6e585-e4bc-af09-fea8-9bc1675aacc0-bddece41"
                class="w-dyn-bind-empty"
            />
        </div>
        <div class="article-post-image-2">
            <img src="" loading="lazy" alt="" class="image w-dyn-bind-empty" />
        </div>
    </div>
    <div
        id="Text-6"
        class="section dark-section article-60 w-condition-invisible"
    >
        <div class="container grid">
            <h2
                id="w-node-_0de7581b-3b52-4a13-3942-a8b23c7be592-bddece41"
                class="sticky-article-heading w-dyn-bind-empty"
            />
            <div
                id="w-node-_0de7581b-3b52-4a13-3942-a8b23c7be593-bddece41"
                class="article-rich-text w-dyn-bind-empty w-richtext"
            />
        </div>
    </div>
    <div class="section dark-section w-condition-invisible">
        <div class="container grid">
            <div
                id="w-node-_1ecf3798-16e2-1869-e031-3e17f83e452b-bddece41"
                class="article-rich-text w-dyn-bind-empty w-richtext"
            />
        </div>
    </div>
    <div class="section dark-section">
        <div class="container grid">
            <h3
                id="w-node-_94be8d79-47c8-0c1a-9cfe-675cd3aab33a-bddece41"
                class="no-margin w-condition-invisible"
            >
                Related Articles
            </h3>
            <div
                id="w-node-a6cd336b-d080-c002-fafb-2eb18224a62c-bddece41"
                class="small-articles-wrapper w-dyn-list"
            >
                <div role="list" class="small-articles-list w-dyn-items">
                    {#each modelosSliders as {titulo, descripcion, slug, image} }
                    <div
                        id="w-node-a6cd336b-d080-c002-fafb-2eb18224a62e-bddece41"
                        role="listitem"
                        class="small-articles-item w-dyn-item"
                    >
                        <a
                            data-w-id="a6cd336b-d080-c002-fafb-2eb18224a62f"
                            href={slug}
                            class="small-article-link w-inline-block"
                            style="transform: translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
                            ><div class="small-article-item-body">
                                <div class="small-article-thumbnail">
                                    <img
                                            src={image}
                                            loading="lazy"
                                            alt="Banking the unbanked"
                                            sizes="(max-width: 991px) 147.5234375px, 100vw"
                                            srcset={image || "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw"}
                                            class="image"
                                        />
                                </div>
                                <div class="resource-textwrapper">
                                    <h5 class="margin-s">
                                        {titulo}
                                    </h5>
                                    <p class="s-article-p">
                                        {descripcion}
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
                                    <div class="continue-reading">
                                        <h5 class="continuereadingtext">
                                            Continuar Leyendo
                                        </h5>
                                        <img
                                            src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/6086a181c7b29d2ee77e11eb_Gray%20Arrow.svg"
                                            loading="lazy"
                                            alt="Arrow"
                                            class="arrow-continue-reading"
                                        />
                                    </div>
                                </div>
                                <div class="resource-bg-blur">
                                    <img
                                        src="https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/614cdeda560c097b89f4fdd2_customer-retention-1440x962px-applications-OC-16-06-2021%20(1).jpg"
                                        loading="lazy"
                                        alt=""
                                        sizes="(max-width: 991px) 206.53125px, 100vw"
                                        srcset="https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/614cdeda560c097b89f4fdd2_customer-retention-1440x962px-applications-OC-16-06-2021%20(1)-p-500.jpeg 500w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/614cdeda560c097b89f4fdd2_customer-retention-1440x962px-applications-OC-16-06-2021%20(1)-p-800.jpeg 800w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/614cdeda560c097b89f4fdd2_customer-retention-1440x962px-applications-OC-16-06-2021%20(1)-p-1080.jpeg 1080w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/614cdeda560c097b89f4fdd2_customer-retention-1440x962px-applications-OC-16-06-2021%20(1).jpg 1440w"
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
    <div class="section dark-section w-condition-invisible">
        <div class="container grid">
            <h2
                id="w-node-afad12dc-da13-29bc-fb2a-3f1194220666-bddece41"
                class="no-margin"
            >
                It was easier in this project since we used this outpout
            </h2>
            <div
                id="w-node-c20fc3b8-a656-9277-0aa7-82895e19c7c5-bddece41"
                class="output-list-wrapper"
            >
                <div class="outputs-list">
                    <div
                        id="w-node-c20fc3b8-a656-9277-0aa7-82895e19c7c7-bddece41"
                        class="output-item w-condition-invisible"
                    >
                        <div class="output-card">
                            <div class="output-image">
                                <div
                                    data-is-ix2-target="1"
                                    class="lottie-static"
                                    data-w-id="c20fc3b8-a656-9277-0aa7-82895e19c7ca"
                                    data-animation-type="lottie"
                                    data-src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60aca9bd8f2b12d72aceaccc_01_Business%20insights.json"
                                    data-loop="1"
                                    data-direction="1"
                                    data-autoplay="0"
                                    data-renderer="svg"
                                    data-default-duration="3.9706371422432745"
                                    data-duration="0"
                                    data-ix2-initial-state="0"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 1000 750"
                                        width="1000"
                                        height="750"
                                        preserveAspectRatio="xMidYMid meet"
                                        style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
                                        ><defs
                                            ><clipPath id="__lottie_element_7"
                                                ><rect
                                                    width="1000"
                                                    height="750"
                                                    x="0"
                                                    y="0"
                                                /></clipPath
                                            ><clipPath id="__lottie_element_15"
                                                ><path
                                                    d="M0,0 L1000,0 L1000,750 L0,750z"
                                                /></clipPath
                                            ></defs
                                        ><g clip-path="url(#__lottie_element_7)"
                                            ><g
                                                transform="matrix(0.8199999928474426,0,0,0.8199999928474426,500,375)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="1"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /></g
                                            ><g
                                                transform="matrix(3.380000114440918,0,0,3.380000114440918,500,375)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="0"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /><path
                                                    stroke-linecap="butt"
                                                    stroke-linejoin="miter"
                                                    fill-opacity="0"
                                                    stroke-miterlimit="4"
                                                    stroke="rgb(255,255,255)"
                                                    stroke-opacity="1"
                                                    stroke-width="1"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /></g
                                            ><g
                                                clip-path="url(#__lottie_element_15)"
                                                transform="matrix(1,0,0,1,2.230987548828125,0.6929931640625)"
                                                opacity="1"
                                                style="display: block;"
                                                ><g
                                                    transform="matrix(-1,0,0,-1,499,374)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="4"
                                                        d=" M-227,229 C-227,229 231,-229 231,-229"
                                                    /></g
                                                ><g
                                                    transform="matrix(0,-1,1,0,499,374)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="4"
                                                        d=" M-227,229 C-227,229 231,-229 231,-229"
                                                    /></g
                                                ></g
                                            ></g
                                        ></svg
                                    >
                                </div>
                            </div>
                            <h3 class="output-heading">Business Insights</h3>
                            <p class="output-paragraph">
                                Apply key dataset transformations through
                                no/low-code workflows to clean, prep, and scope
                                your datasets as needed for analysis
                            </p>
                        </div>
                    </div>
                    <div
                        id="w-node-c20fc3b8-a656-9277-0aa7-82895e19c7cf-bddece41"
                        class="output-item w-condition-invisible"
                    >
                        <div class="output-card">
                            <div class="output-image">
                                <div
                                    data-is-ix2-target="1"
                                    class="lottie-static"
                                    data-w-id="c20fc3b8-a656-9277-0aa7-82895e19c7d2"
                                    data-animation-type="lottie"
                                    data-src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60aca9bdf6402a9a77336bed_02_Predictive%20Models.json"
                                    data-loop="0"
                                    data-direction="1"
                                    data-autoplay="0"
                                    data-renderer="svg"
                                    data-default-duration="12.045378221427075"
                                    data-duration="0"
                                    data-ix2-initial-state="0"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 1000 750"
                                        width="1000"
                                        height="750"
                                        preserveAspectRatio="xMidYMid meet"
                                        style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
                                        ><defs
                                            ><clipPath id="__lottie_element_49"
                                                ><rect
                                                    width="1000"
                                                    height="750"
                                                    x="0"
                                                    y="0"
                                                /></clipPath
                                            ><clipPath id="__lottie_element_51"
                                                ><path
                                                    d="M0,0 L1000,0 L1000,750 L0,750z"
                                                /></clipPath
                                            ></defs
                                        ><g
                                            clip-path="url(#__lottie_element_49)"
                                            ><g
                                                clip-path="url(#__lottie_element_51)"
                                                transform="matrix(1,0,0,1,0,0)"
                                                opacity="1"
                                                style="display: block;"
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,300,177)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,397.5,177)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,495,177)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,592.5,177)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,690,177)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,300,272.375)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,397.5,272.375)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,495,272.375)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,592.5,272.375)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,690,272.375)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,300,367.75)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,397.5,367.75)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,495,367.75)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,592.5,367.75)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,690,367.75)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,300,463.125)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,300,558.5)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,397.5,463.125)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,397.5,558.5)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,495,463.125)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,495,558.5)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,592.5,463.125)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,592.5,558.5)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,690,463.125)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,690,558.5)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ></g
                                            ><g
                                                transform="matrix(0.8199999928474426,0,0,0.8199999928474426,300,177)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="0"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /><path
                                                    stroke-linecap="butt"
                                                    stroke-linejoin="miter"
                                                    fill-opacity="0"
                                                    stroke-miterlimit="4"
                                                    stroke="rgb(255,255,255)"
                                                    stroke-opacity="1"
                                                    stroke-width="2"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /></g
                                            ><g
                                                transform="matrix(0.8199999928474426,0,0,0.8199999928474426,397.5,272.375)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="0"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /><path
                                                    stroke-linecap="butt"
                                                    stroke-linejoin="miter"
                                                    fill-opacity="0"
                                                    stroke-miterlimit="4"
                                                    stroke="rgb(255,255,255)"
                                                    stroke-opacity="1"
                                                    stroke-width="2"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /></g
                                            ><g
                                                transform="matrix(0.8199999928474426,0,0,0.8199999928474426,495,367.75)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="0"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /><path
                                                    stroke-linecap="butt"
                                                    stroke-linejoin="miter"
                                                    fill-opacity="0"
                                                    stroke-miterlimit="4"
                                                    stroke="rgb(255,255,255)"
                                                    stroke-opacity="1"
                                                    stroke-width="2"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /></g
                                            ><g
                                                transform="matrix(0.8199999928474426,0,0,0.8199999928474426,592.5,463.125)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="0"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /><path
                                                    stroke-linecap="butt"
                                                    stroke-linejoin="miter"
                                                    fill-opacity="0"
                                                    stroke-miterlimit="4"
                                                    stroke="rgb(255,255,255)"
                                                    stroke-opacity="1"
                                                    stroke-width="2"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /></g
                                            ><g
                                                transform="matrix(0.8199999928474426,0,0,0.8199999928474426,690,558.5)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="0"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /><path
                                                    stroke-linecap="butt"
                                                    stroke-linejoin="miter"
                                                    fill-opacity="0"
                                                    stroke-miterlimit="4"
                                                    stroke="rgb(255,255,255)"
                                                    stroke-opacity="1"
                                                    stroke-width="2"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /></g
                                            ></g
                                        ></svg
                                    >
                                </div>
                            </div>
                            <h3 class="output-heading">Predictive Models</h3>
                            <p class="output-paragraph">
                                Apply key dataset transformations through
                                no/low-code workflows to clean, prep, and scope
                                your datasets as needed for analysis
                            </p>
                        </div>
                    </div>
                    <div
                        id="w-node-c20fc3b8-a656-9277-0aa7-82895e19c7d7-bddece41"
                        class="output-item w-condition-invisible"
                    >
                        <div class="output-card">
                            <div class="output-image">
                                <div
                                    data-is-ix2-target="1"
                                    class="lottie-static"
                                    data-w-id="c20fc3b8-a656-9277-0aa7-82895e19c7da"
                                    data-animation-type="lottie"
                                    data-src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60ae517b5ac99a4abc0c11d6_03_Micro%20segments.json"
                                    data-loop="0"
                                    data-direction="1"
                                    data-autoplay="0"
                                    data-renderer="svg"
                                    data-default-duration="10.510510082408667"
                                    data-duration="0"
                                    data-ix2-initial-state="0"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 1000 750"
                                        width="1000"
                                        height="750"
                                        preserveAspectRatio="xMidYMid meet"
                                        style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
                                        ><defs
                                            ><clipPath id="__lottie_element_165"
                                                ><rect
                                                    width="1000"
                                                    height="750"
                                                    x="0"
                                                    y="0"
                                                /></clipPath
                                            ><clipPath id="__lottie_element_173"
                                                ><path
                                                    d="M0,0 L1000,0 L1000,750 L0,750z"
                                                /></clipPath
                                            ></defs
                                        ><g
                                            clip-path="url(#__lottie_element_165)"
                                            ><g
                                                transform="matrix(1,0,0,1,534,375)"
                                                opacity="1"
                                                style="display: block;"
                                                ><g
                                                    opacity="1"
                                                    transform="matrix(1,0,0,1,315,0)"
                                                    ><path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M-39.5,-157 C-39.5,-157 -40,157.5 -40,157.5"
                                                    /><g
                                                        opacity="1"
                                                        transform="matrix(1,0,0,1,0,0)"
                                                        ><path
                                                            fill="rgb(255,255,255)"
                                                            fill-opacity="1"
                                                            d="M0 0"
                                                        /><path
                                                            stroke-linecap="butt"
                                                            stroke-linejoin="miter"
                                                            fill-opacity="0"
                                                            stroke-miterlimit="4"
                                                            stroke="rgb(255,0,0)"
                                                            stroke-opacity="1"
                                                            stroke-width="3"
                                                            d="M0 0"
                                                        /></g
                                                    ></g
                                                ><g
                                                    opacity="1"
                                                    transform="matrix(1,0,0,1,252,0)"
                                                    ><path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M-39.5,-157 C-39.5,-157 -40,157.5 -40,157.5"
                                                    /><g
                                                        opacity="1"
                                                        transform="matrix(1,0,0,1,0,0)"
                                                        ><path
                                                            fill="rgb(255,255,255)"
                                                            fill-opacity="1"
                                                            d="M0 0"
                                                        /><path
                                                            stroke-linecap="butt"
                                                            stroke-linejoin="miter"
                                                            fill-opacity="0"
                                                            stroke-miterlimit="4"
                                                            stroke="rgb(255,0,0)"
                                                            stroke-opacity="1"
                                                            stroke-width="3"
                                                            d="M0 0"
                                                        /></g
                                                    ></g
                                                ><g
                                                    opacity="1"
                                                    transform="matrix(1,0,0,1,189,0)"
                                                    ><path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M-39.5,-157 C-39.5,-157 -40,157.5 -40,157.5"
                                                    /><g
                                                        opacity="1"
                                                        transform="matrix(1,0,0,1,0,0)"
                                                        ><path
                                                            fill="rgb(255,255,255)"
                                                            fill-opacity="1"
                                                            d="M0 0"
                                                        /><path
                                                            stroke-linecap="butt"
                                                            stroke-linejoin="miter"
                                                            fill-opacity="0"
                                                            stroke-miterlimit="4"
                                                            stroke="rgb(255,0,0)"
                                                            stroke-opacity="1"
                                                            stroke-width="3"
                                                            d="M0 0"
                                                        /></g
                                                    ></g
                                                ><g
                                                    opacity="1"
                                                    transform="matrix(1,0,0,1,126,0)"
                                                    ><path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M-39.5,-157 C-39.5,-157 -40,157.5 -40,157.5"
                                                    /><g
                                                        opacity="1"
                                                        transform="matrix(1,0,0,1,0,0)"
                                                        ><path
                                                            fill="rgb(255,255,255)"
                                                            fill-opacity="1"
                                                            d="M0 0"
                                                        /><path
                                                            stroke-linecap="butt"
                                                            stroke-linejoin="miter"
                                                            fill-opacity="0"
                                                            stroke-miterlimit="4"
                                                            stroke="rgb(255,0,0)"
                                                            stroke-opacity="1"
                                                            stroke-width="3"
                                                            d="M0 0"
                                                        /></g
                                                    ></g
                                                ><g
                                                    opacity="1"
                                                    transform="matrix(1,0,0,1,63,0)"
                                                    ><path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M-39.5,-157 C-39.5,-157 -40,157.5 -40,157.5"
                                                    /><g
                                                        opacity="1"
                                                        transform="matrix(1,0,0,1,0,0)"
                                                        ><path
                                                            fill="rgb(255,255,255)"
                                                            fill-opacity="1"
                                                            d="M0 0"
                                                        /><path
                                                            stroke-linecap="butt"
                                                            stroke-linejoin="miter"
                                                            fill-opacity="0"
                                                            stroke-miterlimit="4"
                                                            stroke="rgb(255,0,0)"
                                                            stroke-opacity="1"
                                                            stroke-width="3"
                                                            d="M0 0"
                                                        /></g
                                                    ></g
                                                ><g
                                                    opacity="1"
                                                    transform="matrix(1,0,0,1,0,0)"
                                                    ><path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M-39.5,-157 C-39.5,-157 -40,157.5 -40,157.5"
                                                    /><g
                                                        opacity="1"
                                                        transform="matrix(1,0,0,1,0,0)"
                                                        ><path
                                                            fill="rgb(255,255,255)"
                                                            fill-opacity="1"
                                                            d="M0 0"
                                                        /><path
                                                            stroke-linecap="butt"
                                                            stroke-linejoin="miter"
                                                            fill-opacity="0"
                                                            stroke-miterlimit="4"
                                                            stroke="rgb(255,0,0)"
                                                            stroke-opacity="1"
                                                            stroke-width="3"
                                                            d="M0 0"
                                                        /></g
                                                    ></g
                                                ></g
                                            ><g
                                                transform="matrix(0,1,-1,0,494.5,414.5)"
                                                opacity="1"
                                                style="display: block;"
                                                ><g
                                                    opacity="1"
                                                    transform="matrix(1,0,0,1,315,0)"
                                                    ><path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M-197.5,0 C-197.5,0 -197.75,310 -197.75,310"
                                                    /><g
                                                        opacity="1"
                                                        transform="matrix(1,0,0,1,0,0)"
                                                        ><path
                                                            fill="rgb(255,255,255)"
                                                            fill-opacity="1"
                                                            d="M0 0"
                                                        /><path
                                                            stroke-linecap="butt"
                                                            stroke-linejoin="miter"
                                                            fill-opacity="0"
                                                            stroke-miterlimit="4"
                                                            stroke="rgb(255,0,0)"
                                                            stroke-opacity="1"
                                                            stroke-width="3"
                                                            d="M0 0"
                                                        /></g
                                                    ></g
                                                ><g
                                                    opacity="1"
                                                    transform="matrix(1,0,0,1,252,0)"
                                                    ><path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M-197.5,0 C-197.5,0 -197.75,310 -197.75,310"
                                                    /><g
                                                        opacity="1"
                                                        transform="matrix(1,0,0,1,0,0)"
                                                        ><path
                                                            fill="rgb(255,255,255)"
                                                            fill-opacity="1"
                                                            d="M0 0"
                                                        /><path
                                                            stroke-linecap="butt"
                                                            stroke-linejoin="miter"
                                                            fill-opacity="0"
                                                            stroke-miterlimit="4"
                                                            stroke="rgb(255,0,0)"
                                                            stroke-opacity="1"
                                                            stroke-width="3"
                                                            d="M0 0"
                                                        /></g
                                                    ></g
                                                ><g
                                                    opacity="1"
                                                    transform="matrix(1,0,0,1,189,0)"
                                                    ><path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M-197.5,0 C-197.5,0 -197.75,310 -197.75,310"
                                                    /><g
                                                        opacity="1"
                                                        transform="matrix(1,0,0,1,0,0)"
                                                        ><path
                                                            fill="rgb(255,255,255)"
                                                            fill-opacity="1"
                                                            d="M0 0"
                                                        /><path
                                                            stroke-linecap="butt"
                                                            stroke-linejoin="miter"
                                                            fill-opacity="0"
                                                            stroke-miterlimit="4"
                                                            stroke="rgb(255,0,0)"
                                                            stroke-opacity="1"
                                                            stroke-width="3"
                                                            d="M0 0"
                                                        /></g
                                                    ></g
                                                ><g
                                                    opacity="1"
                                                    transform="matrix(1,0,0,1,126,0)"
                                                    ><path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M-197.5,0 C-197.5,0 -197.75,310 -197.75,310"
                                                    /><g
                                                        opacity="1"
                                                        transform="matrix(1,0,0,1,0,0)"
                                                        ><path
                                                            fill="rgb(255,255,255)"
                                                            fill-opacity="1"
                                                            d="M0 0"
                                                        /><path
                                                            stroke-linecap="butt"
                                                            stroke-linejoin="miter"
                                                            fill-opacity="0"
                                                            stroke-miterlimit="4"
                                                            stroke="rgb(255,0,0)"
                                                            stroke-opacity="1"
                                                            stroke-width="3"
                                                            d="M0 0"
                                                        /></g
                                                    ></g
                                                ><g
                                                    opacity="1"
                                                    transform="matrix(1,0,0,1,63,0)"
                                                    ><path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M-197.5,0 C-197.5,0 -197.75,310 -197.75,310"
                                                    /><g
                                                        opacity="1"
                                                        transform="matrix(1,0,0,1,0,0)"
                                                        ><path
                                                            fill="rgb(255,255,255)"
                                                            fill-opacity="1"
                                                            d="M0 0"
                                                        /><path
                                                            stroke-linecap="butt"
                                                            stroke-linejoin="miter"
                                                            fill-opacity="0"
                                                            stroke-miterlimit="4"
                                                            stroke="rgb(255,0,0)"
                                                            stroke-opacity="1"
                                                            stroke-width="3"
                                                            d="M0 0"
                                                        /></g
                                                    ></g
                                                ><g
                                                    opacity="1"
                                                    transform="matrix(1,0,0,1,0,0)"
                                                    ><path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M-197.5,0 C-197.5,0 -197.75,310 -197.75,310"
                                                    /><g
                                                        opacity="1"
                                                        transform="matrix(1,0,0,1,0,0)"
                                                        ><path
                                                            fill="rgb(255,255,255)"
                                                            fill-opacity="1"
                                                            d="M0 0"
                                                        /><path
                                                            stroke-linecap="butt"
                                                            stroke-linejoin="miter"
                                                            fill-opacity="0"
                                                            stroke-miterlimit="4"
                                                            stroke="rgb(255,0,0)"
                                                            stroke-opacity="1"
                                                            stroke-width="3"
                                                            d="M0 0"
                                                        /></g
                                                    ></g
                                                ></g
                                            ><g
                                                clip-path="url(#__lottie_element_173)"
                                                transform="matrix(1,0,0,1,0,0)"
                                                opacity="1"
                                                style="display: block;"
                                                ><g
                                                    transform="matrix(1,0,0,1,777,375)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="0.9"
                                                        d=" M31.5,-158 C31.5,-158 31.5,158 31.5,158 C31.5,158 -31.5,158 -31.5,158 C-31.5,158 -31.5,-158 -31.5,-158 C-31.5,-158 31.5,-158 31.5,-158z"
                                                    /></g
                                                ></g
                                            ><g
                                                transform="matrix(0,1,-0.9810100197792053,0,339.22900390625,249.5)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="0.9"
                                                    d=" M31.5,-158 C31.5,-158 31.5,158 31.5,158 C31.5,158 -31.5,158 -31.5,158 C-31.5,158 -31.5,-158 -31.5,-158 C-31.5,-158 31.5,-158 31.5,-158z"
                                                /></g
                                            ></g
                                        ></svg
                                    >
                                </div>
                            </div>
                            <h3 class="output-heading">Micro-Segments</h3>
                            <p class="output-paragraph">
                                Apply key dataset transformations through
                                no/low-code workflows to clean, prep, and scope
                                your datasets as needed for analysis
                            </p>
                        </div>
                    </div>
                    <div
                        id="w-node-c20fc3b8-a656-9277-0aa7-82895e19c7df-bddece41"
                        class="output-item w-condition-invisible"
                    >
                        <div class="output-card">
                            <div class="output-image">
                                <div
                                    data-is-ix2-target="1"
                                    class="lottie-static"
                                    data-w-id="c20fc3b8-a656-9277-0aa7-82895e19c7e2"
                                    data-animation-type="lottie"
                                    data-src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60ae517ba5acda45763ec606_04_Features%20for%20external%20models.json"
                                    data-loop="0"
                                    data-direction="1"
                                    data-autoplay="0"
                                    data-renderer="svg"
                                    data-default-duration="4.004003840917587"
                                    data-duration="0"
                                    data-ix2-initial-state="0"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 1000 750"
                                        width="1000"
                                        height="750"
                                        preserveAspectRatio="xMidYMid meet"
                                        style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
                                        ><defs
                                            ><clipPath id="__lottie_element_24"
                                                ><rect
                                                    width="1000"
                                                    height="750"
                                                    x="0"
                                                    y="0"
                                                /></clipPath
                                            ></defs
                                        ><g
                                            clip-path="url(#__lottie_element_24)"
                                            ><g
                                                transform="matrix(0.942527711391449,-0.3341279625892639,0.3341279625892639,0.942527711391449,500,375)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="1"
                                                    d=" M75,-75 C75,-75 75,75 75,75 C75,75 -75,75 -75,75 C-75,75 -75,-75 -75,-75 C-75,-75 75,-75 75,-75z"
                                                /></g
                                            ><g
                                                transform="matrix(1.885055422782898,0.6682559251785278,-0.6682559251785278,1.885055422782898,500,375)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    stroke-linecap="butt"
                                                    stroke-linejoin="miter"
                                                    fill-opacity="0"
                                                    stroke-miterlimit="4"
                                                    stroke="rgb(255,255,255)"
                                                    stroke-opacity="1"
                                                    stroke-width="1"
                                                    d=" M15.960000038146973,-75 C47.448001861572266,-75 75,-75 75,-75 C75,-75 75,-75 75,-75 C75,-75 75,75 75,75 C75,75 -75,75 -75,75 C-75,75 -75,-75 -75,-75 C-75,-75 -26.02199935913086,-75 15.960000038146973,-75"
                                                /></g
                                            ><g
                                                transform="matrix(0.9027318954467773,0.4302035868167877,-0.4302035868167877,0.9027318954467773,500,375)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="1"
                                                    d=" M1.5,-325 C1.5,-325 1.5,325 1.5,325 C1.5,325 -1.5,325 -1.5,325 C-1.5,325 -1.5,-325 -1.5,-325 C-1.5,-325 1.5,-325 1.5,-325z"
                                                /></g
                                            ><g
                                                transform="matrix(0.4302035868167877,-0.9027318954467773,0.9027318954467773,0.4302035868167877,500,375)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="1"
                                                    d=" M1.5,-325 C1.5,-325 1.5,325 1.5,325 C1.5,325 -1.5,325 -1.5,325 C-1.5,325 -1.5,-325 -1.5,-325 C-1.5,-325 1.5,-325 1.5,-325z"
                                                /></g
                                            ><g
                                                transform="matrix(0.942527711391449,-0.3341279625892639,0.3341279625892639,0.942527711391449,793.6307983398438,514.9319458007812)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="1"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /></g
                                            ><g
                                                transform="matrix(0.942527711391449,-0.3341279625892639,0.3341279625892639,0.942527711391449,360.06805419921875,668.6307983398438)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="1"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /></g
                                            ><g
                                                transform="matrix(0.942527711391449,-0.3341279625892639,0.3341279625892639,0.942527711391449,206.36920166015625,235.06805419921875)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="1"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /></g
                                            ><g
                                                transform="matrix(0.942527711391449,-0.3341279625892639,0.3341279625892639,0.942527711391449,639.9319458007812,81.36919403076172)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="1"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /></g
                                            ></g
                                        ></svg
                                    >
                                </div>
                            </div>
                            <h3 class="output-heading">
                                Features For<br />External Models
                            </h3>
                            <p class="output-paragraph">
                                Apply key dataset transformations through
                                no/low-code workflows to clean, prep, and scope
                                your datasets as needed for analysis
                            </p>
                        </div>
                    </div>
                    <div
                        id="w-node-c20fc3b8-a656-9277-0aa7-82895e19c7e9-bddece41"
                        class="output-item w-condition-invisible"
                    >
                        <div class="output-card">
                            <div class="output-image">
                                <div
                                    data-is-ix2-target="1"
                                    class="lottie-static"
                                    data-w-id="c20fc3b8-a656-9277-0aa7-82895e19c7ec"
                                    data-animation-type="lottie"
                                    data-src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60aca9bd0a5bd985665b48a6_05_Business%20automation.json"
                                    data-loop="0"
                                    data-direction="1"
                                    data-autoplay="0"
                                    data-renderer="svg"
                                    data-default-duration="13.246579373702351"
                                    data-duration="0"
                                    data-ix2-initial-state="0"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 1000 750"
                                        width="1000"
                                        height="750"
                                        preserveAspectRatio="xMidYMid meet"
                                        style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
                                        ><defs
                                            ><clipPath id="__lottie_element_144"
                                                ><rect
                                                    width="1000"
                                                    height="750"
                                                    x="0"
                                                    y="0"
                                                /></clipPath
                                            ><g id="__lottie_element_148"
                                                ><g
                                                    clip-path="url(#__lottie_element_149)"
                                                    transform="matrix(1,0,0,1,0,0)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><g
                                                        transform="matrix(1.100000023841858,0,0,1.100000023841858,500,610)"
                                                        opacity="1"
                                                        style="display: block;"
                                                        ><path
                                                            fill="rgb(255,255,255)"
                                                            fill-opacity="1"
                                                            d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                        /></g
                                                    ><g
                                                        transform="matrix(-1.100000023841858,0,0,-1.100000023841858,498.3330078125,141.5709991455078)"
                                                        opacity="1"
                                                        style="display: block;"
                                                        ><path
                                                            fill="rgb(255,255,255)"
                                                            fill-opacity="1"
                                                            d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                        /></g
                                                    ></g
                                                ></g
                                            ><clipPath id="__lottie_element_149"
                                                ><path
                                                    d="M0,0 L1000,0 L1000,750 L0,750z"
                                                /></clipPath
                                            ><filter
                                                id="__lottie_element_158"
                                                filterUnits="objectBoundingBox"
                                                x="0%"
                                                y="0%"
                                                width="100%"
                                                height="100%"
                                                ><feComponentTransfer
                                                    in="SourceGraphic"
                                                    ><feFuncA
                                                        type="table"
                                                        tableValues="1.0 0.0"
                                                    /></feComponentTransfer
                                                ></filter
                                            ><mask
                                                id="__lottie_element_148_2"
                                                mask-type="alpha"
                                                ><g
                                                    filter="url(#__lottie_element_158)"
                                                    ><rect
                                                        width="1000"
                                                        height="750"
                                                        x="0"
                                                        y="0"
                                                        fill="#ffffff"
                                                        opacity="0"
                                                    /><use
                                                        xlink:href="#__lottie_element_148"
                                                    /></g
                                                ></mask
                                            ></defs
                                        ><g
                                            clip-path="url(#__lottie_element_144)"
                                            ><g
                                                mask="url(#__lottie_element_148_2)"
                                                style="display: block;"
                                                ><g
                                                    transform="matrix(1,0,0,1,501,378)"
                                                    opacity="1"
                                                    ><g
                                                        opacity="1"
                                                        transform="matrix(0.9774900078773499,0,0,0.9855999946594238,-0.3370000123977661,-1.9980000257492065)"
                                                        ><path
                                                            stroke-linecap="butt"
                                                            stroke-linejoin="miter"
                                                            fill-opacity="0"
                                                            stroke-miterlimit="4"
                                                            stroke="rgb(255,255,255)"
                                                            stroke-opacity="1"
                                                            stroke-width="4"
                                                            d=" M172.6634979248047,-62.3385009765625 C172.6634979248047,-62.3385009765625 172.6634979248047,62.3385009765625 172.6634979248047,62.3385009765625 C172.6634979248047,157.63148498535156 95.29298400878906,235.0019989013672 0,235.0019989013672 C0,235.0019989013672 0,235.0019989013672 0,235.0019989013672 C-95.29298400878906,235.0019989013672 -172.6634979248047,157.63148498535156 -172.6634979248047,62.3385009765625 C-172.6634979248047,62.3385009765625 -172.6634979248047,-62.3385009765625 -172.6634979248047,-62.3385009765625 C-172.6634979248047,-157.63148498535156 -95.29298400878906,-235.0019989013672 0,-235.0019989013672 C0,-235.0019989013672 0,-235.0019989013672 0,-235.0019989013672 C95.29298400878906,-235.0019989013672 172.6634979248047,-157.63148498535156 172.6634979248047,-62.3385009765625z"
                                                        /></g
                                                    ></g
                                                ></g
                                            ><g
                                                transform="matrix(0.8199999928474426,0,0,0.8199999928474426,500,610)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="1"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /></g
                                            ><g
                                                transform="matrix(-0.8199999928474426,0,0,-0.8199999928474426,498.3330078125,141.5709991455078)"
                                                opacity="1"
                                                style="display: block;"
                                                ><path
                                                    fill="rgb(255,255,255)"
                                                    fill-opacity="1"
                                                    d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                /></g
                                            ></g
                                        ></svg
                                    >
                                </div>
                            </div>
                            <h3 class="output-heading">
                                Business Automation<br />Rules
                            </h3>
                            <p class="output-paragraph">
                                Apply key dataset transformations through
                                no/low-code workflows to clean, prep, and scope
                                your datasets as needed for analysis
                            </p>
                        </div>
                    </div>
                    <div
                        id="w-node-c20fc3b8-a656-9277-0aa7-82895e19c7f3-bddece41"
                        class="output-item w-condition-invisible"
                    >
                        <div class="output-card">
                            <div class="output-image">
                                <div
                                    data-is-ix2-target="1"
                                    class="lottie-static"
                                    data-w-id="c20fc3b8-a656-9277-0aa7-82895e19c7f6"
                                    data-animation-type="lottie"
                                    data-src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60aca9bec5780b4325db8b21_06_Root%20Cause%20Analysis.json"
                                    data-loop="0"
                                    data-direction="1"
                                    data-autoplay="0"
                                    data-renderer="svg"
                                    data-default-duration="13.21321267502804"
                                    data-duration="0"
                                    data-ix2-initial-state="0"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 1000 750"
                                        width="1000"
                                        height="750"
                                        preserveAspectRatio="xMidYMid meet"
                                        style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
                                        ><defs
                                            ><clipPath id="__lottie_element_182"
                                                ><rect
                                                    width="1000"
                                                    height="750"
                                                    x="0"
                                                    y="0"
                                                /></clipPath
                                            ><clipPath id="__lottie_element_184"
                                                ><path
                                                    d="M0,0 L1000,0 L1000,750 L0,750z"
                                                /></clipPath
                                            ></defs
                                        ><g
                                            clip-path="url(#__lottie_element_182)"
                                            ><g
                                                clip-path="url(#__lottie_element_184)"
                                                transform="matrix(1,0,0,1,0,0)"
                                                opacity="1"
                                                style="display: block;"
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,300,177)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,397.5,177)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,495,177)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,592.5,177)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,690,177)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,300,272.375)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,397.5,272.375)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,495,272.375)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,592.5,272.375)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,690,272.375)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,300,367.75)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,397.5,367.75)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,495,367.75)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,592.5,367.75)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,690,367.75)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,300,463.125)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,300,558.5)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,397.5,463.125)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,397.5,558.5)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,495,463.125)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,495,558.5)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,592.5,463.125)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,592.5,558.5)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,690,463.125)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ><g
                                                    transform="matrix(0.8199999928474426,0,0,0.8199999928474426,690,558.5)"
                                                    opacity="1"
                                                    style="display: block;"
                                                    ><path
                                                        fill="rgb(255,255,255)"
                                                        fill-opacity="1"
                                                        d="M0 0"
                                                    /><path
                                                        stroke-linecap="butt"
                                                        stroke-linejoin="miter"
                                                        fill-opacity="0"
                                                        stroke-miterlimit="4"
                                                        stroke="rgb(255,255,255)"
                                                        stroke-opacity="1"
                                                        stroke-width="2"
                                                        d=" M0,-50 C27.594999313354492,-50 50,-27.594999313354492 50,0 C50,27.594999313354492 27.594999313354492,50 0,50 C-27.594999313354492,50 -50,27.594999313354492 -50,0 C-50,-27.594999313354492 -27.594999313354492,-50 0,-50z"
                                                    /></g
                                                ></g
                                            ><g style="display: none;"
                                                ><path /><path /><path
                                                    stroke-linecap="butt"
                                                    stroke-linejoin="miter"
                                                    fill-opacity="0"
                                                    stroke-miterlimit="4"
                                                /></g
                                            ></g
                                        ></svg
                                    >
                                </div>
                            </div>
                            <h3 class="output-heading">
                                Root-Cause<br />Analysis
                            </h3>
                            <p class="output-paragraph">
                                Apply key dataset transformations through
                                no/low-code workflows to clean, prep, and scope
                                your datasets as needed for analysis
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="Event-Section" class="section dark-section w-condition-invisible">
        <div class="container grid">
            <div
                id="w-node-_13186e8b-3a2b-cd99-c1da-9a4cd3c1c1fc-bddece41"
                class="column center"
            >
                <h2 class="margin-s">Join our event about this topic today.</h2>
                <p>
                    Learn all about the SparkBeyond mission and product vision.
                </p>
                <a
                    data-w-id="f402ed9f-7545-a2d9-5c9c-474c0c493ef2"
                    href="#"
                    class="cms-card-button outline-white w-inline-block"
                    style="width: 40px;"
                    ><div
                        data-w-id="f402ed9f-7545-a2d9-5c9c-474c0c493ef3"
                        class="cms-card-button-text"
                        style="opacity: 1;"
                    >
                        RVSP
                    </div>
                    <div class="cms-card-arrow">
                        <img
                            src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/608696cc0243311086991783_Button%20Arrow.svg"
                            loading="lazy"
                            alt="Arrow"
                            class="image"
                        />
                    </div></a
                >
            </div>
        </div>
    </div>


