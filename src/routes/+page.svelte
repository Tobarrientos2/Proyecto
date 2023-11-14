<script lang="ts">

export let data;

export function limitarPalabras(cadena, maxPalabras) {
  const palabras = cadena.split(' '); // Dividir la cadena en palabras
  if (palabras.length > maxPalabras) {
    return palabras.slice(0, maxPalabras).join(' ') + '...'; // Unir las primeras maxPalabras palabras y agregar "..."
  } else {
    return cadena; // La cadena ya contiene o es menor que maxPalabras palabras
  }
}
let patentes = data.props.dataPatente;
let modelos = data.props.dataModelos;
let disenos = data.props.dataDisenos;
let experiencias = data.props.dataExperiencias;
console.log(experiencias);

let patentesFirst = data.props.dataPatente?.map(item => item)[0];
let modelosFirst = data.props.dataModelos?.map(item => item)[0];
let disenosFirst = data.props.dataDisenos?.map(item => item)[0];

  </script>

<div class="page-wrapper">
			<div class="section-title mobile-hidden">
				<a href="#" class="nav-anchor w-inline-block"
					><div class="anchor-text-container">Invenciones y Patentes</div></a
				><a href="#" class="nav-anchor top-anchor w-inline-block"
					><div class="anchor-text-container">Servicios</div></a
				><a href="#Company" class="nav-anchor top-anchor w-inline-block"
					><div class="anchor-text-container">Red de Categorias</div></a
				><a
					href="#explore"
					class="nav-anchor top-anchor bright w-inline-block"
					><div class="anchor-text-container">Diseños Industriales</div></a
				><a
					href="#events"
					class="nav-anchor top-anchor bright w-inline-block"
					><div class="anchor-text-container"><br />Beneficios</div></a
				><a href="#contact" class="nav-anchor top-anchor w-inline-block"
					><div class="anchor-text-container">Modelos de Utilidad</div></a
				>
				<div class="nav-anchor menu-anchor">
					<div class="anchor-text-container">Menu</div>
				</div>
				<div class="navigation-anchors-overlay" />
			</div>
			<div class="home-inner-wrapper">
				<div
					data-w-id="524b097b-9964-9f93-4703-c661a7df1dd9"
					class="home-bg-wrapper"
				>
					<div class="section-background in-home-hero no-image">
						<div
							class="home-blob-1"
							style="transform: translate3d(70.588px, 35.294px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(5.2002deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;"
						>
							<img
								src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60f0a2525e8dd00b0d5664f5_Path%2044.svg"
								loading="lazy"
								alt=""
								class="image blob-contain"
							/>
						</div>
						<div
							class="home-blob-2"
							style="transform: translate3d(-12.4805px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-20deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;"
						>
							<img
								src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60f0a288efc4fc98c60a0ef9_Path%2046.svg"
								loading="lazy"
								alt=""
								class="image blob-contain"
							/>
						</div>
						<div
							class="home-blob-3"
							style="transform: translate3d(57.1763px, -142.588px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(60.3223deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;"
						>
							<img
								src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60f0a263b0f8737a11c2d1eb_Path%2045.svg"
								loading="lazy"
								alt=""
								class="image blob-contain"
							/>
						</div>
					</div>
				</div>
				<div id="Home" class="section hero">
					<div class="container grid in-hero">
						<div class="grid-bg right-top" />
						<div class="grid-bg" />
						<div class="grid-bg"><div class="mobile-hidden" /></div>
						<div class="grid-bg left-top" />
						<div class="grid-bg right-bot" />
						<div class="grid-bg leftbot" />
						<div
							id="w-node-_448d033c-f065-d856-d25e-6b6f7465ad45-72decde7"
							data-w-id="448d033c-f065-d856-d25e-6b6f7465ad45"
							class="column hero-column"
						>
							<h1 class="maintitle">
								Tu invención <br />es tuya.
							</h1>
							<div class="hero-column-border" />
							<div class="nav-link-wrapper on-desktop">
								<div class="outline-wrapper" />
								<a
									href="/beneficios"
									class="nav-link home-btn-white w-inline-block"
									><div>Beneficios de nuestro grupo</div>
									<div class="arrow-icon">
										<img
											src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/608696cc0243311086991783_Button%20Arrow.svg"
											loading="lazy"
											alt="Arrow"
											class="icon-bot"
										/><img
											src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60cb12817668533df28baf32_Arrow%20Blue%20New.svg"
											loading="lazy"
											alt="Blue Arrow"
											class="icon-top"
										/>
									</div></a
								>
							</div>
						</div>
						<div
							data-w-id="7fcd1107-1a8a-133e-fef9-d0828c9b1470"
							class="slider-pagination"
							style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
						>
							<div class="slider-progress-element">
								<div
									style="opacity: 0.25;"
									class="slider-text text-1"
								>
									S-001
								</div>
								<div class="slider-bar-element">
									<img
										src=""
										loading="lazy"
										alt="Slider Pagination Decorative element"
										class="slider-deco"
									/>
									<div
										style="width: 0%; height: 5px;"
										class="slider-bar bar-1"
									/>
								</div>
								<div
									style="opacity: 0.25;"
									class="slider-square square-1"
								/>
								<div
									style="opacity: 0;"
									class="slider-circle circle-1"
								/>
							</div>
							<div class="slider-progress-element">
								<div
									style="opacity: 0.25;"
									class="slider-text text-2"
								>
									S-002
								</div>
								<div class="slider-bar-element">
									<img
										src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/6093a4cbe132663e8349e369_slider%20pagination.svg"
										loading="lazy"
										alt="Slider Pagination Decorative element"
										class="slider-deco"
									/>
									<div
										style="width: 0%; height: 5px;"
										class="slider-bar bar-2"
									/>
								</div>
								<div
									style="opacity: 0.25;"
									class="slider-square square-2"
								/>
								<div
									style="opacity: 0;"
									class="slider-circle circle-2"
								/>
							</div>
							<div class="slider-progress-element">
								<div
									style="opacity: 1;"
									class="slider-text text-3"
								>
									S-003
								</div>
								<div class="slider-bar-element">
									<img
										src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/6093a4cbe132663e8349e369_slider%20pagination.svg"
										loading="lazy"
										alt="Slider Pagination Decorative element"
										class="slider-deco"
									/>
									<div
										style="width: 50.276%; height: 5px; will-change: width, height;"
										class="slider-bar bar-3"
									/>
								</div>
								<div
									style="opacity: 0;"
									class="slider-square square-3"
								/>
								<div
									style="opacity: 1;"
									class="slider-circle circle-3"
								/>
							</div>
						</div>
					</div>
					<div
						data-delay="6000"
						data-animation="over"
						class="hero-slider w-slider"
						data-autoplay="true"
						data-easing="ease-out-expo"
						data-hide-arrows="false"
						data-disable-swipe="false"
						data-w-id="fe4b150b-a9f9-9362-d800-10f63d02dede"
						data-autoplay-limit="0"
						data-nav-spacing="0"
						data-duration="2000"
						data-infinite="true"
						id="auto-slider"
						style="opacity: 1;"
						role="region"
						aria-label="carousel"
					>
						<div
							class="slider-mask w-slider-mask"
							id="w-slider-mask-0"
						>
							<div
								data-w-id="fe4b150b-a9f9-9362-d800-10f63d02dee0"
								class="hero-slide w-slide"
								aria-label="1 of 3"
								role="group"
								style="transform: translateX(2080.78px); opacity: 1; z-index: 9; visibility: hidden;"
								aria-hidden="true"
							>
								<div
									class="hero-slide-cms-wrapper w-dyn-list"
									aria-hidden="true"
								>
									<div
										role="list"
										class="hero-slide-cms-list w-dyn-items"
										aria-hidden="true"
									>
										<div
											role="listitem"
											class="hero-slide-cms-item w-dyn-item"
											aria-hidden="true"
										>
											<div
												class="hero-slider-image-wrapper"
												aria-hidden="true"
											>
												<img
													src={patentes?.map(item => item.image)[0]}
													loading="eager"
													alt="Overcoming the Enterprise LLM Blindspot"
													class="image hero-slider-image"
													aria-hidden="true"
												/>
											</div>
											<a
												data-w-id="bfec00f1-348e-10be-10c2-61408148ca5d"
												href={patentes?.map(item => item.slug)[0]}
												class="featured-article-card w-inline-block"
												tabindex="-1"
												aria-hidden="true"
												><div
													class="hero-cms-content"
													aria-hidden="true"
												>
													<h2
														class="featured-article-heading"
														aria-hidden="true"
													>
													{patentes?.map(item => item.titulo)[0]}
													</h2>
													<p
														class="hero-slide-cms-para"
														aria-hidden="true"
													>
													{limitarPalabras(patentes?.map(item => item.descripcion)[0], 30)}
													</p>
												</div>
												<div
													class="cms-card-button outline-white"
													style="width: 40px;"
													aria-hidden="true"
												>
													<div
														data-w-id="1800e508-76e0-6dd6-09d8-b6f2d4457153"
														class="cms-card-button-text"
														style="opacity: 1;"
														aria-hidden="true"
													>
													Ver Más
													</div>
													<div
														class="cms-card-arrow"
														aria-hidden="true"
													>
														<img
															src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/608696cc0243311086991783_Button%20Arrow.svg"
															loading="lazy"
															alt="Arrow"
															class="image"
															aria-hidden="true"
														/>
													</div>
												</div>
												<div
													class="sliderbcgblur"
													aria-hidden="true"
												>
													<div
														class="backdrop-code w-embed"
														aria-hidden="true"
													>
														<style
															aria-hidden="true"
														>
															.sliderbcgblur {
																backdrop-filter: blur(
																	10px
																);
																-webkit-backdrop-filter: blur(
																	10px
																);
															}
														</style>
													</div>
												</div></a
											>
										</div>
									</div>
								</div>
							</div>
							<div data-sveltekit-reload=""
								data-w-id="fe4b150b-a9f9-9362-d800-10f63d02dee1"
								class="hero-slide w-slide"
								aria-label="2 of 3"
								role="group"
								style="transform: translateX(2080.78px); opacity: 1; z-index: 10; visibility: hidden;"
								aria-hidden="true"
							>
								<div
									class="hero-slide-cms-wrapper w-dyn-list"
									aria-hidden="true"
								>
									<div
										role="list"
										class="hero-slide-cms-list w-dyn-items"
										aria-hidden="true"
									>
										<div
											role="listitem"
											class="hero-slide-cms-item w-dyn-item"
											aria-hidden="true"
										>
											<div
												class="hero-slider-image-wrapper"
												aria-hidden="true"
											>
												<img
													src={patentes?.map(item => item.image)[1]}
													loading="eager"
													alt="Turning enterprise data into accessible knowledge for LLMs"
													class="image hero-slider-image"
													aria-hidden="true"
												/>
											</div>
											<a
												data-w-id="832b70d9-79b5-d753-a24f-ca9a297230a4"
												href="/patentes/busqueda"
												class="featured-article-card w-inline-block"
												tabindex="-1"
												aria-hidden="true"
												><div
													class="hero-cms-content"
													aria-hidden="true"
												>
													<h2
														class="featured-article-heading"
														aria-hidden="true"
													>
													Búsqueda de patentes e invenciones
													</h2>
													<p
														class="hero-slide-cms-para"
														aria-hidden="true"
													>
													Realizar búsquedas de patentes e invenciones existentes. Investigando a fondo con documentación suficiente, es necesario para asegurar una buena patente.
													</p>
												</div>
												<div
													class="cms-card-button outline-white"
													style="width: 40px;"
													aria-hidden="true"
												>
													<div
														data-w-id="fcc8d652-fa41-8c6d-b7f5-18915685668b"
														class="cms-card-button-text"
														style="opacity: 1;"
														aria-hidden="true"
													>
													Ver Más
													</div>
													<div
														class="cms-card-arrow"
														aria-hidden="true"
													>
														<img
															src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/608696cc0243311086991783_Button%20Arrow.svg"
															loading="lazy"
															alt="Arrow"
															class="image"
															aria-hidden="true"
														/>
													</div>
												</div>
												<div
													class="sliderbcgblur"
													aria-hidden="true"
												>
													<div
														class="backdrop-code w-embed"
														aria-hidden="true"
													>
														<style
															aria-hidden="true"
														>
															.sliderbcgblur {
																backdrop-filter: blur(
																	10px
																);
																-webkit-backdrop-filter: blur(
																	10px
																);
															}
														</style>
													</div>
												</div></a
											>
										</div>
									</div>
								</div>
							</div>
							<div
								data-w-id="674ad2ee-4692-3dd8-1371-fb3f18a2fa45"
								class="hero-slide w-slide"
								aria-label="3 of 3"
								role="group"
								style="transform: translateX(-1387.19px); opacity: 1; z-index: 11; transition: transform 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0s;"
							>
								<div class="hero-slide-cms-wrapper w-dyn-list">
									<div
										role="list"
										class="hero-slide-cms-list w-dyn-items"
									>
										<div
											role="listitem"
											class="hero-slide-cms-item w-dyn-item"
										>
											<div
												class="hero-slider-image-wrapper"
											>
												<img
													src={patentes?.map(item => item.image)[1]}
													loading="eager"
													alt="Generative AI for data analytics: the future of enterprise sense-making"
													sizes="(max-width: 991px) 100vw, (max-width: 1439px) 58vw, 899px"
													srcset="https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/63ceee80d5d30e0e4816d45c_header-image-mckinsey-1440x962-test1px-23-01-2023-p-500.png 500w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/63ceee80d5d30e0e4816d45c_header-image-mckinsey-1440x962-test1px-23-01-2023-p-800.png 800w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/63ceee80d5d30e0e4816d45c_header-image-mckinsey-1440x962-test1px-23-01-2023-p-1080.png 1080w, https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/63ceee80d5d30e0e4816d45c_header-image-mckinsey-1440x962-test1px-23-01-2023.png 1440w"
													class="image hero-slider-image"
												/>
											</div>
											<a
												data-w-id="11e73cd9-e14f-2eb3-3f03-596855fdd9bb"
												href="/articles/generative-ai-for-analytics-the-future-of-enterprise-sense-making"
												class="featured-article-card w-inline-block"
												><div class="hero-cms-content">
													<h2
														class="featured-article-heading"
													>
														Patentes de Diseños Industriales
													</h2>
													<p
														class="hero-slide-cms-para"
													>
													Realizar patentes para Diseños Industriales y asegurar su efectividad a través de una observación constante. Es escencial para hacer la patente efectiva en todo el mundo.
													</p>
												</div>
												<div
													class="cms-card-button outline-white"
													style="width: 40px;"
												>
													<div
														data-w-id="db10e8a7-0919-312c-3493-10718de60981"
														class="cms-card-button-text"
														style="opacity: 1;"
													>
													Ver Más
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
												<div class="sliderbcgblur">
													<div
														class="backdrop-code w-embed"
													>
														<style>
															.sliderbcgblur {
																backdrop-filter: blur(
																	10px
																);
																-webkit-backdrop-filter: blur(
																	10px
																);
															}
														</style>
													</div>
												</div></a
											>
										</div>
									</div>
								</div>
							</div>
							<div
								aria-live="off"
								aria-atomic="true"
								class="w-slider-aria-label"
								data-wf-ignore=""
							>
								Slide 3 de 3.
							</div>
						</div>
						<div
							class="hero-slider-arrow w-slider-arrow-left"
							role="button"
							tabindex="0"
							aria-controls="w-slider-mask-0"
							aria-label="previous slide"
						>
							<div class="w-icon-slider-left" />
						</div>
						<div
							class="hero-slider-arrow w-slider-arrow-right"
							role="button"
							tabindex="0"
							aria-controls="w-slider-mask-0"
							aria-label="next slide"
							style=""
						>
							<div class="w-icon-slider-right" />
						</div>
						<div class="slide-nav w-slider-nav w-shadow">
							<div
								class="w-slider-dot"
								data-wf-ignore=""
								aria-label="Show slide 1 of 3"
								aria-pressed="false"
								role="button"
								tabindex="-1"
								style="margin-left: 0px; margin-right: 0px;"
							/>
							<div
								class="w-slider-dot"
								data-wf-ignore=""
								aria-label="Show slide 2 of 3"
								aria-pressed="false"
								role="button"
								tabindex="-1"
								style="margin-left: 0px; margin-right: 0px;"
							/>
							<div
								class="w-slider-dot w-active"
								data-wf-ignore=""
								aria-label="Show slide 3 of 3"
								aria-pressed="true"
								role="button"
								tabindex="0"
								style="margin-left: 0px; margin-right: 0px;"
							/>
						</div>
					</div>
				</div>
				<div
					data-w-id="67cfdfa7-6218-9919-dfa8-ae2b38d1c085"
					class="sidescroll"
				>
					<div class="camera">
						<div class="collection-list-wrapper w-dyn-list">
						
							<div
								role="list"
								class="collection-list w-dyn-items"
							>
							{#each experiencias as {titulo,autor,image, slug, fecha, contenidos}}
								<div
									data-w-id="03028e60-30fc-24c6-1f8a-430d4cf7fc84"
									role="listitem"
									class="collection-item w-dyn-item"
									style="will-change: transform; transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
								>
									<div class="p-img-wrp">
										<img
											src={image || "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw"}
											loading="eager"
											alt=""
											class="p-img"
										/>
									</div>
									<div
										class="container grid square-positioning"
									>
										<div
											id="w-node-_6bc5bcb1-566c-be9e-a2df-5a286487cc26-72decde7"
											class="large-cms-links-wrapper"
										>
											<div class="w-layout-grid p-hp-cms">
												<div
													id="w-node-_6bc5bcb1-566c-be9e-a2df-5a286487cc2f-72decde7"
													class="cms-item-body"
												>
													<a
														data-w-id="6bc5bcb1-566c-be9e-a2df-5a286487cc30"
														href={slug}
														class="cms-item-body-left w-inline-block"
														><div
															class="p-blur left"
														/>
														<div
															class="div-block-4"
														>
															<div>
																<h5
																	class="whitetext product"
																>
																{fecha}
																</h5>
																<h2
																	class="product-name"
																>
																	Fuente: {autor}
																</h2>
															</div>
															<h2
																class="large-cms-title"
															>
															{limitarPalabras(titulo,4)}
															</h2>
															<div
																id="w-node-_6bc5bcb1-566c-be9e-a2df-5a286487cc33-72decde7"
																class="p-wrap-arrow"
															>
																<p
																	class="product-description-box"
																>
																{limitarPalabras(contenidos.map(item => item.parrafo)[0],30)}
																</p>
															</div>
															<div
																id="w-node-_98fbcafc-5510-c7ae-61a4-d657a299a323-72decde7"
																class="cms-card-button outline-white"
																style="width: 40px;"
															>
																<div
																	data-w-id="98fbcafc-5510-c7ae-61a4-d657a299a324"
																	class="cms-card-button-text"
																	style="opacity: 1;"
																>
																	Ver más
																</div>
																<div
																	class="cms-card-arrow"
																>
																	<img
																		src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/608696cc0243311086991783_Button%20Arrow.svg"
																		loading="lazy"
																		alt="Arrow"
																		class="image"
																	/>
																</div>
															</div>
														</div></a
													>
													<div
														class="backdrop-code w-embed"
													>
														<style>
															.p-blur {
																backdrop-filter: blur(
																	10px
																);
																-webkit-backdrop-filter: blur(
																	10px
																);
															}
														</style>
													</div>
													<div
														class="mobile-product-mobile"
													>
														<img
															src="https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/614b7bc7ca1e0d3f73352000_dp-header-1440x962px-70-percent-64kb.jpeg"
															loading="lazy"
															alt=""
															class="image-blur"
														/>
													</div>
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
				<div
					id="Company"
					data-w-id="d3747da7-667d-cb88-00d8-e09813ec68ad"
					class="section orchestrator-section"
				>
					<div class="container grid">
						<div
							id="w-node-_8ae6f9a0-6ebb-e6c7-c5c9-9915ed61360c-72decde7"
							class="orchestrator-column"
						>
							<h2 class="_50-w">
								Nuestras últimas estadísticas y experiencias 2023
							</h2>
							<a
								data-w-id="7141c305-095f-cc96-b461-3fe37abb3b79"
								href="/experiencias"
								class="button-link w-inline-block"
								style="opacity: 0; transform: translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
								><div>Ver Más</div>
								<div class="arrow-icon">
									<img
										src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/608696cc0243311086991783_Button%20Arrow.svg"
										loading="lazy"
										alt="Arrow"
										class="icon-bot"
									/><img
										src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/60cb12817668533df28baf32_Arrow%20Blue%20New.svg"
										loading="lazy"
										alt="Blue Arrow"
										class="icon-top"
									/>
								</div></a
							>
						</div>
					</div>
					<div class="p-grid-bcg" />
				</div>
			</div>
			<div id="explore" class="section explore-section">
				<h2 class="explore-heading-title">Diseños Industriales por Rubro</h2>
				
				<div class="container grid">
					
					<div
						id="w-node-fd35c3bd-7065-cd1c-0a3a-b758ba3ebcbc-72decde7"
						class="explore-wrapper-1 w-dyn-list"
					>
						<div role="list" class="explore-list-1 w-dyn-items">
							<div
								role="listitem"
								class="explore-item-1 w-dyn-item"
							>
								<a
									href={disenos[0].slug}
									class="cms-card w-inline-block"
									><div
										class="cms-inner-card"
										style="transform: translate3d(0px, 100px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
									>
										<div class="cms-card-header">
											<h5 class="cms-card-heading">
												{disenos[0].titulo}
											</h5>
											<p class="cmscardp">
												{disenos[0].descripcion}
											</p>
										</div>
										<div
											class="cms-card-button outline-white"
											style="width: 40px;"
										>
											<div
												class="cms-card-button-text"
												style="opacity: 1;"
											>
											Ver Más
											</div>
											<div class="cms-card-arrow">
												<img
													src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/6086a181c7b29d2ee77e11eb_Gray%20Arrow.svg"
													loading="lazy"
													alt="Arrow"
													class="image"
												/>
											</div>
										</div>
									</div>
									<div class="cms-card-bg">
										<img
											src={disenos[0].image}
											loading="lazy"
											alt={disenos[0].titulo}
											sizes="(max-width: 767px) 220px, 100vw"
											srcset={disenos[0].image}
											class="image"
										/>
									</div>
									<div class="cms-card-bg-blur">
										<img
											src={disenos[0].image}
											loading="lazy"
											alt={disenos[0].titulo}
											sizes="(max-width: 479px) 336px, (max-width: 767px) 392px, (max-width: 991px) 560px, 392px"
											srcset={disenos[0].image || "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw"}
											class="image blurredimage"
										/>
										<div class="dark-image-overlay" />
									</div></a
								>
							</div>
						</div>
					</div>
					<div
						id="w-node-fd35c3bd-7065-cd1c-0a3a-b758ba3ebcd2-72decde7"
						class="explore-wrapper-2 w-dyn-list"
					>
						<div role="list" class="explore-list-2 w-dyn-items">
							<div
								role="listitem"
								class="explore-item-2 w-dyn-item"
							>
								<a
									href={disenos[1].slug}
									class="cms-card w-inline-block"
									><div
										class="cms-inner-card"
										style="transform: translate3d(0px, 100px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
									>
										<div class="cms-card-header">
											<h5 class="cms-card-heading">
												{disenos[1].titulo}
											</h5>
										</div>
										<div class="cms-paragraph-and-cta">
											<p class="cmscardp">
												{disenos[1].descripcion}
											</p>
										</div>
										<div
											class="cms-card-button outline-white"
											style="width: 40px;"
										>
											<div
												class="cms-card-button-text"
												style="opacity: 1;"
											>
											Ver Más
											</div>
											<div class="cms-card-arrow">
												<img
													src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/6086a181c7b29d2ee77e11eb_Gray%20Arrow.svg"
													loading="lazy"
													alt="Arrow"
													class="image"
												/>
											</div>
										</div>
									</div>
									<div class="cms-card-bg">
										<img
											src={disenos[1].image}
											loading="lazy"
											alt={disenos[1].titulo}
											sizes="(max-width: 767px) 220px, 100vw"
											srcset={disenos[1].image}
											class="image"
										/>
									</div>
									<div class="cms-card-bg-blur">
										<img
											src={disenos[1].image}
											loading="lazy"
											alt={disenos[1].titulo}
											sizes="(max-width: 479px) 336px, (max-width: 767px) 392px, (max-width: 991px) 560px, 392px"
											srcset={disenos[1].image || "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw"}
											class="image blurredimage"
										/>
										<div class="dark-image-overlay" />
									</div></a
								>
							</div>
						</div>
					</div>
					<div
						id="w-node-fd35c3bd-7065-cd1c-0a3a-b758ba3ebce8-72decde7"
						class="explore-wrapper-3 w-dyn-list"
					>
						<div role="list" class="explore-list-3 w-dyn-items">
							<div
								role="listitem"
								class="explore-item-3 w-dyn-item"
							>
								<a
									href={disenos[2].slug}
									class="cms-card w-inline-block"
									><div
										class="cms-inner-card"
										style="transform: translate3d(0px, 100px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
									>
										<div class="cms-card-header">
											<h5 class="cms-card-heading">
												{disenos[2].titulo}
											</h5>
											<p class="cmscardp">
												{disenos[2].descripcion}
											</p>
										</div>
										<div class="cms-paragraph-and-cta">
											<div
												class="cms-card-button outline-white"
												style="width: 40px;"
											>
												<div
													class="cms-card-button-text"
													style="opacity: 1;"
												>
												Ver Más
												</div>
												<div class="cms-card-arrow">
													<img
														src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/6086a181c7b29d2ee77e11eb_Gray%20Arrow.svg"
														loading="lazy"
														alt="Arrow"
														class="image"
													/>
												</div>
											</div>
										</div>
									</div>
									<div class="cms-card-bg">
										<img
											src={disenos[2].image}
											loading="lazy"
											alt={disenos[2].titulo}
											sizes="(max-width: 767px) 220px, 100vw"
											srcset={disenos[2].image || "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw"}
											class="image"
										/>
									</div>
									<div class="cms-card-bg-blur">
										<img
											src={disenos[2].image}
											loading="lazy"
											alt={disenos[2].titulo}
											sizes="(max-width: 479px) 336px, (max-width: 767px) 392px, (max-width: 991px) 560px, 392px"
											srcset={disenos[2].image || "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw"}
											class="image blurredimage"
										/>
										<div class="dark-image-overlay" />
									</div></a
								>
							</div>
						</div>
					</div>
					<div
						id="w-node-fd35c3bd-7065-cd1c-0a3a-b758ba3ebcfe-72decde7"
						class="explore-wrapper-4 w-dyn-list"
					>
						<div role="list" class="explore-list-4 w-dyn-items">
							<div
								id="w-node-fd35c3bd-7065-cd1c-0a3a-b758ba3ebd00-72decde7"
								role="listitem"
								class="explore-item-4 w-dyn-item"
							>
								<a
									href={disenos[3].slug}
									class="cms-card w-inline-block"
									><div
										class="cms-inner-card"
										style="transform: translate3d(0px, 100px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
									>
										<div class="cms-card-header">
											<h5 class="cms-card-heading">
												{disenos[3].titulo}
											</h5>
											<p class="cmscardp">
												{disenos[3].descripcion}
											</p>
										</div>
										<div class="cms-paragraph-and-cta">
											<div
												class="cms-card-button outline-white"
												style="width: 40px;"
											>
												<div
													class="cms-card-button-text"
													style="opacity: 1;"
												>
												Ver Más
												</div>
												<div class="cms-card-arrow">
													<img
														src="https://global-uploads.webflow.com/60866fa44e871fb63043a756/6086a181c7b29d2ee77e11eb_Gray%20Arrow.svg"
														loading="lazy"
														alt="Arrow"
														class="image"
													/>
												</div>
											</div>
										</div>
									</div>
									<div class="cms-card-bg">
										<img
											src={disenos[3].image}
											loading="lazy"
											alt={disenos[3].titulo}
											sizes="(max-width: 767px) 220px, 100vw"
											srcset={disenos[3].image || "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw"}
											class="image"
										/>
									</div>
									<div class="cms-card-bg-blur">
										<img
											src="https://global-uploads.webflow.com/6086c5175e6cdbe633da422a/6187cb1a49d3012b28f6af53_sagie-moral-compass-blog-01-11-2021-OC-9.jpeg"
											loading="lazy"
											alt="Guided by a Moral Compass"
											sizes="(max-width: 479px) 336px, (max-width: 767px) 392px, (max-width: 991px) 560px, 392px"
											srcset={patentes?.map(item => item.image)[2]}
											class="image blurredimage"
										/>
										<div class="dark-image-overlay" />
									</div></a
								>
							</div>
						</div>
					</div>
				
				</div>
				
			</div>
		
			

	

		</div>