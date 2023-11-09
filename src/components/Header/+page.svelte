<script lang="ts">
    import { onMount } from "svelte";
    import type{ PageData } from "../../routes/$types";
    import { cargarServicios } from "../../routes/servicios";

   /** @type {{ nacional?: { patentes?: Record<string, { titulo: string, slug: string }> } }} */
    let servicios = {};
    let patentesSlugs: string[] = [];
    let patentesTitles: string[] = [];
    let modelosDeUtilidadSlugs: string[] = [];
    let modelosDeUtilidadTitles: string[] = [];

onMount(async () => {
  try {
    // Cargar datos al inicio
     servicios = await cargarServicios();
     /** @type {Array<string>} */
     patentesTitles = Object.keys(servicios.nacional?.patentes).map(servicio => servicios.nacional?.patentes[servicio].titulo);
     patentesSlugs = Object.keys(servicios.nacional?.patentes).map(servicio => servicios.nacional?.patentes[servicio].slug);
     modelosDeUtilidadSlugs = Object.keys(servicios.nacional?.modelos_utilidad).map(servicio => servicios.nacional?.modelos_utilidad[servicio].slug);
     modelosDeUtilidadTitles = Object.keys(servicios.nacional?.modelos_utilidad).map(servicio => servicios.nacional?.modelos_utilidad[servicio].titulo);

    console.log(modelosDeUtilidadSlugs, modelosDeUtilidadTitles);
  } catch (error) {
    // Manejar errores aquí
    console.error("Error en onMount:", error);
  }
});

