<script lang="ts">
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import "./styles.css";
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>{$page.data.page.path || "Inicio"} | Stocker Invenciones</title>
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<style>@media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="1800e508-76e0-6dd6-09d8-b6f2d4457153"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="fcc8d652-fa41-8c6d-b7f5-18915685668b"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="db10e8a7-0919-312c-3493-10718de60981"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="7fcd1107-1a8a-133e-fef9-d0828c9b1470"] {opacity:0;-webkit-transform:translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="fe4b150b-a9f9-9362-d800-10f63d02dede"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="98fbcafc-5510-c7ae-61a4-d657a299a324"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="7141c305-095f-cc96-b461-3fe37abb3b79"] {opacity:0;-webkit-transform:translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}@media (max-width:991px) and (min-width:768px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="7141c305-095f-cc96-b461-3fe37abb3b79"] {opacity:0;-webkit-transform:translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}</style>
</svelte:head>

<Header />

<slot />

<Footer />
