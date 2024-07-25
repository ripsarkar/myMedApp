import { act, renderHook } from "@testing-library/react";
import { hooksWrapper } from "<route to wrapper>";
import { useCustomCounter } from "<route to hook>";

describe("Counter Test", () => {
    it("counter increments successfully", () => {
        const { result } = renderHook(() => useCustomCounter(), {
            wrapper: hooksWrapper,
        });
        act(() => {
            result?.current?.incrementCounter();
        });
        expect(result?.current?.counter).toStrictEqual(1);
    });

    it("counter decrements successfully", () => {
        const { result } = renderHook(() => useCustomCounter(), {
            wrapper: hooksWrapper,
        });
        act(() => {
            result?.current?.decrementCounter();
        });
        expect(result?.current?.counter).toStrictEqual(-1);
    });
});
