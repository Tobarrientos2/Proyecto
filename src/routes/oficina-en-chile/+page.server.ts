import { API_KEY_OCTOPUS } from '$env/static/private';
import type { Actions } from './$types';



export const actions: Actions = {
	default: async (event) => {
		// Extrae los datos del formulario (ajusta los nombres de los campos según tu formulario)
		const formData = await event.request.formData();
		const email = formData.get('email');
		const firstName = formData.get('firstName');
		const lastName = formData.get('lastName');

		const apiUrl = `https://emailoctopus.com/api/1.6/lists/5e6d4122-93ca-11ee-88fc-31da5b0a3007/contacts`;
		const payload = {
			api_key: API_KEY_OCTOPUS,
			email_address: email,
			fields: { FirstName: firstName, LastName: lastName },
			tags: ['vip'],
			status: 'SUBSCRIBED'
		};

		try {
			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload)
			});

			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);

			// Maneja la respuesta aquí. Por ejemplo, puedes redirigir al usuario o mostrar un mensaje de éxito
			console.log("Enviado Correctamente");
			}

		} catch (error) {
			// Maneja cualquier error que ocurra durante la solicitud
			console.error('Error al enviar el formulario:', error);
		}
	}
};