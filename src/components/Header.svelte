<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount, onDestroy } from "svelte";
    import { readableModelosNacionales, readablePatentesNacionales, readableDisenosInternacionales  } from "../stores/DataStore";
    import { unsubscribePatentesNacionales, unsubscribeDisenosInternacionales, unsubscribeModelosNacionales } from "../stores/DataStore";
    onDestroy(() => {
        unsubscribePatentesNacionales();
        unsubscribeModelosNacionales();
        unsubscribeDisenosInternacionales();
    });
   
  </script>

<div
    data-collapse="medium"
    data-animation="default"
    data-duration="400"
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    class="navbar w-nav"
>
    <div class="nav-container">
        <a
            href="/"
            style=""
            aria-current="page"
            class="brand-logo w-nav-brand w--current"
            aria-label="home"
            ><img 
                src="https://media.discordapp.net/attachments/1175612381922082886/1181625405191487488/log-pat.png?ex=6581bd6a&is=656f486a&hm=85c1b885147d60a128cb7a4ce52c8dba2999c8e885eff2d63321ba0991beceb5&=&format=webp&quality=lossless&width=1000&height=122"
                loading="lazy"
                alt="Spark Beyond Logo"
                class="logo"
            /></a
        >
        <nav role="navigation" class="nav-menu w-nav-menu">
            <div class="nav-wrapper">
                <div
                    data-hover="false"
                    data-delay="0"
                    class="dropdown last-dropdown w-dropdown"
                >
                    <div
                        class="dropdown-toggle products-toggle w-dropdown-toggle"
                        id="w-dropdown-toggle-6"
                        aria-controls="w-dropdown-list-6"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        role="button"
                        tabindex="0"
                    >
                        <div class="allcaps mobilenav">
                            <a style="color: inherit; text-decoration: none; cursor: pointer"
                            href="/"
                                >Inicio
                                </a>
                        </div>
                        <div
                            class="underline products-underline"
                            style="opacity: 0;"
                        />
                      
                    </div>
                </div>
                <div
                    data-hover="false"
                    data-delay="0"
                    class="dropdown industry-dropdown w-dropdown"
                >
                    <div
                        class="dropdown-toggle indusrtires w-dropdown-toggle"
                        id="w-dropdown-toggle-7"
                        aria-controls="w-dropdown-list-7"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        role="button"
                        tabindex="0"
                    >
                        <div class="allcaps mobilenav">Servicios</div>
                        <div class="underline" style="opacity: 0;" />
                        <div class="dropdown-toggle-circle">
                            <img
                                src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60a6217bdf2dc27b1562d9d9_Menu%20Arrow.svg"
                                loading="lazy"
                                alt="Arrow in circle pointing down"
                                class="dropdown-arrow"
                            />
                        </div>
                    </div>
                    <nav
                        class="dropdown-list industries w-dropdown-list"
                        id="w-dropdown-list-7"
                        aria-labelledby="w-dropdown-toggle-7"
                        style=""
                    >
                        <div class="dropdown-list-wrapper industries">
                            <div class="dropdown-scroll-vertical">
                                <div class="industryinnerwrap rightline-2">
                                    <div class="sticky-module">
                                        <h6 class="headernav">En Chile</h6>
                                    </div>
                                    <div
                                        class="w-layout-grid menudropdown-industries three line"
                                    >
                                        <div
                                            id="w-node-_82fb13b3-4e6a-e923-654d-82d93dd86648-f7ef6077"
                                            class="dropdown-list-column no-margin"
                                        >
                                            <h3 class="dropdown-heading nav">
                                                Patentes
                                            </h3>
                                            <div class="dropdown-scroller">
                                             {#each $readablePatentesNacionales as patente}
                                                    <a class="dropdown-text-link" style="cursor: pointer;"
                                                        tabindex="0"
                                                    href={patente.slug}>
                                                    {patente.titulo}

                                                        </a>
                                                {/each}
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-f06a532e-1b06-67cf-ceaf-13f279efdbc5-f7ef6077"
                                            class="dropdown-list-column byfunction"
                                        >
                                            <h3 class="dropdown-heading nav">
                                                Modelos de Utilidad
                                            </h3>
                                            <div class="dropdown-scroller">
                                                {#each $readableModelosNacionales as modelo }
                                                    <a href={modelo.slug}
                                                        class="dropdown-text-link"
                                                        tabindex="0"
                                                        >{modelo.titulo}</a
                                                    >
                                                {/each}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="industryinnerwrap">
                                    <div class="sticky-module">
                                        <h6 class="headernav">
                                            En todo el Mundo
                                        </h6>
                                    </div>
                                    <div
                                        class="w-layout-grid menudropdown-industries"
                                    >
                                        <div
                                            id="w-node-_10f96c4c-18b2-7003-9fe9-a62c1db7cfc0-f7ef6077"
                                            class="dropdown-list-column"
                                        >
                                            <h3
                                                class="dropdown-heading _20below nav-2"
                                            >
                                                Diseños Ind.
                                            </h3>
                                            <div class="dropdown-scroller">
                                                {#each $readableDisenosInternacionales as diseno}
                                                    <a href={diseno.slug}
                                                            class="dropdown-text-link"
                                                            tabindex="0"
                                                            > 
                                                            {diseno.titulo}
                                                        </a>
                                                {/each}
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                            <div
                                class="dropdown-list-underlay"
                                style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(90deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                            />
                        </div>
                    </nav>
                </div>
                <div
                    data-hover="false"
                    data-delay="0"
                    class="dropdown last-dropdown w-dropdown"
                >
                    <div
                        class="dropdown-toggle products-toggle w-dropdown-toggle"
                        id="w-dropdown-toggle-6"
                        aria-controls="w-dropdown-list-6"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        role="button"
                        tabindex="0"
                    >
                        <div class="allcaps mobilenav">
                            <a
                               
                             style="color: inherit; text-decoration: none; cursor: pointer"
                               href="/experiencias"
                              >Experiencias
                              </a>
                        </div>
                        <div
                            class="underline products-underline"
                            style="opacity: 0;"
                        />
                       
                    </div>
                </div>
                <div
                    data-hover="false"
                    data-delay="0"
                    class="dropdown last-dropdown w-dropdown"
                >
                    <div
                        class="dropdown-toggle products-toggle w-dropdown-toggle"
                        id="w-dropdown-toggle-6"
                        aria-controls="w-dropdown-list-6"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        role="button"
                        tabindex="0"
                    >
                        <div class="allcaps mobilenav">
                            <a
                                style="color: inherit; text-decoration: none;"
                                href="/beneficios">Beneficios</a
                            >
                        </div>
                        <div
                            class="underline products-underline"
                            style="opacity: 0;"
                        />
                      
                    </div>
                </div>
                <div
                    data-hover="false"
                    data-delay="0"
                    class="dropdown last-dropdown w-dropdown"
                >
                    <div
                        class="dropdown-toggle products-toggle w-dropdown-toggle"
                        id="w-dropdown-toggle-6"
                        aria-controls="w-dropdown-list-6"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        role="button"
                        tabindex="0"
                    >
                        <div class="allcaps mobilenav">
                            <a
                                style="color: inherit; text-decoration: none; cursor:pointer;"
                               href="/nuestro-equipo"
                                >Nuestro Equipo</a
                            >
                        </div>
                        <div
                            class="underline products-underline"
                            style="opacity: 0;"
                        />
                       
                    </div>
                </div>
               
            </div>
            <div class="nav-link-wrapper on-desktop">
                <a href="/oficina-en-chile" class="nav-link w-inline-block"
                    ><div class="allcaps">Oficina en Chile</div></a
                >
            </div>
        </nav>
        <div class="menu-button-wrapper">
            <div class="nav-link-wrapper on-tablet">
                <div class="outline-wrapper" />
                <a href="/oficina-en-chile" class="nav-link w-inline-block"
                    ><div>Contacto</div></a
                >
            </div>
            <div
                scroll="both"
                class="menu-button menu-closed w-nav-button"
                style="-webkit-user-select: text;"
                aria-label="menu"
                role="button"
                tabindex="0"
                aria-controls="w-nav-overlay-1"
                aria-haspopup="menu"
                aria-expanded="false"
            >
                <div class="menu-button-elements">
                    <div class="menu-line top" />
                    <div class="menu-line mid" />
                    <div class="menu-line bot" />
                </div>
            </div>
        </div>
    </div>
    <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" />
</div>
