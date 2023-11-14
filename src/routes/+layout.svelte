<script context="module" lang="ts">

import Footer from '../components/Footer.svelte';
import Header from '../components/Header.svelte';
import './styles.css';
import { page } from '$app/stores';


console.log();

</script>

<svelte:head>
<title>{$page.data.page.path || "Inicio"} | Stocker Invenciones</title>
</svelte:head>

	<Header/>
	<slot> </slot>
	<Footer />


