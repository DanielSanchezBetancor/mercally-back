import { identifyBrand } from "../../../../../data/statics/brands/brands";

const defaultStore = "Mercadona";
describe("Identify brand test suit", () => {
	it("It should return 'Dodot' brand", () => {
		// Given
		const productName = "Pañales bebé talla 1 de 2-5 kg Dodot";
		// When
		const result = identifyBrand(productName, defaultStore);
		// Then
		expect(result!.name).toBe("Dodot");
	});

	it("It should return 'Bimbo'", () => {
		// Given
		const productName = "Pan bimbo bio";
		// When
		const result = identifyBrand(productName, defaultStore);
		// Then
		expect(result!.name).toBe("Bimbo");
	});

	it("It should return homemade brand", () => {
		// Given
		const productName = "Bocadillos de pechuga";
		// When
		const result = identifyBrand(productName, defaultStore);
		// Then
		expect(result).toStrictEqual({ name: "Mercadona", pattern: /bocadillos?/gi });
	});
});
