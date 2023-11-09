<script lang="ts">
import type { PageData } from "../../modelos-de-utilidad/[slug]/$types";
import { onMount } from "svelte";
import { cargarServicios } from "../../servicios";

let servicios = {};

  onMount(async () => {
    try {
      // Cargar datos al inicio
      servicios = await cargarServicios();
      console.log(servicios)
    } catch (error) {
      // Manejar errores aquí
      console.error("Error en onMount:", error);
    }
  });
  export let data: PageData;

</script>

<html lang="js">
   <body class="chakra-ui-light"
        ><div class="page-wrapper">
            <div class="section-title dark mobile-hidden">
               
                <div class="section-labels-wrapper">
                    
                    <a href="/resources" class="section-label">Modelos de Utilidad</a>
                    <div class="section-label">→</div>
                    <div class="section-label">{data.page.title}</div>
                </div>
                <div class="nav-anchor menu-anchor">
                    <div class="container">Menu</div>
                </div>
            </div>
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
                            
                        </h1>
                        <div class="article-post-info hide">
                            <div class="author-text">By</div>
                            <div class="author-text">Hola</div>
                            <div class="author-text">October 6, 2021</div>
                        </div>
                    </div>
                   
                </div>
                <div class="article-hero-image">
                    <img
                        src="https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/60d24e71e1f4f1e900817455_AI-assisted-mergers-1440x962px-rs-applications-22-06-2021-OC-1.jpg"
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 991px) 100vw, (max-width: 1439px) 60vw, 862.796875px"
                        srcset="https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/60d24e71e1f4f1e900817455_AI-assisted-mergers-1440x962px-rs-applications-22-06-2021-OC-1-p-1080.jpeg 1080w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/60d24e71e1f4f1e900817455_AI-assisted-mergers-1440x962px-rs-applications-22-06-2021-OC-1.jpg 1440w"
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
                            style="will-change: transform; transform: translate3d(44.622px, 22.311px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(3.0079deg) skew(0deg, 0deg); transform-style: preserve-3d;"
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
                            style="will-change: transform; transform: translate3d(-7.21896px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-12.0316deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                        >
                            <img
                                src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60ad23b8b4d48936ebd2b028_Vector-5.svg"
                                loading="lazy"
                                alt=""
                                class="image blob-contain"
                            />
                        </div>
                        <div
                            class="home-blob-3"
                            style="will-change: transform; transform: translate3d(36.1438px, -90.1364px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(34.8916deg) skew(0deg, 0deg); transform-style: preserve-3d;"
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
            <div id="TLDR" class="section dark-section">
                <div class="container grid">
                    <div
                        id="w-node-b671c621-3752-558d-1da8-2600d586d471-bddece41"
                        class="article-xl-rich-text w-richtext"
                    >
                    {#if Object.keys(servicios).length > 0}
                        <p>
                            {servicios.nacional.modelos_utilidad.novedad.titulo}
                        </p>
                    {/if}
                        <p>
                            Research Studio identifies, screens and enriches
                            potential M&amp;A target data, assessing fit, value
                            potential and deal rationale, and generating a
                            prioritized M&amp;A roadmap – fast and effortlessly.
                        </p>
                    </div>
                </div>
            </div>
            <div
                id="Image-1"
                class="section article-post-image-1 w-condition-invisible"
            >
                <img
                    src=""
                    loading="lazy"
                    alt=""
                    class="image w-dyn-bind-empty"
                />
            </div>
            <div id="Text-1" class="section bright-section">
                <div class="container grid">
                    <h2
                        id="w-node-d7f81f6d-2b17-57c6-9863-30fa20e9e25c-bddece41"
                        class="sticky-article-heading"
                    >
                        Untapped opportunities
                    </h2>
                    <div
                        id="w-node-_380bd10b-b071-fd82-decb-27d930481b0d-bddece41"
                        class="article-rich-text w-richtext"
                    >
                        <p>
                            In a crowded M&amp;A marketplace, speed and depth
                            are key to gaining competitive edge.&nbsp;&nbsp;
                        </p>
                        <p>
                            To build an exhaustive target list, Research Studio
                            synthesizes information drawn from 400 billion
                            sources – patents, websites, articles, publications
                            and news – and analyzes thousands of ‘hidden’
                            correlations and patterns.&nbsp;&nbsp;<br />
                        </p>
                        <p>
                            Using multiple factors including risk, IP portfolio
                            and sustainability footprint, Research Studio
                            automatically determines strategic fit and synergy
                            potential.&nbsp; Results reveal undiscovered players
                            and new markets:&nbsp; smaller companies, unexplored
                            regions, emerging tech fields and trending
                            sectors.&nbsp; The target list updates continuously,
                            adapting to early signals, market momentum and trend
                            analysis, identifying new picks based on selected
                            criteria.<br />
                        </p>
                        <p>
                            As industries feel the impact of COVID through
                            supply chain disruption and demand uncertainty, many
                            are looking for new ways to drive shareholder
                            growth.&nbsp; A global specialty chemicals
                            conglomerate wanted to identify targets active in
                            selected areas of specialty additives and identify
                            adjacent market opportunities for three core
                            chemistries.&nbsp; SparkBeyond’s Research Studio
                            helped define and select search fields aligned with
                            strategic priorities and identify a longlist of
                            &gt;100 players.&nbsp; Results included:
                        </p>
                        <ul role="list">
                            <li>
                                An M&amp;A funnel of 25 priority targets with
                                solid value creation rationale (50% previously
                                undiscovered)
                            </li>
                            <li>
                                5 adjacencies to pursue, with promising
                                commercial impact and technical feasibility
                                worth &gt; €20-40 million ($25-50 million)<br />
                            </li>
                        </ul>
                        <p>
                            AI-driven technology identifies, screens and
                            enriches potential M&amp;A target data with
                            unprecedented speed, depth and accuracy, making it a
                            game-changer in large-scale and programmatic
                            M&amp;A.<br />
                        </p>
                    </div>
                </div>
            </div>
            <div
                id="Quote"
                class="section bright-section w-condition-invisible"
            >
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
                    <img
                        src=""
                        loading="lazy"
                        alt=""
                        class="image w-dyn-bind-empty"
                    />
                </div>
            </div>
            <div
                id="Text-2"
                class="section bright-section w-condition-invisible"
            >
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
                    <img
                        src=""
                        loading="lazy"
                        alt=""
                        class="image w-dyn-bind-empty"
                    />
                </div>
            </div>
            <div
                id="Text-3"
                class="section bright-section w-condition-invisible"
            >
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
                    <img
                        src=""
                        loading="lazy"
                        alt=""
                        class="image w-dyn-bind-empty"
                    />
                </div>
            </div>
            <div
                id="Text-4"
                class="section bright-section w-condition-invisible"
            >
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
                    <img
                        src=""
                        loading="lazy"
                        alt=""
                        class="image w-dyn-bind-empty"
                    />
                </div>
            </div>
            <div
                id="Text-5"
                class="section bright-section w-condition-invisible"
            >
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
                        <p
                            class="article-statis-image-credit w-dyn-bind-empty"
                        />
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
                        <h2 class="no-margin sticky-features-title">
                            Features
                        </h2>
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
                        <div role="list" class="w-dyn-items">
                            <div role="listitem" class="w-dyn-item">
                                <a
                                    href="/product-features/research-studio-features"
                                    class="resource-all-link"
                                    >See All Features</a
                                >
                            </div>
                        </div>
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
                    <img
                        src=""
                        loading="lazy"
                        alt=""
                        class="image w-dyn-bind-empty"
                    />
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
                        <div
                            role="list"
                            class="small-articles-list w-dyn-items"
                        >
                            <div
                                id="w-node-a6cd336b-d080-c002-fafb-2eb18224a62e-bddece41"
                                role="listitem"
                                class="small-articles-item w-dyn-item"
                            >
                                <a
                                    data-w-id="a6cd336b-d080-c002-fafb-2eb18224a62f"
                                    href="/articles/data-driven-insurance-from-mystery-to-mastery"
                                    class="small-article-link w-inline-block"
                                    style="transform: translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
                                    ><div class="small-article-item-body">
                                        <div class="small-article-thumbnail">
                                            <img
                                                src="https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/628c921f4e9ebaacbe949f6f_1920x1080px-Amir-25-01-21-1.jpeg"
                                                loading="lazy"
                                                alt="Data-driven insurance: from mystery to mastery"
                                                sizes="(max-width: 991px) 147.5234375px, 100vw"
                                                srcset="https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/628c921f4e9ebaacbe949f6f_1920x1080px-Amir-25-01-21-1-p-500.jpeg 500w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/628c921f4e9ebaacbe949f6f_1920x1080px-Amir-25-01-21-1-p-800.jpeg 800w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/628c921f4e9ebaacbe949f6f_1920x1080px-Amir-25-01-21-1-p-1080.jpeg 1080w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/628c921f4e9ebaacbe949f6f_1920x1080px-Amir-25-01-21-1-p-1600.jpeg 1600w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/628c921f4e9ebaacbe949f6f_1920x1080px-Amir-25-01-21-1.jpeg 1920w"
                                                class="image"
                                            />
                                        </div>
                                        <div class="resource-textwrapper">
                                            <h5 class="margin-s">
                                                Data-driven insurance: from
                                                mystery to mastery
                                            </h5>
                                            <p
                                                class="s-article-p w-dyn-bind-empty"
                                            />
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
                                                    Continue reading
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
                                                src="https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/628c921f4e9ebaacbe949f6f_1920x1080px-Amir-25-01-21-1.jpeg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 206.53125px, 100vw"
                                                srcset="https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/628c921f4e9ebaacbe949f6f_1920x1080px-Amir-25-01-21-1-p-500.jpeg 500w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/628c921f4e9ebaacbe949f6f_1920x1080px-Amir-25-01-21-1-p-800.jpeg 800w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/628c921f4e9ebaacbe949f6f_1920x1080px-Amir-25-01-21-1-p-1080.jpeg 1080w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/628c921f4e9ebaacbe949f6f_1920x1080px-Amir-25-01-21-1-p-1600.jpeg 1600w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/628c921f4e9ebaacbe949f6f_1920x1080px-Amir-25-01-21-1.jpeg 1920w"
                                                class="image blurredimage"
                                            />
                                            <div class="dark-image-overlay" />
                                        </div>
                                    </div></a
                                >
                            </div>
                            <div
                                id="w-node-a6cd336b-d080-c002-fafb-2eb18224a62e-bddece41"
                                role="listitem"
                                class="small-articles-item w-dyn-item"
                            >
                                <a
                                    data-w-id="a6cd336b-d080-c002-fafb-2eb18224a62f"
                                    href="/articles/building-the-innovators-operating-system"
                                    class="small-article-link w-inline-block"
                                    style="transform: translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
                                    ><div class="small-article-item-body">
                                        <div class="small-article-thumbnail">
                                            <img
                                                src="https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/61decca9811f99b6fa473af1_rs-blog-post-1440x962px-11-01-2022-OC-5.jpeg"
                                                loading="lazy"
                                                alt="Building the Innovator’s Operating System"
                                                sizes="(max-width: 991px) 147.5234375px, 100vw"
                                                srcset="https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/61decca9811f99b6fa473af1_rs-blog-post-1440x962px-11-01-2022-OC-5-p-500.jpeg 500w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/61decca9811f99b6fa473af1_rs-blog-post-1440x962px-11-01-2022-OC-5-p-1080.jpeg 1080w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/61decca9811f99b6fa473af1_rs-blog-post-1440x962px-11-01-2022-OC-5.jpeg 1440w"
                                                class="image"
                                            />
                                        </div>
                                        <div class="resource-textwrapper">
                                            <h5 class="margin-s">
                                                Building the Innovator’s
                                                Operating System
                                            </h5>
                                            <p class="s-article-p">
                                                While hindsight is always 20/20,
                                                Research Studio shows how
                                                decisions could be made if
                                                foresight were too.
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
                                                    Continue reading
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
                                                src="https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/61decca9811f99b6fa473af1_rs-blog-post-1440x962px-11-01-2022-OC-5.jpeg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 206.53125px, 100vw"
                                                srcset="https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/61decca9811f99b6fa473af1_rs-blog-post-1440x962px-11-01-2022-OC-5-p-500.jpeg 500w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/61decca9811f99b6fa473af1_rs-blog-post-1440x962px-11-01-2022-OC-5-p-1080.jpeg 1080w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/61decca9811f99b6fa473af1_rs-blog-post-1440x962px-11-01-2022-OC-5.jpeg 1440w"
                                                class="image blurredimage"
                                            />
                                            <div class="dark-image-overlay" />
                                        </div>
                                    </div></a
                                >
                            </div>
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
                                                    ><clipPath
                                                        id="__lottie_element_7"
                                                        ><rect
                                                            width="1000"
                                                            height="750"
                                                            x="0"
                                                            y="0"
                                                        /></clipPath
                                                    ><clipPath
                                                        id="__lottie_element_15"
                                                        ><path
                                                            d="M0,0 L1000,0 L1000,750 L0,750z"
                                                        /></clipPath
                                                    ></defs
                                                ><g
                                                    clip-path="url(#__lottie_element_7)"
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
                                    <h3 class="output-heading">
                                        Business Insights
                                    </h3>
                                    <p class="output-paragraph">
                                        Apply key dataset transformations
                                        through no/low-code workflows to clean,
                                        prep, and scope your datasets as needed
                                        for analysis
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
                                                    ><clipPath
                                                        id="__lottie_element_24"
                                                        ><rect
                                                            width="1000"
                                                            height="750"
                                                            x="0"
                                                            y="0"
                                                        /></clipPath
                                                    ><clipPath
                                                        id="__lottie_element_26"
                                                        ><path
                                                            d="M0,0 L1000,0 L1000,750 L0,750z"
                                                        /></clipPath
                                                    ></defs
                                                ><g
                                                    clip-path="url(#__lottie_element_24)"
                                                    ><g
                                                        clip-path="url(#__lottie_element_26)"
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
                                    <h3 class="output-heading">
                                        Predictive Models
                                    </h3>
                                    <p class="output-paragraph">
                                        Apply key dataset transformations
                                        through no/low-code workflows to clean,
                                        prep, and scope your datasets as needed
                                        for analysis
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
                                                    ><clipPath
                                                        id="__lottie_element_119"
                                                        ><rect
                                                            width="1000"
                                                            height="750"
                                                            x="0"
                                                            y="0"
                                                        /></clipPath
                                                    ><clipPath
                                                        id="__lottie_element_127"
                                                        ><path
                                                            d="M0,0 L1000,0 L1000,750 L0,750z"
                                                        /></clipPath
                                                    ></defs
                                                ><g
                                                    clip-path="url(#__lottie_element_119)"
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
                                                        clip-path="url(#__lottie_element_127)"
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
                                    <h3 class="output-heading">
                                        Micro-Segments
                                    </h3>
                                    <p class="output-paragraph">
                                        Apply key dataset transformations
                                        through no/low-code workflows to clean,
                                        prep, and scope your datasets as needed
                                        for analysis
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
                                                    ><clipPath
                                                        id="__lottie_element_136"
                                                        ><rect
                                                            width="1000"
                                                            height="750"
                                                            x="0"
                                                            y="0"
                                                        /></clipPath
                                                    ></defs
                                                ><g
                                                    clip-path="url(#__lottie_element_136)"
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
                                        Apply key dataset transformations
                                        through no/low-code workflows to clean,
                                        prep, and scope your datasets as needed
                                        for analysis
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
                                                    ><clipPath
                                                        id="__lottie_element_161"
                                                        ><rect
                                                            width="1000"
                                                            height="750"
                                                            x="0"
                                                            y="0"
                                                        /></clipPath
                                                    ><g
                                                        id="__lottie_element_165"
                                                        ><g
                                                            clip-path="url(#__lottie_element_166)"
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
                                                    ><clipPath
                                                        id="__lottie_element_166"
                                                        ><path
                                                            d="M0,0 L1000,0 L1000,750 L0,750z"
                                                        /></clipPath
                                                    ><filter
                                                        id="__lottie_element_175"
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
                                                        id="__lottie_element_165_2"
                                                        mask-type="alpha"
                                                        ><g
                                                            filter="url(#__lottie_element_175)"
                                                            ><rect
                                                                width="1000"
                                                                height="750"
                                                                x="0"
                                                                y="0"
                                                                fill="#ffffff"
                                                                opacity="0"
                                                            /><use
                                                                xlink:href="#__lottie_element_165"
                                                            /></g
                                                        ></mask
                                                    ></defs
                                                ><g
                                                    clip-path="url(#__lottie_element_161)"
                                                    ><g
                                                        mask="url(#__lottie_element_165_2)"
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
                                        Apply key dataset transformations
                                        through no/low-code workflows to clean,
                                        prep, and scope your datasets as needed
                                        for analysis
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
                                                    ><clipPath
                                                        id="__lottie_element_182"
                                                        ><rect
                                                            width="1000"
                                                            height="750"
                                                            x="0"
                                                            y="0"
                                                        /></clipPath
                                                    ><clipPath
                                                        id="__lottie_element_184"
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
                                        Apply key dataset transformations
                                        through no/low-code workflows to clean,
                                        prep, and scope your datasets as needed
                                        for analysis
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="Event-Section"
                class="section dark-section w-condition-invisible"
            >
                <div class="container grid">
                    <div
                        id="w-node-_13186e8b-3a2b-cd99-c1da-9a4cd3c1c1fc-bddece41"
                        class="column center"
                    >
                        <h2 class="margin-s">
                            Join our event about this topic today.
                        </h2>
                        <p>
                            Learn all about the SparkBeyond mission and product
                            vision.
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
           
        </div>
        <script
            src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=60866fa44e871fb63043a756"
            type="text/javascript"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossorigin="anonymous"
        ></><script
            src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/js/webflow.d1fb592f1.js"
            type="text/javascript"
        ></><script>
            $("#current-page").val(location.href);
        </script>
        <script>
            "use strict";
            (function () {
                var buttonClass = ".dropdown-link";
                function handleButtonLink(e) {
                    if (
                        !(e.target instanceof HTMLElement) ||
                        e.target instanceof HTMLAnchorElement ||
                        (e instanceof KeyboardEvent && !(e.key === "Enter"))
                    )
                        return;
                    var target = e.target.closest(buttonClass);
                    if (!target) return;
                    e.preventDefault();
                    var anchorElement = target.querySelector("a");
                    if (anchorElement) anchorElement.click();
                    return false;
                }
                function handleAccessibility() {
                    var buttons = document.querySelectorAll(buttonClass);
                    buttons.forEach(function (button) {
                        var anchorElement = button.querySelector("a");
                        if (anchorElement && anchorElement.href) {
                            button.setAttribute("role", "link");
                            button.setAttribute("tabindex", "0");
                            if (anchorElement.textContent)
                                button.setAttribute(
                                    "aria-label",
                                    anchorElement.textContent
                                );
                        }
                    });
                }
                window.addEventListener("click", handleButtonLink);
                window.addEventListener("keydown", handleButtonLink);
                document.addEventListener(
                    "DOMContentLoaded",
                    handleAccessibility
                );
            })();
        </script>
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/Clamp.js/0.5.1/clamp.min.js"
            integrity="sha512-9PanvIYgF2gT2Yau/uKb9ms+cOBNVo+sQzWDb+nLX5F4FZvEUiuFhKIQPmVU2jCvZKKTVB3Y8giDezNt/1H3xg=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
        ></script>

        <script>
            let cardParagraphs = document.querySelectorAll(
                ".cms-card-paragraph"
            );
            cardParagraphs.forEach((item) => $clamp(item, { clamp: 4 }));
        </script>

        <script type="text/javascript">
            _linkedin_partner_id = "3035497";
            window._linkedin_data_partner_ids =
                window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        </script><script type="text/javascript">
            (function (l) {
                if (!l) {
                    window.lintrk = function (a, b) {
                        window.lintrk.q.push([a, b]);
                    };
                    window.lintrk.q = [];
                }
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";
                b.async = true;
                b.src =
                    "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
            })(window.lintrk);
        </script>
        <noscript>
            <img
                height="1"
                width="1"
                style="display:none;"
                alt=""
                src="https://px.ads.linkedin.com/collect/?pid=3035497&fmt=gif"
            />
        </noscript>
    
        <div class="chakra-portal">
            <div
                role="region"
                aria-live="polite"
                aria-label="Notifications"
                id="chakra-toast-manager-top"
                style="position: fixed; z-index: var(--toast-z-index, 5500); pointer-events: none; display: flex; flex-direction: column; margin: 0px auto; top: env(safe-area-inset-top, 0px); right: env(safe-area-inset-right, 0px); left: env(safe-area-inset-left, 0px);"
            />
            <div
                role="region"
                aria-live="polite"
                aria-label="Notifications"
                id="chakra-toast-manager-top-left"
                style="position: fixed; z-index: var(--toast-z-index, 5500); pointer-events: none; display: flex; flex-direction: column; top: env(safe-area-inset-top, 0px); left: env(safe-area-inset-left, 0px);"
            />
            <div
                role="region"
                aria-live="polite"
                aria-label="Notifications"
                id="chakra-toast-manager-top-right"
                style="position: fixed; z-index: var(--toast-z-index, 5500); pointer-events: none; display: flex; flex-direction: column; top: env(safe-area-inset-top, 0px); right: env(safe-area-inset-right, 0px);"
            />
            <div
                role="region"
                aria-live="polite"
                aria-label="Notifications"
                id="chakra-toast-manager-bottom-left"
                style="position: fixed; z-index: var(--toast-z-index, 5500); pointer-events: none; display: flex; flex-direction: column; bottom: env(safe-area-inset-bottom, 0px); left: env(safe-area-inset-left, 0px);"
            />
            <div
                role="region"
                aria-live="polite"
                aria-label="Notifications"
                id="chakra-toast-manager-bottom"
                style="position: fixed; z-index: var(--toast-z-index, 5500); pointer-events: none; display: flex; flex-direction: column; margin: 0px auto; bottom: env(safe-area-inset-bottom, 0px); right: env(safe-area-inset-right, 0px); left: env(safe-area-inset-left, 0px);"
            />
            <div
                role="region"
                aria-live="polite"
                aria-label="Notifications"
                id="chakra-toast-manager-bottom-right"
                style="position: fixed; z-index: var(--toast-z-index, 5500); pointer-events: none; display: flex; flex-direction: column; bottom: env(safe-area-inset-bottom, 0px); right: env(safe-area-inset-right, 0px);"
            />
        </div>
        </body
    >
    <div><div/>
</html>
