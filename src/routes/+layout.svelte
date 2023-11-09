<script>
import Footer from '../components/Footer.svelte';
import Header from '../components/Header/+page.svelte';
import './styles.css';
</script>

<div class="page-wrapper">


	<Header></Header>

	<main>
		<slot />
	</main>

	<Footer></Footer>
</div>

