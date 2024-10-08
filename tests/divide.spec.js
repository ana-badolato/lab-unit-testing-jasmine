describe("Iteration 2", () => {
    describe("Function - divide", () => {

        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(10, 2)).toEqual(5);
            expect(divide(100, 10)).toEqual(10);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(8)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 6)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(7, "a")).toEqual(undefined);
            expect(divide("a", 3)).toEqual(undefined);
            expect(divide("a", "b")).toEqual(undefined);
        });

    });
});