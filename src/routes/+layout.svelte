<script context="module" lang="ts">
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import "./styles.css";
	import { page } from "$app/stores";

	console.log();
</script>

<svelte:head>
	<title>{$page.data.page.path || "Inicio"} | Stocker Invenciones</title>
	<style>
		.wf-force-outline-none[tabindex="-1"]:focus {
			outline: none;
		}
	</style><meta
		http-equiv="origin-trial"
		content="Az520Inasey3TAyqLyojQa8MnmCALSEU29yQFW8dePZ7xQTvSt73pHazLFTK5f7SyLUJSo2uKLesEtEa9aUYcgMAAACPeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="
	/><meta charset="utf-8" /><meta
		content="We build problem-solving technologies"
		name="description"
	/><meta content="SparkBeyond" property="og:title" /><meta
		content="We build problem-solving technologies"
		property="og:description"
	/><meta content="SparkBeyond" property="twitter:title" /><meta
		content="We build problem-solving technologies"
		property="twitter:description"
	/><meta property="og:type" content="website" /><meta
		content="summary_large_image"
		name="twitter:card"
	/><meta
		content="width=device-width, initial-scale=1"
		name="viewport"
	/>
	<style>
		@media (min-width: 992px) {
			html.w-mod-js:not(.w-mod-ix)
				[data-w-id="1800e508-76e0-6dd6-09d8-b6f2d4457153"] {
				opacity: 1;
			}
			html.w-mod-js:not(.w-mod-ix)
				[data-w-id="fcc8d652-fa41-8c6d-b7f5-18915685668b"] {
				opacity: 1;
			}
			html.w-mod-js:not(.w-mod-ix)
				[data-w-id="db10e8a7-0919-312c-3493-10718de60981"] {
				opacity: 1;
			}
			html.w-mod-js:not(.w-mod-ix)
				[data-w-id="7fcd1107-1a8a-133e-fef9-d0828c9b1470"] {
				opacity: 0;
				-webkit-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
					rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
				-moz-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
					rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
				-ms-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
					rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
				transform: translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0)
					rotateY(0) rotateZ(0) skew(0, 0);
			}
			html.w-mod-js:not(.w-mod-ix)
				[data-w-id="fe4b150b-a9f9-9362-d800-10f63d02dede"] {
				opacity: 0;
			}
			html.w-mod-js:not(.w-mod-ix)
				[data-w-id="98fbcafc-5510-c7ae-61a4-d657a299a324"] {
				opacity: 1;
			}
			html.w-mod-js:not(.w-mod-ix)
				[data-w-id="7141c305-095f-cc96-b461-3fe37abb3b79"] {
				opacity: 0;
				-webkit-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
					rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
				-moz-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
					rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
				-ms-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
					rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
				transform: translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0)
					rotateY(0) rotateZ(0) skew(0, 0);
			}
		}
		@media (max-width: 991px) and (min-width: 768px) {
			html.w-mod-js:not(.w-mod-ix)
				[data-w-id="7141c305-095f-cc96-b461-3fe37abb3b79"] {
				opacity: 0;
				-webkit-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
					rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
				-moz-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
					rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
				-ms-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
					rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
				transform: translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0)
					rotateY(0) rotateZ(0) skew(0, 0);
			}
		}
	</style><link href="https://fonts.googleapis.com" rel="preconnect" /><link
		href="https://fonts.gstatic.com"
		rel="preconnect"
		crossorigin="anonymous"
	/><script
		async=""
		src="https://snap.licdn.com/li.lms-analytics/insight.old.min.js"
	></script><script
		type="text/javascript"
		async=""
		src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
	></script><script
		type="text/javascript"
		async=""
		src="https://www.google-analytics.com/analytics.js"
	></script><script
		type="text/javascript"
		async=""
		src="https://www.googletagmanager.com/gtag/js?id=G-DJNQQZZ5DC&amp;l=dataLayer&amp;cx=c"
	></script><script
		async=""
		src="https://edge.marker.io/latest/shim.js"
	></script><script
		async=""
		src="https://www.googletagmanager.com/gtm.js?id=GTM-5Q898HW"
	></script><script
		type="text/javascript"
		async=""
		src="https://www.gstatic.com/recaptcha/releases/fGZmEzpfeSeqDJiApS_XZ4Y2/recaptcha__en.js"
		crossorigin="anonymous"
		integrity="sha384-BkcmNQWtC2+F6VzriTvPuJFQk+CQm9Ka25Y8yH4U7AvSZTgBts+ceh072QKv1qYq"
	></script><script
		src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
		type="text/javascript"
	></script><link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
		media="all"
	/><script type="text/javascript">
		WebFont.load({
			google: {
				families: [
					"Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
				],
			},
		});
	</script><style type="text/css">
		.tk-aktiv-grotesk {
			font-family: "aktiv-grotesk", sans-serif;
		}
		.tk-aktiv-grotesk-thin {
			font-family: "aktiv-grotesk-thin", sans-serif;
		}
	</style><style type="text/css">
		@font-face {
			font-family: aktiv-grotesk;
			src: url(https://use.typekit.net/af/ab3e12/000000000000000077359d4f/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3)
					format("woff2"),
				url(https://use.typekit.net/af/ab3e12/000000000000000077359d4f/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3)
					format("woff"),
				url(https://use.typekit.net/af/ab3e12/000000000000000077359d4f/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3)
					format("opentype");
			font-weight: 400;
			font-style: normal;
			font-stretch: normal;
			font-display: auto;
		}
		@font-face {
			font-family: aktiv-grotesk;
			src: url(https://use.typekit.net/af/951aca/000000000000000077359d51/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3)
					format("woff2"),
				url(https://use.typekit.net/af/951aca/000000000000000077359d51/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3)
					format("woff"),
				url(https://use.typekit.net/af/951aca/000000000000000077359d51/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3)
					format("opentype");
			font-weight: 400;
			font-style: italic;
			font-stretch: normal;
			font-display: auto;
		}
		@font-face {
			font-family: aktiv-grotesk;
			src: url(https://use.typekit.net/af/a798a9/000000000000000077359d55/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3)
					format("woff2"),
				url(https://use.typekit.net/af/a798a9/000000000000000077359d55/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3)
					format("woff"),
				url(https://use.typekit.net/af/a798a9/000000000000000077359d55/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3)
					format("opentype");
			font-weight: 700;
			font-style: normal;
			font-stretch: normal;
			font-display: auto;
		}
		@font-face {
			font-family: aktiv-grotesk;
			src: url(https://use.typekit.net/af/8e3d9f/000000000000000077359d58/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3)
					format("woff2"),
				url(https://use.typekit.net/af/8e3d9f/000000000000000077359d58/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3)
					format("woff"),
				url(https://use.typekit.net/af/8e3d9f/000000000000000077359d58/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3)
					format("opentype");
			font-weight: 700;
			font-style: italic;
			font-stretch: normal;
			font-display: auto;
		}
		@font-face {
			font-family: aktiv-grotesk;
			src: url(https://use.typekit.net/af/63d81f/000000000000000077359d5a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3)
					format("woff2"),
				url(https://use.typekit.net/af/63d81f/000000000000000077359d5a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3)
					format("woff"),
				url(https://use.typekit.net/af/63d81f/000000000000000077359d5a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3)
					format("opentype");
			font-weight: 300;
			font-style: normal;
			font-stretch: normal;
			font-display: auto;
		}
		@font-face {
			font-family: aktiv-grotesk;
			src: url(https://use.typekit.net/af/e4f1f2/000000000000000077359d5c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3)
					format("woff2"),
				url(https://use.typekit.net/af/e4f1f2/000000000000000077359d5c/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3)
					format("woff"),
				url(https://use.typekit.net/af/e4f1f2/000000000000000077359d5c/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3)
					format("opentype");
			font-weight: 300;
			font-style: italic;
			font-stretch: normal;
			font-display: auto;
		}
		@font-face {
			font-family: aktiv-grotesk;
			src: url(https://use.typekit.net/af/c11a71/000000000000000077359d5e/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3)
					format("woff2"),
				url(https://use.typekit.net/af/c11a71/000000000000000077359d5e/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3)
					format("woff"),
				url(https://use.typekit.net/af/c11a71/000000000000000077359d5e/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3)
					format("opentype");
			font-weight: 500;
			font-style: normal;
			font-stretch: normal;
			font-display: auto;
		}
		@font-face {
			font-family: aktiv-grotesk;
			src: url(https://use.typekit.net/af/939926/000000000000000077359d5f/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3)
					format("woff2"),
				url(https://use.typekit.net/af/939926/000000000000000077359d5f/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3)
					format("woff"),
				url(https://use.typekit.net/af/939926/000000000000000077359d5f/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3)
					format("opentype");
			font-weight: 500;
			font-style: italic;
			font-stretch: normal;
			font-display: auto;
		}
		@font-face {
			font-family: aktiv-grotesk;
			src: url(https://use.typekit.net/af/89c06c/000000000000000077359d63/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3)
					format("woff2"),
				url(https://use.typekit.net/af/89c06c/000000000000000077359d63/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3)
					format("woff"),
				url(https://use.typekit.net/af/89c06c/000000000000000077359d63/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3)
					format("opentype");
			font-weight: 200;
			font-style: normal;
			font-stretch: normal;
			font-display: auto;
		}
		@font-face {
			font-family: aktiv-grotesk;
			src: url(https://use.typekit.net/af/b868ec/000000000000000077359d64/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3)
					format("woff2"),
				url(https://use.typekit.net/af/b868ec/000000000000000077359d64/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3)
					format("woff"),
				url(https://use.typekit.net/af/b868ec/000000000000000077359d64/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3)
					format("opentype");
			font-weight: 200;
			font-style: italic;
			font-stretch: normal;
			font-display: auto;
		}
		@font-face {
			font-family: aktiv-grotesk-thin;
			src: url(https://use.typekit.net/af/099172/000000000000000077359d41/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3)
					format("woff2"),
				url(https://use.typekit.net/af/099172/000000000000000077359d41/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3)
					format("woff"),
				url(https://use.typekit.net/af/099172/000000000000000077359d41/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3)
					format("opentype");
			font-weight: 200;
			font-style: normal;
			font-stretch: normal;
			font-display: auto;
		}
		@font-face {
			font-family: aktiv-grotesk-thin;
			src: url(https://use.typekit.net/af/647e79/000000000000000077359d44/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3)
					format("woff2"),
				url(https://use.typekit.net/af/647e79/000000000000000077359d44/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3)
					format("woff"),
				url(https://use.typekit.net/af/647e79/000000000000000077359d44/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3)
					format("opentype");
			font-weight: 200;
			font-style: italic;
			font-stretch: normal;
			font-display: auto;
		}
	</style><script
		src="https://use.typekit.net/pll4wnn.js"
		type="text/javascript"
	></script><script type="text/javascript">
		try {
			Typekit.load();
		} catch (e) {}
	</script><script type="text/javascript">
		!(function (o, c) {
			var n = c.documentElement,
				t = " w-mod-";
			(n.className += t + "js"),
				("ontouchstart" in o ||
					(o.DocumentTouch && c instanceof DocumentTouch)) &&
					(n.className += t + "touch");
		})(window, document);
	</script><script type="text/javascript">
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag("js", new Date());
		gtag("config", "UA-127594457-1", { anonymize_ip: true });
	</script><script
		src="https://www.google.com/recaptcha/api.js"
		type="text/javascript"
	></script><style>
		body {
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
		}

		/* Disables Orchestrator Link - not necessary currently*/
		/*.dropdown-item.dropdown-product:last-child {
  		pointer-events: none;
  	} */

		/* Wrapping long words in CMS card titles */
		.cms-card-heading {
			overflow-wrap: break-word;
			word-break: break-word;
		}
	</style>
	
	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != "dataLayer" ? "&l=" + l : "";
			j.async = true;
			j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, "script", "dataLayer", "GTM-5Q898HW");
	</script>
	<!-- End Google Tag Manager -->

	<!-- OneTrust Cookies Consent Notice start for www.sparkbeyond.com -->

	<!-- OneTrust Cookies Consent Notice start for www.sparkbeyond.com -->

	<script type="text/javascript">
		function OptanonWrapper() {}
	</script>
	<!-- OneTrust Cookies Consent Notice end for www.sparkbeyond.com -->

	<!--Marker.io integration-->
	<!--Marker.io integration-->
	<script>
		if (window.location.href.includes("webflow.io")) {
			window.markerConfig = {
				//replace the destination below with your own destination
				destination: "627a4fff60d6e50701487037",
				source: "snippet",
			};
		}
	</script>

	<script>
		!(function (e, r, a) {
			if (!e.__Marker) {
				e.__Marker = {};
				var t = [],
					n = { __cs: t };
				[
					"show",
					"hide",
					"isVisible",
					"capture",
					"cancelCapture",
					"unload",
					"reload",
					"isExtensionInstalled",
					"setReporter",
					"setCustomData",
					"on",
					"off",
				].forEach(function (e) {
					n[e] = function () {
						var r = Array.prototype.slice.call(arguments);
						r.unshift(e), t.push(r);
					};
				}),
					(e.Marker = n);
				var s = r.createElement("script");
				(s.async = 1),
					(s.src = "https://edge.marker.io/latest/shim.js");
				var i = r.getElementsByTagName("script")[0];
				i.parentNode.insertBefore(s, i);
			}
		})(window, document);
	</script>
	<!--Marker.io integration END--><!-- OneTrust Cookies Consent Notice start for www.sparkbeyond.com -->

	<!--<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="b7a5fdf0-8348-4af3-b7ff-53921bbc590e" ></script>
<script type="text/javascript">
function OptanonWrapper() { }
</script> -->
	<!-- OneTrust Cookies Consent Notice end for www.sparkbeyond.com -->

	<!-- OneTrust Cookies Consent Notice end for www.sparkbeyond.com -->
	<style>
		/*.right-large-link {
  	backdrop-filter: blur(2px);
  }*/

		.Orchestrator-Column {
			backdrop-filter: blur(5px);
		}

		@media only screen and (max-width: 992px) {
			.tablet-globe-scroll {
				-ms-overflow-style: none;
				overflow: -moz-scrollbars-none;
			}
			.tablet-globe-scroll::-webkit-scrollbar {
				display: none;
			}
		}

		@media only screen and (min-width: 1920px) {
			.section.orchestrator-section,
			.section.cms-section,
			.section.in-back-section {
				padding-top: 240px;
			}
		}

		@media only screen and (min-width: 2400px) {
			.section.orchestrator-section,
			.section.cms-section,
			.section.in-back-section {
				padding-top: 360px;
			}

			.sticky-sections-wrapper {
				padding-bottom: 60px;
			}
		}
	</style>
	<script
		src="https://cdn.cookielaw.org/scripttemplates/6.25.0/otBannerSdk.js"
		async=""
		type="text/javascript"
	></script>
	<style>
		@import url(https://fonts.googleapis.com/css?family=Outfit);
	</style><style>
		/* FONT FAMILYS */
		@font-face {
			font-family: "Trump Mediaeval Bold";
			font-weight: 900;
			src: local("Trump Mediaeval"),
				url(https://www.sparkbeyond.com/74413b127a87627a8fce.otf)
					format("opentype");
		}

		@font-face {
			font-family: "Trump Mediaeval Roman";
			src: local("Trump Mediaeval"),
				url(https://www.sparkbeyond.com/223f2af263aa0473b893.otf)
					format("opentype");
		}
		/* FONT FAMILIES END */

		/* Hover state styling for buttons with a white svg icon  */
		.wisdolia-white-icon-button:hover svg path {
			fill: #f7e1c6;
		}

		.wisdolia-white-icon-button:hover p {
			color: #f7e1c6;
		}

		/* Hover state styling for buttons with a white svg icon  */
		.wisdolia-icon-button-hover-styling:hover svg path {
			fill: #434744;
		}

		.wisdolia-icon-button-hover-styling:hover p {
			color: #434744;
		}

		.wisdolia-secondary-action-button-hover-styling svg path {
			fill: rgba(106, 107, 106, 1);
		}
		/* Hover state styling for buttons with a white svg icon  */
		.wisdolia-secondary-action-button-hover-styling:hover:enabled svg path {
			fill: #515251;
		}
		.wisdolia-secondary-action-button-hover-styling:hover:enabled
			svg
			g
			path {
			fill: black;
		}

		.wisdolia-secondary-action-button-hover-styling:hover:enabled p {
			color: #515251;
		}
	</style><style type="text/css">
		@keyframes spinners-react-infinity {
			0% {
				stroke-dasharray: 1, 347;
				stroke-dashoffset: 75;
			}
			25%,
			75% {
				stroke-dasharray: 17, 330;
			}
			50% {
				stroke-dasharray: 1, 347;
			}
			to {
				stroke-dasharray: 1, 347;
				stroke-dashoffset: 423;
			}
		}
	</style><script
		src="https://apis.google.com/js/api.js?onload=__iframefcb421368"
		type="text/javascript"
		charset="UTF-8"
	></script>
</svelte:head>

<Header />

<slot />

<Footer />