export let data: PageData;


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
            aria-current="page"
            class="brand-logo w-nav-brand w--current"
            aria-label="home"
            ><img
                src="https://media.discordapp.net/attachments/1171897462299033623/1171897506788028416/stockerInvenciones.png?ex=655e599a&is=654be49a&hm=29f5e6d6da3e4dbc103fe103190efd44d83fd78b02e153df2cf806cdde6aadd9&=&width=1000&height=1000"
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
                           <a style="color: inherit; text-decoration: none;" href="/">Inicio</a>
                        </div>
                        <div
                            class="underline products-underline"
                            style="opacity: 0;"
                        />
                        <div class="dropdown-toggle-circle">
                            <img
                                src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60a6217bdf2dc27b1562d9d9_Menu%20Arrow.svg"
                                loading="lazy"
                                alt="Arrow in circle pointing down"
                                class="dropdown-arrow"
                            />
                        </div>
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
                                        <h6 class="headernav">
                                            En Chile
                                        </h6>
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
                                             {#each patentesSlugs as slug, i (slug)}
                                                <a
                                                    href= {`/patentes/${slug}`}
                                                    class="dropdown-text-link"
                                                    tabindex="0">{patentesTitles[i]}</a
                                                >
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
                                                {#each modelosDeUtilidadSlugs as slug, i (slug)}
                                                <a
                                                    href={`/modelos-de-utilidad/${slug}`}
                                                    class="dropdown-text-link"
                                                    tabindex="0">{modelosDeUtilidadTitles[i]}</a
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
                                                <a
                                                    href="/diseños-industriales/electronica"
                                                    class="dropdown-text-link"
                                                    tabindex="0"
                                                    >Electrónica de consumo</a
                                                ><a
                                                    href="/diseños-industriales/envases-embalajes"
                                                    class="dropdown-text-link"
                                                    tabindex="0"
                                                    >Envases y embalajes</a
                                                ><a
                                                    href="/diseños-industriales/moda-calzado"
                                                    class="dropdown-text-link"
                                                    tabindex="0">Moda y calzado</a
                                                ><a
                                                    href="/diseños-industriales/automocion"
                                                    class="dropdown-text-link"
                                                    tabindex="0"
                                                    >Automoción</a
                                                ><a
                                                    href="/diseños-industriales/equipamiento-deportivo"
                                                    class="dropdown-text-link"
                                                    tabindex="0"
                                                    >Equipamiento deportivo</a
                                                ><a
                                                    href="/diseños-industriales/iluminacion"
                                                    class="dropdown-text-link"
                                                    tabindex="0"
                                                    >Iluminación</a
                                                >
                                                <a
                                                    href="/diseños-industriales/maquinaria"
                                                    class="dropdown-text-link"
                                                    tabindex="0"
                                                    >Maquinaria y Herramientas</a
                                                >
                                                <a
                                                    href="/diseños-industriales/joyeria-relojeria"
                                                    class="dropdown-text-link"
                                                    tabindex="0"
                                                    >Joyería y relojería</a
                                                >
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_10f96c4c-18b2-7003-9fe9-a62c1db7cfd5-f7ef6077"
                                            class="dropdown-list-column"
                                        >
                                            <h3 class="dropdown-heading nav">
                                                Por categoría
                                            </h3>
                                            <div class="dropdown-scroller">
                                                <a
                                                    href="/diseños-industriales/categoria/consumo"
                                                    class="dropdown-text-link"
                                                    tabindex="0">Productos de consumo</a
                                                ><a
                                                    href="/diseños-industriales/categoria/manufactura"
                                                    class="dropdown-text-link"
                                                    tabindex="0">Industria y manufactura</a
                                                ><a
                                                    href="/diseños-industriales/categoria/especializado"
                                                    class="dropdown-text-link"
                                                    tabindex="0">Diseño especializado</a
                                                >
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
                       <a style="color: inherit; text-decoration: none;" href="/experiencias">Experiencias</a>
                    </div>
                    <div
                        class="underline products-underline"
                        style="opacity: 0;"
                    />
                    <div class="dropdown-toggle-circle">
                        <img
                            src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60a6217bdf2dc27b1562d9d9_Menu%20Arrow.svg"
                            loading="lazy"
                            alt="Arrow in circle pointing down"
                            class="dropdown-arrow"
                        />
                    </div>
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
                           <a style="color: inherit; text-decoration: none;" href="/beneficios">Beneficios</a>
                        </div>
                        <div
                            class="underline products-underline"
                            style="opacity: 0;"
                        />
                        <div class="dropdown-toggle-circle">
                            <img
                                src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60a6217bdf2dc27b1562d9d9_Menu%20Arrow.svg"
                                loading="lazy"
                                alt="Arrow in circle pointing down"
                                class="dropdown-arrow"
                            />
                        </div>
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
                           <a style="color: inherit; text-decoration: none;" href="/nuestro-equipo">Nuestro Equipo</a>
                        </div>
                        <div
                            class="underline products-underline"
                            style="opacity: 0;"
                        />
                        <div class="dropdown-toggle-circle">
                            <img
                                src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60a6217bdf2dc27b1562d9d9_Menu%20Arrow.svg"
                                loading="lazy"
                                alt="Arrow in circle pointing down"
                                class="dropdown-arrow"
                            />
                        </div>
                    </div>
                    
                </div>
                <div class="nav-social-links">
                    <div class="nav-separator" />
                    <div class="nav-social-links-heading">Contactanos</div>
                    <div class="social-links in-nav">
                        <a
                            href="https://www.linkedin.com/company/sparkbeyond"
                            target="_blank"
                            class="social-link nav-icon w-inline-block"
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
                            href="https://twitter.com/sparkbeyond"
                            target="_blank"
                            class="social-link w-inline-block"
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
                        ><a
                            href="https://www.facebook.com/sparkbeyond/"
                            target="_blank"
                            class="social-link w-inline-block"
                            ><img
                                src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/6086913d23b7f35f4399abdf_Facebook%20Logo.svg"
                                loading="lazy"
                                alt="Facebook Logo"
                                class="social-icon"
                            />
                            <div
                                class="social-icon-bg"
                                style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                            /></a
                        ><a
                            href="https://www.youtube.com/channel/UCctNa-70ktSNRsa_WPpNwnw"
                            target="_blank"
                            class="social-link w-inline-block"
                            ><img
                                src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/6086913d372be95c8efea93f_Youtube%20Logo.svg"
                                loading="lazy"
                                alt="Youtube Logo"
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
            <div class="nav-link-wrapper on-desktop">
                <a href="/oficina-nacional" class="nav-link w-inline-block"
                    ><div class="allcaps">Oficina en Chile</div></a
                >
            </div>
        </nav>
        <div class="menu-button-wrapper">
            <div class="nav-link-wrapper on-tablet">
                <div class="outline-wrapper" />
                <a href="/oficina-nacional" class="nav-link w-inline-block"
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
