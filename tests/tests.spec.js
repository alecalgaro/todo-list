const { test, expect } = require("@playwright/test");

test("La app tiene el title correcto", async ({ page }) => {
	await page.goto("http://127.0.0.1:5500/public/index.html");
	await expect(page).toHaveTitle(/TodoList/); // debe tener ese texto en alguna parte del title
});

test("La app muestra el h1 correcto", async ({ page }) => {
	await page.goto("http://127.0.0.1:5500/public/index.html");
	const h1 = page.getByRole("heading", { name: "todos" });
	await expect(h1).toHaveText("todos"); // el elemento debe tener ese texto
});

test("Añadir nueva nota", async ({ page }) => {
	await page.goto("http://127.0.0.1:5500/public/index.html");
	await page.getByPlaceholder("Enter your todo").click();
	await page.getByPlaceholder("Enter your todo").fill("Nueva nota");
	await page.getByPlaceholder("Enter your todo").press("Enter");

	const li = page.locator("li"); // busca un "li" en cualquier parte del sitio
	await expect(li).toHaveText("Nueva nota");
});

test("Marcar una nota como completada", async ({ page }) => {
	await page.goto("http://127.0.0.1:5500/public/index.html");
	await page.getByPlaceholder("Enter your todo").click();
	await page.getByPlaceholder("Enter your todo").fill("Nueva nota");
	await page.getByPlaceholder("Enter your todo").press("Enter");

	const li = page.locator("li");
	await li.click();
	await expect(li).toHaveClass(/line-through text-grey/);
});

test("Eliminar una nota", async ({ page }) => {
	await page.goto("http://127.0.0.1:5500/public/index.html");
	await page.getByPlaceholder("Enter your todo").click();
	await page.getByPlaceholder("Enter your todo").fill("Nueva nota test");
	await page.getByPlaceholder("Enter your todo").press("Enter");

	const li = page.getByText("Nueva nota test");

	await li.click({
		button: "right", // click derecho
	});

	const li2 = page.getByText("Nueva nota test");
	await expect(li2).not.toBe(); // no existe
});
